import { useState } from 'react';

const GlowScaleAvatar =  ({ src, alt = "User Avatar" }:{src:string,alt:string}) => {
  return (
    <div>
{/* 1 */}
    
    <div className='relative flex left-18 top-18 item-center justify-center  cursor-pointer group w-20 h-20 rounded-full overflow-hidden'>
            <img 
            src={src}
            alt = {alt}
            className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 rounded-full border-2 border-transparent 
            group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.7)]
            transition-all duration-300'></div>
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 rounded-full
            transiion-opacity duration-300'></div>
    </div>



    {/* 2 */}
 <div className="relative group w-20 h-20 rounded-full overflow-hidden transition-all duration-500 hover:rotate-x-12 hover:rotate-y-12 hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
    </div>


    {/* 3 */}

    <div className="relative w-20 h-20 rounded-full overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          View Profile
        </span>
      </div>
      <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white transition-all duration-300"></div>
    </div>

    {/* 4 */}
     <div className="relative w-20 h-20 rounded-full overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-2"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      <div className="absolute inset-0 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:shadow-xl transition-all duration-300"></div>
    </div>


    {/* 5 */}
    <div className="relative p-1 w-20 h-20 rounded-full group">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
      <div className="absolute inset-0 rounded-full bg-black/30 opacity-20 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>
    </div>
</div>
  )
}
export default GlowScaleAvatar;