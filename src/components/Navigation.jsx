const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-purple-600 text-2xl font-bold">Chrono</span>
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
  );
};

export default Navigation;
