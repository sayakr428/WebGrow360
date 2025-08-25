import React from 'react';
import { Search, Target, TrendingUp, MapPin, Globe, BarChart3 } from 'lucide-react';

const SEOServicePage = () => {
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  const benefits = [
    'Increase organic website traffic by 150-300%',
    'Improve search rankings for target keywords',
    'Generate more qualified leads from search',
    'Build brand authority and trust',
    'Achieve sustainable, long-term results',
    'Get detailed monthly performance reports'
  ];

  const process = [
    {
      step: 1,
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO performance'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Custom SEO strategy based on your business goals'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Execute on-page and technical optimizations'
    },
    {
      step: 4,
      title: 'Content Creation',
      description: 'Develop SEO-optimized content for your audience'
    },
    {
      step: 5,
      title: 'Link Building',
      description: 'Build high-quality backlinks to boost authority'
    },
    {
      step: 6,
      title: 'Monitor & Optimize',
      description: 'Track performance and continuously improve results'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SEO Services for Indian Businesses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Boost your website's visibility on Google and drive more organic traffic to your business. 
              Our SEO strategies are specifically designed for the Indian market and local competition.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/919830022167?text=Hi! I want to improve my website's SEO and Google rankings. Please share your SEO service details and pricing."
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free SEO Analysis
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
              Comprehensive SEO Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to dominate search results in your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Invest in SEO?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                SEO is one of the most cost-effective ways to attract customers who are 
                actively searching for your products or services. Here's what you can expect:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="SEO Results Dashboard - Analytics Growth"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Real Results</h3>
                <p className="text-gray-600">
                  Our SEO clients see an average of 250% increase in organic traffic 
                  within the first 6 months.
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
              Our SEO Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to improving your search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Focus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dominate Local Search in India
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Specialized local SEO strategies for Indian cities and regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">City-Specific SEO</h3>
              <p className="text-gray-600">Target customers in specific Indian cities with localized content and keywords.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google My Business</h3>
              <p className="text-gray-600">Optimize your GMB profile for maximum local visibility and customer engagement.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Rankings</h3>
              <p className="text-gray-600">Appear in the top 3 local search results for your industry in your city.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Search Rankings?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free SEO audit and discover how we can help your business 
            rank higher on Google and attract more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919830022167?text=Hi! I want a free SEO audit for my website. Please analyze my current SEO performance and share recommendations."
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free SEO Audit
            </a>
            <a
              href="tel:+919830022167"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Call Now: +91 9830022167
            </a>
          </div>
          <div className="mt-6 text-sm opacity-80">
            📈 Free audit includes keyword analysis, technical issues, and improvement recommendations
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServicePage;