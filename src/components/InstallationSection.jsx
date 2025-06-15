const InstallationSection = () => {
  return (
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
            href="https://chromewebstore.google.com/detail/nglckeclogiadajggbdbpoddolhckpnk?utm_source=item-share-cb"
            target="blank"
            className="install-btn px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center"
          >
            <i className="fab fa-chrome mr-2 text-xl"></i>
            Add to Chrome - It's Free
          </a>
        </div>

        <div className="mt-10 text-center text-gray-500">
          Works with all Chromium-based browsers including Chrome, Edge, Brave,
          and Opera.
        </div>
      </div>
    </div>
  );
};

export default InstallationSection;
