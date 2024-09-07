import mongoose from "mongoose";

interface admin extends Document {
  email:string;
  password:string;
}


const adminSchema:mongoose.Schema<admin> = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const Admin = mongoose.models.Admin || mongoose.model<admin>('Admin', adminSchema);

