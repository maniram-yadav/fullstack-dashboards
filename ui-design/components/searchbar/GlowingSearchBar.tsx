import {  useState} from "react";
const GlowingSearchBar = () => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex items-center justify-center h-20">
      <div className={`relative w-64 ${focused ? 'ring-4 ring-blue-400' : ''} rounded-full transition-all duration-300`}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search..."
          className="w-full h-12 pl-12 pr-4 rounded-full shadow-md focus:outline-none"
        />
        <div className={`absolute ${focused ? 'right-3 top-3' : ' left-3 top-3'} transition transform duration-300 ease-in text-gray-500`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {focused && (
          <div className="absolute inset-1 rounded-full bg-blue-500 opacity-20 -z-10 animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default GlowingSearchBar;