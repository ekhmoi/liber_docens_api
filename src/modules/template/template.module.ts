import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { TestTemplateSchema } from './schemas/test-template.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([{ name: 'TestTemplate', schema: TestTemplateSchema }])
  ],
  controllers: [TemplateController],
  providers: [TemplateService]
})
export class TemplateModule {}
