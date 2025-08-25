import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy we implement is designed to deliver measurable ROI for your business'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work as an extension of your team'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do'
    },
    {
      icon: Heart,
      title: 'Local Commitment',
      description: 'Dedicated to empowering businesses across Northeast India'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About WebGrow360
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of digital marketing experts based in Agartala, Tripura, 
            dedicated to helping Indian businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2019 in the heart of Agartala, Tripura, WebGrow360 began with a simple mission: 
                to bridge the digital divide for businesses in Northeast India. We saw countless talented 
                entrepreneurs with amazing products and services struggling to reach their audience online.
              </p>
              <p>
                What started as a small initiative to help local businesses has grown into a comprehensive 
                digital marketing agency serving clients across India. We've maintained our roots in 
                Northeast India while expanding our expertise to serve businesses nationwide.
              </p>
              <p>
                Our deep understanding of Indian business culture, combined with cutting-edge digital 
                marketing techniques, has helped over 100+ businesses achieve remarkable online growth. 
                From local startups to established enterprises, we've been the catalyst for their digital transformation.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-green-50 p-8 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team collaboration in Indian office setting"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower Indian businesses with world-class digital marketing solutions, 
                helping them compete and succeed in the global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and define our relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Digital marketing professionals with deep expertise in the Indian market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Digital Marketing Expert - Indian Professional"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arjun Bhattacharjee</h3>
              <p className="text-blue-600 font-semibold mb-3">Founder & Digital Strategist</p>
              <p className="text-gray-600">
                5+ years of experience helping Indian businesses grow online. 
                Expert in SEO, PPC, and digital strategy for local markets.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Web Developer - Indian Professional"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
              <p className="text-blue-600 font-semibold mb-3">Lead Web Developer</p>
              <p className="text-gray-600">
                Specialist in creating responsive, user-friendly websites 
                optimized for Indian users and payment gateways.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Social Media Manager - Indian Professional"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Das</h3>
              <p className="text-blue-600 font-semibold mb-3">Social Media Manager</p>
              <p className="text-gray-600">
                Expert in creating engaging content for Indian audiences 
                across Facebook, Instagram, and LinkedIn platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Businesses Trust WebGrow360
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Local Market Expertise</h3>
                    <p className="text-gray-600">Deep understanding of Indian consumer behavior, cultural nuances, and market dynamics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Proven Track Record</h3>
                    <p className="text-gray-600">100+ successful projects with measurable results and satisfied clients across India.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparent Communication</h3>
                    <p className="text-gray-600">Regular updates, detailed reports, and 24/7 WhatsApp support in Indian Standard Time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Affordable Excellence</h3>
                    <p className="text-gray-600">World-class services at prices that make sense for Indian businesses of all sizes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2019</div>
                <div className="text-gray-600">Founded in Agartala</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business achieve remarkable online growth. 
            Get in touch for a free consultation tailored to your specific needs.
          </p>
          <a
            href="https://wa.me/919830022167?text=Hi! I'd like to know more about WebGrow360 and how you can help my business grow online."
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;