import  connect from "@/dbConfig/dbConfig"
import {Admin} from "@/model/Admin";
import {NextResponse, NextRequest } from 'next/server'
import jwt from "jsonwebtoken"

connect();


export async function POST(request: NextRequest){
    try {

        const reqBody =await request.json()
        const {email, password} = reqBody

        const admin = await Admin.findOne({email})
        console.log(email, password)
        if(!admin){
            return NextResponse.json({message:"User not found", success:false, status: 400})
        }
        console.log(admin)


        if(password !== admin.password){
            return NextResponse.json({message:"Check your credentials", status: 400})
        }

        //Data for token, larger the token, more bandwidth it will consume
        const tokenData = {
            id: admin._id,
            email: admin.email
        }

        //To generate sign tokens
        const token: any = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'})


        const  response = NextResponse.json({
            message: "Logged in sign",
            success: true
        })

        response.cookies.set("token" as any, token, {
            httpOnly: true
        } as any)

        return response; 



    } catch(error: any){
        return NextResponse.json({error: error.message,
            status: 500})
    }
}