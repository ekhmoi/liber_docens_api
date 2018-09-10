import { Controller, Post, Get, Param, Body, UseGuards, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTokenDto } from './dto/create-token.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authSrv: AuthService) { }

    /**
     * Creates token. Aka Login
     * @param createTokenDto 
     */
    @Post('token')
    async createToken(
        @Body() createTokenDto: CreateTokenDto
    ) {
        return this.authSrv.createToken(createTokenDto);
    }

    /**
     * Removes token. Aka logout
     * 
     * #TODO
     */
    @Delete('token/:id')
    async removeToken() {
        return true;
    }
}
