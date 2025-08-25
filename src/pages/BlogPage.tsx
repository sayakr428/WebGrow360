import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'Digital Marketing Trends for Indian Businesses in 2025',
    excerpt: 'Discover the latest digital marketing trends that will shape how Indian businesses connect with customers in 2025. From AI-powered chatbots to regional language content.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Arjun Bhattacharjee',
    date: '2025-01-15',
    category: 'Digital Marketing',
    readTime: '8 min read',
    url: 'https://www.buzzsprout.com/blog?msclkid=d228d4beb8d3158469d2bc15ed0e8acd' // Added URL
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Local SEO Guide for Northeast Indian Businesses',
      excerpt: 'Step-by-step guide to dominating local search results in cities like Agartala, Guwahati, and Imphal. Learn how to optimize for regional searches.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Priya Sharma',
      date: '2025-01-10',
      category: 'SEO',
      readTime: '6 min read',
      url: '/blog/local-seo-guide-northeast-indian-businesses' // Added URL
    },
    {
      id: 3,
      title: 'Social Media Marketing During Indian Festivals',
      excerpt: 'How to create engaging social media campaigns during Diwali, Durga Puja, and regional festivals. Boost engagement with cultural content.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Rahul Das',
      date: '2025-01-05',
      category: 'Social Media',
      readTime: '5 min read',
      url: '/blog/social-media-marketing-indian-festivals' // Added URL
    },
    {
      id: 4,
      title: 'E-commerce Website Must-Haves for Indian Customers',
      excerpt: 'Essential features every Indian e-commerce website needs: payment gateways, GST integration, mobile optimization, and regional language support.',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Arjun Bhattacharjee',
      date: '2024-12-28',
      category: 'Web Development',
      readTime: '7 min read',
      url: '/blog/ecommerce-website-must-haves-indian-customers' // Added URL
    },
    {
      id: 5,
      title: 'Google Ads for Small Indian Businesses: Complete Guide',
      excerpt: 'Maximize your ROI with Google Ads strategies tailored for small Indian businesses. Learn budget optimization and targeting techniques.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Priya Sharma',
      date: '2024-12-22',
      category: 'Google Ads',
      readTime: '9 min read',
      url: '/blog/google-ads-small-indian-businesses-guide' // Added URL
    },
    {
      id: 6,
      title: 'WhatsApp Business Marketing in India',
      excerpt: 'Leverage WhatsApp Business for customer communication, support, and marketing. Best practices for Indian businesses.',
      image: 'https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Rahul Das',
      date: '2024-12-18',
      category: 'Digital Marketing',
      readTime: '4 min read',
      url: '/blog/whatsapp-business-marketing-india' // Added URL
    },
    {
      id: 7,
      title: 'Content Marketing Strategies for Indian B2B Companies',
      excerpt: 'Create compelling B2B content that resonates with Indian business decision-makers. Industry-specific content strategies that work.',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Arjun Bhattacharjee',
      date: '2024-12-15',
      category: 'Content Marketing',
      readTime: '6 min read',
      url: '/blog/content-marketing-strategies-indian-b2b-companies' // Added URL
    }
  ];

  const categories = [
    { name: 'All Posts', count: 7, active: true },
    { name: 'SEO', count: 2 },
    { name: 'Social Media', count: 2 },
    { name: 'Web Development', count: 1 },
    { name: 'Google Ads', count: 1 },
    { name: 'Digital Marketing', count: 3 },
    { name: 'Content Marketing', count: 1 }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital Marketing Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips, strategies, and insights to help Indian businesses thrive online. 
            Learn from our experience working with 100+ successful digital marketing campaigns.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl overflow-hidden shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <span>{featuredPost.readTime}</span>
              </div>
              {/* Updated Link with proper routing */}
              <Link
                to={featuredPost.url}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="lg:order-first">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              {/* Categories */}
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                          category.active
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-sm mb-4 opacity-90">
                  Get weekly digital marketing tips and insights delivered to your inbox.
                </p>
                <a
                  href="https://wa.me/919830022167?text=Hi! I want to subscribe to your digital marketing newsletter and tips."
                  className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-200 transform hover:scale-105 block text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="h-4 w-4 text-blue-500" />
                      <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    {/* Updated Link with proper routing */}
                    <Link
                      to={post.url}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Digital Marketing Advice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            While our blog provides great insights, every business is unique. 
            Get personalized strategies tailored to your specific needs.
          </p>
          <a
            href="https://wa.me/919830022167?text=Hi! I read your blog and would like personalized digital marketing advice for my business."
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;