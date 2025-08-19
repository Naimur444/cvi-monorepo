"use client";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Career = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="  py-10 md:py-16">
      <motion.div
        className="max-w-7xl mx-auto w-full bg-[#181818] p-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Text Content */}
          <motion.div
            className="space-y-5 md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-[#BDBDBD] tracking-wide uppercase text-sm">
              Career Opportunities
            </p>
            <h3 className="text-2xl md:text-4xl font-bold text-[#057C80] leading-snug">
              Careers at Cloud Vortex Innovation
            </h3>
            <p className="text-[#EFEFEF] leading-relaxed max-w-lg">
              If so, you might be the next great addition to the Cloud Vortex
              Innovation team. Join us — and let’s innovate the future together.
            </p>

            <a href="/career">
              <button className="px-6 py-2 bg-[#057C80] hover:bg-[#046469] transition-colors duration-300 rounded-md text-white shadow-lg shadow-[#057C80]/40">
                Join Our Team
              </button>
            </a>
          </motion.div>

          {/* Image with Glow */}
          <motion.div
            className="relative flex justify-center items-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <Image
                src="/career.png"
                alt="career"
                width={500}
                height={500}
                className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] object-contain drop-shadow-[0_0_30px_rgba(5,124,128,0.4)]"
              />
              {/* Optional subtle background glow */}
              <div className="absolute inset-0 rounded-full blur-3xl bg-[#057C80]/20 -z-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Career;
