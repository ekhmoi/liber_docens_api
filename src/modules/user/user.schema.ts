import * as mongoose from 'mongoose';

export enum UserTypes {
    Teacher = 'teacher',
    Student = 'student'
}

export const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: Number },
    type: {type: String, enum: [UserTypes.Student, UserTypes.Teacher], required: true }
}, { timestamps: {} });