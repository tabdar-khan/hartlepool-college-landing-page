import React from 'react';
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Diplomas',
      description: 'Traditional and modern subjects to prepare you for university and beyond.',
      subjects: ['Sciences', 'Humanities', 'Arts', 'Mathematics'],
      color: 'blue',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Briefcase,
      title: 'Apprenticeships',
      description: 'Earn while you learn with our industry-connected apprenticeship programs.',
      subjects: ['Engineering', 'Business', 'Digital', 'Healthcare'],
      color: 'coral',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: GraduationCap,
      title: 'Higher Education',
      description: 'University-level courses and degrees delivered locally.',
      subjects: ['Business', 'Computing', 'Health', 'Education'],
      color: 'green',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Adult Learning',
      description: 'Never too late to start. Flexible courses for adult learners.',
      subjects: ['Professional Skills', 'Career Change', 'Personal Development'],
      color: 'purple',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      coral: 'from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600',
      green: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
      purple: 'from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path to{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text">
              Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whatever your goals, we have a program designed to get you there. 
            Explore our range of study options and find your perfect fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(program.color)} opacity-80`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="group/btn w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2">
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;