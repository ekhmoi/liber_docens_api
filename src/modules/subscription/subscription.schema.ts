import * as mongoose from 'mongoose';

export enum SubscriptionStatus {
    Pending = 'pending',
    Accepted = 'accepted',
    Rejected = 'rejected'
}

export const SubscriptionSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    subscriber: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    status: { type: String, enum: [SubscriptionStatus.Accepted, SubscriptionStatus.Pending, SubscriptionStatus.Rejected], required: true },
}, { timestamps: {} });