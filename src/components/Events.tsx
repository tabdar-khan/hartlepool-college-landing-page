import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      date: 'Mar 15',
      title: 'Open Day Experience',
      time: '10:00 AM - 3:00 PM',
      location: 'Main Campus',
      attendees: '200+',
      description: 'Tour our facilities, meet our students and staff, and discover your perfect course.',
      type: 'Open Day',
      color: 'blue'
    },
    {
      date: 'Mar 22',
      title: 'A-Level Information Evening',
      time: '6:00 PM - 8:00 PM',
      location: 'Academic Centre',
      attendees: '50+',
      description: 'Learn about our A-Level programs and university progression pathways.',
      type: 'Info Session',
      color: 'coral'
    },
    {
      date: 'Mar 29',
      title: 'Apprenticeship Fair',
      time: '10:00 AM - 4:00 PM',
      location: 'Sports Hall',
      attendees: '300+',
      description: 'Meet local employers and explore apprenticeship opportunities.',
      type: 'Career Fair',
      color: 'green'
    },
    {
      date: 'Apr 5',
      title: 'Parents & Guardians Evening',
      time: '6:30 PM - 8:30 PM',
      location: 'Main Campus',
      attendees: '100+',
      description: 'Information session specifically designed for parents and guardians.',
      type: 'Parent Event',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500 text-blue-700 border-blue-200',
      coral: 'bg-coral-500 text-coral-700 border-coral-200',
      green: 'bg-green-500 text-green-700 border-green-200',
      purple: 'bg-purple-500 text-purple-700 border-purple-200'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our upcoming events to experience college life firsthand and get 
            all your questions answered by our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-6">
                {/* Date */}
                <div className="flex-shrink-0 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-coral-500 text-white rounded-2xl p-4 w-20">
                    <div className="text-sm font-medium uppercase tracking-wide">Mar</div>
                    <div className="text-2xl font-bold">{event.date.split(' ')[1]}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-opacity-20 border ${getColorClasses(event.color).split(' ')[1]} ${getColorClasses(event.color).split(' ')[2]}`}>
                      {event.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-coral-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
                      {event.attendees} Expected
                    </div>
                  </div>

                  {/* Register Button */}
                  <button className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't make it to our scheduled events?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Schedule a Personal Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;