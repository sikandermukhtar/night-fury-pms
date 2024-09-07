import connect from "@/dbConfig/dbConfig";
import { SignUpSchema } from "@/schema/register";
import { z } from "zod";
import bcrypt from 'bcryptjs';
import { DoctorModel } from "@/model/Doctor";

export async function POST(request: Request) {
    await connect();  // Ensure the database connection is established

    try {
        const doctor = await request.json();
        const { firstName, lastName, email, password } = doctor;

        // Validate the input using Zod schema
        const result = SignUpSchema.safeParse({ firstName, lastName, email, password });
        if (!result.success) {
            return new Response(JSON.stringify({ error: "Invalid input data", details: result.error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Check if the email already exists
        const existingDoctor = await DoctorModel.findOne({ email });
        if (existingDoctor) {
            return new Response(JSON.stringify({ error: "Email already exists" }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new patient
        const newDoctor = new DoctorModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,  // Save the hashed password
        });
        await newDoctor.save();

        // Successful registration response
        return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201, headers: { 'Content-Type': 'application/json' } });

    } catch (error: any) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
