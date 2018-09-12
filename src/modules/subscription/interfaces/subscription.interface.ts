import { Document } from 'mongoose'
export interface Subscription extends Document {
    owner: string;
    subscriber: string;
}