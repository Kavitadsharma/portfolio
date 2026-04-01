"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function TypingTitle({ text }) {
  const [output, setOutput] = useState("");
  const [i, setI] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    setOutput("");
    setI(0);
  }, [text]);

  useEffect(() => {
    if (i < text.length) {
      const t = setTimeout(() => {
        setOutput((p) => p + text[i]);
        setI(i + 1);
      }, 60); // slightly faster typing
      return () => clearTimeout(t);
    }
  }, [i, text]);

  return (
    <div className="min-h-[140px] md:min-h-[160px] flex items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-cyan-400 via-blue-500 to-purple-600" : "from-rose-500 via-red-500 to-amber-500"
          }`}>
          {output}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className={`inline-block ml-2 w-[4px] h-[50px] md:h-[70px] align-middle ${isDark ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-rose-500 shadow-[0_0_10px_#f43f5e]"
            }`}
        />
      </h1>
    </div>
  );
}
