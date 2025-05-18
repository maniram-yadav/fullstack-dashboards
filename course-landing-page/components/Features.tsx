

export default function Features(){
    return (<section id="feature" className="bg-gray py-16">
            <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                Why This Course Stands Out
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {
                [
              {
                icon: '🚀',
                title: 'Project-Based Learning',
                description: 'Build real-world applications as you learn, not just toy examples.'
              },
              {
                icon: '🎓',
                title: 'Expert Instruction',
                description: 'Learn from industry professionals with years of experience.'
              },
              {
                icon: '🔄',
                title: 'Latest Technologies',
                description: 'Stay current with the most up-to-date Next.js and Tailwind features.'
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                description: 'Master mobile-first development and adaptive layouts.'
              },
              {
                icon: '💬',
                title: 'Community Support',
                description: 'Join our active Discord community for help and networking.'
              },
              {
                icon: '🔁',
                title: 'Lifetime Updates',
                description: 'Get free access to all future course updates and additions.'
              }
            ].map((feature,index)=>(
                    <div key = {index} className="bg-white- p-8 rounded-xl shadow-sm hover:shadow-md transition
                    duration-300">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <div className="text-xl font-semibold mb-2">{feature.title}</div>
                        <div className="text-gray-600">{feature.description}</div>
                      </div>  
            ))
            };

            </div>
            </div>
    </section>
        
    );
}