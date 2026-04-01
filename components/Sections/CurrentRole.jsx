"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function CurrentRole() {
  const { isDark } = useTheme();

  const experiences = [
    {
      title: "Software Developer",
      company: "Samarth eGov (MoE)",
      period: "April 2024 – Present",
      description: "Building national-level admission and academic portals for 16+ departments and 50+ universities. Specializing in scalable architectures, high-performance systems, secure payment gateways, and AWS deployments used by millions of students across India.",
      skills: ["React", "Node.js", "AWS", "Microservices"]
    },
    {
      title: "Software Developer Associate",
      company: "The Magiicians",
      period: "February 2023 – March 2024",
      description: "Delivered 10+ production-ready applications across LMS, fintech, gaming, and e-commerce platforms. Built secure wallet systems, real-time transaction modules, CI/CD pipelines, and scalable backend services.",
      skills: ["PHP (Yii2)", "React", "PostgreSQL", "CI/CD"]
    }
  ];

  return (
    <section id="current-role" className="relative min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 lg:px-24 w-full space-y-20">

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
            Experience
            <span className="w-12 h-[2px] bg-current"></span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${isDark ? "text-white" : "text-gray-900"
            }`}>
            Professional <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-cyan-400 to-purple-500" : "from-rose-500 to-amber-500"
              }`}>Journey</span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-500/20 before:to-transparent">

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Timeline Marker */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 ${isDark
                ? "bg-gray-900 border-cyan-500 shadow-cyan-500/20"
                : "bg-white border-rose-500 shadow-rose-500/20"
                }`}>
                <div className={`w-3 h-3 rounded-full ${isDark ? "bg-cyan-400" : "bg-rose-500"}`}></div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)]"
              >
                <div className={`p-8 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group-hover:shadow-3xl ${isDark
                  ? "bg-gray-900/60 border-gray-800 text-gray-300 hover:border-cyan-500/30 hover:shadow-cyan-500/10"
                  : "bg-white/60 border-gray-200 text-gray-700 hover:border-rose-500/30 hover:shadow-rose-500/10"
                  }`}>
                  {/* Subtle shine on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {exp.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <span className={`font-bold ${isDark ? "text-cyan-400" : "text-rose-600"}`}>
                      {exp.company}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full border ${isDark ? "bg-gray-800/50 border-gray-700 text-gray-400" : "bg-gray-100 border-gray-200 text-gray-500"
                      }`}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${isDark
                        ? "bg-cyan-500/5 border-cyan-500/20 text-cyan-300"
                        : "bg-rose-500/5 border-rose-500/20 text-rose-600"
                        }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
