import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const MidPageCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-coral-500 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Start Your{' '}
          <span className="text-yellow-300">Journey?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Don't wait for the perfect moment – create it. Join thousands of students who've 
          already taken the first step towards their future.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-white text-coral-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            Book Your Visit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-white text-white hover:bg-white hover:text-coral-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3">
            Apply Online Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-pink-200 text-sm">Online Support</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">Free</div>
            <div className="text-pink-200 text-sm">Campus Tours</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">5min</div>
            <div className="text-pink-200 text-sm">Application Process</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-pink-200 text-sm">Support Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;