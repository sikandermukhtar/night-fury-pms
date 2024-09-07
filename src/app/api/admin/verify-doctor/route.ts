import connect from "@/dbConfig/dbConfig";
import { DoctorModel } from "@/model/Doctor";
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import axios from "axios";

export async function GET(request: Request) {
    connect();

    try {
        const doctors = await DoctorModel.find({ isVerified: false });

        if (doctors.length === 0) {
            return NextResponse.json({
                success: true,
                message: "No data to show"
            }, { status: 202 });
        }

        return NextResponse.json({
            success: true,
            message: "Doctors found",
            doctors
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 400 });
    }
}

export async function POST(request: Request) {
    connect();

    try {
        const doctor = await request.json();
        const { id, status } = doctor;

        const doctorId = new mongoose.Types.ObjectId(id);
        const doctorUpd = await DoctorModel.findById(doctorId);

        if (!doctorUpd) {
            return NextResponse.json({
                success: false,
                message: "Doctor not found"
            }, { status: 400 });
        }

        if (status.toLowerCase() === 'reject') {
            doctorUpd.reject = true;
            // Ensure the URL is correct
        //    const response = await axios.post('/api/sendRejection', { doctorName: doctorUpd.firstName, reason: "idk" });
        //    console.log("axios response:", response.data);
            await doctorUpd.save();

            return NextResponse.json({
                success: true,
                message: "Doctor rejected successfully",
                doctor: doctorUpd
            });
        }

        doctorUpd.isVerified = true;
        await doctorUpd.save();

        return NextResponse.json({
            success: true,
            message: "Doctor updated successfully",
            doctor: doctorUpd
        });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 400 });
    }
}
