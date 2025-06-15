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
              "I use the timer feature for our team meetings to keep everyone on
              track. It's clean, simple, and does exactly what we need."
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
  );
};

export default TestimonialsSection;
