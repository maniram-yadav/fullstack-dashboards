import { useState } from "react";

const GlassLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md backdrop-blur-sm bg-white/10 hover:bg-white/20 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Glass UI
            </h1>
            <div className="w-8 h-8 rounded-full backdrop-blur-sm bg-white/10"></div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 bottom-0 z-40 w-64 backdrop-blur-lg bg-white/10 border-r border-white/20 transform transition-transform duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl font-semibold">Menu</h2>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {['Dashboard', 'Projects', 'Team', 'Calendar', 'Documents', 'Reports'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center px-4 py-3 rounded-md backdrop-blur-sm bg-white/5 hover:bg-white/10 transition">
                    <svg className="w-5 h-5 mr-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-white/20">
            <button className="w-full py-2 rounded-md backdrop-blur-sm bg-white/10 hover:bg-white/20 transition">
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-16 min-h-screen transition-all duration-300 ${sidebarOpen ? 'pl-0 md:pl-64' : 'pl-0'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-400/10">
                <h3 className="text-lg font-semibold mb-2">Card {item}</h3>
                <p className="opacity-80">This card has a beautiful glass effect</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 py-6">
        <div className="container mx-auto px-4 text-center opacity-80">
          © 2023 Glass UI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default GlassLayout;