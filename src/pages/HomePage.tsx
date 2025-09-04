import React, { useState, useRef, useEffect } from 'react';
import { Search, Globe, Share2, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, Palette, Video } from 'lucide-react';

// Liquid Background Component
const LiquidBackground = ({ children, intensity = 1 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    canvas.width = width;
    canvas.height = height;

    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Create multiple liquid blobs
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createRadialGradient(
          width * (0.2 + i * 0.3) + Math.sin(time * 0.01 + i) * 50, 
          height * (0.3 + i * 0.2) + Math.cos(time * 0.015 + i) * 30, 
          10,
          width * (0.2 + i * 0.3), 
          height * (0.3 + i * 0.2), 
          100 + i * 50
        );
        
        const hue = (time * 0.3 + i * 120) % 360;
        gradient.addColorStop(0, 'hsla(' + hue + ', 70%, 60%, ' + (0.1 * intensity) + ')');
        gradient.addColorStop(0.5, 'hsla(' + (hue + 60) + ', 80%, 70%, ' + (0.05 * intensity) + ')');
        gradient.addColorStop(1, 'hsla(' + (hue + 120) + ', 60%, 50%, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
      
      time++;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);

  return (
    <div className="relative overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Enhanced Service Card with 3D hover effect
const EnhancedServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 10, y: y * -10 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleCardClick = () => {
    // Navigate to service-specific page
    window.location.href = service.link;
  };

  const IconComponent = service.icon;

  const transformStyle = 'perspective(1000px) rotateX(' + mousePos.y + 'deg) rotateY(' + mousePos.x + 'deg) translateZ(0)';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 border border-gray-200 cursor-pointer aspect-square hover:scale-105 active:scale-95"
      style={{
        transform: transformStyle
      }}
    >
      {/* Full coverage background image - very light */}
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-45" 
        />
        {/* Very light white overlay for ultra-light effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/60 to-white/65 group-hover:from-white/50 group-hover:via-white/55 group-hover:to-white/60 transition-all duration-500"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-gray-800">
        <div className="flex flex-col items-center text-center">
          <div className={'w-20 h-20 bg-gradient-to-r ' + service.color + ' rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg backdrop-blur-sm'}>
            <IconComponent className="h-10 w-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300 text-center">
            {service.title}
          </h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed text-center flex-grow">{service.description}</p>
        </div>
      </div>
      
      {/* Subtle ripple effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-green-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-green-400/10 transition-all duration-700" />
    </div>
  );
};

const HomePage = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your visibility on Google with our expert SEO strategies tailored for Indian businesses.',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/seo'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites that convert visitors into customers, built for the Indian market.',
      color: 'from-blue-600 to-blue-700',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/web-development'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and grow your brand on Facebook, Instagram, and LinkedIn.',
      color: 'from-blue-700 to-blue-800',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/social-media'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Professional graphic design services for logos, branding, and marketing materials.',
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/graphic-design'
    },
    {
      icon: Video,
      title: 'Video Creation',
      description: 'Engaging video content for social media, websites, and marketing campaigns.',
      color: 'from-blue-600 to-blue-800',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/video-creation'
    },
    {
      icon: Video,
      title: 'Video Creation',
      description: 'Engaging video content for social media, websites, and marketing campaigns.',
      color: 'from-blue-600 to-blue-800',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/video-creation'
    }
  ];

  const whyChooseUs = [
    'Deep Local Expertise: We know the Northeast Indian market inside out, giving your business the edge it needs to thrive locally and nationally.',
    'Proven Digital Success: With over 5 years of experience, we have delivered real results for 100+ Indian businesses.',
    'Trusted and Transparent: Our GST-compliant billing and processes ensure complete trust and transparency.',
    'Always There for You: 24/7 WhatsApp support during IST hours means your questions get answered anytime.',
    'Affordable Solutions: Tailored pricing designed especially for Indian MSMEs, making growth accessible for all.'
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Electronics, Guwahati',
      rating: 5,
      text: 'WebGrow360 helped us increase our online sales by 300% within 6 months. Their understanding of the Northeast Indian market is exceptional.',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQGl_1NBr5IZxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516347451271?e=1759363200&v=beta&t=HDKE4xUG_zF5cWWiZhMjbEVjLy_lRyeiMpSSscJLGa4'
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Textiles, Silchar',
      rating: 5,
      text: 'The SEO services provided by WebGrow360 got us ranking #1 for textiles in Assam. Our business inquiries doubled!',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQHdtATtbJqjgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591284019845?e=1759363200&v=beta&t=4VVpSzX592nM9LvxnduuJEGqpjr6xy6g7mQz6y31pgY'
    },
    {
      name: 'Ankit Das',
      business: 'Das Consulting, Agartala',
      rating: 5,
      text: 'Professional, reliable, and results-driven. They understand the local business culture and deliver exactly what they promise.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHYfas8x13pMg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724867522763?e=1759363200&v=beta&t=jWc1v22R5NJfrz2T_RhA2jwMlM8l5yQFZtNmPkqbFH0'
    }
  ];

  const createStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
      );
    }
    return stars;
  };

  return (
    <div>
      {/* Hero Section with Liquid Background */}
      <LiquidBackground intensity={0.8}>
        <section className="relative bg-gradient-to-br from-blue-900 via-green-800 to-blue-800 py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Digital Marketing Background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-green-800/70 to-blue-800/80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-green-500/20 backdrop-blur-sm rounded-full p-4 group hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-12 w-12 text-green-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Want to scale</span>
                <span className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse"> your Indian</span>
                <span className="text-white"> business?</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We provide advanced digital marketing services across social media, websites, web development, SEO, email marketing, event marketing, and PPC to help Indian businesses grow online effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/919830022167?text=Hi! I want a free digital marketing consultation for my business. Please share more details."
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button
                  onClick={() => window.location.href = '/portfolio'}
                  className="border-2 border-green-300 text-green-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-300 hover:text-green-900 hover:shadow-[0_0_20px_rgba(134,239,172,0.5)] transition-all duration-300 backdrop-blur-sm"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Services Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
              What we Offer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed specifically for Indian businesses 
              looking to dominate their local and national markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <EnhancedServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Enhanced Stats */}
      <LiquidBackground intensity={0.4}>
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6 relative group">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Team collaboration" 
                    className="w-full h-64 object-cover rounded-3xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-6">
                  Why People Choose WebGrow360?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  At WebGrow360, we understand the unique challenges and opportunities in the Indian digital landscape. As a trusted digital marketing agency in Agartala and Tripura, we combine global best practices with local market insights to deliver measurable results. From SEO in Agartala and Local SEO services for businesses in Tripura, to social media marketing and PPC campaigns across India, our strategies are designed to help your business stand out online. Whether you are looking for affordable digital marketing services in Agartala or a full-service SEO company in India, our expert team ensures sustainable growth and long-term success.
                </p>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="https://wa.me/919830022167?text=Hi! I want to know more about your digital marketing services. Please share your portfolio and pricing."
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:scale-105 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Your Growth Journey
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, number: '100+', text: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
                  { icon: Award, number: '5+', text: 'Years Experience', color: 'from-green-500 to-green-600' },
                  { icon: TrendingUp, number: '250%', text: 'Avg. ROI Increase', color: 'from-green-500 to-blue-500' },
                  { icon: Globe, number: '24/7', text: 'WhatsApp Support', color: 'from-blue-500 to-green-500' },
                  { icon: Award, number: 'Flexible', text: 'Trustworthy', color: 'from-green-500 to-green-600' },
                  { icon: Globe, number: 'Affordable', text: 'Effective', color: 'from-blue-500 to-blue-600' }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  const bgClass = 'bg-gradient-to-br ' + stat.color + ' p-6 rounded-3xl shadow-xl text-center text-white transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group relative overflow-hidden';
                  return (
                    <div key={index} className={bgClass}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <IconComponent className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold mb-2 relative z-10">{stat.number}</div>
                      <div className="text-blue-100 relative z-10">{stat.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Testimonials Section with Liquid Effects */}
      <LiquidBackground intensity={0.6}>
        <section className="py-20 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What our existing people are saying?
              </h2>
              <p className="text-xl text-blue-100">
                Real results from real businesses across Northeast India and beyond
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  {/* Liquid ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-green-400/0 group-hover:from-blue-400/30 group-hover:via-purple-400/30 group-hover:to-green-400/30 transition-all duration-700 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-green-300 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="flex">
                        {createStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 italic">{testimonial.text}</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-blue-200 text-sm">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Success Stories with Enhanced Effects */}
      <LiquidBackground intensity={0.3}>
        <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
                Our Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Visual proof of our digital marketing success across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'E-commerce Growth', desc: '300% sales increase for online stores' },
                { img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Local SEO', desc: 'Top rankings for local businesses' },
                { img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Social Media', desc: '10K+ followers gained monthly' },
                { img: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Web Development', desc: 'Mobile-first responsive websites' }
              ].map((story, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group relative overflow-hidden">
                  {/* Liquid glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-green-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-green-400/20 transition-all duration-700 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <img 
                      src={story.img}
                      alt={story.title}
                      className="w-full h-32 object-cover rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500"
                    />
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">{story.title}</h3>
                    <p className="text-gray-600 text-sm">{story.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* CTA Section with Enhanced Effects */}
      <LiquidBackground intensity={0.8}>
        <section className="relative py-20 bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Digital Growth" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-green-600/90 to-blue-800/90"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to upscale your online store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 100+ successful Indian businesses who trusted WebGrow360 to boost their 
              online presence and increase their revenue. Get your free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919830022167?text=Hi! I want to get started with digital marketing for my business. Please send me your service details and pricing."
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-300 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Now - It's Free!
              </a>
              <button
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-sm"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </LiquidBackground>
    </div>
  );
};

export default HomePage;