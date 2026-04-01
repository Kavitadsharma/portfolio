"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function Certification() {
  const { isDark } = useTheme();

  return (
    <section id="certification" className="relative min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className={`uppercase tracking-[0.4em] font-extrabold text-sm md:text-base flex items-center justify-center gap-4 mb-4 ${isDark ? "text-cyan-400" : "text-rose-600"
            }`}>
            <span className="w-12 h-[2px] bg-current"></span>
            Certification
            <span className="w-12 h-[2px] bg-current"></span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${isDark ? "text-white" : "text-gray-900"
            }`}>
            Professional <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-cyan-400 to-purple-500" : "from-rose-500 to-amber-500"
              }`}>Credentials</span>
          </h2>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE WITH 3D HOVER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center perspective-[1000px]"
          >
            <div className={`relative p-2 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-300 ${isDark
              ? "bg-gray-900/40 border-gray-800 shadow-cyan-500/20"
              : "bg-white/40 border-gray-200 shadow-rose-500/20"
              }`}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-xl opacity-50 -z-10"></div>
              <div className="relative overflow-hidden rounded-2xl bg-white p-4">
                <Image
                  src="/certificate.png"
                  alt="Certification Badge"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: DETAILS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className={`p-10 rounded-3xl backdrop-blur-xl border shadow-2xl relative overflow-hidden ${isDark
              ? "bg-gray-900/60 border-gray-800 text-gray-300"
              : "bg-white/60 border-gray-200 text-gray-700"
              }`}>
              {/* Shine effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent blur-2xl rounded-full"></div>

              <h3 className={`text-3xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                Full Stack Web Development
              </h3>

              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border ${isDark
                ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                : "bg-rose-500/10 text-rose-600 border-rose-500/20"
                }`}>
                <span>🏅</span> Masai School — 2023
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Completed an intensive, industry-focused engineering bootcamp. Mastered <strong>Data Structures, Algorithms, and System Design</strong> alongside building real-world Full Stack applications from scratch.
              </p>

              <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/40 border-gray-800" : "bg-gray-50/50 border-gray-200"
                }`}>
                <h4 className={`text-sm tracking-wider uppercase font-bold mb-3 ${isDark ? "text-purple-400" : "text-amber-600"
                  }`}>
                  Core Competencies Verified
                </h4>
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center gap-2"><span>⚡</span> Advanced React</li>
                  <li className="flex items-center gap-2"><span>⚡</span> Node.js & Express</li>
                  <li className="flex items-center gap-2"><span>⚡</span> Relational Databases</li>
                  <li className="flex items-center gap-2"><span>⚡</span> API Architecture</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
