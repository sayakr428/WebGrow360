import React from 'react';
import { Share2, Facebook, Instagram, Linkedin, Users, TrendingUp } from 'lucide-react';

const SocialMediaServicePage = () => {
  const platforms = [
    {
      icon: Facebook,
      name: 'Facebook Marketing',
      description: 'Reach millions of Indian users with targeted Facebook ads and engaging content',
      features: [
        'Facebook Page optimization',
        'Targeted advertising campaigns',
        'Community management',
        'Lead generation forms'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram Marketing',
      description: 'Build brand awareness with visually stunning Instagram content and stories',
      features: [
        'Content creation & design',
        'Instagram Stories & Reels',
        'Influencer collaborations',
        'Shopping integrations'
      ],
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn Marketing',
      description: 'Connect with professionals and B2B clients through strategic LinkedIn marketing',
      features: [
        'Company page optimization',
        'Professional content strategy',
        'B2B lead generation',
        'Industry networking'
      ],
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const services = [
    {
      icon: Users,
      title: 'Content Creation',
      description: 'Engaging posts, graphics, and videos tailored for Indian audiences'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Advertising',
      description: 'Targeted ads to reach your ideal customers on social platforms'
    },
    {
      icon: Share2,
      title: 'Community Management',
      description: 'Active engagement with your audience and reputation management'
    }
  ];

  const benefits = [
    'Increase brand awareness by 200-400%',
    'Generate qualified leads from social media',
    'Build a loyal community of followers',
    'Improve customer engagement and loyalty',
    'Drive website traffic and sales',
    'Get detailed performance analytics'
  ];

  const contentTypes = [
    { type: 'Educational Posts', description: 'Industry tips and valuable information' },
    { type: 'Product Showcases', description: 'Highlight your products and services' },
    { type: 'Behind-the-scenes', description: 'Show your business culture and team' },
    { type: 'Customer Stories', description: 'Share testimonials and success stories' },
    { type: 'Festive Content', description: 'Indian festivals and cultural celebrations' },
    { type: 'Interactive Content', description: 'Polls, quizzes, and engaging posts' }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Share2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Social Media Marketing for Indian Businesses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Build your brand, engage your audience, and drive sales through strategic 
              social media marketing. We create culturally relevant content that resonates 
              with Indian audiences across all platforms.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/919830022167?text=Hi! I want to grow my business on social media. Please share your social media marketing services and pricing."
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Social Media Strategy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Social Media Platforms We Master
            </h2>
            <p className="text-xl text-gray-600">
              Strategic marketing across the platforms that matter most to Indian businesses
            </p>
          </div>

          <div className="space-y-16">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                    <p className="text-xl text-gray-600 mb-8">{platform.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
                      <img
                        src={`https://images.pexels.com/photos/${
                          index === 0 ? '3184291' : index === 1 ? '3184339' : '3184292'
                        }/pexels-photo-${
                          index === 0 ? '3184291' : index === 1 ? '3184339' : '3184292'
                        }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                        alt={`${platform.name} marketing visualization`}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Social Media Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete social media management and growth strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content That Engages Indian Audiences
            </h2>
            <p className="text-xl text-gray-600">
              Culturally relevant content that resonates with your target market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-gray-900 mb-2">{content.type}</h3>
                <p className="text-gray-600 text-sm">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Social Media Marketing Works
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With 500+ million social media users in India, your customers are 
                already online. Here's what social media marketing can do for your business:
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Social Media Marketing Results"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Our clients see an average of 300% increase in social media 
                  engagement and 150% more leads within 3 months.
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
              Our Social Media Process
            </h2>
            <p className="text-xl text-gray-600">
              Strategic approach to building your social media presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Audit & Analysis</h3>
              <p className="text-gray-600">Analyze your current presence and competition</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy Planning</h3>
              <p className="text-gray-600">Create customized content and growth strategy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Content Creation</h3>
              <p className="text-gray-600">Design and create engaging content</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monitor & Optimize</h3>
              <p className="text-gray-600">Track performance and optimize for better results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a social media strategy that builds your brand, 
            engages your audience, and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919830022167?text=Hi! I want to improve my social media presence and marketing. Please share your social media strategy and pricing details."
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Social Media Strategy
            </a>
            <a
              href="tel:+919830022167"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Call: +91 9830022167
            </a>
          </div>
          <div className="mt-6 text-sm opacity-80">
            📱 Free consultation includes social media audit and custom strategy recommendations
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaServicePage;