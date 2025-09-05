import React from 'react';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Tripura Handicrafts Online Store',
      category: 'E-commerce',
      client: 'Local Artisan Cooperative',
      description: 'Complete e-commerce solution for traditional Tripuri handicrafts with integrated payment gateway and inventory management.',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        '300% increase in online sales',
        '150+ products listed',
        'Nationwide shipping enabled',
        '4.8/5 customer rating'
      ],
      services: ['Web Development', 'SEO', 'Payment Integration'],
      technologies: ['React', 'Node.js', 'Razorpay', 'MongoDB']
    },
    {
      id: 2,
      title: 'Northeast Tourism Website',
      category: 'Travel & Tourism',
      client: 'Travel Agency, Guwahati',
      description: 'Responsive travel website showcasing Northeast India destinations with booking system and tour packages.',
      image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        '250% increase in bookings',
        '500+ daily visitors',
        'Mobile traffic up 400%',
        'Featured in travel blogs'
      ],
      services: ['Web Development', 'SEO', 'Content Marketing'],
      technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap']
    },
    {
      id: 3,
      title: 'Educational Institute Digital Marketing',
      category: 'Social Media Marketing',
      client: 'Coaching Institute, Agartala',
      description: 'Complete social media marketing campaign to increase student enrollments and brand awareness.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        '400% increase in inquiries',
        '50K+ social media reach',
        '200+ new enrollments',
        '5X return on ad spend'
      ],
      services: ['Social Media Marketing', 'Content Creation', 'Facebook Ads'],
      technologies: ['Facebook Business', 'Instagram', 'Canva', 'Analytics']
    },
    {
      id: 4,
      title: 'Restaurant Chain SEO Success',
      category: 'SEO',
      client: 'Multi-location Restaurant Chain',
      description: 'Local SEO optimization for restaurant chain across 5 cities in Northeast India.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        'Rank #1 for "best restaurant [city]"',
        '300% increase in foot traffic',
        '1000+ Google reviews',
        '80% increase in online orders'
      ],
      services: ['Local SEO', 'Google My Business', 'Review Management'],
      technologies: ['Google Analytics', 'Search Console', 'Local SEO Tools']
    },
    {
      id: 5,
      title: 'Healthcare Clinic Website',
      category: 'Healthcare',
      client: 'Multi-specialty Clinic, Silchar',
      description: 'Professional medical website with appointment booking, doctor profiles, and patient portal.',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        '200% increase in appointments',
        'Online booking system',
        'Patient portal active users: 500+',
        'Reduced phone call volume by 60%'
      ],
      services: ['Web Development', 'SEO', 'Online Booking System'],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      id: 6,
      title: 'Fashion Boutique Social Media',
      category: 'Fashion & Retail',
      client: 'Designer Boutique, Imphal',
      description: 'Instagram and Facebook marketing for traditional Northeast Indian fashion brand.',
      image: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        '10K+ Instagram followers',
        '500% increase in online sales',
        '50+ influencer collaborations',
        'Featured in fashion magazines'
      ],
      services: ['Social Media Marketing', 'Influencer Marketing', 'Content Creation'],
      technologies: ['Instagram', 'Facebook', 'Influencer Tools', 'Analytics']
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Kumar',
      business: 'Tripura Handicrafts',
      text: 'WebGrow360 transformed our small handicraft business into a thriving online store. Sales have tripled, and we now ship nationwide!',
      rating: 5
    },
    {
      name: 'Dr. Priya Sharma',
      business: 'Silchar Multi-specialty Clinic',
      text: 'The website and booking system they built has revolutionized how we manage appointments. Patients love the convenience.',
      rating: 5
    },
    {
      name: 'Ankit Travel Solutions',
      business: 'Northeast Tourism',
      text: 'Our bookings increased by 250% after WebGrow360 redesigned our website and improved our SEO. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="py-20 relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16 relative">
            {/* Liquid backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 rounded-[3rem] transform -rotate-2 scale-105 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/60 via-blue-50/60 to-indigo-50/60 rounded-[3rem] transform rotate-1 scale-110 blur-md"></div>
            
            <div className="relative z-10 py-16">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-pulse">
                Our Success Stories
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                See how we've helped Indian businesses across various industries achieve 
                remarkable growth through strategic digital marketing solutions.
              </p>
            </div>
          </div>

          {/* Liquid Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '250%', label: 'Average ROI Increase' },
              { value: '15+', label: 'Industries Served' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-2xl transform group-hover:scale-110 transition-transform duration-500 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200/30 to-pink-200/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 blur-sm"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Grid with Liquid Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="group relative">
                {/* Liquid background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-700 blur-md"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/15 via-blue-300/15 to-indigo-300/15 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700 blur-sm"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        {item.category}
                      </span>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.client}</p>
                    <p className="text-gray-700 mb-6">{item.description}</p>
                    
                    {/* Liquid Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="space-y-2">
                        {item.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3 group/result">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover/result:scale-125 transition-transform duration-300 shadow-lg"></div>
                            <span className="text-gray-700 group-hover/result:text-gray-900 transition-colors duration-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Liquid Services */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.services.map((service, serviceIndex) => (
                          <span key={serviceIndex} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200/50 hover:scale-105 hover:shadow-md transition-all duration-300">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Liquid Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300/50 hover:scale-105 hover:shadow-md transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Liquid Testimonials */}
        <section className="relative py-20 overflow-hidden">
          {/* Flowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-purple-50/90 to-pink-50/90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-700">
                Real feedback from businesses we've helped succeed online
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/60 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-sm"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 100}ms`}} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liquid Industries Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-700">
                Digital marketing expertise across diverse Indian business sectors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'E-commerce',
                'Healthcare',
                'Education',
                'Tourism',
                'Restaurant',
                'Real Estate',
                'Fashion',
                'Technology',
                'Manufacturing',
                'Consulting',
                'Retail',
                'Services'
              ].map((industry, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 blur-sm"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <div className="font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">{industry}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liquid CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated liquid background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/50 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-purple-500/50 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90 drop-shadow-md">
              Let's discuss how we can help your business achieve similar results. 
              Every success story starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/919830022167?text=Hi! I saw your portfolio and I'm impressed. I want to discuss how you can help my business achieve similar results."
                className="group relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Success Story</span>
                <ArrowRight className="h-5 w-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+919830022167"
                className="group relative overflow-hidden border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Call: +91 9830022167</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS for additional liquid effects */}
      <style >{`
        @keyframes liquidFlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .liquid-blob {
          animation: liquidFlow 6s ease-in-out infinite;
        }
        
        .liquid-blob:nth-child(2) {
          animation-delay: 2s;
        }
        
        .liquid-blob:nth-child(3) {
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;