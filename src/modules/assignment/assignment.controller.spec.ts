import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentController } from './assignment.controller';

describe('Assignment Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AssignmentController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AssignmentController = module.get<AssignmentController>(AssignmentController);
    expect(controller).toBeDefined();
  });
});
