"use client";

import { motion } from "framer-motion";
import TypingTitle from "./TypingTitle";
import HeroImage from "./HeroImage";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const { isDark } = useTheme();
  const [typingKey, setTypingKey] = useState(0);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 overflow-hidden flex items-center justify-center max-w-7xl mx-auto px-8"
    >
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center w-full">
        {/* LEFT COMPONENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          onViewportEnter={() => setTypingKey((k) => k + 1)}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            {/* Available for Work Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border w-fit backdrop-blur-md shadow-lg ${isDark
              ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 font-medium"
              : "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 font-medium"
              }`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? "bg-cyan-400" : "bg-emerald-500"}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? "bg-cyan-500" : "bg-emerald-600"}`}></span>
              </span>
              <span className="text-xs tracking-wider uppercase">Available for Work</span>
            </div>

            <div className={`uppercase tracking-[0.4em] font-extrabold text-sm md:text-base flex items-center gap-4 ${isDark ? "text-cyan-400" : "text-rose-600"}`}>
              <span className="w-12 h-[2px] bg-current"></span>
              Kavita Sharma
            </div>
          </motion.div>

          {/* 🔁 Typing restarts */}
          <TypingTitle key={typingKey} text="Full Stack Developer" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg md:text-xl leading-relaxed max-w-xl ${isDark ? "text-gray-300" : "text-gray-700"
              }`}
          >
            I build scalable, high-performance web applications with a focus on modern design and intuitive user experiences. Specializing in <span className="font-semibold text-current">React, Node.js, and PHP</span> to deliver robust solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {/* <Link
              href="#projects"
              className={`px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark
                ? "bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-cyan-500/30"
                : "bg-rose-600 text-white hover:bg-rose-500 hover:shadow-rose-500/30"
                }`}
            >
              View My Work
            </Link> */}
            <Link
              href="#contact"
              className={`px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 ${isDark
                ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-cyan-500/20"
                : "border-rose-600 text-rose-600 hover:bg-rose-600/10 hover:shadow-rose-600/20"
                }`}
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
