import { Injectable } from '@nestjs/common';
import { CreateTestTemplateDto } from './dto/create-test-template.dto';
import { User } from '../user/interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestTemplate } from './interfaces/test-template.interface';

@Injectable()
export class TemplateService {

    constructor(@InjectModel('TestTemplate') private readonly testTemplateModel: Model<TestTemplate>) { }

    public createTest(test: CreateTestTemplateDto, user: User) {
        return new this.testTemplateModel({ ...test, owner: user.id }).save();
    }
}
