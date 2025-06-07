import {  useState} from "react";

const MorphingSearchButton = () => {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="flex items-center justify-center h-20">
      <div className="relative">
        {active ? (
          <div className="relative flex items-center w-64 h-12 bg-white rounded-full shadow-md animate-expand">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full h-full pl-12 pr-4 rounded-full focus:outline-none"
              autoFocus
            />
            <button 
              onClick={() => setActive(false)}
              className="absolute left-3 text-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setActive(true)}
            className="w-12 h-12 bg-blue-500  text-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 animate-shrink"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className=" pointer-cursor h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default MorphingSearchButton;