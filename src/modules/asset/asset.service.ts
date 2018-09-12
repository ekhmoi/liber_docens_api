import { Injectable } from '@nestjs/common';
import { User } from '../user/interfaces/user.interface';
import { Asset } from './interfaces/asset.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AssetService {
    constructor(@InjectModel('Asset') private readonly assetModel: Model<Asset>) {}

    public async saveFilesInfo(files: any[] = [], user: User): Promise<Asset[]> {
        const rawData = files.map(file => ({
            encoding: file.encoding,
            fileName: file.filename,
            mimeType: file.mimetype,
            path: file.path,
            size: file.size,
            owner: user.id,
            availableFor: [],
            url: `assets/users/${user.id}/${file.filename}`
        }));
        return await this.assetModel.insertMany(rawData);
    }

    public async getAssets(user: User): Promise<Asset[]> {
        return await this.assetModel.find({ owner: user.id });
    }

    public async removeAsset(_id: string, user: User) {
        return await this.assetModel.findOneAndRemove({ _id, owner: user.id });
    }

    public async getAsset(_id: string, user: User) {

        return await this.assetModel.findOne({ _id, owner: user.id });
    }
}
