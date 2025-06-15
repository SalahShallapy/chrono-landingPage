const AboutSection = () => {
  return (
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
              out of a real need - I kept forgetting to take my medicine at the
              right times.
            </p>
            <p className="text-lg text-gray-500 mb-6">
              As a developer, I wanted a simple solution that would be always
              accessible while I work on my computer. Something lightweight that
              would stay out of my way until I needed it.
            </p>
            <p className="text-lg text-gray-500">
              What started as a personal tool has evolved into Chrono - a Chrome
              extension combining the three most important time management tools
              I use daily: timers, Pomodoro sessions, and reminders.
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
  );
};

export default AboutSection;
