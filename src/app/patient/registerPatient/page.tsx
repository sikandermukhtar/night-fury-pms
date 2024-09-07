'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import axios from 'axios';

export default function Register() {
    // State to store form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
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
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let {firstname, lastname, email, password}=formData;
        let response=await axios.post('/api/patient/register',{firstName:firstname,lastName: lastname, email, password});
        console.log(response);
        // Add form submission logic here
    };

    return (
        <div className='flex items-center justify-center'>
            <div className="mt-52 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white md:border md:border-[#121212] dark:bg-black">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to Fury PMS
                </h2>
                <h3 className='text-lg font-medium'>Patient Registration</h3>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Please provide all the necessary information
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <div className="flex flex-col">
                            <Label htmlFor="firstname" className="mb-2">
                                First Name
                            </Label>
                            <Input
                                id="firstname"
                                placeholder="Tyler"
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="lastname" className="mb-2">
                                Last Name
                            </Label>
                            <Input
                                id="lastname"
                                placeholder="Durden"
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <Label htmlFor="email" className=''>Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        name="email"
                        className='mt-2'
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="***********"
                        type="password"
                        name="password"
                        className="mb-5 mt-2"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                        Sign up &rarr;
                    </button>
                </form>
                <p className="text-neutral-600 text-sm max-w-sm dark:text-neutral-300">
                    Already have an account? <Link href="/patient/patientLogin" className='hover:underline'>Login</Link>
                </p>
            </div>
        </div>
    );
}




