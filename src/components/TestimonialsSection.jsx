const TestimonialsSection = () => {
  return (
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
              "The Pomodoro feature has completely changed how I work. I'm much
              more focused now and get more done in less time."
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
                <span className="text-purple-600 font-bold">HA</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Hamada Ahmed</h4>
                <p className="text-gray-500">Student</p>
              </div>
            </div>
            <p className="text-gray-600">
              "This extension seriously saved my study routine. I use the
              Pomodoro timer every day, and it actually keeps me focused.
              Setting quick alarms and timers is super handy between classes
              too. It’s simple, clean, and doesn’t get in the way. Honestly, it
              just makes managing time way less stressful."
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
                <span className="text-purple-600 font-bold">M</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Morment</h4>
                <p className="text-gray-500">Streamer</p>
              </div>
            </div>
            <p className="text-gray-600">
              "As a YouTuber and streamer, this extension has improved how I
              manage my time. I use it for setting alarms and Pomodoro
              sessions—all in one clean interface. It keeps me focused during
              edits and reminds me to take breaks . Super easy to use throughout
              my daily workflow. Highly recommend it for any content creator or
              multitasker."
            </p>
            <div className="mt-3 flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
