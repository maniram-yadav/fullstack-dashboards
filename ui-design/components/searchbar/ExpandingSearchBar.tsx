
import { useState, useRef, useEffect, MouseEvent} from 'react';

const ExpandingSearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState<String>('');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside =  (event: MouseEvent) => {
    //   if (searchRef.current && !searchRef.current.contains(event.target)) {
    //     setExpanded(false);
    //   }
    };
    // document.addEventListener('mousedown', handleClickOutside);
    // return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-center h-20">
      <div 
        ref={searchRef}
        className={`relative flex items-center ${expanded ? 'w-64' : 'w-12'} h-12 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out`}
      >
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="absolute left-3 text-gray-500 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {expanded && (
          <input
            type="text"
            
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full h-full pl-12 pr-4 rounded-full focus:outline-none"
            autoFocus
          />
        )}
      </div>
    </div>
  );
};

export default ExpandingSearchBar;