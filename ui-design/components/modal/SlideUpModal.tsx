import { useState } from 'react';

const SlideUpModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className='px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition'
            >
                Open Slide-Up

            </button>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className='fixed inset-0  bg-green-400/70 bg-opacity-0 flex items-center justify-center'>
                    <div className='absolute bg-white rounded-t-lg mt-8 p-6 w-full max-w-xl animate-slide-up'>
                        <div className='flex justify-between items-center mt-4' >
                            <h3 className='text-xl font-bold'>Slide Up Modal</h3>
                            <button onClick={() => setIsOpen(false)}
                                className='text-gray-500 hover:text-gray-700' >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className='mb-6'> hois modal slides up</p>
                        <div className='flex justify-end space-x-3'>
                            <button
                                onClick={() => setIsOpen(false)}
                                className='px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition'
                            >
                                Action
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
       <style jsx global>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>

        </>
    )
}

export default SlideUpModal;