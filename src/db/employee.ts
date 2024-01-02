import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: Number,
            required: true,
        },
        dob: {
            type: Date,
        },
        doj: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema)
