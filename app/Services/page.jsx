"use client";

import Link from "next/link";
import { CheckCircle, BrainCircuit, Bot } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Header */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Meet Your Personal AI Tutor
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Learn smarter with an AI tutor that asks, understands, and
            recommends what suits you best.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2">
          {/* Service 1: Personalized AI Tutoring */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-6">
                <Bot size={32} />
              </div>
              <h2 className="text-2xl font-bold">AI-Powered Tutoring</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Interact with your AI tutor in real-time. It asks you smart
                questions, analyzes your learning pace, and gives accurate
                responses to boost understanding.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Conversational learning experience",
                  "Adaptive responses based on your input",
                  "Ideal for any subject or difficulty level",
                  "Always available – 24/7 support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={20} className="text-blue-500 mt-1" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/get-started"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: Smart Recommendations */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-600 text-white mb-6">
                <BrainCircuit size={32} />
              </div>
              <h2 className="text-2xl font-bold">Smart Content Suggestions</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Based on your performance, the AI recommends what to study next
                — making sure you focus on your weaknesses and grow stronger
                every session.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Customized topic suggestions",
                  "Targeted learning paths",
                  "Review & repetition planning",
                  "Progress tracking and insights",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={20} className="text-indigo-500 mt-1" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/get-started"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  Try Recommendations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
