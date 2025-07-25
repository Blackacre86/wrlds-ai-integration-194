
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', action: () => navigate('/') },
    { name: 'Summit Advantage', action: () => scrollToSection('summit-advantage') },
    { name: 'Practice Areas', action: () => scrollToSection('practice-areas') },
    { name: 'About', action: () => scrollToSection('attorney-profile') },
    { name: 'Legal Insights', href: '/blog' },
    { name: 'Client Portal', href: '/client-auth' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl font-bold text-black">Summit Law</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              )
            ))}
            <Button className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (508) 454-0822
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              item.href ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </button>
              )
            ))}
            <div className="px-3 py-2">
              <Button className="w-full flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                (508) 454-0822
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
