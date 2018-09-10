import { Controller, Get, All, Param, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user/:id/items')
export class ItemsController {
    @Get()
    @UseGuards(AuthGuard('jwt'))
    getItems(
        @Param('id') userId,
        @Request() request
    ) {
        return [request.user];
    }
}
