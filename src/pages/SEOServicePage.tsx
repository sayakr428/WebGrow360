import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, TrendingUp, MapPin, Globe, BarChart3 } from 'lucide-react';

const SEOServicePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const seoServices = [
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Dominate local search results in your city and region',
      features: [
        'Google My Business optimization',
        'Local keyword targeting',
        'Citation building',
        'Customer review management'
      ],
      link: '/services/Subservices/local-seo'
    },
    {
      icon: Search,
      title: 'Technical SEO',
      description: 'Optimize your website\'s technical foundation',
      features: [
        'Site speed optimization',
        'Mobile-first indexing',
        'Schema markup implementation',
        'Core Web Vitals improvement'
      ],
      link: '/services/Subservices/technical-seo'
    },
    {
      icon: Target,
      title: 'Keyword Research',
      description: 'Target the right keywords for maximum impact',
      features: [
        'Competitor keyword analysis',
        'Long-tail keyword discovery',
        'Search intent mapping',
        'Keyword difficulty assessment'
      ],
      link: '/services/Subservices/keyword-research'
    },
    {
      icon: TrendingUp,
      title: 'Content Optimization',
      description: 'Create content that ranks and converts',
      features: [
        'On-page SEO optimization',
        'Content gap analysis',
        'SEO copywriting',
        'Internal linking strategy'
      ],
      link: '/services/Subservices/content-optimization'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Advanced Animated Background System */}
      <div className="fixed inset-0 -z-20">
        {/* Mesh Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950"></div>
        
        {/* Dynamic Floating Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-blue-500/25 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/15 via-teal-500/20 to-cyan-500/25 rounded-full blur-3xl animate-float-reverse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-violet-400/20 via-indigo-500/25 to-blue-500/20 rounded-full blur-3xl animate-float-diagonal" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 via-rose-500/20 to-orange-500/15 rounded-full blur-3xl animate-float-circular" style={{animationDelay: '1s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <pattern id="hexagon" patternUnits="userSpaceOnUse" width="50" height="43.4">
              <polygon points="25,2 45,15 45,35 25,48 5,35 5,15" fill="none" stroke="url(#grid)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagon)"/>
          </svg>
        </div>

        {/* Parallax Elements */}
        <div 
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400/60 rounded-full animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute top-3/4 left-1/3 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.015}px) translateY(${scrollY * -0.05}px)`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.01}px) translateY(${scrollY * 0.08}px)`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <g className="animate-neural-pulse">
            <path d="M100,200 Q300,100 500,200 T900,200" fill="none" stroke="url(#neuralGrad)" strokeWidth="1"/>
            <path d="M200,400 Q400,300 600,400 T1000,400" fill="none" stroke="url(#neuralGrad)" strokeWidth="1"/>
            <path d="M50,600 Q250,500 450,600 T850,600" fill="none" stroke="url(#neuralGrad)" strokeWidth="1"/>
            <circle cx="100" cy="200" r="4" fill="#06b6d4" opacity="0.8"/>
            <circle cx="500" cy="200" r="4" fill="#8b5cf6" opacity="0.8"/>
            <circle cx="900" cy="200" r="4" fill="#06b6d4" opacity="0.8"/>
          </g>
        </svg>
      </div>

      {/* Interactive Cursor Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-cyan-400/50 mix-blend-difference transition-all duration-300"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`
        }}
      ></div>

      <div className="py-20 relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32">
          {/* Layered Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform -skew-y-2"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-t from-blue-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-float-gentle"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              {/* Enhanced Icon with Multi-layer Effects */}
              <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-white/5 via-cyan-500/10 to-blue-500/5 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/10 shadow-2xl animate-float-gentle">
                  <Search className="h-12 w-12 text-white drop-shadow-2xl" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-purple-500/20 rounded-3xl blur-xl animate-pulse-glow"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-blue-500/15 to-purple-500/10 rounded-full blur-2xl animate-morph"></div>
              </div>
              
              {/* Enhanced Typography */}
              <h1 className="text-5xl md:text-7xl font-black mb-8 relative">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl animate-text-glow">
                  SEO Services
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent text-4xl md:text-6xl animate-text-shimmer">
                  for Indian Businesses
                </span>
                {/* Glitch Effect Lines */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 animate-glitch-1"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 animate-glitch-2"></div>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm mb-10 animate-fade-in-up">
                Boost your website's visibility on Google and drive more organic traffic to your business. 
                Our SEO strategies are specifically designed for the Indian market and local competition.
              </p>
              
              {/* Enhanced CTA Button */}
              <div className="mt-12">
                <a
                  href="https://wa.me/919830022167?text=Hi! I want to improve my website's SEO and Google rankings. Please share your SEO service details and pricing."
                  className="group relative inline-block transform hover:scale-105 transition-all duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Multi-layer glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse-glow"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-teal-500/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-40 animate-morph"></div>
                  
                  <div className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-10 py-5 rounded-full font-bold text-xl border border-green-400/30 shadow-2xl backdrop-blur-sm">
                    <span className="relative z-10">Get Free SEO Analysis</span>
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                    {/* Particle effect */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"
                          style={{
                            left: `${10 + i * 10}%`,
                            top: '50%',
                            animationDelay: `${i * 0.2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/80 backdrop-blur-sm"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  Comprehensive SEO
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-text-shimmer">
                  Solutions
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600/90 max-w-3xl mx-auto">
                Everything you need to dominate search results in your industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {seoServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link 
                    key={index} 
                    to={service.link}
                    className="block transform transition-all duration-700 hover:scale-105 group"
                  >
                    <div className="relative h-full">
                      {/* Complex layered backgrounds */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-50/90 to-blue-50/80 rounded-[2rem] blur-sm group-hover:blur-md transition-all duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-purple-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-purple-400/20 rounded-[2.2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                      
                      <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/60 cursor-pointer h-full group-hover:bg-white/85 overflow-hidden">
                        
                        {/* Animated background pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl animate-morph"></div>
                        </div>

                        {/* Enhanced floating icon */}
                        <div className="relative mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative overflow-hidden">
                            <IconComponent className="h-10 w-10 text-white drop-shadow-lg relative z-10" />
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            {/* Particle effects */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                              {[...Array(6)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-1 h-1 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"
                                  style={{
                                    left: `${15 + i * 12}%`,
                                    top: `${20 + (i % 2) * 40}%`,
                                    animationDelay: `${i * 0.3}s`
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/50 to-purple-400/40 rounded-3xl blur-xl animate-pulse-glow group-hover:scale-125 transition-all duration-700"></div>
                        </div>
                        
                        <h3 className="text-2xl font-black mb-6 group-hover:scale-105 transition-transform duration-500">
                          <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-purple-600">
                            {service.title}
                          </span>
                        </h3>
                        
                        <p className="text-gray-600/95 mb-8 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-500">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-4 group/item transform hover:translate-x-2 transition-transform duration-300">
                              <div className="relative">
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full shadow-lg relative">
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm animate-pulse opacity-60"></div>
                                </div>
                              </div>
                              <span className="text-gray-700/95 font-medium text-base group-hover/item:text-gray-900 transition-colors duration-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Advanced hover effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-purple-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-1/2 -translate-y-1/2 animate-morph-slow"></div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/15 rounded-full blur-3xl animate-float-gentle"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/15 rounded-full blur-3xl animate-float-reverse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Why Choose Our
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-text-shimmer">
                  SEO Services?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto">
                We understand the unique challenges of ranking in the competitive Indian digital landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: Globe,
                  title: 'India-Focused Strategy',
                  description: 'Specialized approach for Indian market dynamics, local search behavior, and regional competition patterns.'
                },
                {
                  icon: BarChart3,
                  title: 'Proven Results',
                  description: 'Track record of helping 500+ Indian businesses achieve top rankings and increase organic traffic by 300%+'
                },
                {
                  icon: Target,
                  title: 'ROI-Driven Approach',
                  description: 'Focus on keywords and strategies that drive actual business growth, not just vanity metrics.'
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="group transform hover:scale-105 transition-all duration-700">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-cyan-500/5 to-blue-500/10 rounded-3xl blur-sm group-hover:blur-md transition-all duration-700"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-blue-400/30 to-purple-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                      
                      <div className="relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/20 text-center group-hover:bg-white/15 overflow-hidden">
                        
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl animate-morph"></div>
                        </div>

                        <div className="relative mb-8 inline-block">
                          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 mx-auto relative overflow-hidden">
                            <IconComponent className="h-10 w-10 text-white drop-shadow-lg relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-blue-400/50 to-purple-400/40 rounded-3xl blur-xl animate-pulse-glow group-hover:scale-125 transition-all duration-700"></div>
                        </div>
                        
                        <h3 className="text-2xl font-black text-white mb-6 group-hover:scale-105 transition-transform duration-500">
                          <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300">
                            {benefit.title}
                          </span>
                        </h3>
                        
                        <p className="text-blue-100/90 leading-relaxed text-lg group-hover:text-blue-50 transition-colors duration-500">
                          {benefit.description}
                        </p>

                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/10 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/80 to-cyan-50/90 backdrop-blur-sm"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  Our Proven
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-text-shimmer">
                  SEO Process
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600/90 max-w-3xl mx-auto">
                A systematic approach to get your website ranking on Google's first page
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'SEO Audit', description: 'Comprehensive analysis of your current website performance and competition' },
                { step: '02', title: 'Strategy Planning', description: 'Custom SEO roadmap based on your business goals and target keywords' },
                { step: '03', title: 'Implementation', description: 'Execute technical fixes, content optimization, and link building campaigns' },
                { step: '04', title: 'Monitor & Improve', description: 'Track rankings, analyze performance, and continuously optimize for better results' }
              ].map((process, index) => (
                <div key={index} className="group relative transform hover:scale-105 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-50/90 to-blue-50/80 rounded-3xl blur-sm group-hover:blur-md transition-all duration-700"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-purple-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                  
                  <div className="relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/60 text-center group-hover:bg-white/85 group-hover:scale-105 overflow-hidden">
                    
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl animate-morph"></div>
                    </div>

                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto text-white font-black text-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative overflow-hidden">
                        {process.step}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/50 to-purple-400/40 rounded-3xl blur-xl animate-pulse-glow group-hover:scale-125 transition-all duration-700"></div>
                    </div>
                    
                    <h3 className="text-xl font-black mb-4 group-hover:scale-105 transition-transform duration-500">
                      <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-purple-600">
                        {process.title}
                      </span>
                    </h3>
                    
                    <p className="text-gray-600/95 leading-relaxed group-hover:text-gray-700 transition-colors duration-500 font-medium">
                      {process.description}
                    </p>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-blue-900/95 to-indigo-900/98 backdrop-blur-sm"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform skew-y-2"></div>
            <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-gradient-to-b from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-t from-purple-400/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-float-gentle"></div>
          </div>

{/* Floating Elements */}
<div className="absolute inset-0 overflow-hidden">
  {/* Background overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm"></div>
  
  {/* Actual floating particles */}
  {[...Array(15)].map((_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float-particle relative z-10"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${20 + Math.random() * 15}s`
      }}
    ></div>
  ))}
