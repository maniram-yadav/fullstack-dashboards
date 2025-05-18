
export default function Navigation() {
    return (
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-indigo-600">NextTail</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
                    <a href="#curiculam" className="text-gray-700 hover:text-indigo-600">Curriculam</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
                    <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Pricing</a>
                </div>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg 
                hover:bg-white-700 transition duration-300">Enroll Now</button>
            </div>

        </nav>
    );
}