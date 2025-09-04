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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="py-20 relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 animate-pulse">
                About WebGrow360
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We are a passionate team of digital marketing experts based in Agartala, Tripura, 
                dedicated to helping Indian businesses thrive in the digital age.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
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
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration in Indian office setting"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To empower Indian businesses with world-class digital marketing solutions, 
                  helping them compete and succeed in the global marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl inline-block">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-700">
                  The principles that guide our work and define our relationships with clients
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index} 
                    className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
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
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl inline-block">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Meet Our Expert Team
                </h2>
                <p className="text-xl text-gray-700">
                  Digital marketing professionals with deep expertise in the Indian market
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                <a
                  href="https://www.linkedin.com/in/shushanta-bhattacharjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group-hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src=""
                    alt="Digital Marketing Expert - Indian Professional"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-2xl border-4 border-white/50"
                  />
                </a>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Shushanta Bhattacharjee</h3>
                <p className="text-blue-600 font-semibold mb-3">Founder & Digital Strategist</p>
                <p className="text-gray-700">
                  Expert in SEO, PPC, Sales and digital strategy for all kinds of markets.
                </p>
              </div>
              
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                <a
                  href="https://www.linkedin.com/in/sayak--roy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group-hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQF4p86VJjYTfg/profile-displayphoto-shrink_800_800/B56ZP_rzrEH0Ac-/0/1735161495103?e=1759363200&v=beta&t=9E0H_Q_VpDlilHBu3l9HfjVuKtX7BUOzDW13hDRm-LY"
                    alt="Lead Developer - Indian Professional"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-2xl border-4 border-white/50"
                  />
                </a>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sayak Roy</h3>
                <p className="text-blue-600 font-semibold mb-3">Lead Developer</p>
                <p className="text-gray-700">
                  Specialist in creating and maintaining responsive, user-friendly web applications.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                <a
                  href="https://www.linkedin.com/in/srijayandey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group-hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQGNOWkjTGVvoA/profile-displayphoto-crop_800_800/B56ZhxsZtoG4AI-/0/1754254123512?e=1759363200&v=beta&t=xp_z9tCRo2wVQtXL6UzWyB4JcJbn1Eb-LrOi0cYDzX8"
                    alt="Marketing Lead - Indian Professional"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-2xl border-4 border-white/50"
                  />
                </a>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Srijayan Dey</h3>
                <p className="text-blue-600 font-semibold mb-3">Marketing Lead</p>
                <p className="text-gray-700">
                  Expert in building product management roadmap and marketing across all platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                  Why Businesses Trust WebGrow360
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Local Market Expertise</h3>
                      <p className="text-gray-700">Deep understanding of Indian consumer behavior, cultural nuances, and market dynamics.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Proven Track Record</h3>
                      <p className="text-gray-700">100+ successful projects with measurable results and satisfied clients across India.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Transparent Communication</h3>
                      <p className="text-gray-700">Regular updates, detailed reports, and 24/7 WhatsApp support in Indian Standard Time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Affordable Excellence</h3>
                      <p className="text-gray-700">World-class services at prices that make sense for Indian businesses of all sizes.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2019</div>
                  <div className="text-gray-700 font-medium">Founded in Agartala</div>
                </div>
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-gray-700 font-medium">States Served</div>
                </div>
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-2xl text-center hover:shadow-3xl hover:bg-white/30 transition-all duration-500 hover:scale-105 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-gray-700 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/80 to-purple-600/80 border border-white/30 rounded-3xl p-12 shadow-2xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help your business achieve remarkable online growth. 
                Get in touch for a free consultation tailored to your specific needs.
              </p>
              <a
                href="https://wa.me/919830022167?text=Hi! I'd like to know more about WebGrow360 and how you can help my business grow online."
                className="backdrop-blur-xl bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover:text-blue-100 transition-colors duration-300">Start the Conversation</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;