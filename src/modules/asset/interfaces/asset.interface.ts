import { Document } from 'mongoose'
export interface Asset extends Document {
    _id: string;
    encoding: string;
    fileName: string;
    mimeType: string;
    path: string;
    size: number;
    owner: string;
    availableFor: string[];
    url: string;
}