import { useState } from "react";
const MinimalDashboard = () => {
    const [sidebaropen, setSidebarOpen] = useState(true);
    const [menu, setMenu] = useState<string|undefined>('Home');

    return (
        <div className="flex flex-col h-screen bg-gray-50">

            <header className="bg-gray-300 shadow-sm z-10 min-w-screen h-screeen mb-8">
                <div className="flex items-center justify-between px-4 py-3">
                    <button
                        onClick={() => setSidebarOpen(!sidebaropen)}
                        className={`p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 transition 
                            ${sidebaropen ? 'bg-gray-400':''}`}
                    >
                        <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
                    <div className="w-6"></div> 
                </div>
            </header>


            <div className="flex flex-1 overflow-hidden">
                <aside className={`bg-white shadow-md transform transition-all duration-300
            ease-in-out ${sidebaropen ? 'translate-x-0 w-64' : '-translate-x-full w-0 hidden'} `}>
                    <nav className="h-full p-4">
                        <ul className="space-y-2">
                            {['Home', 'Analytics', 'Projects', 'Team', 'Settings'].map((item) => (
                                <li key={item}>
                                    <a href="#" onClick={()=>setMenu(item)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition ease-in-out duration-500">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className={`flex-1 overflow-auto transition-all duration-300 ease-in-out 
                    ${sidebaropen ? 'ml-0 md:ml-4' : 'ml-0'}`}>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>
                        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="bg-white w-full m-4  p-6 rounded-lg shadow-sm hover:shadow-md transition">
                                    Card {item}
                                </div>
                            ))}
                        </div>
                        <div className="abolute left-0 bottom-0 mb-2 mr-2">
                            { menu } clicked!
                        </div>
                    </div>
                </main>


            </div>

            <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm">
                © 2023 Company Name. All rights reserved.
            </footer>
        </div>
    )
}
export default MinimalDashboard;