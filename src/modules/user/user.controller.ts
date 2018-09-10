import { Controller, Get, UseGuards, Request, Post, Body, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { create } from 'domain';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userSrv: UserService) { }

    @Get(':id')
    @UseGuards(AuthGuard())
    findAll(
        @Param('id') id: string
    ) {
        return this.userSrv.getById(id);
    }

    @Post()
    async create(
        @Body() body: CreateUserDto
    ) {
        return this.userSrv.create(body);
    }
}
