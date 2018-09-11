import { Document } from 'mongoose'
export interface User extends Document {
    _id: string;
    email: string;
    profile: Object;
    password?: string;
    avatar?: string;
    firstName?: string;
    lastName?: string;
}