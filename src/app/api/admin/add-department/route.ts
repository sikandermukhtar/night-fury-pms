import connect from "@/dbConfig/dbConfig";
import { DoctorModel } from "@/model/Doctor";
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import axios from "axios";
import { DepartmentModel } from "@/model/Department";

export async function GET(request: Request) {
    connect();
    try {
        const {departmentName,daysOpened}=await request.json();
        const department=new DepartmentModel({
            departmentName,
            daysOpened
        })
       await   department.save();
       return NextResponse.json({
            success: true,
            message: "Department added successfully"
        }, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 400 });
    }
}