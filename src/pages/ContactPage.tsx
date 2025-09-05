import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: ''
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi! My name is ${formData.name} and I run ${formData.business}. I'm interested in ${formData.service}. Here are my details:
    
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Please get back to me with more information.`;
    
    const whatsappUrl = `https://wa.me/919830022167?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp (Primary)',
      value: '+91 9830022167',
      description: 'Instant response via WhatsApp',
      action: 'https://wa.me/919830022167',
      color: 'from-emerald-400 via-green-500 to-teal-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'bhattacharjee631@gmail.com',
      description: 'Send us a detailed message',
      action: 'mailto:bhattacharjee631@gmail.com',
      color: 'from-blue-400 via-indigo-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Agartala, Tripura (West)',
      description: 'Northeast India',
      action: '#',
      color: 'from-orange-400 via-red-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '9 AM - 7 PM IST',
      description: 'Monday to Saturday',
      action: '#',
      color: 'from-purple-400 via-violet-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        
        {/* Liquid Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-32">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-blue-500/20"></path>
          </svg>
        </div>

        {/* Cursor Follow Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full filter blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative z-10 py-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to grow your business online? Contact us for a free consultation 
              and discover how we can help you achieve your digital marketing goals.
            </p>
          </div>

          {/* Quick WhatsApp CTA */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center backdrop-blur-xl">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-xl"></div>
              <div className="relative z-10">
                <MessageCircle className="h-16 w-16 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
                <p className="text-lg mb-6 opacity-90">
                  WhatsApp us now for instant response and free consultation
                </p>
                <a
                  href="https://wa.me/919830022167?text=Hi! I need help with digital marketing for my business. Please share more details about your services."
                  className="group bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-block border border-white/20 hover:shadow-2xl hover:shadow-green-500/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center justify-center">
                    WhatsApp Now: +91 9830022167
                    <MessageCircle className="h-5 w-5 ml-2 group-hover:animate-pulse" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-75 transition duration-500 blur rounded-3xl animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 text-center group-hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:animate-pulse`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-white font-medium mb-1">{method.value}</p>
                    <p className="text-gray-300 text-sm">{method.description}</p>
                    {method.action !== '#' && (
                      <a
                        href={method.action}
                        className="inline-block mt-3 text-orange-400 font-medium hover:text-orange-300 transition-all duration-300 hover:scale-110"
                        target={method.action.includes('wa.me') ? '_blank' : '_self'}
                        rel={method.action.includes('wa.me') ? 'noopener noreferrer' : ''}
                      >
                        Contact Now →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  All consultations are completely free.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20 focus:bg-white/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20 focus:bg-white/20"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20 focus:bg-white/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="business" className="block text-sm font-medium text-gray-200 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20 focus:bg-white/20"
                      placeholder="Your business name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white hover:bg-white/20 focus:bg-white/20"
                    >
                      <option value="" className="bg-slate-800 text-white">Select a service</option>
                      <option value="SEO Services" className="bg-slate-800 text-white">SEO Services</option>
                      <option value="Website Development" className="bg-slate-800 text-white">Website Development</option>
                      <option value="Social Media Marketing" className="bg-slate-800 text-white">Social Media Marketing</option>
                      <option value="Google Ads" className="bg-slate-800 text-white">Google Ads Management</option>
                      <option value="Complete Digital Marketing" className="bg-slate-800 text-white">Complete Digital Marketing</option>
                      <option value="Consultation" className="bg-slate-800 text-white">Free Consultation</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20 focus:bg-white/20 resize-none"
                      placeholder="Tell us about your business goals and how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center">
                      Send via WhatsApp <Send className="h-5 w-5 ml-2 group-hover:animate-pulse" />
                    </span>
                    
                    {/* Liquid ripple effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500 ease-out"></div>
                    </div>
                  </button>

                  <p className="text-gray-400 text-sm text-center">
                    This form will open WhatsApp with your message pre-filled for instant communication.
                  </p>
                </div>
              </div>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Our Location
                  </h2>
                  
                  {/* Office Details */}
                  <div className="bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-xl p-8 rounded-2xl border border-white/20 mb-8 hover:bg-white/20 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-4">WebGrow360 Digital Marketing</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 group">
                        <MapPin className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1 group-hover:animate-pulse" />
                        <div>
                          <p className="font-medium text-white">Head Office</p>
                          <p className="text-gray-200">Agartala, Tripura (West), India</p>
                          <p className="text-gray-300 text-sm">Serving clients across Northeast India and nationally</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 group">
                        <Clock className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1 group-hover:animate-spin" />
                        <div>
                          <p className="font-medium text-white">Business Hours</p>
                          <p className="text-gray-200">Monday - Saturday: 9 AM - 7 PM IST</p>
                          <p className="text-gray-300 text-sm">Sunday: Emergency support only</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 group">
                        <Phone className="h-6 w-6 text-green-400 flex-shrink-0 mt-1 group-hover:animate-pulse" />
                        <div>
                          <p className="font-medium text-white">24/7 WhatsApp Support</p>
                          <p className="text-gray-200">+91 9830022167</p>
                          <p className="text-gray-300 text-sm">Instant response during business hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Areas */}
                  <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-4">Our Service Areas</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Primary Markets</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li className="hover:text-blue-400 transition-colors duration-200">• Agartala, Tripura</li>
                          <li className="hover:text-blue-400 transition-colors duration-200">• Guwahati, Assam</li>
                          <li className="hover:text-blue-400 transition-colors duration-200">• Imphal, Manipur</li>
                          <li className="hover:text-blue-400 transition-colors duration-200">• Aizawl, Mizoram</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Extended Reach</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li className="hover:text-purple-400 transition-colors duration-200">• All Northeast India</li>
                          <li className="hover:text-purple-400 transition-colors duration-200">• Pan-India (Digital Services)</li>
                          <li className="hover:text-purple-400 transition-colors duration-200">• Remote consultations</li>
                          <li className="hover:text-purple-400 transition-colors duration-200">• Online project delivery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 mt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-xl"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is the typical response time for inquiries?",
                  a: "We respond to WhatsApp messages within minutes during business hours (9 AM - 7 PM IST). Email inquiries are answered within 2-4 hours on weekdays."
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes! We provide completely free digital marketing consultations to understand your business needs and recommend the best strategies for growth."
                },
                {
                  q: "Can you work with businesses outside Northeast India?",
                  a: "Absolutely! While we're based in Agartala, Tripura, we serve clients across India through remote consultations and digital project delivery."
                },
                {
                  q: "What are your payment terms?",
                  a: "We offer flexible payment terms with GST-compliant billing. Typically, we require 50% advance with the remaining balance due upon project completion."
                },
                {
                  q: "How long does it take to see results?",
                  a: "Results vary by service: SEO typically shows improvements in 3-6 months, social media marketing in 1-2 months, and website development projects are completed in 2-4 weeks."
                }
              ].map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                    <h3 className="font-semibold text-white mb-2 text-lg">{faq.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
      <div className="fixed top-3/4 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="fixed bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
      <div className="fixed top-1/2 right-10 w-5 h-5 bg-cyan-400 rounded-full animate-ping opacity-60 animation-delay-1000"></div>

      <style >{`
        @keyframes liquidFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default ContactPage;