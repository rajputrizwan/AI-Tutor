function WhyUs() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h1>
        <p className="text-lg text-gray-600 mb-12">
          We're redefining education through AI-powered interaction and personalized recommendations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">🧠 Intelligent Questioning</h2>
            <p className="text-gray-700">
              Our AI engages users with smart questions to identify their learning style, goals, and gaps.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-green-600 mb-3">🎯 Tailored Recommendations</h2>
            <p className="text-gray-700">
              Based on responses, we generate highly personalized learning paths and content suggestions.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-purple-600 mb-3">👥 Role-Based Experience</h2>
            <p className="text-gray-700">
              Whether you're a student or a teacher, our system adapts the questions and resources accordingly.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">📘 Dynamic Learning Content</h2>
            <p className="text-gray-700">
              AI-curated quizzes, notes, and exercises aligned with your personalized path.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-yellow-600 mb-3">🔄 Continuous Adaptation</h2>
            <p className="text-gray-700">
              The system evolves with your progress and feedback, refining suggestions in real-time.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-red-600 mb-3">🔐 Data Privacy Focus</h2>
            <p className="text-gray-700">
              We respect your privacy — all data is securely handled and never shared without consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;