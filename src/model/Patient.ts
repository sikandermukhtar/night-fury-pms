import mongoose, { Document, Schema } from "mongoose";

export interface Patient extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    bloodGroup: string;
    gender: string;
    dob: Date;
   
}




const PatientSchema: Schema<Patient> = new Schema({
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
    }
   
});

export const PatientModel = mongoose.model<Patient>('Patient', PatientSchema) ||
mongoose.models.Patient as mongoose.Model<Patient>;
 