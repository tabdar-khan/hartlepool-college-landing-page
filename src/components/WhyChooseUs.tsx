import React from 'react';
import { Award, Compass, Heart, Lightbulb, MapPin, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Get the individual attention you deserve with our commitment to small, focused classes.'
    },
    {
      icon: Award,
      title: 'Industry-Standard Facilities',
      description: 'Learn with the latest technology and equipment used by professionals in your field.'
    },
    {
      icon: Compass,
      title: 'Career-Focused Learning',
      description: 'Every course is designed with your future career in mind, developed with industry partners.'
    },
    {
      icon: Heart,
      title: 'Pastoral Care',
      description: 'Comprehensive support services to help you succeed academically and personally.'
    },
    {
      icon: MapPin,
      title: 'Perfect Location',
      description: 'Located in the heart of Hartlepool with excellent transport links and local amenities.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Access to cutting-edge facilities including our new Innovation and Enterprise Centre.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text">
              Hartlepool College?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another college. Here's what makes us different and why thousands 
            of students choose to start their journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-coral-500 text-white rounded-full group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">£2.5M</div>
              <p className="text-gray-600">Invested in new facilities this year</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-coral-500 mb-2">98%</div>
              <p className="text-gray-600">Would recommend us to a friend</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-gray-600">Employer partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;