</div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl animate-text-glow">
                Ready to Dominate
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-text-shimmer">
                Google Search Results?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Get a free SEO audit and discover how we can increase your website's visibility, 
              drive more qualified traffic, and grow your business online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/919830022167?text=Hi! I want to improve my website's SEO and Google rankings. Please share your SEO service details and pricing."
                className="group relative inline-block transform hover:scale-105 transition-all duration-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100 animate-pulse-glow"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-teal-500/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 animate-morph"></div>
                
                <div className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-10 py-5 rounded-full font-bold text-xl border border-green-400/30 shadow-2xl backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10">Start Your Free SEO Audit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                  {/* Enhanced sparkle effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"
                        style={{
                          left: `${8 + i * 7}%`,
                          top: `${20 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.15}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </a>
              
              <a
                href="tel:+919830022167"
                className="group relative inline-block transform hover:scale-105 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full font-bold text-xl border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-500 overflow-hidden">
                  <span className="relative z-10">Call Now: +91 9830022167</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-cyan-400/10 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Advanced CSS Animations */}
      <style >{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(1deg) scale(1.05); }
          66% { transform: translateY(10px) rotate(-1deg) scale(0.95); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        
        @keyframes float-diagonal {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(-10px, -15px) rotate(1deg); }
          75% { transform: translate(10px, 15px) rotate(-1deg); }
        }
        
        @keyframes float-circular {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(15px, -10px) rotate(90deg); }
          50% { transform: translate(0px, -20px) rotate(180deg); }
          75% { transform: translate(-15px, -10px) rotate(270deg); }
          100% { transform: translate(0px, 0px) rotate(360deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(100vh) translateX(0px) scale(0); opacity: 0; }
          10% { opacity: 1; scale: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px) scale(0); opacity: 0; }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 40% 30% 60%; }
        }
        
        @keyframes morph-slow {
          0%, 100% { border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%; transform: scale(1); }
          50% { border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%; transform: scale(1.1); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes neural-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
          50% { text-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { opacity: 0; transform: translateX(0); }
          20% { opacity: 1; transform: translateX(-2px); }
          40% { opacity: 1; transform: translateX(2px); }
          60% { opacity: 0; transform: translateX(0); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { opacity: 0; transform: translateX(0); }
          30% { opacity: 1; transform: translateX(2px); }
          50% { opacity: 1; transform: translateX(-2px); }
          70% { opacity: 0; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 6s ease-in-out infinite; }
        .animate-float-diagonal { animation: float-diagonal 10s ease-in-out infinite; }
        .animate-float-circular { animation: float-circular 12s linear infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-float-particle { animation: float-particle linear infinite; }
        .animate-morph { animation: morph 6s ease-in-out infinite; }
        .animate-morph-slow { animation: morph-slow 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-neural-pulse { animation: neural-pulse 4s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-text-shimmer { 
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 1.5s ease-in-out infinite; }
        .animate-glitch-1 { animation: glitch-1 0.3s ease-in-out infinite; }
        .animate-glitch-2 { animation: glitch-2 0.3s ease-in-out infinite 0.1s; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
    </div>
  );
};

export default SEOServicePage;