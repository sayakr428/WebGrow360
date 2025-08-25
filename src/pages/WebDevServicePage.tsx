import React from 'react';
import { Globe, Smartphone, ShoppingCart, Zap, Shield, Palette } from 'lucide-react';

const WebDevServicePage = () => {
  const webServices = [
    {
      icon: Globe,
      title: 'Responsive Web Design',
      description: 'Mobile-first websites that look perfect on all devices',
      features: [
        'Mobile-optimized design',
        'Cross-browser compatibility',
        'Fast loading speeds',
        'SEO-friendly structure'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with Indian payment integrations',
      features: [
        'Razorpay & PayU integration',
        'Inventory management',
        'Order tracking system',
        'GST-compliant billing'
      ]
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for Indian internet speeds',
      features: [
        'Image compression',
        'CDN implementation',
        'Database optimization',
        'Caching strategies'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your website secure and up-to-date',
      features: [
        'SSL certificates',
        'Regular backups',
        'Security monitoring',
        'Software updates'
      ]
    }
  ];

  const technologies = [
    { name: 'HTML5/CSS3', icon: '🌐' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'WordPress', icon: '📝' },
    { name: 'PHP', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Fashion Store',
      category: 'E-commerce',
      description: 'Complete online fashion store with payment gateway integration',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Restaurant Website',
      category: 'Business Website',
      description: 'Responsive restaurant website with online ordering system',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Educational Platform',
      category: 'Web Application',
      description: 'Online learning platform with course management',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Website Development for Indian Businesses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Custom, responsive websites that convert visitors into customers. Built specifically 
              for the Indian market with local payment gateways, GST compliance, and mobile-first design.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/919830022167?text=Hi! I need a professional website for my business. Please share your web development services and pricing."
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Website Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete web solutions from design to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Modern, reliable technologies for robust web solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600">
              Websites we've built for Indian businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Web Development?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Smartphone className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mobile-First Design</h3>
                    <p className="text-gray-600">Optimized for Indian mobile users who make up 80% of internet traffic</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <ShoppingCart className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Indian Payment Gateways</h3>
                    <p className="text-gray-600">Seamless integration with Razorpay, PayU, and other popular Indian payment methods</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Zap className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Loading Speeds</h3>
                    <p className="text-gray-600">Optimized for Indian internet speeds with CDN and caching</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Palette className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Custom Design</h3>
                    <p className="text-gray-600">Unique designs that reflect your brand and appeal to Indian audiences</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Web Development Process"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Results</h3>
                <p className="text-gray-600">
                  Every website we build is designed to convert visitors into customers 
                  and help your business grow online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to launch, we ensure every step is perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Understanding your business needs and target audience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Creating wireframes and visual designs for approval</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Building your website with clean, efficient code</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote for your website project. We'll create a professional, 
            mobile-friendly website that helps your business succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919830022167?text=Hi! I want to discuss building a website for my business. Please share your development process, timeline, and pricing."
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Website Quote
            </a>
            <a
              href="tel:+919830022167"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Call: +91 9830022167
            </a>
          </div>
          <div className="mt-6 text-sm opacity-80">
            🚀 Free consultation includes project scope, timeline, and detailed quote
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevServicePage;