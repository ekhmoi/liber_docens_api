import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { CreateTestTemplateDto } from './dto/create-test-template.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from 'interface/AuthenticatedRequest';
import { TemplateService } from './template.service';

@Controller('template')
export class TemplateController {

    constructor(private readonly templateSrv: TemplateService) { }

    @Post('test')
    @UseGuards(AuthGuard())
    async createTestTemplate(
        @Request() {user}: AuthenticatedRequest,
        @Body() body: CreateTestTemplateDto
    ) {
        return this.templateSrv.createTest(body, user);
    }
}
