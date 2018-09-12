import * as multer from 'multer';
import * as mkdirp from 'mkdirp';
import { AuthenticatedRequest } from 'interface/AuthenticatedRequest';
import { Utils } from '../../global/utils';

export const asset_public_root_dir: string = 'asset';
export const asset_private_root_dir: string = '@asset';

export const user_private_dir = `${process.cwd()}/${asset_private_root_dir}/users`;

const fileSize = 5 * 10 * 10 * 10 * 10 * 10 * 10; // 5mb in bytes
export const uploadAvatarOptions = {
    limits: {
        files: 5,
        fileSize
    },
    storage: multer.diskStorage({
        destination: (req: AuthenticatedRequest, file, callback) => {
            const path = `${user_private_dir}/${req.user.id}`;
            mkdirp(path, (err) => {
                if (err) {
                    callback(null, false);
                } else {
                    callback(null, path);
                }
            });
        },
        filename: (req: AuthenticatedRequest, file, callback) => {
            const name = `${Utils.guidGenerator()}.${Utils.getExtension(file.originalname)}`;
            callback(null, name)
        }
    })
}