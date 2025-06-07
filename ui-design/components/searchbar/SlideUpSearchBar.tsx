import {  useState,useEffect} from "react";

const SlideUpSearchBar = () => {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const dummyResults = [
    "Search Result 1",
    "Search Result 2",
    "Search Result 3"
  ];

  useEffect(() => {
    if (query.length > 0) {
    //   setResults(dummyResults.filter(item => 
    //     item.toLowerCase().includes(query.toLowerCase())
    //   ));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="relative mt-20">
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${active ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}></div>
      
      <div className={`absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md transition-all duration-500 ${active ? 'translate-y-32' : 'translate-y-0'}`}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setActive(true)}
            placeholder="Search..."
            className="w-full h-12 px-4 pr-12 rounded-lg shadow-lg focus:outline-none"
          />
          <button className="absolute right-3 top-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {active && results.length > 0 && (
          <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
            {results.map((result, index) => (
              <div key={index} className="p-3 hover:bg-gray-100 cursor-pointer">
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideUpSearchBar;