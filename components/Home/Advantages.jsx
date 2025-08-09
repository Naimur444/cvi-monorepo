"use client"

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Advantages = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className=" py-10 md:py-16">
      <motion.div
        className="max-w-7xl w-full mx-auto px-6 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-4xl  text-center font-semibold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Advantages Of Choosing CVI
        </motion.h2>
        <motion.p
          className="  text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          By utilizing our full off-shore team of experienced software
          developers, responsible <br /> American companies are enjoying an
          impressive range of benefits.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] w-full min-h-[420px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full h-[300px] md:h-[420px]"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/advantages.png"
              alt="Miro"
              fill
              className="object-contain"
            />

            {/* Overlay using flex to center it top-left in a responsive way */}
            <motion.div
              className="absolute left-2 sm:left-0 md:-left-2 top-4 sm:top-6 md:-top-2 flex items-start justify-start p-2 sm:p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="bg-[#0E4F53] p-3 sm:p-4 rounded-xl sm:rounded-2xl w-40 sm:w-48 md:w-64"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-4">
                  4+
                </h2>
                <p className="text-sm sm:text-base text-white font-semibold">Years of Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <motion.h3
              className="text-xl md:text-2xl font-bold   mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              Cost Savings By 50%
            </motion.h3>
            <motion.p
              className="text-[#7C7C7C] mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              By working with our custom software company, our clients can save
              at least 50% on their software development costs. Our personalized
              solutions are designed specifically for the needs and goals of
              each client, ensuring that they get the most value for their
              investment. We work closely with our clients to understand their
              unique needs and create software that fits their workflow and
              processes, helping to streamline operations and improve
              efficiency.
            </motion.p>

            <motion.h3
              className="text-xl md:text-2xl font-bold   mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              Quality Assurance
            </motion.h3>
            <motion.p
              className="text-[#7C7C7C] mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              Our dedicated team ensures the highest quality standards through
              rigorous testing and quality assurance processes. We deliver
              reliable, scalable, and maintainable software solutions that
              exceed client expectations and industry standards.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Advantages;
