import * as mongoose from 'mongoose';

export const AssignmentSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    assignee: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    template: { type: mongoose.Schema.Types.ObjectId, required: true },
}, { timestamps: {} });