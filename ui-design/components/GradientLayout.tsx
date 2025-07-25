import { useState } from "react";
const GradientLayout = () => {
    const [sidebaropen, setSidebarOpen] = useState(true);
    const [menu, setMenu] = useState<string | undefined>('Home');

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-gray-200">
            <header className="bg-gray-800 border-b border-gray-700">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebaropen)}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-white
                            hover:bg-gray-700 transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                        </button>
                        <div className="text-xl font-semibold">Admin Panel</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default GradientLayout;