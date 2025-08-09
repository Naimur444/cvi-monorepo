"use client"

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// Custom hook for counting animation
const useCountAnimation = (end, duration = 2, delay = 0) => {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, end, {
      duration,
      delay,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setCount(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionValue, rounded, end, duration, delay]);

  return count;
};

// Component for animated counter
const AnimatedCounter = ({ value, suffix = "", isInView, delay = 0 }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const count = useCountAnimation(isInView ? numericValue : 0, 2, delay);

  // Format the number based on whether it's a decimal
  const formatNumber = (num) => {
    if (value.includes('.')) {
      return num.toFixed(1);
    }
    return Math.round(num);
  };

  return (
    <motion.span
      initial={{ scale: 0.8 }}
      animate={isInView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.3, delay: delay + 0.5 }}
    >
      {formatNumber(count)}
      {suffix}
    </motion.span>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="py-10 md:py-16 mt-10 px-6">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center mb-10 md:mb-16 min-h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col gap-4 md:items-start md:justify-center w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1
            style={{ fontSize: '39px', lineHeight: '120%', fontWeight: 700 }}
            className=""
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Empowering <br /> Business With
          </motion.h1>
          <motion.h1
            style={{ fontSize: '39px', lineHeight: '120%', fontWeight: 700 }}
            className="text-[#0E4F53] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Cloud Vortex Innovation
          </motion.h1>

          <motion.p
            className=" font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            in — Digital Era
          </motion.p>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end ml-auto"
          style={{ height: '400px' }}
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/hero-image.png"
            alt="Hero"
            width={1200}
            height={600}
            className="rounded-sm w-full h-full"
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:items-center md:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-16">
          {[
            { number: "4", suffix: "+", label: "Years of Experience" },
            { number: "50", suffix: "+", label: "Project Completed" },
            { number: "45", suffix: "+", label: "Happy Clients" },
            { number: "4.9", suffix: "", label: "Client Feedbacks" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="text-center flex-1 min-w-0 py-2 sm:py-3"
            >
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E4F53] mb-1"
                animate={isInView ? {
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.2,
                  ease: "easeInOut"
                }}
              >
                <AnimatedCounter
                  value={stat.number}
                  suffix={stat.suffix}
                  isInView={isInView}
                  delay={0.8 + index * 0.2}
                />
              </motion.h3>
              <motion.p
                className="text-xs sm:text-sm md:text-base font-semibold leading-tight px-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
