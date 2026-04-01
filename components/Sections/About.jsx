"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="relative min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Ambient Orbs (Matching Hero) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <motion.div
                className={`uppercase tracking-[0.4em] font-extrabold text-sm md:text-base flex items-center gap-4 mb-4 ${isDark ? "text-cyan-400" : "text-rose-600"
                  }`}
              >
                <span className="w-12 h-[2px] bg-current"></span>
                About Me
              </motion.div>

              <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${isDark ? "text-white" : "text-gray-900"
                }`}>
                Software Engineer & <br />
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-cyan-400 to-purple-500" : "from-rose-500 to-amber-500"
                  }`}>
                  Full Stack Developer
                </span>
              </h2>
            </div>

            <div className={`space-y-6 text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"
              }`}>
              <p>
                As a Full Stack Developer with <strong>3+ years of experience</strong>, I specialize in building
                scalable, high-performance web applications. I've engineered solutions for government portals, fintech platforms,
                and enterprise ecosystems—designing responsive, secure, and reliable systems that serve millions.
              </p>

              <p>
                My technical foundation spans across <strong>React, PHP (Yii2), Node.js, and AWS</strong>. From optimizing database performance to developing intuitive, seamless user interfaces, I focus on delivering production-ready, feature-rich platforms.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Skills/Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Frontend", desc: "React, Next.js, Framer Motion", icon: "🎨" },
              { title: "Backend", desc: "Node.js, PHP (Yii2), REST APIs", icon: "⚙️" },
              { title: "Architecture", desc: "Microservices, AWS, Docker", icon: "🏗️" },
              { title: "Performance", desc: "Optimization, Scalability, Security", icon: "⚡" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl backdrop-blur-xl border flex flex-col gap-4 shadow-xl transition-all duration-300 ${isDark
                  ? "bg-gray-900/40 border-gray-800 hover:border-cyan-500/50 hover:shadow-cyan-500/10"
                  : "bg-white/40 border-gray-200 hover:border-rose-500/50 hover:shadow-rose-500/10"
                  }`}
              >
                <div className="text-4xl">{skill.icon}</div>
                <div>
                  <h3 className={`font-bold text-xl mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {skill.title}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
