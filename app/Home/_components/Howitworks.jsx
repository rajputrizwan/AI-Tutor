"use client";

function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          How It Works
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Discover how our system helps you learn better through personalized
          recommendations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-500 mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Create Your Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sign up as a teacher or student. Your profile helps us understand
              your interests and learning goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-500 mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              AI Analyzes Your Data
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI analyzes your answers, learning style, and behavior to
              generate insightful questions and recommendations.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-500 mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Get Personalized Guidance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive personalized content, suggestions, and progress tracking
              to boost your learning efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
