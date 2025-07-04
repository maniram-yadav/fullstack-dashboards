import { motion } from 'framer-motion';
import { title } from 'process';
import { useState } from 'react';


const MotionShowcase = () => {

  const [activeTab, setActiveTab] = useState('entrance');
  const motionExamples = {
    entrance: [
      {
        title: 'fade In',
        component: (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='w-full h-40 bg-blue-500 flex items-center justify-center text-center font-bold'
          >
            Fade In Effect

          </motion.div>
        ),
        code: `initial = {{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}`,
      },
      {
        title: 'Slide Up',
        component: (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3 }}
            className="w-full h-40 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Slide Up Effect
          </motion.div>
        ),
        code: `initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}`,
      },
      {
        title: 'Slide In',
        component: (
          <motion.div
            initial={{ scale: .5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-40 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Slide in Efect
          </motion.div>
        ),
        code: ` initial={{ scale:.5,opacity:0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}`,
      },


    ],
    hover: [
      {
        title: 'Grow on Hover',
        component: (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-full h-40 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Hover Me to Grow
          </motion.div>
        ),
        code: `whileHover={{ scale: 1.1 }}`,
      }, {
        title: 'Color change',
        component: (
          <motion.div
            whileHover={{ backgroundColor: '#EC4899' }}
            className="w-full h-40 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Hover to Change Color
          </motion.div>
        ),
        code: `whileHover={{ backgroundColor: '#EC4899' }}`,

      },
      {
        title: '3D Tilt',
        component: (
          <motion.div
            whileHover={{ rotateY: 15, rotateX: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-40 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Hover to Tilt
          </motion.div>
        ),
        code: `whileHover={{ rotateY: 15, rotateX: -10 }}
        transition={{ duration: 0.3 }}`,
      },

    ],
    transitions: [
      {
        title: 'Spring',
        component: (
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Spring
          </motion.div>
        ),
        code: `animate={{ x: [0, 100, 0] }}
        transition={{ type: 'spring', stiffness: 100 }}`,
      },
      {
        title: 'Bounce',
        component: (
          <motion.div
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-32 h-32 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Bounce
          </motion.div>
        ),
        code: `animate={{ y: [0, -40, 0] }}
        transition={{ duration: 1, repeat: Infinity }}`,
      },
      {
        title: 'Custom Cubic Bezier',
        component: (
          <motion.div
            animate={{ x: [0, 200, 0] }}
            transition={{ duration: 4, ease: [0.17, 0.67, 0.83, 0.67] }}
            className="w-32 h-32 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Custom Easing
          </motion.div>
        ),
        code: `animate={{ x: [0, 200, 0] }}
        transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67] }}`,
      },
    ],
    advanced: [
      {
        title: 'Staggered Children',
        component: (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className="h-20 bg-blue-400 rounded flex items-center justify-center text-white font-medium"
              >
                Item {item}
              </motion.div>
            ))}
          </motion.div>
        ),
        code: `// Parent
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}

        // Children
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}`,
      },
    ]
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Motion UI Showcase
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(motionExamples).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full capitalize font-medium transition-all ${activeTab === tab
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
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-800 mb-3">Pro Tips</h3>
        <ul className="space-y-2 text-blue-700">
          <li>
            <strong>Performance:</strong> Avoid animating properties like 'width'
            or 'height' - use 'scale' instead for smoother animations
          </li>
          <li>
            <strong>Mobile:</strong> Reduce motion for users who prefer reduced
            motion with `@media (prefers-reduced-motion: reduce)`
          </li>
          <li>
            <strong>Debugging:</strong> Use Framer Motion's `layout` prop to
            automatically animate layout changes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MotionShowcase;