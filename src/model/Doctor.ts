import mongoose, { Document, Schema } from "mongoose";

// Define the Doctor interface
export interface Doctor extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    bloodGroup: string;
    gender: string;
    dob: Date;
    enrollment: Date;
    specialization: string;
    timing: string;
    roomNumber: string;
    rank: string;
}

// Define the Doctor schema
const DoctorSchema: Schema<Doctor> = new Schema({
    firstName: {
        type: String,
        required: [true, "Please enter First Name"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter Last Name"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    enrollment: {
        type: Date,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    timing: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: String,
        required: true,
    },
    rank: {
        type: String,
    }
});

// Export the Doctor model
const DoctorModel = mongoose.models.Doctor || mongoose.model<Doctor>('Doctor', DoctorSchema);

export { DoctorModel };