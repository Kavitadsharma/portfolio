"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function Education() {
  const { isDark } = useTheme();

  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Indira Gandhi National Open University",
      period: "2024 – Present",
      score: "72%",
      description: "Advanced software engineering, system design, scalable architecture, and enterprise application development.",
      icon: "🎓"
    },
    {
      degree: "Bachelor of Science",
      institution: "University of Delhi",
      period: "2015 – 2018",
      score: "70%",
      description: "Built strong analytical foundations in mathematics, statistics, and computer science fundamentals.",
      icon: "🏛️"
    }
  ];

  return (
    <section id="education" className="relative min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>

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
            Education
            <span className="w-12 h-[2px] bg-current"></span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${isDark ? "text-white" : "text-gray-900"
            }`}>
            Academic <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-purple-400 to-cyan-500" : "from-amber-500 to-rose-500"
              }`}>Foundation</span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-500/20 before:to-transparent">

          {educationList.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Timeline Marker */}
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 text-xl ${isDark
                ? "bg-gray-900 border-purple-500 shadow-purple-500/20"
                : "bg-white border-amber-500 shadow-amber-500/20"
                }`}>
                {item.icon}
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
                  ? "bg-gray-900/60 border-gray-800 text-gray-300 hover:border-purple-500/30 hover:shadow-purple-500/10"
                  : "bg-white/60 border-gray-200 text-gray-700 hover:border-amber-500/30 hover:shadow-amber-500/10"
                  }`}>
                  {/* Subtle shine on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {item.degree}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <span className={`font-bold ${isDark ? "text-purple-400" : "text-amber-600"}`}>
                      {item.institution}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full border ${isDark ? "bg-gray-800/50 border-gray-700 text-gray-400" : "bg-gray-100 border-gray-200 text-gray-500"
                      }`}>
                      {item.period}
                    </span>
                  </div>

                  <p className="leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className={`inline-block text-sm font-bold px-4 py-2 rounded-xl border ${isDark
                    ? "bg-purple-500/10 border-purple-500/20 text-purple-300"
                    : "bg-amber-500/10 border-amber-500/20 text-amber-700"
                    }`}>
                    Score: {item.score}
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
