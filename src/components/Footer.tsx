import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'Student Life', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const studentLinks = [
    { name: 'Apply Online', href: '#' },
    { name: 'Student Portal', href: '#' },
    { name: 'Library', href: '#' },
    { name: 'Support Services', href: '#' },
    { name: 'Careers Advice', href: '#' }
  ];

  const parentLinks = [
    { name: 'Parent Guide', href: '#' },
    { name: 'Fees & Funding', href: '#' },
    { name: 'Transport', href: '#' },
    { name: 'Term Dates', href: '#' },
    { name: 'Policies', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-coral-400 bg-clip-text">
              Hartlepool College
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Inspiring excellence, empowering futures. Join our community of learners 
              and discover your potential at Hartlepool College.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>01429 295000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-coral-400" />
                <span>enquiries@hartlepoolcollege.ac.uk</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-1" />
                <span>Stockton Street, Hartlepool, TS24 7NT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Students */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Students</h4>
            <ul className="space-y-3">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Parents */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Parents</h4>
            <ul className="space-y-3">
              {parentLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 Hartlepool College. All rights reserved. | 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-coral-400 bg-clip-text font-medium">
                {' '}Your Future Starts Here
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;