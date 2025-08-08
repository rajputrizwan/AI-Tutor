"use client";

import { useState } from "react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce200"></div>
      <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce400"></div>

      <style jsx>{`
        .animate-bounce200 {
          animation: bounce 1.4s infinite;
          animation-delay: 0.2s;
        }
        .animate-bounce400 {
          animation: bounce 1.4s infinite;
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
            opacity: 0.7;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default function Dashboard() {
  const PROMPTS = {
    student: {
      learning_style:
        "Generate 5 multiple choice questions to determine a student's learning style (visual, auditory, kinesthetic).",
      interests:
        "Generate 5 questions about a student's interests in subjects like math, science, language arts, and social studies.",
      weaknesses:
        "Generate 5 questions to identify student's weak areas in learning.",
    },
    teacher: {
      teaching_style:
        "Generate 5 multiple choice questions to assess a teacher's teaching style.",
      class_management:
        "Generate 5 questions about classroom management techniques.",
      student_assessment:
        "Generate 5 questions for assessing student understanding.",
    },
  };

  const [selectedUserType, setSelectedUserType] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const topicsForUser = selectedUserType
    ? Object.keys(PROMPTS[selectedUserType])
    : [];

  async function fetchQuestions(userType, topic) {
    setError(null);
    setLoading(true);
    setQuestions([]);

    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userType, topic }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to generate questions");
      }

      const data = await res.json();

      if (Array.isArray(data.questions)) {
        setQuestions(data.questions);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleTopicSelect = async (topic) => {
    setSelectedTopic(topic);
    await fetchQuestions(selectedUserType, topic);
  };

  const reset = () => {
    setSelectedUserType(null);
    setSelectedTopic(null);
    setQuestions([]);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 tracking-tight text-gray-900 dark:text-white text-center max-w-4xl">
        Welcome to Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          Dashboard
        </span>
      </h1>

      {!selectedUserType ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
          <button
            onClick={() => setSelectedUserType("teacher")}
            className="group block rounded-3xl p-8 bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                👩‍🏫 Teacher
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Access advanced tools for managing classes, analyzing questions,
                and guiding students effectively.
              </p>
            </div>
          </button>

          <button
            onClick={() => setSelectedUserType("student")}
            className="group block rounded-3xl p-8 bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-green-500 hover:-translate-y-1 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-500 transition-colors">
                🎓 Student
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Get personalized learning, practice questions, and feedback to
                boost your knowledge.
              </p>
            </div>
          </button>
        </div>
      ) : (
        <div
          className="
            max-w-3xl w-full 
            rounded-3xl p-10 
            bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-purple-600/30
            dark:from-blue-900/40 dark:via-indigo-900/30 dark:to-purple-900/40
            backdrop-blur-lg
            border border-white/30 dark:border-white/20
            shadow-lg shadow-indigo-500/20 dark:shadow-purple-900/50
            transition-all duration-700 ease-in-out
            scale-100
          "
          style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.2)" }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Selected Role:{" "}
              <span className="capitalize text-blue-500 dark:text-blue-400">
                {selectedUserType}
              </span>
            </h2>
            <button
              onClick={reset}
              className="text-sm text-red-500 hover:underline"
            >
              Change Role
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-300">
              Select a topic to generate questions:
            </h3>
            <div className="flex flex-wrap gap-5">
              {topicsForUser.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleTopicSelect(topic)}
                  className={`px-5 py-2.5 rounded-full border font-medium ${
                    selectedTopic === topic
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  } transition`}
                >
                  {topic.replace(/_/g, " ")}
                </button>
              ))}
            </div>
          </div>

          {loading && (
            <div className="flex flex-col items-center space-y-3 mt-8">
              <LoadingSpinner />
              <p className="text-center text-gray-600 dark:text-gray-400 text-base font-medium">
                Wait, AI is generating questions...
              </p>
            </div>
          )}

          {error && (
            <p className="text-center text-red-600 dark:text-red-400 font-semibold mt-8">
              Error: {error}
            </p>
          )}

          {questions.length > 0 && !loading && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
                Generated Questions for {selectedTopic?.replace(/_/g, " ")}:
              </h3>
              <ol className="list-decimal list-inside space-y-6 text-gray-800 dark:text-gray-300">
                {questions.map(({ question, options }, idx) => (
                  <li key={idx} className="ml-0 font-medium">
                    {question}
                    <ul className="list-disc list-inside ml-6 space-y-1 mt-2">
                      {options.map((opt, i) => (
                        <li key={i}>{opt}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
