import * as multer from 'multer';
import * as mkdirp from 'mkdirp';
import { AuthenticatedRequest } from 'interface/AuthenticatedRequest';
import { join } from 'path';

const userPrivateDirectory = process.cwd() + '/@uploads/users';
const fileSize = 5 * 10 * 10 * 10 * 10 * 10 * 10; // 5mb in bytes
export const defaultAvatarPath = 'files/default-avatar.png';
export const uploadAvatarOptions = {
    limits: {
        files: 1,
        fileSize
    },
    storage: multer.diskStorage({
        destination: (req: AuthenticatedRequest, file, callback) => {
            const path = `${userPrivateDirectory}/${req.user.id}`;
            mkdirp(path, (err) => {
                if (err) {
                    callback(null, false);
                } else {
                    callback(null, path);
                }
            });
        },
        filename: (req: AuthenticatedRequest, file, callback) => {
            callback(null, 'avatar.png')
        }
    })
}