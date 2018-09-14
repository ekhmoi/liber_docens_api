import * as mongoose from 'mongoose';

export enum TemplateType {
    Test = 0,
    Word = 1,
    Asset = 2,
    Question = 3,
    CompleteTheWord = 4,
}

export const TemplateSchema = new mongoose.Schema({
    title: { type: String },
}, { timestamps: {} });