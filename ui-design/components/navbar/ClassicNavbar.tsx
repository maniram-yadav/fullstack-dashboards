import { useState } from 'react';

const ClassicNavbar = () => {
  const menuItems = [
    { name: 'Home', href: '#' },
    {
      name: 'Features',
      href: '#',
      submenu: [
        { name: 'Design Tools', href: '#' },
        { name: 'Development', href: '#' },
        { name: 'Collaboration', href: '#' },
      ],
    },
    {
      name: 'Templates',
      href: '#',
      submenu: [
        { name: 'Web Design', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'Dashboards', href: '#' },
      ],
    },
    { name: 'Pricing', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">GradientUI</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg
                        className="ml-1 h-4 w-4 inline-block text-white/70 group-hover:text-white transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  {item.submenu && (
                    <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ClassicNavbar;