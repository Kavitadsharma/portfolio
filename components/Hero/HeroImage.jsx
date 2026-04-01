"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function HeroImage() {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Outer Glowing Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className={`absolute inset-[-30px] rounded-full border border-dashed ${isDark ? "border-cyan-500/30" : "border-rose-500/30"
          }`}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className={`absolute inset-[-15px] rounded-full border ${isDark ? "border-purple-500/40" : "border-amber-500/40"
          }`}
      />

      {/* Main Image Container */}
      <div
        className={`relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl ${isDark
            ? "shadow-cyan-500/20 ring-4 ring-cyan-500/30"
            : "shadow-rose-500/20 ring-4 ring-rose-500/30"
          }`}
      >
        <Image
          src="/index.png"
          alt="Kavita Sharma"
          fill
          className="object-cover"
          priority
        />
        {/* Inner glow overlay */}
        <div className={`absolute inset-0 rounded-full mix-blend-overlay ${isDark ? "bg-gradient-to-tr from-cyan-500/20 to-purple-500/20" : "bg-gradient-to-tr from-rose-500/20 to-amber-500/20"
          }`}></div>
      </div>

      {/* Floating 3D Badges */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className={`absolute top-4 left-0 md:-left-8 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg border ${isDark ? "bg-gray-900/60 border-gray-700/50 text-cyan-400" : "bg-white/60 border-gray-200/50 text-rose-600"
          }`}
      >
        <span className="font-bold tracking-wider text-sm flex items-center gap-2">
          <span>⚛️</span> React
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className={`absolute bottom-10 right-0 md:-right-4 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg border ${isDark ? "bg-gray-900/60 border-gray-700/50 text-purple-400" : "bg-white/60 border-gray-200/50 text-amber-600"
          }`}
      >
        <span className="font-bold tracking-wider text-sm flex items-center gap-2">
          <span>🚀</span> Node.js
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
        className={`absolute top-1/2 -right-6 md:-right-12 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg border ${isDark ? "bg-gray-900/60 border-gray-700/50 text-blue-400" : "bg-white/60 border-gray-200/50 text-blue-600"
          }`}
      >
        <span className="font-bold tracking-wider text-sm flex items-center gap-2">
          <span>🐘</span> PHP
        </span>
      </motion.div>

    </motion.div>
  );
}
