import React, { useEffect } from "react";
import demo from "../public/dash.png";
const ChronoLandingPage = () => {
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

  return (
    <div className="bg-gray-50">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

        body {
          font-family: "Poppins", sans-serif;
          scroll-behavior: smooth;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          height: 64px;
          width: 64px;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .testimonial {
          transition: all 0.3s ease;
        }

        .testimonial:hover {
          transform: translateY(-5px);
        }

        .screenshot {
          border-radius: 10px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .screenshot:hover {
          transform: scale(1.02);
        }

        .install-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          transition: all 0.3s ease;
        }

        .install-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px -2px rgba(107, 70, 193, 0.5);
        }

        .marquee {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
        }

        .marquee-content {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#features"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#about"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="#install"
                className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Install Extension
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="gradient-bg">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your time, your tempo!
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                Chrono helps you take control of your time with timers, Pomodoro
                sessions, and reminders - all in one simple Chrome extension.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <a
                    href="#install"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 sm:px-8"
                  >
                    Get Started - It's Free
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Placeholder for dashboard image */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to stay on track
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Chrono combines the most powerful time management tools in one
              simple extension.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="transition-all duration-300 card-hover pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md h-full">
                  <div className="-mt-6">
                    <div className="feature-icon mx-auto">
                      <i className="fas fa-bell"></i>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">
                      Reminders
                    </h3>
                    <p className="mt-5 text-base text-gray-500 text-center">
                      Never miss important tasks with custom time-based
                      reminders. Perfect for medication, meetings, or any
                      recurring activity.
                    </p>
                    <div className="mt-6">
                      {/* Placeholder for reminders screenshot */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="transition-all duration-300 card-hover pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md h-full">
                  <div className="-mt-6">
                    <div className="feature-icon mx-auto">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">
                      Timer
                    </h3>
                    <p className="mt-5 text-base text-gray-500 text-center">
                      Set quick timers for 1, 5, 10, 30 minutes or 1 hour with a
                      single click. Watch your progress and get notified when
                      time's up.
                    </p>
                    <div className="mt-6">
                      {/* Placeholder for timer screenshot */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="transition-all duration-300 card-hover pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md h-full">
                  <div className="-mt-6">
                    <div className="feature-icon mx-auto">
                      <i className="fas fa-hourglass-half"></i>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">
                      Pomodoro
                    </h3>
                    <p className="mt-5 text-base text-gray-500 text-center">
                      Boost productivity with the Pomodoro technique - 25 minute
                      focused work sessions followed by 5 minute breaks. Track
                      your completed sessions.
                    </p>
                    <div className="mt-6">
                      {/* Placeholder for pomodoro screenshot */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, intuitive, and powerful
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Chrono works right from your browser with just a few clicks.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative mb-10 lg:mb-0">
                <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
                  <img src={demo} alt="chrono demo" />
                </div>
              </div>
              <div>
                <ul className="space-y-10">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <span className="text-lg font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Install the extension
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        Add Chrono to your Chrome browser with a single click
                        from the Chrome Web Store.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <span className="text-lg font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Access from your toolbar
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        Click the Chrono icon in your Chrome toolbar to open the
                        dashboard.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <span className="text-lg font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Choose your tool
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        Select Timer, Pomodoro, or Reminders based on your
                        current needs.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <span className="text-lg font-bold">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Stay productive
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        Receive notifications even when the extension is closed.
                        Your settings sync across devices.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What users are saying
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="testimonial bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">AM</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Alex M.</h4>
                  <p className="text-gray-500">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The Pomodoro feature has completely changed how I work. I'm
                much more focused now and get more done in less time."
              </p>
              <div className="mt-3 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="testimonial bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">JP</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Jamie P.</h4>
                  <p className="text-gray-500">Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I never miss taking my medication anymore thanks to Chrono's
                reminders. Simple but incredibly useful."
              </p>
              <div className="mt-3 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="testimonial bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">SK</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Sam K.</h4>
                  <p className="text-gray-500">Project Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I use the timer feature for our team meetings to keep everyone
                on track. It's clean, simple, and does exactly what we need."
              </p>
              <div className="mt-3 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
              About
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The story behind Chrono
            </p>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <p className="text-lg text-gray-500 mb-6">
                Chrono wasn't created to be just another to-do app. It was born
                out of a real need - I kept forgetting to take my medicine at
                the right times.
              </p>
              <p className="text-lg text-gray-500 mb-6">
                As a developer, I wanted a simple solution that would be always
                accessible while I work on my computer. Something lightweight
                that would stay out of my way until I needed it.
              </p>
              <p className="text-lg text-gray-500">
                What started as a personal tool has evolved into Chrono - a
                Chrome extension combining the three most important time
                management tools I use daily: timers, Pomodoro sessions, and
                reminders.
              </p>
              <div className="mt-8">
                <p className="text-base font-medium text-purple-600">
                  - Salah Shalapy, Creator of Chrono
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              {/* Placeholder for creator image */}
            </div>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div id="install" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
              Get Started
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ready to take control of your time?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Install Chrono now and start managing your time more effectively.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="install-btn px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center"
            >
              <i className="fab fa-chrome mr-2 text-xl"></i>
              Add to Chrome - It's Free
            </a>
          </div>

          <div className="mt-10 text-center text-gray-500">
            Works with all Chromium-based browsers including Chrome, Edge,
            Brave, and Opera.
          </div>
        </div>
      </div>

      {/* Feature Benefits Ticker */}
      <div className="bg-purple-600 py-8 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span className="text-white font-medium mx-8">✓ Free to use</span>
            <span className="text-white font-medium mx-8">
              ✓ Simple and intuitive
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Helps build better habits
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Works in the background
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Syncs across devices
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Daily productivity boost
            </span>
            <span className="text-white font-medium mx-8">✓ Free to use</span>
            <span className="text-white font-medium mx-8">
              ✓ Simple and intuitive
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Helps build better habits
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Works in the background
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Syncs across devices
            </span>
            <span className="text-white font-medium mx-8">
              ✓ Daily productivity boost
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                About
              </h3>
              <p className="mt-4 text-base text-gray-300">
                Chrono is a Chrome extension designed to help you manage your
                time efficiently with timers, Pomodoro sessions, and reminders.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Connect
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    <i className="fab fa-linkedin mr-2"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    <i className="fas fa-envelope mr-2"></i> Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    <i className="fas fa-bug mr-2"></i> Report an Issue
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 Chrono. Made with ♥ by Salah Shalapy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* External Dependencies */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
    </div>
  );
};

export default ChronoLandingPage;
