'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import Link from "next/link";


export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            router.push('/dashboard');
        } catch (err) {
            console.log(err)
            setError('Invalid email or password');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 
            dark:bg-gray-900 py-12 px-4 sm:px-6 lg:ps-8">
                <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                    Sign In to your account
                    </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">Or{' '}
                     <Link href='/register' className="font-medium text-primary-light hover:text-primary-dark">
                    Create New Account
                </Link></p>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    {error}</div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300
                        mb-1">Email : </label>
                        <input id="email" name="email" type="email" autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                             dark:border-gray-600 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900
                             dark:text-white ounded-md focus:outline-none focus:ring-primary-light focus:border-primary-light 
                             focus:z-10 sm:text-sm
                             "
                            placeholder="Email address" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoCapitalize="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                            dark:border-gray-600 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400
                            text-gray-900 dark:text-white rounded-md focus:outline-none
                            focus:ring-primary-light focus:border-primary-light focus:z-10 sm:text-sm"
                            placeholder="password"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 focus:ring-primary-light border-gray-300
                        dark:border-gray-600 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        {/* <Link href="/forgot-password" */}
                        <Link href="/forgot-password"
                            className="font-medium text-primary-light hover:text-primary-dark">Forgot your password ?
                        </Link>
                    </div>
                </div>

                <div>
                    <button type="submit" disabled={loading}
                        className={`group relative w-full flex justify-center py-2 px-4 border
                        border-transparent text-sm font-medium rounded-md text-white bg-primary-light
                        hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-primary-light ${loading ? 'opacity-70 cursor-not-allowed':''}`}>
                        {loading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}