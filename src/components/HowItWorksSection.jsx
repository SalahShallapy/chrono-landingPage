import demo from "../../public/dash.png";

const HowItWorksSection = () => {
  return (
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
                      Add Chrono to your Chrome browser with a single click from
                      the Chrome Web Store.
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
                      Select Timer, Pomodoro, or Reminders based on your current
                      needs.
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
  );
};

export default HowItWorksSection;
