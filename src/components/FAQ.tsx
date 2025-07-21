import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are the entry requirements for A-Level courses?',
      answer: 'Generally, you\'ll need at least 5 GCSEs at grade 4 or above, including English and Maths. Specific subjects may have additional requirements. Our admissions team will work with you to find the right path based on your qualifications and goals.'
    },
    {
      question: 'How much does it cost to study at Hartlepool College?',
      answer: 'A-Level and BTEC courses are free for students aged 16-18. Adult learners may be eligible for funding depending on their circumstances. We also offer financial support including bursaries, travel assistance, and equipment loans.'
    },
    {
      question: 'What support is available for students with additional needs?',
      answer: 'We provide comprehensive support including learning support assistants, specialist equipment, exam accommodations, and one-to-one tutoring. Our dedicated team works with each student to create a personalized support plan.'
    },
    {
      question: 'Can I change my course if I\'m not happy with my choice?',
      answer: 'Yes, we understand that sometimes students need to change direction. Our student services team will work with you to explore alternative options and help facilitate transfers where possible, especially early in the academic year.'
    },
    {
      question: 'What are the progression rates to university?',
      answer: 'Over 85% of our A-Level students progress to higher education, with many securing places at Russell Group universities. We provide comprehensive UCAS support and university preparation throughout your studies.'
    },
    {
      question: 'Is transport provided to the college?',
      answer: 'We have excellent transport links with local bus services. We also offer travel bursaries for eligible students and have secure bike storage facilities for cyclists.'
    },
    {
      question: 'What facilities are available to students?',
      answer: 'Our facilities include modern classrooms, science laboratories, IT suites, library and study areas, sports facilities, student common areas, and our new Innovation Centre with cutting-edge technology.'
    },
    {
      question: 'How do I apply for a course?',
      answer: 'You can apply online through our website, visit us in person, or attend one of our open days. The application process is straightforward and our admissions team is always available to help guide you through it.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common 
            questions we receive from prospective students and their families.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              } overflow-hidden`}>
                <div className="px-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-coral-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our friendly admissions team is here to help with any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Contact Admissions
            </button>
            <button className="border border-gray-300 hover:border-coral-500 text-gray-700 hover:text-coral-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Live Chat Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;