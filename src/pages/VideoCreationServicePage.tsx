
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, Camera, Edit, Share2, Play, Film, Zap, Target, Users, Award } from 'lucide-react';

const VideoCreationServicePage = () => {
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

  const videoServices = [
    {
      icon: Camera,
      title: 'Promotional Videos',
      description: 'Engaging promotional videos that showcase your products and services',
      features: [
        'Product demonstration videos',
        'Company introduction videos',
        'Service explanation videos',
        'Customer testimonial videos'
      ],
      link: '/services/Subservices/promotional-videos'
    },
    {
      icon: Share2,
      title: 'Social Media Videos',
      description: 'Short-form videos optimized for social media platforms',
      features: [
        'Instagram Reels and Stories',
        'Facebook video ads',
        'LinkedIn business videos',
        'YouTube Shorts content'
      ],
      link: '/services/Subservices/social-media-videos'
    },
    {
      icon: Edit,
      title: 'Video Editing',
      description: 'Professional video editing and post-production services',
      features: [
        'Color correction and grading',
        'Audio enhancement',
        'Motion graphics and animations',
        'Subtitle and caption addition'
      ],
      link: '/services/Subservices/video-editing'
    },
    {
      icon: Film,
      title: 'Event Coverage',
      description: 'Professional video coverage for business events and launches',
      features: [
        'Product launch videos',
        'Corporate event coverage',
        'Conference and seminar recording',
        'Behind-the-scenes content'
      ],
      link: '/services/Subservices/event-coverage'
    }
  ];

  const benefits = [
    'Increase engagement by 300% with video content',
    'Improve brand recall and customer trust',
    'Boost social media reach and shares',
    'Higher conversion rates on landing pages',
    'Better SEO rankings with video content',
    'Professional brand image and credibility'
  ];

  const videoTypes = [
    { type: 'Explainer Videos', description: 'Simplify complex services for easy understanding' },
    { type: 'Product Demos', description: 'Showcase your products in action' },
    { type: 'Brand Stories', description: 'Tell your company story and values' },
    { type: 'Customer Testimonials', description: 'Build trust with authentic reviews' },
    { type: 'Educational Content', description: 'Share industry knowledge and tips' },
    { type: 'Event Highlights', description: 'Capture important business moments' }
  ];

  const process = [
    {
      step: 1,
      title: 'Planning & Scripting',
      description: 'Develop video concept, script, and storyboard'
    },
    {
      step: 2,
      title: 'Pre-Production',
      description: 'Location scouting, equipment setup, and scheduling'
    },
    {
      step: 3,
      title: 'Filming',
      description: 'Professional video shooting with high-quality equipment'
    },
    {
      step: 4,
      title: 'Post-Production',
      description: 'Video editing, color correction, and audio enhancement'
    },
    {
      step: 5,
      title: 'Delivery & Optimization',
      description: 'Final video delivery in multiple formats for different platforms'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Advanced Animated Background System */}
      <div className="fixed inset-0 -z-20">
        {/* Mesh Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950"></div>
        
        {/* Dynamic Floating Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 via-cyan-500/25 to-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 via-pink-500/20 to-rose-500/25 rounded-full blur-3xl animate-float-reverse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-400/20 via-blue-500/25 to-cyan-500/20 rounded-full blur-3xl animate-float-diagonal" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400/15 via-blue-500/20 to-violet-500/15 rounded-full blur-3xl animate-float-circular" style={{animationDelay: '1s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
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
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400/60 rounded-full animate-pulse"
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
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.01}px) translateY(${scrollY * 0.08}px)`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <g className="animate-neural-pulse">
            <path d="M100,200 Q300,100 500,200 T900,200" fill="none" stroke="url(#neuralGrad)" strokeWidth="1"/>
            <path d="M200,400 Q400,300 600,400 T1000,400" fill="none" stroke="url(#neuralGrad)" strokeWidth="1"/>
            <path d="M50,600 Q250,500 450,600 T850,600" fill="none" stroke="url(#neuralGrad)" strokeWidth="1"/>
            <circle cx="100" cy="200" r="4" fill="#3b82f6" opacity="0.8"/>
            <circle cx="500" cy="200" r="4" fill="#8b5cf6" opacity="0.8"/>
            <circle cx="900" cy="200" r="4" fill="#3b82f6" opacity="0.8"/>
          </g>
        </svg>
      </div>

      {/* Interactive Cursor Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-blue-400/50 mix-blend-difference transition-all duration-300"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`
        }}
      ></div>

      <div className="py-20 relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32">
          {/* Layered Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-y-2"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-t from-blue-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl animate-morph-slow"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-float-gentle"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle"
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
                <div className="w-24 h-24 bg-gradient-to-br from-white/5 via-blue-500/10 to-cyan-500/5 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/10 shadow-2xl animate-float-gentle">
                  <Video className="h-12 w-12 text-white drop-shadow-2xl" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-500/30 to-indigo-500/20 rounded-3xl blur-xl animate-pulse-glow"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-cyan-500/15 to-indigo-500/10 rounded-full blur-2xl animate-morph"></div>
              </div>
              
              {/* Enhanced Typography */}
              <h1 className="text-5xl md:text-7xl font-black mb-8 relative">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl animate-text-glow">
                  Video Creation Services
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent text-4xl md:text-6xl animate-text-shimmer">
                  for Indian Businesses
                </span>
                {/* Glitch Effect Lines */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 animate-glitch-1"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 animate-glitch-2"></div>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm mb-10 animate-fade-in-up">
                Bring your brand to life with compelling video content that engages Indian audiences. 
                From promotional videos to social media content, we create videos that drive results 
                and build strong connections with your customers.
              </p>
              
              {/* Enhanced CTA Button */}
              <div className="mt-12">
                <a
                  href="https://wa.me/919830022167?text=Hi! I need professional video creation services for my business. Please share your video portfolio and pricing."
                  className="group relative inline-block transform hover:scale-105 transition-all duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Multi-layer glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse-glow"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/50 via-cyan-500/50 to-indigo-500/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-40 animate-morph"></div>
                  
                  <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white px-10 py-5 rounded-full font-bold text-xl border border-blue-400/30 shadow-2xl backdrop-blur-sm">
                    <span className="relative z-10">Get Video Quote</span>
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

        {/* Enhanced Services Grid (Version 1 - as given) */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/80 backdrop-blur-sm"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  Video Production
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent animate-text-shimmer">
                  Services
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600/90 max-w-3xl mx-auto">
                Complete video solutions from concept to final delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {videoServices.map((service, index) => {
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
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-indigo-400/20 rounded-[2.2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                      
                      <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/60 group-hover:bg-white/85 overflow-hidden">
                    
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl animate-morph"></div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl mb-8">
                          <img
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Video Production Setup"
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                        
                        <div className="text-center relative">
                          <h3 className="text-3xl font-black mb-4 group-hover:scale-105 transition-transform duration-500">
                            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-indigo-600">
                              Professional Quality
                            </span>
                          </h3>
                          <p className="text-gray-600/95 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-500">
                            High-quality video production with professional equipment 
                            and experienced videographers.
                          </p>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid (Version 2 from dangling lines, completed & preserved) */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/80 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  Our Core
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent animate-text-shimmer">
                  Services
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600/90 max-w-3xl mx-auto">
                Pick a service to explore features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {videoServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={index}
                    to={service.link}
                    className="block transform transition-all duration-700 hover:scale-105 group"
                  >
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-50/90 to-blue-50/80 rounded-[2rem] blur-sm group-hover:blur-md transition-all duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-indigo-400/20 rounded-[2.2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

                      <div className="relative rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/60 cursor-pointer h-full group-hover:bg-white/85 overflow-hidden bg-white/70 backdrop-blur-xl p-10">
                        {/* Animated background pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl animate-morph"></div>
                        </div>

                        {/* Enhanced floating icon */}
                        <div className="relative mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative overflow-hidden">
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
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/50 to-indigo-400/40 rounded-3xl blur-xl animate-pulse-glow group-hover:scale-125 transition-all duration-700"></div>
                        </div>
                        
                        <h3 className="text-2xl font-black mb-6 group-hover:scale-105 transition-transform duration-500">
                          <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-indigo-600">
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
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full shadow-lg relative">
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
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-1/2 -translate-y-1/2 animate-morph-slow"></div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Video Types Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-500/15 rounded-full blur-3xl animate-float-gentle"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/15 rounded-full blur-3xl animate-float-reverse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Types of Videos
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent animate-text-shimmer">
                  We Create
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto">
                Diverse video content tailored for Indian business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTypes.map((video, index) => (
                <div key={index} className="group transform hover:scale-105 transition-all duration-700">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/10 rounded-3xl blur-sm group-hover:blur-md transition-all duration-700"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-indigo-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                    
                    <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/20 group-hover:bg-white/15 overflow-hidden border-l-4 border-l-blue-400">
                      
                      {/* Background pattern */}
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl animate-morph"></div>
                      </div>

                      <h3 className="text-lg font-black text-white mb-4 group-hover:scale-105 transition-transform duration-500">
                        <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-indigo-300">
                          {video.type}
                        </span>
                      </h3>
                      
                      <p className="text-blue-100/90 leading-relaxed text-sm group-hover:text-blue-50 transition-colors duration-500">
                        {video.description}
                      </p>

                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section (completed) */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/80 to-blue-50/90 backdrop-blur-sm"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="group transform hover:scale-105 transition-all duration-700">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-50/90 to-blue-50/80 rounded-3xl blur-sm group-hover:blur-md transition-all duration-700"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-indigo-400/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                  
                  <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/60 overflow-hidden">
                    <div className="relative overflow-hidden rounded-2xl mb-8">
                      <img
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Video marketing benefits"
                        className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                    </div>

                    <h3 className="text-3xl font-black mb-4 text-center">
                      <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                        Business Impact
                      </span>
                    </h3>
                    <p className="text-gray-700/95 leading-relaxed text-lg text-center">
                      Professionally crafted videos improve engagement, trust, and conversions across your funnels.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 border">
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">3x</div>
                        <div className="text-gray-700 mt-1 text-sm">More Engagement</div>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 border">
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">↑</div>
                        <div className="text-gray-700 mt-1 text-sm">Better SEO</div>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 border">
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">+CVR</div>
                        <div className="text-gray-700 mt-1 text-sm">Higher Conversions</div>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 border">
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Trust</div>
                        <div className="text-gray-700 mt-1 text-sm">Brand Credibility</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8">
                  <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                    Why Video Marketing
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent animate-text-shimmer">
                    Works
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-600/90 mb-8 leading-relaxed">
                  Video content is the most engaging form of digital media. 
                  Here's how professional videos can transform your business:
                </p>
                
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-6 group transform hover:translate-x-2 transition-all duration-500">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative overflow-hidden">
                          <span className="text-white text-sm font-bold relative z-10">✓</span>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/50 to-indigo-400/40 rounded-3xl blur-xl animate-pulse-glow group-hover:scale-125 transition-all duration-700"></div>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-gray-700/95 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-500 font-medium">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-500/15 rounded-full blur-3xl animate-float-gentle"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/15 rounded-full blur-3xl animate-float-reverse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Our Video Production
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent animate-text-shimmer">
                  Process
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto">
                Professional video creation from planning to final delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="group relative transform hover:scale-105 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br fromWHITE/10 via-blue-500/5 to-cyan-500/10 rounded-3xl blur-sm group-hover:blur-md transition-all duration-700"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-indigo-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                  
                  <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/20 text-center group-hover:bg-white/15 overflow-hidden">
                    
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl animate-morph"></div>
                    </div>

                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto text-white font-black text-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative overflow-hidden">
                        {item.step}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/50 to-indigo-400/40 rounded-3xl blur-xl animate-pulse-glow group-hover:scale-125 transition-all duration-700"></div>
                    </div>
                    
                    <h3 className="text-xl font-black text-white mb-4 group-hover:scale-105 transition-transform duration-500">
                      <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-indigo-300">
                        {item.title}
                      </span>
                    </h3>
                    
                    <p className="text-blue-100/90 leading-relaxed text-sm group-hover:text-blue-50 transition-colors duration-500 font-medium">
                      {item.description}
                    </p>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform skew-y-2"></div>
            <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-gradient-to-b from-blue-400/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-morph-slow"></div>
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
                className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float-particle relative z-10"
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
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl animate-text-glow">
                Ready to Create Compelling
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent animate-text-shimmer">
                Videos?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Let's discuss your video marketing goals and create content that 
              engages your audience and drives business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/919830022167?text=Hi! I want to create professional videos for my business marketing. Please share your video production services and pricing."
                className="group relative inline-block transform hover:scale-105 transition-all duration-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100 animate-pulse-glow"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/50 via-cyan-500/50 to-indigo-500/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 animate-morph"></div>
                
                <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white px-10 py-5 rounded-full font-bold text-xl border border-blue-400/30 shadow-2xl backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10">Get Video Quote</span>
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
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-indigo-400/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full font-bold text-xl border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-500 overflow-hidden">
                  <span className="relative z-10">Call: +91 9830022167</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-400/10 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                </div>
              </a>
            </div>
            
            <div className="mt-8 text-lg text-blue-200/80 backdrop-blur-sm">
              🎬 Free consultation includes video strategy discussion and project planning
            </div>
          </div>
        </section>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
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
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4); }
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

export default VideoCreationServicePage;
