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
    isVerified:boolean;
    verifyToken:string;
    verifyExpiry:Date;
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
    
    },
    dob: {
        type: Date,
  
    },
    
    isVerified:{
        type: Boolean,
        default: false
    },
    verifyToken:{
        type: String,
    },
    verifyExpiry:{
        type: Date,
        default: Date.now() + 3600000 * 24 * 30 // 30 days expiry time in milliseconds
    }
});

// Check if the model exists in mongoose.models before defining it
export const PatientModel = mongoose.models.Patient || mongoose.model<Patient>('Patient', PatientSchema);
