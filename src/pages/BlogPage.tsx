import React from 'react';
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
    url: 'https://www.adroitte.in/blog/2025-digital-marketing-trends-in-india-how-they-benefit-global-clients/#:~:text=Discover%20how%20India%27s%202025%20digital%20marketing%20trends%E2%80%94AI%2C%20automation%2C,strategies%E2%80%94help%20global%20businesses%20scale%20efficiently%20and%20boost%20ROI.'
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
      url: 'https://blogs.webmarlins.com/top-21-local-seo-strategies-work-for-indian-businesses/'
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
      url: 'https://markzmania.com/how-to-create-social-media-marketing-strategy/'
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
      url: '/blog/ecommerce-website-must-haves-indian-customers'
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
      url: '/blog/google-ads-small-indian-businesses-guide'
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
      url: '/blog/whatsapp-business-marketing-india'
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
      url: '/blog/content-marketing-strategies-indian-b2b-companies'
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
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="py-20 relative">
        {/* Liquid Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16 relative">
            {/* Liquid backdrop layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/80 to-purple-50/80 rounded-[4rem] transform -rotate-1 scale-105 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-orange-50/60 via-pink-50/60 to-red-50/60 rounded-[4rem] transform rotate-2 scale-110 blur-md"></div>
            
            <div className="relative z-10 py-16">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-pulse">
                Digital Marketing Insights
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Expert tips, strategies, and insights to help Indian businesses thrive online. 
                Learn from our experience working with 100+ successful digital marketing campaigns.
              </p>
            </div>
          </div>

          {/* Liquid Featured Post */}
          <div className="relative group mb-16">
            {/* Flowing background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 via-pink-200/40 to-red-200/40 rounded-3xl transform group-hover:scale-105 transition-transform duration-700 blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-yellow-200/30 via-orange-200/30 to-red-200/30 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700 blur-sm"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      Featured
                    </span>
                    <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300/50">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span className="hover:text-blue-600 transition-colors duration-300">{featuredPost.readTime}</span>
                  </div>
                  <a
                    href={featuredPost.url}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Article <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                <div className="lg:order-first relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid with Liquid Sidebar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Liquid Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-8">
                {/* Liquid Categories */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-sm"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-xl">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group/item ${
                              category.active
                                ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-md transform scale-105'
                                : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:text-gray-900 hover:shadow-md hover:scale-105'
                            }`}
                          >
                            <span className="group-hover/item:translate-x-1 transition-transform duration-300">{category.name}</span>
                            <span className="text-sm bg-white/50 px-2 py-1 rounded-full">{category.count}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Liquid Newsletter Signup */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-purple-500/40 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-sm"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-3xl text-white shadow-2xl border border-white/20">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                      <p className="text-sm mb-4 opacity-90">
                        Get weekly digital marketing tips and insights delivered to your inbox.
                      </p>
                      <a
                        href="https://wa.me/919830022167?text=Hi! I want to subscribe to your digital marketing newsletter and tips."
                        className="bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-3 rounded-full font-medium text-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 block text-center border border-white/50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Subscribe via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Liquid Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={post.id} className="group relative">
                    {/* Liquid card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-3xl transform group-hover:scale-105 transition-transform duration-700 blur-md"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200/20 via-blue-200/20 to-indigo-200/20 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700 blur-sm"></div>
                    
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Tag className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-medium">{post.category}</span>
                        </div>
                        <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 line-clamp-2 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {post.title}
                        </h2>
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="hover:text-blue-600 transition-colors duration-300">{post.author}</span>
                            <span className="hover:text-blue-600 transition-colors duration-300">{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span className="hover:text-blue-600 transition-colors duration-300">{post.readTime}</span>
                        </div>
                        <a
                          href={post.url}
                          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group/link"
                          target={post.url.startsWith('http') ? "_blank" : "_self"}
                          rel={post.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          Read More <ArrowRight className="h-4 w-4 ml-2 text-blue-600 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Liquid CTA Section */}
        <section className="relative py-20 overflow-hidden mt-20">
          {/* Animated liquid background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500/40 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-purple-500/40 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-r from-cyan-500/30 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          {/* Floating liquid elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '5s'}}></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-2xl">
              Need Personalized Digital Marketing Advice?
            </h2>
            <p className="text-xl mb-8 text-white/90 drop-shadow-lg">
              While our blog provides great insights, every business is unique. 
              Get personalized strategies tailored to your specific needs.
            </p>
            <a
              href="https://wa.me/919830022167?text=Hi! I read your blog and would like personalized digital marketing advice for my business."
              className="group relative overflow-hidden bg-white/95 backdrop-blur-sm text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 inline-flex items-center border border-white/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Free Consultation</span>
              <ArrowRight className="h-5 w-5 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </section>
      </div>

      {/* Enhanced CSS for liquid effects */}
      <style >{`
        @keyframes liquidFlow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: translateY(-15px) rotate(5deg) scale(1.05); 
            border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%;
          }
          50% { 
            transform: translateY(-25px) rotate(0deg) scale(1.1); 
            border-radius: 70% 30% 40% 60% / 70% 40% 60% 30%;
          }
          75% { 
            transform: translateY(-15px) rotate(-5deg) scale(1.05); 
            border-radius: 30% 70% 60% 40% / 30% 60% 40% 70%;
          }
        }
        
        .liquid-blob {
          animation: liquidFlow 8s ease-in-out infinite;
        }
        
        .liquid-blob:nth-child(2) {
          animation-delay: -2s;
        }
        
        .liquid-blob:nth-child(3) {
          animation-delay: -4s;
        }
        
        .liquid-blob:nth-child(4) {
          animation-delay: -6s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(2deg); }
          66% { transform: translateY(-12px) rotate(-1deg); }
        }
        
        .floating {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;