const FeaturesSection = () => {
  return (
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
                    Never miss important tasks with custom time-based reminders.
                    Perfect for medication, meetings, or any recurring activity.
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
  );
};

export default FeaturesSection;
