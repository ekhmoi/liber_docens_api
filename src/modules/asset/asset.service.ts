import { Injectable } from '@nestjs/common';
import { User } from '../user/interfaces/user.interface';
import { Asset } from './interfaces/asset.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { asset_public_root_dir } from './asset.config';

@Injectable()
export class AssetService {
    public static fileToAssetRaw = (file, owner): Partial<Asset> => ({
        encoding: file.encoding,
        fileName: file.filename,
        mimeType: file.mimetype,
        path: file.path,
        size: file.size,
        owner: owner,
        availableFor: [],
        url: `${asset_public_root_dir}/users/${owner}/${file.filename}`
    });

    constructor(@InjectModel('Asset') private readonly assetModel: Model<Asset>) { }

    public async saveFilesInfo(files: any[] = [], { id }: User): Promise<Asset[]> {
        const rawData = files.map(file => AssetService.fileToAssetRaw(file, id));
        const documents = await this.assetModel.insertMany(rawData);

        // Model.insertMany ignores option select:false on 'path' field
        // Therefore we need to remove path field manually here before returning
        return documents.map((document) => {
            let response = document.toObject();
            delete response.path;
            return response;
        });
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
