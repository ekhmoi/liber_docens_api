import * as mongoose from 'mongoose';

export const TestTemplateSchema = new mongoose.Schema({
    description: { type: mongoose.Schema.Types.String, default: '' },
    values: {
        type: [String],
        required: true
    },
    columns: {
        type: [{
            text: mongoose.Schema.Types.String,
            currentValue: mongoose.Schema.Types.String,
            correctValue: mongoose.Schema.Types.String
        }],
        required: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: {} });