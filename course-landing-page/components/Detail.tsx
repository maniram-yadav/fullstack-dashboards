import Image from "next/image";

export default function Detail() {
    return (
        <section className="container mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-centeer">
                <div className="md:w-1/2 mb-12 md:mb-0" >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                        Master
                        <span className="text-indigo-600">Next.js</span>
                        <span className="text-teal-500">Tailwind CSS</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Build stunning, high-performance websites with the modern web stack. Learn from industry experts and take your frontend skills to the next level.
                    </p>
                    <div className="flex fleex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-4">
                        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700
                        transition duration-300 text-lg font-minimum">
                            Start learning today
                        </button>
                        <button className="px-8 py-3 border border-gray-300 text-gray-700
                        rounded-lg hover:gray-50 transition duration-300 text-lg font-medium">
                            Watch Freee Previeww
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-100
                         rounded-2xl"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                                alt="Course Preview" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}