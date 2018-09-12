import { Controller, Post, UseGuards, Body, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from 'interface/AuthenticatedRequest';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {

    constructor(private readonly subscriptionSrv: SubscriptionService) { }

    @Post()
    @UseGuards(AuthGuard())
    async create(
        @Body('ids') ids: string[] = []
    ) {
        // Send notification to users and when they accept we should create a subscription object
    }

    @Get()
    @UseGuards(AuthGuard())
    async getAll(
        @Request() request: AuthenticatedRequest
    ) {
        return this.subscriptionSrv.getSubscriptions(request.user);
    }
}
