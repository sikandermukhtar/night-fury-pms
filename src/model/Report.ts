import mongoose, { Document, Schema } from "mongoose";


export interface Report extends Document {
    patientId: string;
    doctorId: string;
    date: Date;
    symptoms: string;
    diagnosis: string;
}

const ReportSchema: Schema<Report> = new Schema({
    patientId: {
      type:String,
      required: true,
    },
    doctorId: {
        type:String,
        required: true,
      },
     
    date: {
        type: Date,
        required: true,
    },
    symptoms: {
        type: String,
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    }
});



export const ReportModel = mongoose.model<Report>('Report', ReportSchema)
||
mongoose.models.Report as mongoose.Model<Report>;
