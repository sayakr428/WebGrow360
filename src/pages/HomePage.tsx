import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Share2, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your visibility on Google with our expert SEO strategies tailored for Indian businesses.',
      link: '/services/seo',
      color: 'from-blue-500 to-green-500',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites that convert visitors into customers, built for the Indian market.',
      link: '/services/web-development',
      color: 'from-green-500 to-blue-500',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and grow your brand on Facebook, Instagram, and LinkedIn.',
      link: '/services/social-media',
      color: 'from-blue-600 to-green-400',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const whyChooseUs = [
    'Local expertise in Northeast India market',
    '5+ years of digital marketing experience',
    'Proven results for 100+ Indian businesses',
    'GST-compliant billing and processes',
    '24/7 WhatsApp support in IST',
    'Affordable pricing for Indian MSMEs'
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Electronics, Guwahati',
      rating: 5,
      text: 'WebGrow360 helped us increase our online sales by 300% within 6 months. Their understanding of the Northeast Indian market is exceptional.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Textiles, Silchar',
      rating: 5,
      text: 'The SEO services provided by WebGrow360 got us ranking #1 for "textiles in Assam". Our business inquiries doubled!',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Ankit Das',
      business: 'Das Consulting, Agartala',
      rating: 5,
      text: 'Professional, reliable, and results-driven. They understand the local business culture and deliver exactly what they promise.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
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
              <div className="bg-green-500/20 backdrop-blur-sm rounded-full p-4">
                <TrendingUp className="h-12 w-12 text-green-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Grow Your</span>
              <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent"> Indian Business</span>
              <span className="text-white"> Online</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Expert digital marketing services from Agartala, Tripura. We help Indian businesses 
              across Northeast India and beyond achieve remarkable online growth with SEO, 
              web development, and social media marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/919830022167?text=Hi! I want a free digital marketing consultation for my business. Please share more details."
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/portfolio"
                className="border-2 border-green-300 text-green-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-300 hover:text-green-900 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed specifically for Indian businesses 
              looking to dominate their local and national markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-green-100 overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                    <img src={service.image} alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-xl" />
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-green-600 transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                Why Indian Businesses Choose WebGrow360
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand the unique challenges and opportunities in the Indian digital landscape. 
                Our team combines global best practices with local market insights to deliver 
                exceptional results for your business.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/919830022167?text=Hi! I want to know more about your digital marketing services. Please share your portfolio and pricing."
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Growth Journey
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl shadow-xl text-center text-white transform hover:scale-105 transition-transform duration-300">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-3xl shadow-xl text-center text-white transform hover:scale-105 transition-transform duration-300">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-green-100">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-6 rounded-3xl shadow-xl text-center text-white transform hover:scale-105 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-2">250%</div>
                <div className="text-green-100">Avg. ROI Increase</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-6 rounded-3xl shadow-xl text-center text-white transform hover:scale-105 transition-transform duration-300">
                <Globe className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">WhatsApp Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Indian Clients Say
            </h2>
            <p className="text-xl text-blue-100">
              Real results from real businesses across Northeast India and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-green-300"
                  />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories with Images */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Visual proof of our digital marketing success across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="E-commerce Success"
                className="w-full h-32 object-cover rounded-2xl mb-4"
              />
              <h3 className="font-bold text-gray-900 mb-2">E-commerce Growth</h3>
              <p className="text-gray-600 text-sm">300% sales increase for online stores</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Local SEO Success"
                className="w-full h-32 object-cover rounded-2xl mb-4"
              />
              <h3 className="font-bold text-gray-900 mb-2">Local SEO</h3>
              <p className="text-gray-600 text-sm">Top rankings for local businesses</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Social Media Success"
                className="w-full h-32 object-cover rounded-2xl mb-4"
              />
              <h3 className="font-bold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 text-sm">10K+ followers gained monthly</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Web Development Success"
                className="w-full h-32 object-cover rounded-2xl mb-4"
              />
              <h3 className="font-bold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">Mobile-first responsive websites</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Transform Your Business Online?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 100+ successful Indian businesses who trusted WebGrow360 to boost their 
            online presence and increase their revenue. Get your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919830022167?text=Hi! I want to get started with digital marketing for my business. Please send me your service details and pricing."
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Now - It's Free!
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;