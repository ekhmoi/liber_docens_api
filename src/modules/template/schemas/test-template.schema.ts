import * as mongoose from 'mongoose';

export const TestTemplateSchema = new mongoose.Schema({
    image: { type: mongoose.Schema.Types.String, required: false },
    audio: { type: mongoose.Schema.Types.String, required: false },
    question: { type: mongoose.Schema.Types.String, required: false },
    options: [new mongoose.Schema({
        text: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        value: mongoose.Schema.Types.Number
    }, { _id: false })],
    correctValue: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: {} });