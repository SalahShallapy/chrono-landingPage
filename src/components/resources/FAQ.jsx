import React, { useEffect, useState } from "react";

const FAQ = ({ onNavigateHome }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

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

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      question: "Why am I not receiving notifications or reminders?",
      icon: "🔔",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-700">
            👉 Chrono relies on Chrome's desktop notification system. If you
            aren't getting alerts:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Make sure <strong>Chrome notifications are allowed</strong> in
              your browser settings.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Also check your{" "}
              <strong>operating system's notification preferences</strong>{" "}
              (Windows, macOS, etc.).
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Try restarting Chrome or your device if issues persist.
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <a
              href="https://support.google.com/chrome/answer/3220216"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              How to turn notifications on or off in Chrome
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      question: "Do I need an account to use Chrono?",
      icon: "👤",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            <strong>No.</strong> Chrono works fully offline and doesn't require
            any sign-up or login.
          </p>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              <i className="fas fa-check-circle mr-2"></i>
              Start using Chrono immediately - no registration needed!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      question: "Does Chrono collect or track any of my data?",
      icon: "🔒",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            <strong>No.</strong> Chrono uses local browser storage only. Your
            data (timers, settings) never leaves your device.
          </p>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              <i className="fas fa-shield-alt mr-2"></i>
              Your privacy is protected - all data stays local on your device.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      question: "How can I reset or remove Chrono?",
      icon: "🗑️",
      answer: (
        <div className="space-y-4">
          <div className="border-l-4 border-orange-500 bg-orange-50 pl-6 py-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              To reset saved timers and settings:
            </h4>
            <p className="text-gray-700">
              Go to Chrome → Extensions → Chrono → click on "Details" →
              "Extension options" (if supported), or clear local storage
              manually via DevTools.
            </p>
          </div>
          <div className="border-l-4 border-red-500 bg-red-50 pl-6 py-4">
            <h4 className="font-semibold text-gray-900 mb-2">To uninstall:</h4>
            <p className="text-gray-700">
              Right-click the Chrono icon → "Remove from Chrome."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      question: "Can I suggest a feature or report a bug?",
      icon: "💡",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            <strong>Absolutely!</strong> We'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://chrono-eosin.vercel.app/"
              target="_blank"
              className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              <i className="fas fa-globe mr-2"></i>
              Contact via Landing Page
            </a>
            <a
              href="https://github.com/SalahShallapy/chrono-landingPage/issues"
              target="_blank"
              className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <i className="fab fa-github mr-2"></i>
              Report on GitHub
            </a>
          </div>
        </div>
      ),
    },
  ];

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

        .faq-card {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .faq-card:hover {
          border-left-color: #10b981;
          transform: translateX(4px);
        }

        .faq-card.active {
          border-left-color: #3b82f6;
          box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .question-button {
          transition: all 0.3s ease;
        }

        .question-button:hover {
          background-color: #f8fafc;
        }

        .question-button.active {
          background-color: #f1f5f9;
        }

        .answer-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .answer-content.open {
          max-height: 1000px;
        }

        .back-btn:hover {
          transform: translateX(-2px);
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

        .contact-btn {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px -2px rgba(16, 185, 129, 0.5);
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
                  FAQ
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
            <i className="fas text-6xl text-white opacity-90">❓</i>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-2xl mx-auto">
            Find quick answers to common questions about Chrono and get the most
            out of your time management experience.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg text-white">
            <i className="fas fa-lightbulb mr-2"></i>
            <span className="font-medium">Quick Solutions</span>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ✅ Common Questions & Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Click on any question below to see the detailed answer
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-card bg-white rounded-xl shadow-sm overflow-hidden ${
                  openQuestion === index ? "active" : ""
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`question-button w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    openQuestion === index ? "active" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          Q{faq.id}: {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <i
                        className={`fas transition-transform duration-300 text-gray-400 ${
                          openQuestion === index
                            ? "fa-chevron-up text-green-500"
                            : "fa-chevron-down"
                        }`}
                      ></i>
                    </div>
                  </div>
                </button>

                <div
                  className={`answer-content ${
                    openQuestion === index ? "open" : ""
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Need Help Section */}
          <div className="mt-16 bg-white rounded-xl p-8 text-center shadow-sm">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
                <i className="fas fa-question-circle text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Still Need Help?
              </h3>
              <p className="text-gray-600 text-lg">
                Can't find what you're looking for? We're here to help!
              </p>
            </div>

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

export default FAQ;
