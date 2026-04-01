"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="relative min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Ambient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>

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
            Contact
            <span className="w-12 h-[2px] bg-current"></span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${isDark ? "text-white" : "text-gray-900"
            }`}>
            Let's Build Something <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-cyan-400 to-purple-500" : "from-rose-500 to-amber-500"
              }`}>Great</span> Together
          </h2>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE WITH 3D HOVER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.05, translateY: -10 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center perspective-[1000px]"
          >
            <div className={`relative p-2 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-300 ${isDark
              ? "bg-gray-900/40 border-gray-800 shadow-cyan-500/20"
              : "bg-white/40 border-gray-200 shadow-rose-500/20"
              }`}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 blur-xl opacity-50 -z-10"></div>
              <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8 flex justify-center items-center">
                <Image
                  src="/contact.png"
                  alt="Professional handshake illustration"
                  width={380}
                  height={380}
                  className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
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
            <div className={`p-10 rounded-3xl backdrop-blur-xl border shadow-2xl relative overflow-hidden flex flex-col gap-10 ${isDark
              ? "bg-gray-900/60 border-gray-800 text-gray-300"
              : "bg-white/60 border-gray-200 text-gray-700"
              }`}>
              {/* Shine effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent blur-3xl rounded-full"></div>

              {/* Info Section */}
              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  <span className={isDark ? "text-cyan-400" : "text-rose-500"}>✦</span>
                  Contact Information
                </h3>

                <ul className="space-y-5 text-lg">
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className={`p-3 rounded-xl ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>📍</span>
                    <span>Noida, India</span>
                  </li>
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className={`p-3 rounded-xl ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>📧</span>
                    <a href="mailto:kavitadsharma899107@gmail.com" className={`hover:underline font-medium ${isDark ? "text-cyan-400 hover:text-cyan-300" : "text-rose-600 hover:text-rose-500"}`}>kavitadsharma899107@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className={`p-3 rounded-xl ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>📞</span>
                    <span>+91-8826548556</span>
                  </li>
                </ul>
              </div>

              {/* Socials / Links */}
              <div className="pt-6 border-t border-gray-500/20">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/kavita-sharma-851086268/"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg ${isDark
                      ? "bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 text-white hover:shadow-purple-500/20"
                      : "bg-amber-100 hover:bg-amber-500 border border-amber-200 text-amber-900 hover:text-white hover:shadow-amber-500/20"
                      }`}
                  >
                    <span>💼</span> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Kavitadsharma"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg ${isDark
                      ? "bg-gray-800/80 hover:bg-gray-700 border border-gray-700 text-white hover:shadow-gray-900/50"
                      : "bg-gray-100 hover:bg-gray-900 border border-gray-200 text-gray-900 hover:text-white hover:shadow-gray-400/50"
                      }`}
                  >
                    <span>💻</span> GitHub
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
