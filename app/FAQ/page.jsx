"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the AI-Powered Personalized Learning Experience System?",
    answer:
      "It’s an intelligent platform that asks users specific questions to understand their learning style, interests, and goals. It then provides personalized content, quizzes, and study plans.",
  },
  {
    question: "How does the system personalize my learning?",
    answer:
      "Based on your answers to targeted questions, our AI analyzes your needs and recommends the most effective content and activities tailored for you.",
  },
  {
    question: "Is this platform suitable for both students and teachers?",
    answer:
      "Yes, we offer role-based experiences. Teachers can generate content and track student progress, while students receive a personalized learning journey.",
  },
  {
    question: "Can I trust the system with my data?",
    answer:
      "Absolutely. We prioritize data privacy and ensure that your responses and usage data are securely stored and not shared without your consent.",
  },
  {
    question: "Do I need technical skills to use the system?",
    answer:
      "Not at all! Our platform is user-friendly and designed for all users — no technical background is needed.",
  },
  {
    question: "Is it accessible on mobile devices?",
    answer:
      "Yes, the system is fully responsive and works seamlessly across all devices, including phones and tablets.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 shadow-sm transition duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-700 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
