import { Controller, Post, UseGuards, Body, Get, Request, Delete, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from 'interface/AuthenticatedRequest';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Controller('subscription')
export class SubscriptionController {

    constructor(private readonly subscriptionSrv: SubscriptionService) { }

    @Post()
    @UseGuards(AuthGuard())
    async create(
        @Body() body: CreateSubscriptionDto,
        @Request() request: AuthenticatedRequest
    ) {
        return await this.subscriptionSrv.create(body, request.user);
    }

    @Get()
    @UseGuards(AuthGuard())
    async getAll(
        @Request() request: AuthenticatedRequest
    ) {
        return this.subscriptionSrv.getSubscriptions(request.user);
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    async getById(
        @Request() request: AuthenticatedRequest,
        @Param('id') id: string
    ) {
        return this.subscriptionSrv.getById(id, request.user);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteSubscription(
        @Request() request: AuthenticatedRequest,
        @Param('id') id: string
    ) {
        return this.subscriptionSrv.deleteSubscriptionById(id, request.user.id);
    }
}
