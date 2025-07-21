import React from 'react';
import { Camera, Music, Palette, Trophy, Users, Zap } from 'lucide-react';

const StudentLife = () => {
  const activities = [
    { icon: Trophy, name: 'Sports Teams', image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { icon: Music, name: 'Music & Drama', image: 'https://images.pexels.com/photos/164944/pexels-photo-164944.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { icon: Palette, name: 'Art & Design', image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { icon: Camera, name: 'Media Club', image: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { icon: Users, name: 'Student Council', image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { icon: Zap, name: 'Innovation Lab', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Life Beyond the{' '}
            <span className="text-transparent bg-gradient-to-r from-coral-500 to-yellow-500 bg-clip-text">
              Classroom
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            College is about more than just studying. Join our vibrant community and 
            discover new passions, make lifelong friends, and create unforgettable memories.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <activity.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-coral-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Student Support That Actually Cares</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                "From academic tutoring to mental health support, career guidance to financial advice – 
                the support team at Hartlepool College has been incredible. They truly care about each 
                student's success and wellbeing."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                  alt="James Wilson"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <div className="font-semibold text-lg">James Wilson</div>
                  <div className="text-blue-200">Business Studies, Year 2</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Students in support session"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;