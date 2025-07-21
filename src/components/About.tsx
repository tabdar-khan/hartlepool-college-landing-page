import React from 'react';
import { Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Potential Meets{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text">
                Possibility
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 50 years, Hartlepool College has been the launching pad for thousands of 
              successful careers. We're not just an educational institution – we're a community 
              that believes in your potential and supports your journey every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Student-Centered Learning</h3>
                  <p className="text-gray-600">Every course is designed around your success, with personalized support and flexible learning options.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-coral-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Career-Focused Education</h3>
                  <p className="text-gray-600">Our programs are designed with employers to ensure you graduate with the skills that matter.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusive Community</h3>
                  <p className="text-gray-600">A diverse, welcoming environment where everyone belongs and can thrive.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Students collaborating in modern learning environment"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-coral-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-coral-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;