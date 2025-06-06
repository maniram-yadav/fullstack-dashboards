const GrowEffectCard= () => {
    return (<div className="relative group w-64 h-80 mx-auto mt-50">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg
            blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative h-full bg-gray-900 rounded-lg p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Glow Effect</h3>
                    <p className="text-gray-300">This card has a beautiful glow effect on hover</p>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500
                rounded-md text-white font-medium hover:opacity-90 hover:bg-gray-300 transition cursor-pointer">Action</button>
            </div>
    </div>);
}

export default GrowEffectCard;