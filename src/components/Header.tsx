import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about your digital marketing services.");
    window.open(`https://wa.me/9150568165?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">WG360</span>
            </div>
            <span className="text-xl font-bold text-gray-900">WebGrow360</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } pb-1 transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={openWhatsApp}
              className="hidden md:flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors duration-200 mt-4"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;