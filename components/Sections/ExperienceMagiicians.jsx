"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/providers/ThemeProvider";

/* Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ExperienceMagiicians() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience-magiicians"
      className={`min-h-screen transition-colors duration-700 ${
        isDark ? "bg-black text-white" : "bg-[#FFF7E6] text-[#1A1A1A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p
            className={`uppercase tracking-[0.35em] font-extrabold text-sm mb-4 ${
              isDark ? "text-cyan-400" : "text-amber-700"
            }`}
          >
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Software Developer Associate – The Magiicians
          </h2>

          <p className={`${isDark ? "text-gray-400" : "text-[#5A4A2E]"}`}>
            February 2023 – March 2024
          </p>
        </motion.div>

        {/* TOP CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Full-Stack Application Portfolio
          </h3>

          <p className={`leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-[#5A4A2E]"}`}>
            Delivered 10+ production-ready applications across domains including
            Learning Management Systems, gaming platforms, banking solutions,
            and e-commerce platforms. Each project demonstrated versatility in
            adapting to unique business requirements and technical constraints.
          </p>

          <h4 className="text-xl font-semibold mb-3">
            Student LMS Platform
          </h4>

          <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-[#5A4A2E]"}`}>
            Architected and deployed a Learning Management System serving over
            5,000 active learners. Implemented real-time progress tracking,
            assessment modules, and interactive course delivery features.
          </p>
        </motion.div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Wallet & Transaction System",
              desc: "Developed secure wallet and transaction modules processing 50K+ transactions with encryption and audit trails.",
            },
            {
              title: "Agile Delivery",
              desc: "Collaborated in Agile teams improving sprint delivery efficiency by 20% through code reviews and CI pipelines.",
            },
            {
              title: "CI/CD Excellence",
              desc: "Implemented CI/CD pipelines achieving 95% on-time release success rate.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              className={`p-8 rounded-xl border transition-all hover:scale-[1.03] ${
                isDark
                  ? "bg-white/5 border-white/10 text-gray-300"
                  : "bg-white border-gray-200 text-[#3A2A14]"
              }`}
            >
              <h4 className="text-xl font-semibold mb-4">
                {card.title}
              </h4>

              <p className="text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
