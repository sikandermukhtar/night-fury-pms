import mongoose, { Document, Schema } from "mongoose";

export interface Appointment extends Document {
    patientId: string;
    doctorId: string;
    date: Date;
    time: string;
}

const AppointmentSchema: Schema<Appointment> = new Schema({
    patientId: {
        type: String,
        required: true,
    },
    doctorId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
});

// Check if the model exists in mongoose.models before defining it
export const AppointmentModel = mongoose.models.Appointment || mongoose.model<Appointment>('Appointment', AppointmentSchema);
