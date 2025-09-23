"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils";
import { Marquee, MarqueeContent, MarqueeItem } from "../ui/shadcn-io/marquee";

const Mission = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { isDarkMode } = useTheme();
  const missionItems = [
    {
      id: 1,
      title: "Accessible",
      emoji: "/emoji-frame.svg",
      description:
        "We aim to create an inclusive technological ecosystem where all components are accessible to everyone here.",
    },

    {
      id: 2,
      title: "Standard",
      emoji: "/standard.svg",
      description:
        "Our major commitment is to adhere to ensuring international standards for all.",
    },
    {
      id: 3,
      title: "Technology",
      emoji: "/technology.svg",
      description:
        "There is no compromise to pioneer advanced technologies that enhance connectivity and create sustainable growth for businesses of all sizes.",
    },
    {
      id: 4,
      title: "Solution",
      emoji: "/solution.svg",
      description:
        "We are driven to spearhead the creation of groundbreaking IT solutions that empower brands to flourish in a dynamic digital landscape.",
    },
  ];

  return (
    <div ref={sectionRef} className=" py-10 md:py-16 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-4xl leading-[60px] tracking-[12.48px] uppercase text-center font-semibold mb-10"
          style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Our Vision is Guided By A <br /> Powerful Mission
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 md:mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {missionItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="p-4 rounded-2xl space-y-4 max-w-xs mx-auto cursor-pointer group"
              style={{height: '280px', backgroundColor: getCardBackgroundColor(isDarkMode)}}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.15,
                ease: "easeOut",
                // Separate transitions for different properties
                y: { type: "spring", stiffness: 300, damping: 30 },
                scale: { type: "spring", stiffness: 400, damping: 25 },
                boxShadow: { duration: 0.2, ease: "easeOut" },
                backgroundColor: { duration: 0.2, ease: "easeOut" }
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: isDarkMode
                  ? "0 32px 64px -12px rgba(5, 124, 128, 0.25)"
                  : "0 32px 64px -12px rgba(14, 79, 83, 0.25)"
                // Removed backgroundColor to prevent white background in dark mode
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
            >
              <motion.div
                className="text-xl p-2 rounded-lg flex items-center justify-center w-10 h-10 relative overflow-hidden"
                style={{
                  color: getAccentColor(isDarkMode),
                  backgroundColor: `${getAccentColor(isDarkMode)}33`
                }}
                transition={{
                  scale: { type: "spring", stiffness: 500, damping: 25 },
                  rotate: { type: "spring", stiffness: 400, damping: 20 },
                  backgroundColor: { duration: 0.15, ease: "easeOut" }
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                  backgroundColor: getAccentColor(isDarkMode)
                }}
              >
                <motion.div
                  transition={{
                    filter: { duration: 0.15, ease: "easeOut" }
                  }}
                  whileHover={{
                    filter: "brightness(0) invert(1)"
                  }}
                >
                  <Image
                    src={item.emoji}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </motion.div>
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold"
                style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                transition={{
                  color: { duration: 0.15, ease: "easeOut" },
                  scale: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileHover={{
                  color: getAccentColor(isDarkMode),
                  scale: 1.05
                }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className=""
                style={{
                  color: isDarkMode ? getThemeColor(isDarkMode, 'mutedText') : '#000000'
                }}
                transition={{
                  color: { duration: 0.15, ease: "easeOut" }
                }}
                whileHover={{
                  color: isDarkMode ? getThemeColor(isDarkMode, 'secondaryText') : "#2D2D2D"
                }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl md:text-4xl text-center font-bold mb-6"
            style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            Trusted by 12+ Companies Worldwide
          </motion.h2>
          <motion.p
            className="text-center md:w-9/12 md:mx-auto mb-10"
            style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            Experience and Expertise You Can Count On. Our team has a proven
            track record of delivering top-quality solutions for businesses
            across a variety of industries.
          </motion.p>

          <motion.div
            className="pt-[42px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          >
            <Marquee className="w-full py-4">
              <MarqueeContent speed={50} direction="left">
                {[
                  { src: "/wrongs.png", alt: "wrongs" },
                  { src: "/zen.png", alt: "zen" },
                  { src: "/tree.png", alt: "tree" },
                  { src: "/t.png", alt: "t" },
                  { src: "/security.png", alt: "security" },
                  { src: "/insight.png", alt: "insight" }
                ].map((logo) => (
                  <MarqueeItem key={logo.alt} className="mx-8">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={170}
                      height={70}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mission;
