import { Document } from "mongoose";

export interface Template extends Document {
    title?: string;
}