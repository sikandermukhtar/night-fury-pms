import connect from "@/dbConfig/dbConfig";
import { PatientModel } from "@/model/Patient";
import { SignUpSchema } from "@/schema/register";
import { z } from "zod";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import { DoctorModel } from "@/model/Doctor";


export async function POST(request: Request) {
    await connect();  // Ensure the database connection is established

    try {
        const doctors = await request.json();
        const {email, password } = doctors;


        let Doctor=await DoctorModel.findOne({email});
        if(!Doctor){
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        } 

        const isMatch = await bcrypt.compare(password, Doctor.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        
        const response = NextResponse.json({
            success: true,
            message: "Login Successfully"
        });
    
        // Set the cookie with a value of 10
        response.cookies.set('doctorInfo', JSON.stringify(doctors), {
            httpOnly: true, // The cookie will be accessible only by the web server
            secure: process.env.NODE_ENV === 'production', // Only sent over HTTPS in production
            maxAge: 60 * 60 * 24 * 7, // Cookie expiration time (e.g., 7 days)
            path: '/', // Path where the cookie is valid (root path for the entire domain)
        });
        return response;

    } catch (error: any) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
