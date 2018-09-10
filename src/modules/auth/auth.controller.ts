import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('token')
    async createToken(): Promise<any> {
        return await this.authService.signIn();
    }

    @Get('data')
    @UseGuards(AuthGuard())
    findAll() {
        // This route is restricted by AuthGuard
        // JWT strategy
    }
}
