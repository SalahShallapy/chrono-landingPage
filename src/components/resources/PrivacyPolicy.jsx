import React, { useEffect } from "react";

const ChronoPrivacyPolicy = ({ onNavigateHome }) => {
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

        .gradient-bg {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        }

        .privacy-card {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .privacy-card:hover {
          border-left-color: #8b5cf6;
          transform: translateX(4px);
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
                  Privacy Policy
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

      {/* Rest of your Privacy Policy content remains the same */}
      {/* Header Section */}
      <div className="gradient-bg">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 floating-icon">
            <i className="fas text-6xl text-white opacity-90">🛡️</i>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how Chrono protects your data and
            respects your privacy.
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
              The Simple Truth{" "}
              <i className="fas fa-heart text-red-500 mr-2"></i>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chrono{" "}
              <strong>
                does not collect any personally identifiable information
              </strong>
              . All your data stays <strong>locally in your browser</strong> and
              is <strong>never sent to any servers</strong>.
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
              Thank you for using <strong>Chrono</strong> — your time management
              companion on Chrome. This privacy policy explains what data Chrono
              collects, how it is used, and your rights as a user.
            </p>
          </div>

          {/* Section 1 */}
          <div className="privacy-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1. What Information Does Chrono Collect?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Chrono{" "}
              <strong>
                does not collect any personally identifiable information
              </strong>
              .
            </p>
            <p className="text-gray-600 mb-4">
              However, to function properly, the extension uses the following
              local browser features:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-bell text-purple-600 text-xs"></i>
                </div>
                <div>
                  <strong className="text-gray-900">Alarms API:</strong>
                  <span className="text-gray-600 ml-1">
                    To schedule timers, Pomodoro sessions, and reminders.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-comment text-purple-600 text-xs"></i>
                </div>
                <div>
                  <strong className="text-gray-900">Notifications API:</strong>
                  <span className="text-gray-600 ml-1">
                    To alert you when timers complete or breaks start.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-save text-purple-600 text-xs"></i>
                </div>
                <div>
                  <strong className="text-gray-900">Storage API:</strong>
                  <span className="text-gray-600 ml-1">
                    To save your timer settings and preferences <em>locally</em>{" "}
                    on your device.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                <i className="fas fa-lock mr-2"></i>
                All of this data is stored{" "}
                <strong>locally in your browser</strong> and is{" "}
                <strong>never sent to a remote server</strong>.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="privacy-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-key"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2. Why Does Chrono Need These Permissions?
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  <i className="fas fa-bell text-purple-500 mr-2"></i>Alarms
                </h4>
                <p className="text-gray-600">
                  Needed to run background timers and reminder functionality,
                  even if you close the popup.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  <i className="fas fa-comment text-blue-500 mr-2"></i>
                  Notifications
                </h4>
                <p className="text-gray-600">
                  Needed to show you alerts and updates about your timers or
                  sessions.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  <i className="fas fa-save text-green-500 mr-2"></i>Storage
                </h4>
                <p className="text-gray-600">
                  Needed to remember your settings (e.g., Pomodoro duration,
                  custom reminders) across sessions.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                <i className="fas fa-info-circle mr-2"></i>
                Chrono only uses the permissions required for its core
                functionality — <strong>no more, no less</strong>.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="privacy-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-share-alt"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3. Does Chrono Share Any Data?
            </h3>
            <div className="text-center py-8">
              <div className="text-6xl mb-4">❌</div>
              <h4 className="text-3xl font-bold text-red-600 mb-4">No.</h4>
              <p className="text-lg text-gray-700">
                Chrono does <strong>not share, sell, or transmit</strong> any
                data to third parties. All operations happen locally in your
                browser.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="privacy-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              4. Remote Code or External Services
            </h3>
            <div className="flex items-center justify-center py-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <p className="text-lg text-gray-700">
                  Chrono does <strong>not use any remote code execution</strong>{" "}
                  or load scripts from third-party servers. It is fully
                  self-contained.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="privacy-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              5. Your Control and Responsibility
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              As the user, you remain in control. You can remove the extension
              or clear stored data from your browser at any time.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                <i className="fas fa-cog mr-2"></i>To manage extension settings:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-mouse-pointer text-purple-500 mr-2"></i>
                  Right-click the Chrono icon in your browser
                </li>
                <li className="flex items-center">
                  <i className="fas fa-wrench text-purple-500 mr-2"></i>
                  <p>
                    Select <strong>Options</strong> or{" "}
                    <strong>Remove from Chrome</strong> if you wish to uninstall
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="privacy-card bg-white rounded-xl p-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              6. Contact
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              If you have any questions, feedback, or concerns, feel free to
              reach out:
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
              Your time, your tempo — and your privacy is protected.
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

export default ChronoPrivacyPolicy;
