"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function LoginPage(){

    const router = useRouter();
    const [admin, setAdmin] = useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {
        try{

            const response = await axios.post("/api/auth/admin/login", admin)

            if(response.data.success){
                console.log("Login Successful", response.data)
                router.push('/admin/dashboard')
            } else {
                alert("Enter valid email and password")
                setAdmin({
                    email: "",
                    password: ""
                })
            }
        } catch (error: any) {
            console.log("Login Failed")

        }
    }

    return (
        <div className='mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white
        md:border md:border-[#121212] dark:bg-white '>
            <h2 className='font-bold text-2xl'>Welcome to Admin Panel</h2>
            <p className='font-medium mt-2'>Please login.</p>
            <div className='mt-6 flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="Enter email"
                        type="email"
                        name="email"
                        onChange={(e) => setAdmin({...admin, email: e.target.value})}
                    />
                    <Label>Password</Label>
                    <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        onChange={(e) => setAdmin({...admin, password: e.target.value})}

                    />
                </div>

                <button className='rounded-md mx-auto h-10 font-medium
                bg-gradient-to-br relative group/btn from-black dark:from-zinc-900
                shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
                dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white
                ' onClick={onLogin} >Login &rarr;</button>


                <div
                    className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full'>
                </div>

            </div>

        </div>
    )
}