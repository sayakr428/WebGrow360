// src/subservicesConfig.tsx
import React from "react";

import LocalSEO from "./pages/Subservices/LocalSEO";
import TechnicalSEO from "./pages/Subservices/TechnicalSEO";
import KeywordSEO from "./pages/Subservices/KeywordSEO";
import ContentSEO from "./pages/Subservices/ContentSEO";
import WebDesign from "./pages/Subservices/WebDesign";
import E_CommerceWebsite from "./pages/Subservices/E_CommerceWebsite";
import Performance_Optimization from "./pages/Subservices/Performance_Optimization";
import SecurityMaintenance from "./pages/Subservices/SecurityMaintenance";
import BrandIdentity from "./pages/Subservices/BrandIdentity";
import Marketingmaterial from "./pages/Subservices/Marketingmaterial";
import Productdesign from "./pages/Subservices/Productdesign";
import DigitalGraphics from "./pages/Subservices/DigitalGraphics";
import PromotionalVideo from "./pages/Subservices/PromotionalVideo";
import SocialMediaVideos from "./pages/Subservices/SocialMediaVideos";
import SocialMediaAdd from "./pages/Subservices/SocialMediaAdd";
import VideoEditing from "./pages/Subservices/VideoEditing";
import EventCoverage from "./pages/Subservices/EventCoverage";
import CommunityManagement from "./pages/Subservices/CommunityManagement";
import ContentCreation from "./pages/Subservices/ContentCreation";

// 👇 type define kar diya for clarity
interface Subservice {
  path: string;
  element: JSX.Element;
}

const subservices: Subservice[] = [
  { path: "local-seo", element: <LocalSEO /> },
  { path: "technical-seo", element: <TechnicalSEO /> },
  { path: "keyword-research", element: <KeywordSEO /> },
  { path: "content-optimization", element: <ContentSEO /> },
  { path: "responsive-web-design", element: <WebDesign /> },
  { path: "e-commerce-development", element: <E_CommerceWebsite /> },
  { path: "performance-optimization", element: <Performance_Optimization /> },
  { path: "security-maintenance", element: <SecurityMaintenance /> },
  { path: "branding", element: <BrandIdentity /> },
  { path: "marketing-materials", element: <Marketingmaterial /> },
  { path: "product-design", element: <Productdesign /> },
  { path: "digital-graphics", element: <DigitalGraphics /> },
  { path: "promotional-videos", element: <PromotionalVideo /> },
  { path: "social-media-videos", element: <SocialMediaVideos /> },
  { path: "social-media-add", element: <SocialMediaAdd /> },
  { path: "video-editing", element: <VideoEditing /> },
  { path: "event-coverage", element: <EventCoverage /> },
  { path: "community-management", element: <CommunityManagement /> },
  { path: "content-creation", element: <ContentCreation /> },
];

export default subservices;
