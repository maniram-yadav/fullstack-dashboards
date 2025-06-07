import { useState } from "react";

const EcommerceLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition lg:hidden"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-indigo-600">ShopName</h1>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Products</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Categories</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-indigo-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-indigo-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-indigo-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                {['Home', 'Products', 'Categories', 'Deals', 'Account', 'Settings'].map((item) => (
                  <li key={item}>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        {/* Desktop Sidebar - Always visible on lg screens */}
        <aside className="hidden lg:block w-64 bg-white shadow-md">
          <nav className="h-full p-4">
            <div className="mb-8 p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-700 mb-2">Special Offers</h3>
              <p className="text-sm text-gray-600">Get 20% off on selected items</p>
            </div>
            <ul className="space-y-2">
              {['All Products', 'New Arrivals', 'Best Sellers', 'Clothing', 'Electronics', 'Home & Garden'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'} lg:ml-64`}>
          <div className="container mx-auto p-4 lg:p-6">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="border rounded-lg overflow-hidden hover:shadow-md transition">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">Product {item}</h3>
                      <p className="text-gray-600 text-sm mt-1">$19.99</p>
                      <button className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ShopName</h3>
              <p className="text-gray-400">Quality products at affordable prices</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                {['All Products', 'New Arrivals', 'Featured', 'Discounts'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'pinterest'].map((item) => (
                  <a key={item} href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 transition">
                    <span className="sr-only">{item}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            © 2023 ShopName. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default EcommerceLayout ;