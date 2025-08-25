import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-20 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">WG360</span>
            </div>
              <span className="text-xl font-bold">WebGrow360</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Indian businesses with cutting-edge digital marketing solutions. 
              Based in Agartala, Tripura, we help businesses across Northeast India and 
              beyond achieve remarkable online growth.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-sm">Agartala, Tripura (West), India</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Phone className="h-4 w-4 text-blue-400" />
              <span className="text-sm">+91 9830022167 (WhatsApp)</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Mail className="h-4 w-4 text-blue-400" />
              <span className="text-sm">bhattacharjee631@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="h-4 w-4 text-blue-400" />
              <span className="text-sm">9 AM - 7 PM IST, Monday-Saturday</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/seo" className="text-gray-300 hover:text-white transition-colors">SEO Services</Link></li>
              <li><Link to="/services/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/social-media" className="text-gray-300 hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><span className="text-gray-300">Local SEO</span></li>
              <li><span className="text-gray-300">E-commerce Solutions</span></li>
              <li><span className="text-gray-300">Digital Consultation</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 WebGrow360. All rights reserved. | WebGrow360.online
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Proudly serving businesses across India from Agartala, Tripura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;