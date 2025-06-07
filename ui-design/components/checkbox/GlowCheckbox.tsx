import { useState } from 'react';

const GlowCheckbox = () => {
    const [checked,setChecked] = useState(false);
    return (
        <label className='flex items-center space-x-3 cursor-pointer'>
            <input type='checkbox' className='hidden' checked={checked}
                onChange={()=>setChecked(!checked)}/>
                <div className={`relative w-5 h-5 rounded-md border-2 flex items-center
                    justify-centeer transition-all duration-200
                     ${checked ? 'border-blue-500 bg-blue-500 shadow-lg shadow-blue-500/50'
                     :'border-gray-400'}`}>

                </div>
                            <span className='text-gray-700' >Glow Checkbox</span>
        </label>
    )
}

export default GlowCheckbox;