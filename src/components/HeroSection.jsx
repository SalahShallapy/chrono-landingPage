const HeroSection = () => {
  return (
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
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#install"
                  className="flex items-center justify-center px-4 py-3 border border-indigo-300 text-base font-medium rounded-md text-indigo-100 bg-transparent hover:bg-indigo-600 hover:border-indigo-600 transition-colors sm:px-8"
                >
                  Get Started - It's Free
                </a>
                <a
                  href="https://drive.google.com/file/d/1GZkF5rpttegE8MkWyCr84-AJ0AyA0JzQ/view?usp=sharing"
                  target="blank"
                  className="flex items-center justify-center px-4 py-3 border border-indigo-300 text-base font-medium rounded-md text-indigo-100 bg-transparent hover:bg-indigo-600 hover:border-indigo-600 transition-colors sm:px-8"
                >
                  Read Documentation
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
  );
};

export default HeroSection;
