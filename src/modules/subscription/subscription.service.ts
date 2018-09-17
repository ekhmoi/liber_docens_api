import { Injectable, NotFoundException, ConflictException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { User } from '../user/interfaces/user.interface';
import { UserTypes } from '../user/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from './interfaces/subscription.interface';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { SubscriptionStatus } from './subscription.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class SubscriptionService {

    constructor(
        @InjectModel('Subscription') private readonly subscriptionModel: Model<Subscription<User>>,
        private readonly userSrv: UserService
    ) { }

    public async create(body: CreateSubscriptionDto, user: User): Promise<Subscription<User>> {
        const subscriber = await this.userSrv.getById(body.subscriber).catch(err => {
            throw new BadRequestException('subscription.create.badRequest', err);
        });
        if (subscriber) {
            const subscriptionExists = await this.subscriptionExist(user.id, body.subscriber);
            if (subscriptionExists) {
                throw new ConflictException('subscription.create.alreadyExists');
            }
            const subscription = await new this.subscriptionModel({ ...body, owner: user.id, status: SubscriptionStatus.Pending });
            return await subscription.save();
        } else {
            throw new NotFoundException('subscription.create.subscriberNotFound');
        }
    }

    public async getSubscriptions(user: User): Promise<Subscription<User>[]> {
        if (user.type === UserTypes.Teacher) {
            return this.getTeacherSubscribers(user.id);
        } else if (user.type === UserTypes.Student) {
            return this.getStudentSubscriptions(user.id);
        }
    }

    public async getById(_id: string, user: User): Promise<Subscription<User>> {
        const subscription: Subscription<User> = await this.subscriptionModel.findOne({ _id, owner: user.id })
            .populate('owner')
            .populate('subscriber')
            .exec()
            .catch(err => { throw new BadRequestException('subscription.get.notFound', err) });
        if (!subscription) {
            throw new NotFoundException('subscription.get.notFound');
        } else {
            if (subscription.owner.id !== user.id) {
                throw new ForbiddenException('subscription.get.notAllowed');
            } else {
                return subscription;
            }
        }
    }

    private async getTeacherSubscribers(owner: string): Promise<Subscription<User>[]> {
        return this.subscriptionModel
            .find({ owner })
            .populate('owner')
            .populate('subscriber')
            .exec();
    }

    private async getStudentSubscriptions(subscriber: string): Promise<Subscription<User>[]> {
        return this.subscriptionModel
            .find({ subscriber })
            .populate('owner')
            .populate('subscriber')
            .exec();
    }

    private async subscriptionExist(owner: string, subscriber: string): Promise<boolean> {
        const subscription = await this.subscriptionModel.findOne({ owner, subscriber });
        return !!subscription;
    }

    public async deleteSubscriptionById(_id: string, owner: string) {
        return await this.subscriptionModel.deleteOne({ _id, owner }).exec();
    }
}
