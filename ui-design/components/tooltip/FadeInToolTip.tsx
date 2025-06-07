import { useState } from 'react';

const FadeTooltip = () => {
    return (
        <div className='relative flex items-center justify-center group inline-block'>
                <button className='px-4 py-2 ml-8 bg-blue-500 text-white rounded  pointer-cursor'>
                Hover me
                </button>
                <div className='absolute w-48 z-10 ml-8 p-2 mt-2 text-sm text-white bg-gray-800
                rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform
                translate-y-1 group-hover:translate-y-0'>
                            This is fade in tooltip with smooth transition
                            <div className='absolute w-3 h-3 bg-gray-800 transform rotate-45
                            -top-1.5 left-3'></div>
                </div>
        </div>
    );
};
export default FadeTooltip;