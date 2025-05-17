'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';

export default function RegisterPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { register } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password != confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be at least 6 characters');
            return;
        }
        setError('');
        setLoading(true);
        try {
            await register(name, email, password);
            router.push('/login');
        } catch (err) {
            console.log(err)
            setError('Registration failed. Please try again');
            setLoading(false);
        }
    };

    return (<div className='min-h-screen flex items-center justify-center bg-gray-500 dark:bg-gray-900
    py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
            <div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white'>
                    Creeate a new account
                </h2>
                <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-300'>Or{' '}
                    <Link href="/login" className='font-medium text-primary-light hover:txt-primary-dark'>
                        Sign In to your existing account
                    </Link>
                </p>
            </div>
            {error && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
                    {error}
                </div>
            )}

            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div className='rounded-md shadow-sm space-y-4'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300
                        mb-1'>
                            FullName
                        </label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            autoComplete='name'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                            dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400
                            text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-primary-light
                            focus:border-primary-light focus:z-10 sm:txt-sm'
                            placeholder='Full name'
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                            Email
                        </label>
                        <input
                            id='email'
                            name='email'
                            type='text'
                            autoComplete='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                            dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400
                            text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-primary-light
                            focus:border-primary-light focus:z-10 sm:txt-sm'
                            placeholder='Email'
                        />
                    </div>

                    <div>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700 
                        dark:text-gray-300 mb-1'>
                            Password
                        </label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='new-password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                            dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400
                            text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-primary-light
                            focus:border-primary-light focus:z-10 sm:txt-sm'
                            placeholder='Password (min 6 characters)'
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700
                         dark:text-gray-300 mb-1">
                            Confirm Password
                        </label>
                        <input
                            id='confirm-password'
                            name='confirm-password'
                            type='password'
                            autoComplete='new-password'
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600
                            dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400
                            text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-primary-light
                            focus:border-primary-light focus:z-10 sm:txt-sm'
                            placeholder='Confirm password'
                        />
                    </div>
                </div>

                <div className='flex items-center'>
                    <input
                        id='terms'
                        name='terms'
                        type='checkbox'
                        required
                        className='h-4 w-4 text-primary-light focus:ring-primary-light
                    border-gray-300 dark:border-gray-600 rounded' />
                    <label htmlFor='terms' className='ml-2 block text-sm text-gray-700 dark:text-gray-300'>
                        I agree to the {' '}
                        <Link href='/terms' className='txt-primary-light hover:text-primary-dark'>
                            Terms & Conditions
                        </Link>
                    </label>
                </div>

                <div>
                    <button
                        type='submit'
                        disabled={loading}
                        className={`group relative w-full justify-center py-2 mx-4 border border-transparent
                        text-sm font-medium rounded-md text-white bg-primary-light hover:bg-primary-dark
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light 
                        ${loading ? 'opacity-70 cursor-not-found':''}`}>
                        {loading ? (
                            <span>
                                Creating Account...
                            </span>
                        ) : (
                            'Create Account'
                        )}
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}