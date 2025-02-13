'use client';

import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Signup() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(userCredential.user, { displayName: data.name });
            console.log('User registered:', userCredential.user);
            router.push('/');
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left side for desktop */}
            <div className="hidden md:flex w-1/2 bg-black text-white justify-center items-center">
                <h1 className="text-4xl font-bold">Join Us Today!</h1>
            </div>

            {/* Right side - Signup Form */}
            <div className="w-full md:w-3/4 lg:w-2/3 flex justify-center items-center p-6">
                <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-black mb-6 text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-black">Full Name</label>
                            <input
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Mobile Number Field */}
                        <div>
                            <label className="block text-sm font-medium text-black">Mobile Number</label>
                            <input
                                type="tel"
                                {...register('mobile', { required: 'Mobile number is required' })}
                                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400"
                            />
                            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-black">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-black">Password</label>
                            <input
                                type="password"
                                {...register('password', { required: 'Password is required' })}
                                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        {/* Gender Field */}
                        <div>
                            <label className="block text-sm font-medium text-black">Gender</label>
                            <select
                                {...register('gender', { required: 'Gender is required' })}
                                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                        </div>

                        {/* Country Field */}
                        <div>
                            <label className="block text-sm font-medium text-black">Country</label>
                            <input
                                type="text"
                                {...register('country', { required: 'Country is required' })}
                                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400"
                            />
                            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                        </div>

                        {/* Agreement Checkbox */}
                        <div className="md:col-span-2 flex items-center">
                            <input
                                type="checkbox"
                                {...register('agree', { required: 'You must agree to sign up' })}
                                className="mr-2"
                            />
                            <label className="text-sm text-black">I agree to the signup policy</label>
                        </div>
                        {errors.agree && <p className="text-red-500 text-sm md:col-span-2">{errors.agree.message}</p>}

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="md:col-span-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition shadow-md"
                        >
                            Sign Up
                        </button>
                    </form>
                    {/* Already have an account? */}
                    <div className="text-sm text-black text-center mt-4">
                        Already have an account? <Link href="/login" className="hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}