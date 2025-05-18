
export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-indigo-50 py-16">
                <div className="container mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                        What Our Students Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {[
              {
                quote: "This course transformed how I build websites. The combination of Next.js and Tailwind is incredibly powerful.",
                name: "Sarah Johnson",
                role: "Frontend Developer"
              },
              {
                quote: "The best investment I've made in my career. I went from junior to mid-level after completing this course.",
                name: "Michael Chen",
                role: "Web Developer"
              },
              {
                quote: "Clear explanations and practical projects. I built my portfolio with what I learned and got hired within weeks!",
                name: "Emma Rodriguez",
                role: "UI Developer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-indigo-500 text-4xl mb-4">&quot;</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
                    </div>
                </div>
        </section>
    );
}