import connect from "@/dbConfig/dbConfig";
import { Admin } from "@/model/Admin";
import { SignUpSchema } from "@/schema/register";
import { z } from "zod";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    await connect();  // Ensure the database connection is established

    try {
        const Admin = await request.json();
        const {email, password } = Admin;


        // let admin=await Admin.findOne({email});
        // if(!admin){
        //     return new Response(JSON.stringify({ error: "User not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        // } 

      
        // if (password!=admin.password) {
        //     return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        // }

        
        const response = NextResponse.json({
            success: true,
            message: "Login Successfully"
        });
     
        // Set the cookie with a value of 10
        response.cookies.set('adminInfo', JSON.stringify(Admin), {
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
