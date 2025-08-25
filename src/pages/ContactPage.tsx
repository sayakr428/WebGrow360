import React, { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! My name is ${formData.name} and I run ${formData.business}. I'm interested in ${formData.service}. Here are my details:
    
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Please get back to me with more information.`;
    
    const whatsappUrl = `https://wa.me/919830022167?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'bhattacharjee631@gmail.com',
      description: 'Send us a detailed message',
      action: 'mailto:bhattacharjee631@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Agartala, Tripura (West)',
      description: 'Northeast India',
      action: '#',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '9 AM - 7 PM IST',
      description: 'Monday to Saturday',
      action: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to grow your business online? Contact us for a free consultation 
            and discover how we can help you achieve your digital marketing goals.
          </p>
        </div>

        {/* Quick WhatsApp CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center mb-16">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-lg mb-6 opacity-90">
            WhatsApp us now for instant response and free consultation
          </p>
          <a
            href="https://wa.me/919830022167?text=Hi! I need help with digital marketing for my business. Please share more details about your services."
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Now: +91 9830022167
          </a>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{method.value}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
                {method.action !== '#' && (
                  <a
                    href={method.action}
                    className="inline-block mt-3 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                    target={method.action.includes('wa.me') ? '_blank' : '_self'}
                    rel={method.action.includes('wa.me') ? 'noopener noreferrer' : ''}
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours. 
              All consultations are completely free.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Google Ads">Google Ads Management</option>
                  <option value="Complete Digital Marketing">Complete Digital Marketing</option>
                  <option value="Consultation">Free Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your business goals and how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                Send via WhatsApp <Send className="h-5 w-5 ml-2" />
              </button>

              <p className="text-gray-500 text-sm text-center">
                This form will open WhatsApp with your message pre-filled for instant communication.
              </p>
            </form>
          </div>

          {/* Map and Location Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            
            {/* Office Details */}
            <div className="bg-gradient-to-br from-orange-50 to-green-50 p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">WebGrow360 Digital Marketing</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Head Office</p>
                    <p className="text-gray-700">Agartala, Tripura (West), India</p>
                    <p className="text-gray-600 text-sm">Serving clients across Northeast India and nationally</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-700">Monday - Saturday: 9 AM - 7 PM IST</p>
                    <p className="text-gray-600 text-sm">Sunday: Emergency support only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">24/7 WhatsApp Support</p>
                    <p className="text-gray-700">+91 9830022167</p>
                    <p className="text-gray-600 text-sm">Instant response during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Primary Markets</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Agartala, Tripura</li>
                    <li>• Guwahati, Assam</li>
                    <li>• Imphal, Manipur</li>
                    <li>• Aizawl, Mizoram</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Extended Reach</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• All Northeast India</li>
                    <li>• Pan-India (Digital Services)</li>
                    <li>• Remote consultations</li>
                    <li>• Online project delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;