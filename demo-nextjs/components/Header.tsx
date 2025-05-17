'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/lib/auth";

export default function Header() {

    const pathname = usePathname();
    const { user, logout } = useAuth();
    const isActive = (path: string) => pathname === path;
    const isHome = isActive('/')
    console.log(isHome)

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                    NextJs Demo
                </Link>
                <nav className="flex items-center space-x-6">
                    
                    <Link href="/" className="{`hover:text-primary-dark dark:hover:text-primary-light ${isActive('/')?
                    'text-primary-dark dark:text-primary-light font-medium':'text-gray-600 dark:text-gray-300'}}`}">Home</Link>
                    
                    <Link href="/blog" className="{`hover:text-primary-dark dark:hover:text-primary-light ${isActive('/blog')?
                            'text-primary-dark dark:text-primary-light font-medium':'text-gray-600 dark:text-gray-300'}`}">Blog</Link>
                    
                    <Link href="/about" className="{`hover:text-primary-dark dark:hover:text-primary-light ${isActive('/blog')?
                            'text-primary-dark dark:text-primary-light font-medium':'text-gray-600 dark:text-gray-300'}`}">About</Link>
                    {
                        user ? (
                            <div className="flex items-center space-x-4">
                                <Link href="/dashboard"
                                    className="hover:text-primary-dark dark:hover:text-primary-light">Dashboard</Link>
                                <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md 
                                transition">Logout</button>
                            </div>
                        ) : (
                            <div className="">
                                <Link href="/login"
                                    className="bg-primary-light hover:bg-primary-dark text-white px-4 py-2 rounded-md transition">
                                        Login</Link>
                                <Link href="/register"
                                    className="bg-secondary-light hover-bg-secondary-dark text-white px-4 py-2 rounded-md">Register</Link>
                            </div>
                        )}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}