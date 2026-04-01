"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Redux", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SASS", "Bootstrap", "Tailwind CSS"],
      color: isDark ? "from-cyan-500/20 to-blue-500/20" : "from-cyan-400/20 to-blue-400/20",
      border: isDark ? "border-cyan-500/30" : "border-cyan-400/30",
      shadow: isDark ? "shadow-cyan-500/10" : "shadow-cyan-400/10",
      text: isDark ? "text-cyan-400" : "text-cyan-600"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "PHP (Yii2)", "Express.js", "REST APIs", "Python (FastAPI)", "JWT Auth", "Microservices"],
      color: isDark ? "from-purple-500/20 to-pink-500/20" : "from-purple-400/20 to-pink-400/20",
      border: isDark ? "border-purple-500/30" : "border-purple-400/30",
      shadow: isDark ? "shadow-purple-500/10" : "shadow-purple-400/10",
      text: isDark ? "text-purple-400" : "text-purple-600"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Azure SQL", "Redis", "Query Optimization", "Data Modeling"],
      color: isDark ? "from-emerald-500/20 to-teal-500/20" : "from-emerald-400/20 to-teal-400/20",
      border: isDark ? "border-emerald-500/30" : "border-emerald-400/30",
      shadow: isDark ? "shadow-emerald-500/10" : "shadow-emerald-400/10",
      text: isDark ? "text-emerald-400" : "text-emerald-600"
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS (EC2, S3)", "Docker", "GitLab CI/CD", "Git", "GitHub Actions", "Linux", "Nginx"],
      color: isDark ? "from-amber-500/20 to-orange-500/20" : "from-amber-400/20 to-orange-400/20",
      border: isDark ? "border-amber-500/30" : "border-amber-400/30",
      shadow: isDark ? "shadow-amber-500/10" : "shadow-amber-400/10",
      text: isDark ? "text-amber-400" : "text-amber-600"
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className={`uppercase tracking-[0.4em] font-extrabold text-sm md:text-base flex items-center justify-center gap-4 mb-4 ${isDark ? "text-emerald-400" : "text-emerald-600"
            }`}>
            <span className="w-12 h-[2px] bg-current"></span>
            Expertise
            <span className="w-12 h-[2px] bg-current"></span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight tracking-tight ${isDark ? "text-white" : "text-gray-900"
            }`}>
            Technical <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-emerald-400 to-cyan-500" : "from-emerald-500 to-teal-500"
              }`}>Skills & Tools</span>
          </h2>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-3xl backdrop-blur-xl border shadow-xl overflow-hidden group transition-all duration-300 ${isDark
                ? "bg-gray-900/60 border-gray-800 hover:border-gray-700"
                : "bg-white/60 border-gray-200 hover:border-gray-300"
                } ${category.shadow}`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {category.title}
                  </h3>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border ${category.border} ${isDark ? "bg-gray-800" : "bg-white"
                    }`}>
                    {category.icon}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 border ${isDark
                        ? "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
                        : "bg-white/50 border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                        } hover:shadow-lg hover:-translate-y-1`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
