import { Document } from "mongoose";
import { User } from "../../user/interfaces/user.interface";

export interface TestTemplate extends Document {
    image?: string;
    audio?: string;
    question?: string;
    options?: { text: string, value: number}[];
    correctValue: number;
    owner: string | User
}