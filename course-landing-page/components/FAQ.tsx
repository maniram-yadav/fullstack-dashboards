
export default function FAQ() {
  return (<section className="bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3x1 mx-auto">
        {[
          {
            question: "Do I need prior experience with React?",
            answer: "While some basic React knowledge is helpful, we cover all the necessary React concepts you'll need as part of the course."
          },
          {
            question: "How long will I have access to the course?",
            answer: "You'll have lifetime access to all course materials, including future updates."
          },
          {
            question: "What if I don't like the course?",
            answer: "We offer a 30-day money-back guarantee with no questions asked."
          },
          {
            question: "Can I download the videos?",
            answer: "Yes, all video lessons are available for download so you can learn offline."
          },
          {
            question: "How much time should I dedicate per week?",
            answer: "We recommend 5-10 hours per week to complete the course in about 2 months, but you can go at your own pace."
          }
        ].map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <button className="flex justify-between items-center w-full text-left">
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>);
}