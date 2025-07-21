import React from 'react';
import { Award, Users, GraduationCap, Star } from 'lucide-react';

const TrustCredibility = () => {
  const stats = [
    { icon: Star, value: '95%', label: 'Student Satisfaction' },
    { icon: GraduationCap, value: '89%', label: 'Graduate Employment' },
    { icon: Users, value: '5,000+', label: 'Students Enrolled' },
    { icon: Award, value: '40+', label: 'Programs Offered' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 group-hover:bg-coral-500 transition-colors duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Accreditations */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Accredited & Recognized</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="bg-white p-6 rounded-lg shadow-sm border h-20 w-32 flex items-center justify-center">
              <span className="font-bold text-gray-700">OFSTED</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border h-20 w-32 flex items-center justify-center">
              <span className="font-bold text-gray-700">AOC</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border h-20 w-32 flex items-center justify-center">
              <span className="font-bold text-gray-700">EDI</span>
            </div>
          </div>
        </div>

        {/* Student Quote */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <blockquote className="text-xl italic text-gray-700 mb-6 text-center">
            "Hartlepool College changed my life. The support I received from day one was incredible, 
            and now I'm studying at university pursuing my dream career in engineering."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
              alt="Sarah Johnson"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600">A-Level Graduate, Class of 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredibility;