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
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we've helped Indian businesses across various industries achieve 
            remarkable growth through strategic digital marketing solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">250%</div>
            <div className="text-gray-600">Average ROI Increase</div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.client}</p>
                <p className="text-gray-700 mb-6">{item.description}</p>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {item.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from businesses we've helped succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
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

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
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
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="font-semibold text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business achieve similar results. 
            Every success story starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919830022167?text=Hi! I saw your portfolio and I'm impressed. I want to discuss how you can help my business achieve similar results."
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Success Story <ArrowRight className="h-5 w-5 ml-2" />
            </a>
            <a
              href="tel:+919830022167"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center justify-center"
            >
              Call: +91 9830022167
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;