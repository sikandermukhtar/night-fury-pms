
"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
    // State to store form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can add your form submission logic here, e.g., API call
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='mt-52 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white
        md:border md:border-[#121212] dark:bg-white'>
            <h2 className='font-bold text-2xl'>Welcome to Fury PMS</h2>
            <p className='font-medium text-lg mt-2'>Patient Login</p>
            <form className='mt-6 flex flex-col gap-3' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="Enter email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Label>Password</Label>
                    <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button className='rounded-md mx-auto h-10 font-medium
                bg-gradient-to-br relative group/btn from-black dark:from-zinc-900
                shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
                dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white'
                type="submit">Login &rarr;</button>

                <p
                    className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'
                >Do not have an account? <Link href='/patient/registerPatient'
                                               className='hover:underline underline-offset-2'>Register</Link></p>
                <div
                    className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full'>
                </div>
            </form>
        </div>
    );
}
