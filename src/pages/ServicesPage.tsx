import React from 'react';
import { Search, Globe, Share2, ArrowRight, CheckCircle, Palette } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization to boost your visibility on Google and drive organic traffic.',
      features: [
        'Local SEO for Indian cities',
        'Keyword research & optimization',
        'Technical SEO audits',
        'Google My Business optimization',
        'Content optimization',
        'Link building strategies'
      ],
      link: '/services/seo',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites that convert visitors into customers, built specifically for Indian businesses.',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Custom web applications',
        'Indian payment gateway integration',
        'Mobile optimization',
        'Performance optimization'
      ],
      link: '/services/web-development',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and grow your brand presence across major social media platforms.',
      features: [
        'Facebook & Instagram marketing',
        'LinkedIn business development',
        'Content creation & management',
        'Social media advertising',
        'Influencer collaborations',
        'Community management'
      ],
      link: '/services/social-media',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Create a strong brand identity that stands out from competitors and resonates with your target audience.',
      features: [
        'Brand strategy & positioning',
        'Logo design & visual identity',
        'Product designing & packaging',
        'Brand guidelines development',
        'Marketing collateral design',
        'Brand consistency management'
      ],
      link: '/services/graphic-design',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Video Creation',
      description: 'Create a strong brand identity that stands out from competitors and resonates with your target audience.',
      features: [
        'Brand strategy & positioning',
        'Logo design & visual identity',
        'Product designing & packaging',
        'Brand guidelines development',
        'Marketing collateral design',
        'Brand consistency management'
      ],
      link: '/services/video-creation',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const additionalServices = [
    'Google Ads Management',
    'Content Marketing',
    'Email Marketing',
    'Conversion Rate Optimization',
    'Analytics & Reporting',
    'Digital Strategy Consulting'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Liquid Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-2/3 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <div className="py-20 relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 animate-pulse">
                Our Digital Marketing Services
              </h1>
              <p className="text-xl text-gray-700 max-w-3x1 mx-auto leading-relaxed">
                Comprehensive digital marketing solutions designed to help Indian businesses 
                succeed online. From SEO to social media, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:bg-white/30 transition-all duration-500">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">{service.title}</h2>
                      <p className="text-xl text-gray-700 mb-8">{service.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 p-3 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 drop-shadow-lg" />
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={service.link}
                          className="backdrop-blur-xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700/80 hover:to-purple-700/80 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group"
                        >
                          Learn More <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a
                          href={`https://wa.me/919830022167?text=Hi! I'm interested in ${service.title} for my business. Please share more details and pricing.`}
                          className="backdrop-blur-xl bg-white/20 border-2 border-white/40 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-white/30 hover:border-blue-500/50 hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={`https://images.pexels.com/photos/${
                            index === 0 ? '3184325' : index === 1 ? '3184639' : index === 2 ? '3184428' : index === 3 ? '3184291' : '3184325'
                          }/pexels-photo-${
                            index === 0 ? '3184325' : index === 1 ? '3184639' : index === 2 ? '3184428' : index === 3 ? '3184291' : '3184325'
                          }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                          alt={`${service.title} illustration`}
                          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl inline-block">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Additional Services
                </h2>
                <p className="text-xl text-gray-700">
                  Complete your digital marketing strategy with our supplementary services
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service}</h3>
                  <p className="text-gray-700 text-sm">Professional service tailored for Indian businesses</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl inline-block">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Our Process
                </h2>
                <p className="text-xl text-gray-700">
                  How we deliver exceptional results for your business
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Discovery</h3>
                <p className="text-gray-700">We understand your business, goals, and target audience</p>
              </div>

              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Strategy</h3>
                <p className="text-gray-700">Custom digital marketing strategy tailored to your needs</p>
              </div>

              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation</h3>
                <p className="text-gray-700">Execute the strategy with precision and attention to detail</p>
              </div>

              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Optimize</h3>
                <p className="text-gray-700">Monitor, analyze, and continuously improve performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/80 to-purple-600/80 border border-white/30 rounded-3xl p-12 shadow-2xl text-white hover:shadow-3xl transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss which services are right for your business. 
                Get a free consultation and custom strategy proposal today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919830022167?text=Hi! I want to discuss digital marketing services for my business. Please share your consultation process and pricing."
                  className="backdrop-blur-xl bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:text-blue-100 transition-colors duration-300">Get Free Consultation</span>
                </a>
                <a
                  to="/contact"
                  className="backdrop-blur-xl bg-white/10 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;