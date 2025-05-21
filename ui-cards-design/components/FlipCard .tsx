 const FlipCard = () => {
    return (<div className="group perspective w-64 h-80 mx-auto">
        <div className="relative preserve-3d group-hover:rotate-y-100 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full bg-gradient-to-br from-purple-500 to-blue-500
                rounded-xl shadow-xl flex flex-col justify-center items-center text-white">
                <h3 className="txt-2xl font-bold mb-2">
                    Front Content
                </h3>
                <p className="text-center">Hover to see more details</p>

            </div>
            <div className="absolute rotate-y-180 backface-hidden w-full h-full
                bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl p-6 shadow-xl flex flex-col
                justify-center items-center text-white">
                <h3 className="txt-2xl font-bold mb-2">Back Content</h3>
                <p className="text-center">Detailed information here</p>
                <button className="mt-4 px-4 py-2 bg-white text-blue-600
                       rounded-lg font-medium hover:bg-gray-100 transition" >Learn more</button>
            </div>

        </div>
    </div>);
}
export default FlipCard;