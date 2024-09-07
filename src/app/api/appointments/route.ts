import connect from "@/dbConfig/dbConfig";
import { AppointmentModel } from "@/model/Appointment";
import { DepartmentModel } from "@/model/Department";
import { DoctorModel } from "@/model/Doctor";
import { NextResponse } from 'next/server';

export async function GET(request: Request){

    connect();
       try {
        let departmentName=await request.json();
        const department=await DepartmentModel.findOne({
            departmentName
        })

        if(!department){
            return NextResponse.json({
                success: false,
                message: "Department not found"
            },{status:404})
        }

        const doctorIds = department.doctorId;

        const doctors = await DoctorModel.find({
            _id: { $in: doctorIds }
        }).exec();
       
        if(!doctors){
            return NextResponse.json({
                success: false,
                message: "Doctors not found"
            },{status:404})
        }
        return NextResponse.json({
            success: true,
            message: "Department found",
            doctors
        })
       } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
       }
    }


export async function POST(request: Request){
    connect();
       try {
        let appointment=await request.json();
        const {time,doctorId,patientId, date } = appointment;

        const newAppointment=new AppointmentModel({
           patientId,
           doctorId,
           time,
           date
        });
        await newAppointment.save();
    }catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
     
    }
}    