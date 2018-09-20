import { Module } from '@nestjs/common';
import { AssignmentController } from './assignment.controller';
import { AssignmentService } from './assignment.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentSchema } from './assignment.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([{ name: 'Assignment', schema: AssignmentSchema }])
  ],
  controllers: [AssignmentController],
  providers: [AssignmentService]
})
export class AssignmentModule {}
