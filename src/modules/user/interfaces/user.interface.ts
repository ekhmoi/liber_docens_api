import { Document } from 'mongoose'
import { UserTypes } from '../user.schema';
export interface User extends Document {
    _id: string;
    email: string;
    profile: Object;
    password?: string;
    avatar?: string;
    firstName?: string;
    lastName?: string;
    type?: UserTypes;
}