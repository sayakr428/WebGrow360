import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SEOServicePage from "./pages/SEOServicePage";
import WebDevServicePage from "./pages/WebDevServicePage";
import SocialMediaServicePage from "./pages/SocialMediaServicePage";
import GraphicDesignServicePage from "./pages/GraphicDesignServicePage";
import VideoCreationServicePage from "./pages/VideoCreationServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

// ✅ Import subservicesConfig
import subservices from "./subservicesConfig";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/seo" element={<SEOServicePage />} />
            <Route path="/services/web-development" element={<WebDevServicePage />} />
            <Route path="/services/graphic-design" element={<GraphicDesignServicePage />} />
            <Route path="/services/video-creation" element={<VideoCreationServicePage />} />
            <Route path="/services/social-media" element={<SocialMediaServicePage />} />

            {/* ✅ Dynamic Subservices */}
            {subservices.map((service, index) => (
              <Route
                key={index}
                path={`/services/Subservices/${service.path}`}
                element={service.element}
              />
            ))}

            {/* Other pages */}
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
