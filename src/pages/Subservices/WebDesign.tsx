import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, TrendingUp, MapPin, Globe, BarChart3 } from 'lucide-react';

const WebDesign = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Web Design Services</h1>
        <p className="text-xl text-gray-600 mb-12">
          Create stunning, modern websites that attract and convert visitors
        </p>
        
        <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
          ₹4999
        </button>
      </div>
    </div>
  );
};

export default WebDesign;