import React, { useEffect } from "react";

const TermsOfService = ({ onNavigateHome }) => {
  useEffect(() => {
    // Simple smooth scrolling for anchor links
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

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const handleBackToHome = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.back();
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

        body {
          font-family: "Poppins", sans-serif;
          scroll-behavior: smooth;
        }
        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .gradient-bg {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        }

        .terms-card {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .terms-card:hover {
          border-left-color: #8b5cf6;
          transform: translateX(4px);
        }

        .section-icon {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          margin-bottom: 16px;
        }

        .contact-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px -2px rgba(107, 70, 193, 0.5);
        }

        .highlight-box {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.1) 0%,
            rgba(236, 72, 153, 0.1) 100%
          );
          border: 2px solid rgba(139, 92, 246, 0.2);
        }

        .back-btn:hover {
          transform: translateX(-2px);
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-purple-600 text-2xl font-bold">
                  Chrono
                </span>
                <span className="ml-2 text-gray-500 text-sm hidden sm:block">
                  Terms of Service
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleBackToHome}
                className="back-btn text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium flex items-center transition-all duration-300"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="gradient-bg">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 floating-icon">
            <i className=" text-6xl text-white opacity-90">📋</i>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-2xl mx-auto">
            Understanding the terms and conditions for using Chrono extension.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg text-white">
            <i className="fas fa-calendar-alt mr-2"></i>
            <span className="font-medium">Last updated: June 2025</span>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="highlight-box rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Simple Terms{" "}
              <i className="fas fa-handshake text-blue-500 mr-2"></i>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              By using Chrono, you agree to use it{" "}
              <strong>responsibly and lawfully</strong>. We provide the tool{" "}
              <strong>"as is"</strong> to help you manage your time effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to <strong>Chrono</strong>, a Chrome extension that helps
              you stay focused with timers, reminders, and Pomodoro sessions.
              Please read these Terms of Service carefully before using the
              extension.
            </p>
          </div>

          {/* Section 1 */}
          <div className="terms-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              By installing and using Chrono, you agree to these Terms of
              Service.
            </p>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                If you do not agree with any part of these terms, please
                uninstall the extension.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="terms-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-user-check"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2. Use of the Extension
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Chrono is provided to help users manage their time. You agree to
              use it only for lawful purposes and in accordance with these
              terms.
            </p>
            <h4 className="font-semibold text-gray-900 mb-4">You may not:</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-times text-red-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  Attempt to reverse-engineer, decompile, or alter the code.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-times text-red-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  Use Chrono for any illegal or unauthorized activity.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-times text-red-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  Impersonate another user or misrepresent your identity.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="terms-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3. Privacy
            </h3>
            <div className="text-center py-6">
              <div className="text-4xl mb-4">🔒</div>
              <p className="text-lg text-gray-700">
                Chrono does <strong>not collect personal data</strong> or track
                users. Please refer to our Privacy Policy for full details.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="terms-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-copyright"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              4. Intellectual Property
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              All content, features, and code within Chrono are the property of
              its creator and are protected by copyright laws.
            </p>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                <i className="fas fa-info-circle mr-2"></i>
                You may not reproduce, modify, or distribute the extension
                without permission.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="terms-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              5. Limitation of Liability
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Chrono is provided <strong>"as is"</strong> without warranties of
              any kind.
            </p>
            <h4 className="font-semibold text-gray-900 mb-4">
              We are not responsible for:
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-exclamation text-yellow-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  Data loss due to browser crashes or updates.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-exclamation text-yellow-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  Missed reminders or time mismanagement caused by user
                  configuration.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-exclamation text-yellow-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  The lack of custom alarm or notification sounds, which is a
                  technical limitation. During development, attempts to
                  implement this required opening separate HTML pages for sound
                  playback, which negatively impacted user experience. As a
                  result, Chrono uses the default system notification sound to
                  maintain simplicity and usability.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="terms-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-ban"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              6. Termination
            </h3>
            <p className="text-lg text-gray-700">
              We reserve the right to disable or remove the extension from the
              Chrome Web Store at any time for any reason, including violation
              of these terms.
            </p>
          </div>

          {/* Section 7 */}
          <div className="terms-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-edit"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              7. Changes to These Terms
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              These terms may be updated from time to time.
            </p>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-800 font-medium">
                <i className="fas fa-sync-alt mr-2"></i>
                Continued use of Chrono after changes means you accept the
                revised terms.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="terms-card bg-white rounded-xl p-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Questions or concerns? Reach out:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                target="blank"
                href="mailto:salahshalapy999@gmail.com"
                className="contact-btn flex items-center justify-center px-6 py-4 text-white rounded-lg font-medium"
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Us
              </a>
              <a
                target="blank"
                href="https://chrono-eosin.vercel.app/"
                className="contact-btn flex items-center justify-center px-6 py-4 text-white rounded-lg font-medium"
              >
                <i className="fas fa-globe mr-2"></i>
                Visit Website
              </a>
              <a
                href="https://github.com/SalahShallapy/chrono-landingPage/issues"
                className="contact-btn flex items-center justify-center px-6 py-4 text-white rounded-lg font-medium"
              >
                <i className="fas fa-bug mr-2"></i>
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-purple-400 text-2xl font-bold">Chrono</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your time, your tempo — used responsibly.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/SalahShallapy"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                target="blank"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/salahshallapy/"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                target="blank"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:salahshalapy999@gmail.com"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                &copy; 2025 Chrono. Made with ♥ by{" "}
                <a
                  href="https://salahshalapy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-medium text-purple-500 relative px-1 transition-all duration-300 hover:underline"
                >
                  Salah Shalapy
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
