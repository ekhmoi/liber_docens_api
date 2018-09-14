import { Test, TestingModule } from '@nestjs/testing';
import { TemplateController } from './template.controller';

describe('Template Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TemplateController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TemplateController = module.get<TemplateController>(TemplateController);
    expect(controller).toBeDefined();
  });
});
