const Badge = ({ text = "New" }) => {
  return (
    <div className="flex items-center justify-center mt-10 ml-10">
    
    {/* 1 */}
    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500 text-white relative overflow-hidden group">
      {text}
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></span>
      <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/50 transition-all duration-300"></span>
      <span className="absolute inset-0 shadow-lg shadow-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </span>
{/* 2 */}
  <span className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30">
      {text}
    </span>
{/* 3 */}
 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 group hover:bg-green-200 transition-colors duration-300">
      <span className="h-2 w-2 mr-1 bg-green-500 rounded-full group-hover:animate-pulse"></span>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        {text}
      </span>
    </span>

{/* 4 */}
<span className="inline-block px-3 py-1 text-sm font-medium rounded-md bg-transparent text-yellow-600 border-2 border-yellow-400 relative overflow-hidden group">
      {text}
      <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      <span className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-300 rounded-md transition-all duration-300"></span>
      <span className="absolute inset-0 rounded-md group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-shadow duration-300"></span>
    </span>

{/* 5 */}
<span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white relative overflow-hidden group">
      {text}
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute inset-0 rounded-full group-hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-shadow duration-300"></span>
      <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/30 transition-all duration-300"></span>
    </span>
    </div>
  );
};

export default Badge;