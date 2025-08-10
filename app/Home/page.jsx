"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import HowItWorks from "./_components/HowItWorks";
import WhoItsFor from "./_components/WhoItsFor";
import WhyUs from "./_components/WhyUs";

export default function Home() {
  const { isSignedIn } = useUser();
  const [text, setText] = useState("");
  const fullText = "Meet Your Personal AI Tutor";
  const typingSpeed = 70;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, []);

  useEffect(() => {
    let i = -1;
    const interval = setInterval(() => {
      i++;
      setText((prev) => prev + fullText.charAt(i));
      if (i === fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Gradient Background Effects */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-300/20 to-transparent dark:from-blue-500/10 -z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-blue-200/10 to-transparent dark:from-blue-500/5 -z-10"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-20 max-w-7xl mx-auto"
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg">
            Learn Smarter, Not Harder
          </p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {text.split("AI Tutor")[0]}
            <span className="text-blue-600 dark:text-blue-400">
              {text.includes("AI Tutor") ? "AI Tutor" : ""}
            </span>
          </motion.h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Learn smarter with an AI tutor that asks, understands, and
            recommends what suits you best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            {isSignedIn ? (
              <Link href="/dashboard">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                  Go to Dashboard
                </button>
              </Link>
            ) : (
              <>
                <SignUpButton mode="redirect">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                    Get Started
                  </button>
                </SignUpButton>
                {/* <SignInButton mode="redirect">
                  <button className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                    Sign In
                  </button>
                </SignInButton> */}
              </>
            )}
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/ai-tutor.png"
            alt="AI Tutor Mascot"
            className="max-w-full h-auto"
            width={350}
            height={350}
            priority
          />
        </motion.div>
      </section>

      {/* Sections */}
      <section
        id="how-it-works"
        className="border-t border-gray-200 dark:border-gray-800"
      >
        <HowItWorks />
      </section>

      <section
        id="who-its-for"
        className="border-t border-gray-200 dark:border-gray-800"
      >
        <WhoItsFor />
      </section>

      <section
        id="why-us"
        className="border-t border-gray-200 dark:border-gray-800"
      >
        <WhyUs />
      </section>
    </div>
  );
}
