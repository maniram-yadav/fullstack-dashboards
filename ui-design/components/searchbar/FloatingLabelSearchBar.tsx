import {  useState} from "react";


const FloatingLabelSearchBar = () => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex items-center justify-center h-20">
      <div className="relative w-64">
        <div className={`absolute left-3 text-gray-500 transition-all duration-300 ${(focused || query) ? '-top-6 text-sm text-blue-500' : 'top-3'}`}>
          Search
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full h-12 px-4 pt-4 pb-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent"
        />
        <div className="absolute right-3 top-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FloatingLabelSearchBar;