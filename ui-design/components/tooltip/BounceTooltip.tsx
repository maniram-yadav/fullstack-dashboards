import { useState } from 'react';

const BounceTooltip = () => {
    return (
        <div className='relative group inline-block'>
                <button className='px-4 py-2 bg-green-500 text-white rounded'>
                    Hover me
                </button>
                <div className='absolute z-10 w-48 p-2 mt-2 text-sm text-white
                bg-green-600 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 
                scale-10 group-hover:scale-100'>


                {/* <div className='absolute z-10 w-48 p-2 mt-2 text-sm text-white
                bg-green-600 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform 
                rotate-x-90 group-hover:rotate-x-0 origin-top'> */}

                {/* <div className='absolute z-10 w-48 p-2 mt-2 text-sm text-white
                bg-green-600 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform 
                translate-y-4 group-hover:translate-y-0'>
 */}

                {/* <div className='absolute z-10 w-48 p-2 mt-2 text-sm text-white
                bg-green-600 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform 
                shadow-none  group-hover:shadow-lg group-hover:shadow-indigo-500/50'> */}



                        This tooltip has a nice bounce effect
                        <div className='absolute w-3 h-3 bg-green-600 transform rotate-45 -top-1.5 left-4'></div>
                </div>
        </div>
    );
};
export default BounceTooltip;