
'use client';

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor } from "../../lib/theme-utils";

export default function Diamond() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { isDarkMode } = useTheme();
  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-20"
      style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Speeding Up Success: Double Diamond
        </motion.h2>
        <motion.p
          className="text-lg mb-16"
          style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Flexible, fast and goal-oriented. At CVI, Agile UI/UX Design approach delivers results.
        </motion.p>
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/diamond.png"
            alt="Diamond"
            width={1000}
            height={1000}
            className="object-contain max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
