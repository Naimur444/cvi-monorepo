"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LiveProgressTracking = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <section ref={sectionRef} className="w-full px-6 py-16 collaboration-gradient text-white min-h-screen">
      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-2xl md:text-4xl text-white font-semibold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Live Progress Tracking
        </motion.h2>
        <motion.p 
          className="text-center text-[#DCDCDC] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Track progress and stay in control with our transparent system, which
          provides a comprehensive overview of progress.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/image-3.png"
              alt="Live Progress"
              width={500}
              height={500}
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl text-[#BDBDBD] font-bold mb-6">
              Jira Board
            </h2>
            <p className="text-[#989898] mb-6">
              At CVI, clients stay informed and involved with our Jira
              management tool, with the ability to view to-do, in-progress and
              completed tasks, as well as any issues and who is working on them,
              at any time.
            </p>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="space-y-2">
                <Image
                  src="/logos_atlassian.svg"
                  alt="atlassian"
                  width={40}
                  height={40}
                />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Atlassian
                </p>
              </div>

              <div className="space-y-2">
                <Image src="/devicon_jiraalign.svg" alt="jira" width={40} height={40} />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Jira
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl text-[#BDBDBD] font-bold mb-6">
              Development Milestone
            </h2>
            <p className="text-[#989898] mb-6">
              A comprehensive overview of your project&#39;s development milestones
              and timeline, providing a bird&#39;s eye view of progress and allowing
              clients to make informed decisions.
            </p>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="space-y-2">
                <Image
                  src="/logos_atlassian.svg"
                  alt="atlassian"
                  width={40}
                  height={40}
                />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Atlassian
                </p>
              </div>

              <div className="space-y-2">
                <Image src="/devicon_jiraalign.svg" alt="jira" width={40} height={40} />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Jira
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            <Image
              src="/image-3.png"
              alt="Live Progress"
              width={500}
              height={500}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default LiveProgressTracking
