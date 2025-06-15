const Footer = ({ setCurrentPage }) => {
  const handlePageNavigation = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              About
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Chrono is a Chrome extension designed to help you manage your time
              efficiently with timers, Pomodoro sessions, and reminders.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <button
                  onClick={() => handlePageNavigation("privacy")}
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation("terms")}
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation("guide")}
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  User Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation("faq")}
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <button
                  onClick={() =>
                    handleExternalLink("https://github.com/SalahShallapy")
                  }
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <i className="fab fa-github mr-2"></i> GitHub
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleExternalLink(
                      "https://www.linkedin.com/in/salahshallapy/"
                    )
                  }
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <i className="fab fa-linkedin mr-2"></i> LinkedIn
                </button>
              </li>
              <li>
                <a
                  href="mailto:salahshalapy999@gmail.com"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 flex items-center cursor-pointer"
                >
                  <i className="fas fa-envelope mr-2"></i> Contact
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleExternalLink(
                      "https://github.com/SalahShallapy/chrono-landingPage/issues"
                    )
                  }
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <i className="fas fa-bug mr-2"></i> Report an Issue
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <button
              onClick={() =>
                handleExternalLink("https://github.com/SalahShallapy")
              }
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              <i className="fab fa-github text-xl"></i>
            </button>
            <button
              onClick={() =>
                handleExternalLink("https://www.linkedin.com/in/salahshallapy/")
              }
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </button>
            <button
              onClick={() =>
                handleExternalLink("mailto:salahshalapy999@gmail.com")
              }
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              <i className="fas fa-envelope text-xl"></i>
            </button>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2025 Chrono. Made with ♥ by
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
    </footer>
  );
};

export default Footer;
