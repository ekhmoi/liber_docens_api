import { Document } from "mongoose";
import { User } from "../../user/interfaces/user.interface";

export interface Assignment extends Document {
    owner: string | User;
    assignee: string | User;
    template: string;
}