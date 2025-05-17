'use client';
import {  useState } from "react";
import {  useRouter } from "next/navigation";
// import {  useAuth } from "@/lib/auth";
import Link from "next/link";


export default async function LoginPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState('');
    const router = useRouter();
    const {login} = useAuth();
    
return <>Login</>
}