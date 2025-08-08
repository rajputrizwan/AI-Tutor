"use client";

function WhoItsFor() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Who It's For
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Our system is designed to support a variety of users — whether you’re
          a student seeking to master concepts, or a teacher enhancing your
          skills with AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {/* Students Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              🎓 Students
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                Get personalized questions based on your learning style & pace.
              </li>
              <li>Receive smart recommendations to improve weaker areas.</li>
              <li>Track your progress visually with our AI dashboard.</li>
              <li>Learn more efficiently with adaptive content formats.</li>
            </ul>
          </div>

          {/* Teachers Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
              👩‍🏫 Teachers
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>Analyze student performance & engagement in real time.</li>
              <li>Create adaptive quizzes tailored to student needs.</li>
              <li>
                Leverage AI insights to identify learning gaps in the class.
              </li>
              <li>
                Save time with automated question generation and feedback.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoItsFor;
