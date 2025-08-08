"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HowItWorks from "./_components/Howitworks";
import WhoItsFor from "./_components/Whoitsfor";
import WhyUs from "./_components/Whyus";

function Home() {
  const [text, setText] = useState("");
  const fullText = "Meet Your Personal AI Tutor";
  const typingSpeed = 70;

  useEffect(() => {
    // if the page was opened with a hash, try to scroll to it after mount
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      // small delay so content has rendered
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
    <div className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Gradient Background Effects */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-300/20 to-transparent dark:from-blue-900/20 -z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-blue-200/10 to-transparent dark:from-blue-900/10 -z-10"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-20 max-w-7xl mx-auto"
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-blue-600 dark:text-blue-500 font-semibold text-base md:text-lg">
            Learn Smarter, Not Harder
          </p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {text.split("AI Tutor")[0]}
            <span className="text-blue-600 dark:text-blue-500">
              {text.includes("AI Tutor") ? "AI Tutor" : ""}
            </span>
          </motion.h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Learn smarter with an AI tutor that asks, understands, and
            recommends what suits you best.
          </p>

          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/get-started">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
          </motion.div>
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
      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="who-its-for">
        <WhoItsFor />
      </section>

      <section id="why-us">
        <WhyUs />
      </section>
    </div>
  );
}

export default Home;
