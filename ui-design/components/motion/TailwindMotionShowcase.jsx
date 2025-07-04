import { useState, useEffect } from 'react';

const TailwindMotionShowcase = () => {
  const [activeTab, setActiveTab] = useState('entrance');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const motionExamples = {
    entrance: [
      {
        title: 'Fade In',
        component: (
          <div className="w-full h-40 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold animate-fade-in">
            Fade In Effect
          </div>
        ),
        code: `animate-fade-in`,
        css: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}`,
      },
      {
        title: 'Slide Up',
        component: (
          <div className="w-full h-40 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold animate-slide-up">
            Slide Up Effect
          </div>
        ),
        code: `animate-slide-up`,
        css: `@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}`,
      },
      {
        title: 'Scale In',
        component: (
          <div className="w-full h-40 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold animate-scale-in">
            Scale In Effect
          </div>
        ),
        code: `animate-scale-in`,
        css: `@keyframes scaleIn {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-scale-in {
  animation: scaleIn 0.5s ease-out;
}`,
      },
    ],
    hover: [
      {
        title: 'Grow on Hover',
        component: (
          <div className="w-full h-40 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-105">
            Hover Me to Grow
          </div>
        ),
        code: `transition-transform duration-300 hover:scale-105`,
      },
      {
        title: 'Color Change',
        component: (
          <div className="w-full h-40 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-colors duration-300 hover:bg-pink-600">
            Hover to Change Color
          </div>
        ),
        code: `transition-colors duration-300 hover:bg-pink-600`,
      },
      {
        title: '3D Tilt',
        component: (
          <div className="w-full h-40 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-1 hover:scale-[1.02] hover:shadow-lg">
            Hover to Tilt
          </div>
        ),
        code: `transition-transform duration-300 hover:rotate-1 hover:scale-[1.02] hover:shadow-lg`,
      },
    ],
    transitions: [
      {
        title: 'Pulse',
        component: (
          <div className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold animate-pulse">
            Pulse Effect
          </div>
        ),
        code: `animate-pulse`,
      },
      {
        title: 'Bounce',
        component: (
          <div className="w-32 h-32 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold animate-bounce">
            Bounce Effect
          </div>
        ),
        code: `animate-bounce`,
      },
      {
        title: 'Ping',
        component: (
          <div className="w-32 h-32 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold relative">
            <span className="absolute h-full w-full rounded-lg bg-orange-400 animate-ping opacity-75"></span>
            <span className="relative">Ping Effect</span>
          </div>
        ),
        code: `animate-ping`,
      },
    ],
    advanced: [
      {
        title: 'Staggered Children',
        component: (
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={item}
                className={`h-20 bg-blue-400 rounded flex items-center justify-center text-white font-medium animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                Item {item}
              </div>
            ))}
          </div>
        ),
        code: `animate-fade-in-up with different animation-delay`,
        css: `@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}`,
      },
      {
        title: 'Gradient Transition',
        component: (
          <div className="w-32 h-32 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-500">
            Gradient Shift
          </div>
        ),
        code: `bg-gradient-to-r from-purple-500 to-pink-500 
hover:from-pink-500 hover:to-purple-500 
transition-all duration-500`,
      },
      {
        title: 'Scroll Animation',
        component: (
          <div className={`w-full h-40 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Animate on Scroll
          </div>
        ),
        code: `transition-all duration-1000 
${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Tailwind CSS Motion Showcase
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(motionExamples).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full capitalize font-medium transition-all ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {motionExamples[activeTab].map((example, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {example.title}
              </h2>
              <div className="mb-6 flex justify-center">{example.component}</div>
              <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">{example.code}</code>
              </div>
              {example.css && (
                <div className="mt-4 bg-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-800 text-xs">{example.css}</pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-800 mb-3">Tailwind Animation Tips</h3>
        <ul className="space-y-2 text-blue-700">
          <li>
            <strong>Built-in animations:</strong> Tailwind includes <code>animate-pulse</code>, <code>animate-bounce</code>, and <code>animate-ping</code> out of the box
          </li>
          <li>
            <strong>Custom animations:</strong> Add your own keyframes in global CSS and apply with custom classes
          </li>
          <li>
            <strong>Transitions:</strong> Use <code>transition-*</code> utilities to control animation properties and timing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TailwindMotionShowcase;