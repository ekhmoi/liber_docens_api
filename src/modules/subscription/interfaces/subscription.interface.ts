import { Document } from 'mongoose'
export interface Subscription<T = string> extends Document {
    owner: T;
    subscriber: T;
}