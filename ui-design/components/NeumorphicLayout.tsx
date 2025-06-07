import { useState } from "react";
const NeumorphicLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-700">Neumorphic UI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="w-8 h-8 rounded-full shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] bg-gray-100"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`bg-gray-100 shadow-[5px_0_10px_rgba(0,0,0,0.1)] transform transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'}`}>
          <nav className="h-full p-4">
            <ul className="space-y-3">
              {['Dashboard', 'Projects', 'Team', 'Tasks', 'Calendar', 'Settings'].map((item) => (
                <li key={item}>
                  <a href="#" className="block px-4 py-3 rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {['Total Projects', 'Completed', 'In Progress'].map((item, index) => (
                <div key={item} className="p-6 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition">
                  <h3 className="text-gray-600 mb-2">{item}</h3>
                  <p className="text-2xl font-bold text-gray-700">{index === 0 ? '24' : index === 1 ? '15' : '9'}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]">
              <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-4 rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                    Activity {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2023 Neumorphic UI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default NeumorphicLayout;