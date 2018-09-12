import { Controller, Post, Get, UseGuards, Param, Request, Delete, UseInterceptors, FilesInterceptor, UploadedFiles } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from 'interface/AuthenticatedRequest';
import { AssetService } from './asset.service';
import { uploadAvatarOptions } from './asset.config';

@Controller('asset')
export class AssetController {

    constructor(private readonly assetSrv: AssetService) { }

    @Post()
    @UseGuards(AuthGuard())
    @UseInterceptors(
        FilesInterceptor('files', 5, uploadAvatarOptions)
    )
    @UseGuards(AuthGuard())
    async create(
        @UploadedFiles() files,
        @Request() request: AuthenticatedRequest
    ) {
        return await this.assetSrv.saveFilesInfo(files, request.user);
    }

    @Get()
    @UseGuards(AuthGuard())
    async getAll(
        @Request() request: AuthenticatedRequest
    ) {
        return await this.assetSrv.getAssets(request.user);
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    async getById(
        @Param('id') id: string,
        @Request() request: AuthenticatedRequest
    ) {
        return await this.assetSrv.getAsset(id, request.user);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async delete(
        @Param('id') id: string,
        @Request() request: AuthenticatedRequest
    ) {
        return await this.assetSrv.removeAsset(id, request.user);
    }
}
