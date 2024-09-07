import mongoose, { Document, Schema } from "mongoose";

export interface Department extends Document {
    departmentName: string;
    doctorId: string[]; // Array of doctor IDs
    daysOpened: string;
}

const DepartmentSchema: Schema<Department> = new Schema({
    departmentName: {
        type: String,
        required: true,
    },
    doctorId: [{
        type: Schema.Types.ObjectId,
        ref: 'Doctor', // Assuming you have a Doctor model
        required: true,
    }],
    daysOpened: {
        type: String,
        required: true,
    }
});

// Check if the model exists in mongoose.models before defining it
export const DepartmentModel = mongoose.models.Department || mongoose.model<Department>('Department', DepartmentSchema);
