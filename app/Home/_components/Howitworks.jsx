"use client";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24 px-6 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Discover how our system helps you learn better through personalized
          recommendations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "1",
              title: "Create Your Profile",
              desc: "Sign up as a teacher or student. Your profile helps us understand your interests and learning goals.",
            },
            {
              num: "2",
              title: "AI Analyzes Your Data",
              desc: "Our AI analyzes your answers, learning style, and behavior to generate insightful questions and recommendations.",
            },
            {
              num: "3",
              title: "Get Personalized Guidance",
              desc: "Receive personalized content, suggestions, and progress tracking to boost your learning efficiency.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 shadow-md dark:shadow-[0_2px_10px_rgba(255,255,255,0.05)] rounded-xl p-6 hover:shadow-xl dark:hover:shadow-[0_2px_15px_rgba(255,255,255,0.07)] transition-shadow"
            >
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
