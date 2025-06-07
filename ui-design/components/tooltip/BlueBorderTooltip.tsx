import { useState, useRef } from 'react';

const BlueBorderTooltip = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState('right');
    const buttonRef = useRef(null);

    const toggleTooltip = (pos: any) => {
        setPosition(pos);
        setIsVisible(!isVisible);
    };

    return (<div className='flex items-center group justify-center h-32 space-x-4'>
        <div className='relative'>
            <button className='px-4 py-2  bg-blue-500 text-white rounded 
    hover:bg-blue-600 transition' ref={buttonRef} onClick={() => toggleTooltip('left')}>
                Show left Tooltip
            </button>
            {
                isVisible && position == 'left' && (
                    <div className='absolute z-10 w-48 p-3 group-hover:opacity-100 text-sm text-gray-800 bg-white border-2 
            border-blue-500 rounded-md shadow-lg'
                        style={{
                            right: 'calc(100%+10px)',
                            top: '50%',
                            transform: 'translateY(-50%) translateX(-102%)'

                        }}
                    >
                        <div className='absolute top-1/2 right-0 w-3 h-3 bg-white border-t-2
                border-r-2 border-blue-500 transform translate-x-1/2 translate-y-1/2 rotate-45'>

                        </div>
                        This tooltip appears on the left of blue borders
                    </div>
                )}

        </div>

        <div className="relative">
            <button
                onClick={() => toggleTooltip('right')}
                className="px-4 py-2 z-20 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Show Right Tooltip
            </button>

            {isVisible && position === 'right' && (
                <div className="absolute z-10 w-48 p-3 text-sm text-gray-800  bg-white border-8 border-blue-500 rounded-md shadow-lg"
                    style={{
                        left: 'calc(100% + 10px)',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}>
                    <div className="absolute top-1/2 left-0 w-3 h-3 bg-white border-t-2  border-l-2 border-blue-500 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                    
                    </div>
                    <div className=''>
                        <div className='w-8 box-border h-8 border-t-8 border-r-8 border-red-600 absolute rounded-md -right-2 -top-2'></div>                    
                    <div className='w-8 box-border h-8 border-t-8 border-l-8 border-red-600 absolute rounded-md -left-2 -top-2'></div>                    
                    <div className='w-8 box-border h-8 border-b-8 border-r-8 border-red-600 absolute rounded-md -right-2 -bottom-2'></div>                    
                 <div className='w-8 box-border h-8 border-b-8 border-l-8 border-red-600 absolute rounded-md -left-2 -bottom-2'></div>                    
                
                    </div>
                    This tooltip appears on the right with blue borders
                </div>
            )}
        </div>

    </div>);

}
export default BlueBorderTooltip;