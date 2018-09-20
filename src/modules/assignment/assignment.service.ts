import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assignment } from './interfaces/assignment.interface';

@Injectable()
export class AssignmentService {
    constructor(
        @InjectModel('Assignment') private readonly assigmentModel: Model<Assignment>
    ) { }
}
