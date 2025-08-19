"use client";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor } from "../../lib/theme-utils";

const Leadership = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { isDarkMode } = useTheme();

  return (
    <div ref={sectionRef} className="  py-10 md:py-20">
      <motion.div
        className="max-w-7xl mx-auto w-full p-6 rounded-lg"
        style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-6 text-center mb-10"
          style={{ color: getThemeColor(isDarkMode, 'primaryText') }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Our Leadership Team
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/ceo.png"
              alt="Shahriar"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/coo.jpg"
              alt="Shabab Musficul Islam"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Leadership;
