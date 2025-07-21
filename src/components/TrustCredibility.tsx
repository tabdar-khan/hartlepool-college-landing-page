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


        
      </div>
    </section>
  );
};

export default TrustCredibility;