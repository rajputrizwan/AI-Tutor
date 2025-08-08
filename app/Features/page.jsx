"use client";

function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Features That Empower Your Learning
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Our AI-powered system provides intelligent recommendations for
          personalized and effective learning — for both students and teachers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {/* Feature Card */}
          {features.map(({ title, color, description }, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-md transition-shadow"
            >
              <h3 className={`text-xl font-semibold ${color} mb-2`}>{title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Role-Based Personalization",
    color: "text-blue-600 dark:text-blue-400",
    description:
      "Whether you're a student or teacher, the system dynamically adjusts its interface, tools, and content to suit your role.",
  },
  {
    title: "Adaptive Question Generation",
    color: "text-green-600 dark:text-green-400",
    description:
      "Automatically generate questions based on a user’s behavior, performance, and current understanding — no two learners get the same experience.",
  },
  {
    title: "Learning Style Analysis",
    color: "text-purple-600 dark:text-purple-400",
    description:
      "The system identifies your preferred learning style (visual, verbal, logical, etc.) and delivers content in the most effective format.",
  },
  {
    title: "Behavior Tracking & Insights",
    color: "text-pink-600 dark:text-pink-400",
    description:
      "Tracks time spent, mistakes made, and learning patterns to give teachers and students actionable feedback.",
  },
  {
    title: "Smart Recommendations",
    color: "text-yellow-600 dark:text-yellow-400",
    description:
      "Based on your interests, history, and progress, the AI recommends courses, topics, and resources tailored just for you.",
  },
  {
    title: "Progress Dashboard",
    color: "text-red-600 dark:text-red-400",
    description:
      "Real-time visualization of performance, strengths, and areas for improvement — empowering data-driven growth.",
  },
  {
    title: "Teacher Analytics Panel",
    color: "text-purple-600 dark:text-purple-400",
    description:
      "Gives educators detailed insights into student engagement, difficulties, and suggestions to improve teaching strategies.",
  },
  {
    title: "Custom Learning Paths",
    color: "text-fuchsia-600 dark:text-fuchsia-400",
    description:
      "Automatically builds unique learning journeys for each user, focusing on their goals, skill level, and interest area.",
  },
  {
    title: "Clean & Responsive Interface",
    color: "text-blue-600 dark:text-blue-400",
    description:
      "Built with Next.js and Tailwind CSS, the system ensures a seamless experience across all devices and screen sizes.",
  },
];

export default Features;
