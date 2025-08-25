import React from 'react';
import { Link } from 'react-router-dom';
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
      title: 'Branding & Design Services',
      description: 'Create a strong brand identity that stands out from competitors and resonates with your target audience.',
      features: [
        'Brand strategy & positioning',
        'Logo design & visual identity',
        'Product designing & packaging',
        'Brand guidelines development',
        'Marketing collateral design',
        'Brand consistency management'
      ],
      link: '/services/branding',
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
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to help Indian businesses 
            succeed online. From SEO to social media, we've got you covered.
          </p>
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
                  <div className={`w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={service.link}
                      className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      Learn More <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                    <a
                      href={`https://wa.me/919830022167?text=Hi! I'm interested in ${service.title} for my business. Please share more details and pricing.`}
                      className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-200 inline-flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>

                <div className={isEven ? '' : 'lg:col-start-1'}>
                  <div className="bg-gradient-to-br from-orange-50 to-green-50 p-8 rounded-2xl shadow-lg">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184325' : index === 1 ? '3184639' : index === 2 ? '3184428' : '3184291'
                      }/pexels-photo-${
                        index === 0 ? '3184325' : index === 1 ? '3184639' : index === 2 ? '3184428' : '3184291'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={`${service.title} illustration`}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete your digital marketing strategy with our supplementary services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Professional service tailored for Indian businesses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver exceptional results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your business, goals, and target audience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Custom digital marketing strategy tailored to your needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Execute the strategy with precision and attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600">Monitor, analyze, and continuously improve performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free Consultation
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;