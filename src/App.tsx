import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SEOServicePage from './pages/SEOServicePage';
import LocalSEO from './pages/Subservices/LocalSEO.tsx';
import TechnicalSEO from './pages/Subservices/TechnicalSEO.tsx';
import KeywordSEO from './pages/Subservices/KeywordSEO.tsx';  
import ContentSEO from './pages/Subservices/ContentSEO.tsx';
import WebDevServicePage from './pages/WebDevServicePage';
import WebDesign from './pages/Subservices/WebDesign.tsx';
import E_CommerceWebsite from './pages/Subservices/E_CommerceWebsite.tsx';  
import Performance_Optimization from './pages/Subservices/Performance_Optimization.tsx';
import SecurityMaintenance from './pages/Subservices/SecurityMaintenance.tsx';
import SocialMediaServicePage from './pages/SocialMediaServicePage.tsx';
import ContentCreation from './pages/Subservices/ContentCreation.tsx';
import SocialMediaAdd from './pages/Subservices/SocialMediaAdd.tsx';
import CommunityManagement from './pages/Subservices/CommunityManagement.tsx';
import GraphicDesignServicePage from './pages/GraphicDesignServicePage';
import BrandIdentity from './pages/Subservices/BrandIdentity.tsx';
import Marketingmaterial from './pages/Subservices/Marketingmaterial.tsx';
import Productdesign from './pages/Subservices/Productdesign.tsx';
import DigitalGraphics from './pages/Subservices/DigitalGraphics.tsx';
import VideoCreationServicePage from './pages/VideoCreationServicePage';
import PromotionalVideo from './pages/Subservices/PromotionalVideo.tsx';
import SocialMediaVideos from './pages/Subservices/SocialMediaVideos.tsx';
import VideoEditing from './pages/Subservices/VideoEditing.tsx';
import EventCoverage from './pages/Subservices/EventCoverage.tsx';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/seo" element={<SEOServicePage />} />
            <Route path="/services/Subservices/local-seo" element={<LocalSEO />} />
            <Route path="/services/Subservices/technical-seo" element={<TechnicalSEO />} />
            <Route path="/services/Subservices/keyword-research" element={<KeywordSEO />} />
            <Route path="/services/Subservices/content-optimization" element={<ContentSEO />} />
            <Route path="/services/web-development" element={<WebDevServicePage />} />
            <Route path="/services/Subservices/responsive-web-design" element={<WebDesign />} />
            <Route path="/services/Subservices/e-commerce-development" element={<E_CommerceWebsite />} />
            <Route path="/services/Subservices/performance-optimization" element={<Performance_Optimization />} />
            <Route path="/services/Subservices/security-maintenance" element={<SecurityMaintenance />} />
            <Route path="/services/graphic-design" element={<GraphicDesignServicePage />} />
            <Route path="/services/Subservices/branding" element={<BrandIdentity />} />
            <Route path="/services/Subservices/marketing-materials" element={<Marketingmaterial />} />
            <Route path="/services/Subservices/product-design" element={<Productdesign />} />
            <Route path="/services/Subservices/digital-graphics" element={<DigitalGraphics />} />
            <Route path="/services/video-creation" element={<VideoCreationServicePage />} />
            <Route path="/services/Subservices/promotional-videos" element={<PromotionalVideo />} />
            <Route path="/services/social-media-videos" element={<SocialMediaVideos />} />
            <Route path="/services/social-media" element={<SocialMediaServicePage />} />
            <Route path="/services/Subservices/social-media-videos" element={<SocialMediaAdd />} />
            <Route path="/services/Subservices/video-editing" element={<VideoEditing />} />
            <Route path="/services/Subservices/event-coverage" element={<EventCoverage />} />
            <Route path="/services/Subservices/community-management" element={<CommunityManagement />} />
            <Route path="/services/Subservices/content-creation" element={<ContentCreation />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;