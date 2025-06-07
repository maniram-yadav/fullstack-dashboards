import { useState } from "react";

const FlipCheckbox = () => {

    const [checked, setChecked] = useState(false);

    return (
        <label className="flex p-32 items-end justify-center space-x-3 cursor-pointer">
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <div className={`w-5 h-5 perspective-100`}>
                <div className={`relative w-full h-full transition-transform duration-300 transform-style-preserve-3d
            ${checked ? 'rotate-y-180' : ''}`}>
                <div className={`absolute w-full h-full backface-hidden
                    bg-gray-200 rounded-md`}></div>
                <div className={`absolute w-full h-full backface-hidden
                    bg-gray-500 rounded-md rotate-180 flex items-centeer justify-center`}>
                        <svg
              className="w-4 h-4 text-white rotate-180 shadow-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
                    </div>

                </div>
            </div>
            <div className="text-gray-700">Flip Checkbox</div>
        </label>
    );
}
export default FlipCheckbox;