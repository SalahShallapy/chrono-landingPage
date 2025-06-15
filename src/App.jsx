import "./App.css";

import { useState, useEffect } from "react";

import PrivacyPolicy from "./components/resources/PrivacyPolicy";
import TermsOfService from "./components/resources/TermsOfService";
import UserGuide from "./components/resources/UserGuide";
import FAQ from "./components/resources/FAQ";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import FeatureTicker from "./components/FeatureTicker";
import InstallationSection from "./components/InstallationSection";
import Footer from "./components/Footer";

const ChronoLandingPage = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("page") || "home";
      setCurrentPage(page);
    };

    // Only add event listeners when on home page
    if (currentPage === "home") {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach((anchor) => {
        anchor.addEventListener("click", handleAnchorClick);
      });

      window.addEventListener("popstate", handlePopState);

      // Cleanup function
      return () => {
        anchorLinks.forEach((anchor) => {
          anchor.removeEventListener("click", handleAnchorClick);
        });
        window.removeEventListener("popstate", handlePopState);
      };
    } else {
      // Just handle popstate for other pages
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [currentPage]); // Add currentPage as dependency

  // Update URL when page changes
  useEffect(() => {
    if (currentPage === "home") {
      window.history.pushState({}, "", window.location.pathname);
    } else {
      window.history.pushState({}, "", `?page=${currentPage}`);
    }
  }, [currentPage]);

  // Render different pages based on currentPage state
  if (currentPage === "privacy") {
    return <PrivacyPolicy onNavigateHome={() => setCurrentPage("home")} />;
  }

  if (currentPage === "terms") {
    return <TermsOfService onNavigateHome={() => setCurrentPage("home")} />;
  }

  if (currentPage === "guide") {
    return <UserGuide onNavigateHome={() => setCurrentPage("home")} />;
  }

  if (currentPage === "faq") {
    return <FAQ onNavigateHome={() => setCurrentPage("home")} />;
  }

  // Default home page
  return (
    <div className="bg-gray-50">
      {/* Page Sections */}
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <AboutSection />
      <InstallationSection />
      <FeatureTicker />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default ChronoLandingPage;
