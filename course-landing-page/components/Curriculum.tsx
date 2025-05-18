
export default function Curriculam() {
    return (
        <section id="carriculam className="py-16>
                <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                What you will learn
                </h2>

                <div className="max-w-3xl mx-auto">
                  {[
              {
                module: 'Module 1',
                title: 'Next.js Fundamentals',
                lessons: 'Getting Started, File-based Routing, Data Fetching, API Routes'
              },
              {
                module: 'Module 2',
                title: 'Tailwind CSS Mastery',
                lessons: 'Utility-First Approach, Responsive Design, Customization, Dark Mode'
              },
              {
                module: 'Module 3',
                title: 'Advanced Patterns',
                lessons: 'Authentication, State Management, Performance Optimization'
              },
              {
                module: 'Module 4',
                title: 'Real-World Projects',
                lessons: 'E-commerce Site, Blog Platform, Dashboard, Portfolio Site'
              },
              {
                module: 'Bonus',
                title: 'Deployment & Beyond',
                lessons: 'Vercel Deployment, CI/CD, Monitoring, Next.js 13+ Features'
              }
            ].map((item, index) => (
              <div key={index} className="mb-6 border-l-2 border-indigo-200 pl-6 py-2">
                <div className="text-sm font-semibold text-indigo-600">{item.module}</div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.lessons}</p>
              </div>
            ))}
                </div>
                </div>
        </section>
     
    );
}