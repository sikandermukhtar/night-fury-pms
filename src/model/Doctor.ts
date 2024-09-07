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
    isVerified:boolean;
    rejected:boolean;
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
    enrollment: {
        type: Date,
       
    },
    specialization: {
        type: String,
      
    },
    timing: {
        type: String,
       
    },
  
    rank: {
        type: String,
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    rejected:{
        type: Boolean,
        default: false
    }

});

// Export the Doctor model
export const DoctorModel = mongoose.models.Doctor || mongoose.model<Doctor>('Doctor', DoctorSchema);
