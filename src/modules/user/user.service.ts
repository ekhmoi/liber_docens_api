import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    private saltRounds = 10;
    
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await this.hashPassword(createUserDto.password);
        const createdUser = new this.userModel({...createUserDto, password: hashedPassword });
        return await createdUser.save();
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
    }

    async getById(_id: string): Promise<User> {
        return await this.userModel.findOne({ _id })
    }

    async deleteUserById(_id: string): Promise<any> {
        return await this.userModel.deleteOne({ _id }).exec();
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({email});
    }
}
