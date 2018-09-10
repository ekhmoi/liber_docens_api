import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type: {firstName: String, lastName: String, dateOfBirth: Number }, default: { firstName: '', lastName: '', dateOfBirth: 0}},
});