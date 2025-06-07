import { useState } from "react";

const DarkProfessional = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Admin Panel</h1>
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

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`bg-gray-800 border-r border-gray-700 transform transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0 hidden'}`}>
          <nav className="h-full p-4">
            <ul className="space-y-2">
              {['Dashboard', 'Users', 'Products', 'Orders', 'Reports', 'Settings'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition group">
                    <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>{item}</div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {['Total Users', 'Revenue', 'Active Projects'].map((item, index) => (
                <div key={item} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition">
                  <h3 className="text-gray-400 mb-2">{item}</h3>
                  <p className="text-2xl font-bold">{index === 0 ? '1,234' : index === 1 ? '$48,329' : '24'}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              Main Content Area
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-4 px-6 text-gray-400 text-sm">
        <div className="flex justify-between items-center">
          <span>© 2023 Admin Panel</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default DarkProfessional;