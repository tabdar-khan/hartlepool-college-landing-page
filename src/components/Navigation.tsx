import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'Our Mission & Vision', href: '/about/mission' },
        { name: 'History', href: '/about/history' },
        { name: 'Leadership Team', href: '/about/leadership' },
        { name: 'Campus & Facilities', href: '/about/campus' },
        { name: 'Awards & Recognition', href: '/about/awards' }
      ]
    },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { name: 'Diplomas', href: '/courses/Diplomas' },
        { name: 'BTEC Courses', href: '/courses/btec' },
        { name: 'Apprenticeships', href: '/courses/apprenticeships' },
        { name: 'Higher Education', href: '/courses/higher-education' },
        { name: 'Adult Learning', href: '/courses/adult-learning' },
        { name: 'Course Search', href: '/courses/search' }
      ]
    },
    {
      name: 'Admissions',
      href: '/admissions',
      dropdown: [
        { name: 'How to Apply', href: '/admissions/apply' },
        { name: 'Entry Requirements', href: '/admissions/requirements' },
        { name: 'Fees & Funding', href: '/admissions/fees' },
        { name: 'Open Days', href: '/admissions/open-days' },
        { name: 'Campus Tours', href: '/admissions/tours' }
      ]
    },
    {
      name: 'Student Life',
      href: '/student-life',
      dropdown: [
        { name: 'Clubs & Societies', href: '/student-life/clubs' },
        { name: 'Sports & Recreation', href: '/student-life/sports' },
        { name: 'Student Support', href: '/student-life/support' },
        { name: 'Accommodation', href: '/student-life/accommodation' },
        { name: 'Events & Activities', href: '/student-life/events' }
      ]
    },
    { name: 'News & Events', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-coral-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900">Hartlepool College</div>
                <div className="text-xs text-gray-600 -mt-1">Your Future Starts Here</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                      activeDropdown === item.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:bg-blue-50 focus:text-blue-600"
                        onClick={handleLinkClick}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/admissions/apply"
              className="bg-gradient-to-r from-blue-600 to-coral-500 hover:from-blue-700 hover:to-coral-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white border-t border-gray-100`}>
        <div className="px-4 py-4 space-y-2">
          {navigationItems.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  className="flex-1 block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={!item.dropdown ? handleLinkClick : undefined}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="p-3 text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                    aria-label={`Toggle ${item.name} submenu`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && (
                <div className={`ml-4 space-y-1 transition-all duration-200 ${
                  activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={handleLinkClick}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="/admissions/apply"
              className="block w-full bg-gradient-to-r from-blue-600 to-coral-500 hover:from-blue-700 hover:to-coral-600 text-white text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleLinkClick}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;