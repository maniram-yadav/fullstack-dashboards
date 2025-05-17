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
            <div>
                <h2>Sign In to your account</h2>
                <p>Or{' '} <Link href='/register' className="">
                    Create New Account
                </Link></p>
            </div>

            {error && (
                <div className="">{error}</div>
            )}

            <form className="" onSubmit={handleSubmit}>
                <div className="">
                    <div>
                        <label htmlFor="email" className="">Email : </label>
                        <input id="email" name="email" type="email" autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=""
                            placeholder="Email address" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoCapitalize="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=""
                            placeholder="password"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="" />
                        <label htmlFor="remember-me" className="">
                            Remember me
                        </label>
                    </div>
                    <div className="">
                        <Link href="/forgot-password"
                            className="">Forgot your password ?
                        </Link>
                    </div>
                </div>

                <div>
                    <button type="submit" disabled={loading}
                        className="">
                        {loading ? (
                            <span className="">
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
    );
}