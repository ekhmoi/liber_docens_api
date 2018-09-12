import * as mongoose from 'mongoose';

export const SubscriptionSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    subscriber: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
}, { timestamps: {} });