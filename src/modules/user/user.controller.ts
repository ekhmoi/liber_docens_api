import { Controller, Get, UseGuards, Request, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthenticatedRequest } from 'interface/AuthenticatedRequest';

@Controller('user')
export class UserController {

    constructor(private readonly userSrv: UserService) { }

    /**
     * Creates user. aka sign up
     * @param body 
     */
    @Post()
    async create(
        @Body() body: CreateUserDto
    ) {
        return await this.userSrv.create(body);
    }

    /**
     * Get user details. By default will return the details of current logged in user
     * @param id 
     * 
     * #TODO: Add internal property and return by id only when internal is true. See this.delete()
     */
    @Get(':id')
    @UseGuards(AuthGuard())
    findAll(
        @Param('id') id: string
    ) {
        return this.userSrv.getById(id);
    }

    /**
     * 
     * @param request Library(express) request object
     * @param id id of the user to delete. It will be ignored if internal is false
     * @param internal 
     */
    @Delete(':id')
    @UseGuards(AuthGuard())
    async delete(
        @Request() request: AuthenticatedRequest,
        @Param('id') id: string,
        internal: boolean = false
    ) {
        return this.userSrv.deleteUserById(internal ? id : request.user._id);
    }
}
