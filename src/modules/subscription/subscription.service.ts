import { Injectable } from '@nestjs/common';
import { User } from '../user/interfaces/user.interface';
import { UserTypes } from '../user/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from './interfaces/subscription.interface';

@Injectable()
export class SubscriptionService {

    constructor(@InjectModel('Subscription') private readonly subscriptionModel: Model<Subscription>) { }

    public async getSubscriptions(user: User): Promise<any> {
        if (user.type === UserTypes.Teacher) {
            return this.getTeacherSubscribers(user.id);
        } else if (user.type === UserTypes.Student) {
            return this.getStudentSubscriptions(user.id);
        }
    }

    private async getTeacherSubscribers(owner: string): Promise<any> {
        return this.subscriptionModel.find({ owner });
    }

    private async getStudentSubscriptions(subscriber: string): Promise<Subscription[]> {
        return this.subscriptionModel.find({ subscriber });
    }
}
