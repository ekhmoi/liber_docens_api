import * as mongoose from 'mongoose';

export const AssetSchema = new mongoose.Schema({
    path: { type: String, required: true, select: false },
    url: { type: String, required: true },
    encoding: { type: String },
    fileName: { type: String },
    mimeType: { type: String },
    size: { type: Number },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    availableFor: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
    
}, { timestamps: {} });