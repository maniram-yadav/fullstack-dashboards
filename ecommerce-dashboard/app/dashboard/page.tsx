import {auth } from '@/auth';
import { redirect } from "next/navigation";
import {  } from "@/components/SalesChart";
import {  } from "@/components/RecentOrders";
import {  } from "@/components/StatsCards";
import {  } from "@/components/ProductPerformance";

export default async function Dashboard() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }
    return (
        <div className='min-h-screen bg-gray-100 p-4 md:p-8'>
            <header className='mb-8'>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    E-commerce Dashboard
                </h1>
                <p className='text-gray-600'>
                    Welcome back , {session.user?.name}

                </p>
            </header>
            {/* <StatsCards /> */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
                <div className='lg:col-span-2'>
                {/* <SalesChart /> */}
                </div>
                <div className='lg:col-span-1'>
                {/* <ProductPerformance /> */}
                 </div>
            </div>
            <div className='mt-6'>
            {/* <RecentOrders /> */}
            </div>
        </div>
    );

    
}