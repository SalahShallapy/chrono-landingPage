import React, { useEffect } from "react";

const UserGuide = ({ onNavigateHome }) => {
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
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
        }

        .guide-card {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
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

        .guide-card:hover {
          border-left-color: #10b981;
          transform: translateX(4px);
        }

        .section-icon {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
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
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px -2px rgba(16, 185, 129, 0.5);
        }

        .highlight-box {
          background: linear-gradient(
            135deg,
            rgba(16, 185, 129, 0.1) 0%,
            rgba(59, 130, 246, 0.1) 100%
          );
          border: 2px solid rgba(16, 185, 129, 0.2);
        }

        .back-btn:hover {
          transform: translateX(-2px);
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-green-600 text-2xl font-bold">
                  Chrono
                </span>
                <span className="ml-2 text-gray-500 text-sm hidden sm:block">
                  User Guide
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
            <i className="fas text-6xl text-white opacity-90 ">📚</i>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            User Guide
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-2xl mx-auto">
            Welcome to Chrono – Your Time Management Assistant! Learn how to use
            Chrono effectively.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg text-white">
            <i className="fas fa-rocket mr-2"></i>
            <span className="font-medium">Get Started Guide</span>
          </div>
        </div>
      </div>

      {/* What Chrono Can Do */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="highlight-box rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Chrono Can Do{" "}
              <i className="fas fa-magic text-green-500 mr-2"></i>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="feature-card bg-green-50 rounded-lg p-6">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Custom Timers
                </h3>
                <p className="text-gray-600">
                  Create timers for any task or activity
                </p>
              </div>
              <div className="feature-card bg-blue-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🍅</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Pomodoro Technique
                </h3>
                <p className="text-gray-600">
                  Use 25/5 focus/break cycles for productivity
                </p>
              </div>
              <div className="feature-card bg-purple-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🛎️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Custom Reminders
                </h3>
                <p className="text-gray-600">
                  Set quick alerts to stay on track
                </p>
              </div>
              <div className="feature-card bg-yellow-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Local Storage
                </h3>
                <p className="text-gray-600">
                  All data is saved locally in your browser
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Section */}
          <div className="guide-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-compass"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Navigation
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Click the <strong>Chrono icon</strong> in your Chrome toolbar to
              open the extension popup.
            </p>
            <h4 className="font-semibold text-gray-900 mb-4">
              Choose between:
            </h4>
            <div className="space-y-4">
              <div className="flex items-start bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <span className="text-white font-bold text-sm">⏱️</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Timer</h5>
                  <p className="text-gray-600">Create a custom countdown.</p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <span className="text-white font-bold text-sm">🍅</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Pomodoro</h5>
                  <p className="text-gray-600">
                    Run focused work sessions with breaks.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <span className="text-white font-bold text-sm">🛎️</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Reminders</h5>
                  <p className="text-gray-600">
                    Set quick alerts for upcoming tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notifications Setup */}
          <div className="guide-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-bell"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Important: Enable Chrome Notifications
            </h3>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
              <p className="text-red-800 font-medium">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Chrono needs permission to show desktop alerts. To ensure you
                don't miss important reminders:
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 bg-green-50 pl-6 py-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  ✅ Enable Notifications in Chrome:
                </h4>
                <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mb-3">
                  chrome://settings/content/notifications
                </div>
                <p className="text-gray-700">
                  Make sure notifications are{" "}
                  <strong>allowed for Chrome</strong> and not blocked for
                  Chrono.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 pl-6 py-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  ✅ Enable System Notifications:
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <strong className="text-blue-600">Windows:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Settings → System → Notifications & actions → Enable for
                      Chrome
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <strong className="text-blue-600">macOS:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      System Preferences → Notifications → Google Chrome → Allow
                      Notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 font-medium">
                <i className="fas fa-warning mr-2"></i>
                Without this,{" "}
                <strong>
                  Chrono's timers and reminders will not alert you
                </strong>{" "}
                when they finish.
              </p>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="guide-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-comment-alt"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Notifications
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Chrono will show desktop notifications when:
            </p>
            <div className="space-y-4">
              <div className="flex items-center bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-stopwatch text-white"></i>
                </div>
                <p className="text-gray-700">A timer finishes</p>
              </div>
              <div className="flex items-center bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-coffee text-white"></i>
                </div>
                <p className="text-gray-700">
                  A Pomodoro session or break ends
                </p>
              </div>
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-bell text-white"></i>
                </div>
                <p className="text-gray-700">A reminder time is reached</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 font-medium">
                <i className="fas fa-info-circle mr-2"></i>
                Make sure Chrome notifications are <strong>enabled</strong> in
                your system settings.
              </p>
            </div>
          </div>

          {/* Settings Section */}
          <div className="guide-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Settings & Customization
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-clock text-purple-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  Adjust Pomodoro work/break durations in the popup UI.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-volume-up text-purple-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  Choose or mute alert sounds (if feature is included).
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-save text-purple-600 text-xs"></i>
                </div>
                <p className="text-gray-600">
                  All settings are stored locally.
                </p>
              </div>
            </div>
          </div>

          {/* Reset Section */}
          <div className="guide-card bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-trash-restore"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Reset or Remove
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 bg-orange-50 pl-6 py-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  To clear data:
                </h4>
                <p className="text-gray-700">
                  Use DevTools → Application tab → Clear Storage.
                </p>
              </div>
              <div className="border-l-4 border-red-500 bg-red-50 pl-6 py-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  To uninstall:
                </h4>
                <p className="text-gray-700">
                  Right-click the Chrono icon → "Remove from Chrome."
                </p>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="guide-card bg-white rounded-xl p-8 shadow-sm">
            <div className="section-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Still have questions? We're here to help!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                target="_blank"
                href="https://chrono-eosin.vercel.app/"
                className="contact-btn flex items-center justify-center px-6 py-4 text-white rounded-lg font-medium"
              >
                <i className="fas fa-globe mr-2"></i>
                Visit Website
              </a>
              <a
                target="_blank"
                href="mailto:salahshalapy999@gmail.com"
                className="contact-btn flex items-center justify-center px-6 py-4 text-white rounded-lg font-medium"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Us
              </a>
              <a
                target="_blank"
                href="https://github.com/SalahShallapy/chrono-landingPage/issues"
                className="contact-btn flex items-center justify-center px-6 py-4 text-white rounded-lg font-medium"
              >
                <i className="fas fa-bug mr-2"></i>
                Report Bugs
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
              <span className="text-green-400 text-2xl font-bold">Chrono</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your time, your tempo — master it with ease.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/SalahShallapy"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                target="_blank"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/salahshallapy/"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                target="_blank"
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
                  className="inline-block font-medium text-green-500 relative px-1 transition-all duration-300 hover:underline"
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

export default UserGuide;
