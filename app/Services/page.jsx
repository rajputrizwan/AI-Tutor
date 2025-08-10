"use client";

import Link from "next/link";
import { CheckCircle, BrainCircuit, Bot } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Bot size={32} />,
      title: "AI-Powered Tutoring",
      color: "from-blue-500 to-blue-700",
      points: [
        "Conversational learning experience",
        "Adaptive responses based on your input",
        "Ideal for any subject or difficulty level",
        "Always available – 24/7 support",
      ],
      linkText: "Get Started",
      linkHref: "/get-started",
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "Smart Content Suggestions",
      color: "from-indigo-500 to-indigo-700",
      points: [
        "Customized topic suggestions",
        "Targeted learning paths",
        "Review & repetition planning",
        "Progress tracking and insights",
      ],
      linkText: "Try Recommendations",
      linkHref: "/get-started",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/30 dark:bg-grid-gray-700/20 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1
            className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Meet Your Personal AI Tutor
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Learn smarter with an AI tutor that asks, understands, and
            recommends what suits you best.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-8 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200/30 dark:border-gray-800/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-md`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h2
                className="mt-6 text-2xl font-bold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {service.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {idx === 0
                  ? "Interact with your AI tutor in real-time. It asks you smart questions, analyzes your learning pace, and gives accurate responses to boost understanding."
                  : "Based on your performance, the AI recommends what to study next — making sure you focus on your weaknesses and grow stronger every session."}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {service.points.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 dark:text-indigo-400 mt-1"
                    />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={service.linkHref}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-br ${service.color} hover:brightness-110 transition-all`}
                >
                  {service.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
