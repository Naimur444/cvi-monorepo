
'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor } from "../../lib/theme-utils";

const designItems = [
  {
    id: 1,
    title: "Information Architecture (I.A)",
    icon: "/architecture.svg",
    description:
      "I.A. is organizing and labelling content to make it easy for users to find what they’re looking for.",
  },
  {
    id: 2,
    title: "User Experience (UX)",
    icon: "/user-experience.svg",
    description:
      "UX refers to how easy, efficient, and enjoyable the interaction is with your custom software.",
  },
  {
    id: 3,
    title: "User Interface (UI)",
    icon: "/user-interface.svg",
    description:
      "CVI designs user-friendly interfaces to improve client experience.",
  },
  {
    id: 4,
    title: "SRS/PRD",
    icon: "/srs-ui.svg",
    description:
      "It’s the functional and non-functional requirements for your custom software.",
  },
];

export default function Design() {

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
        className="max-w-7xl mx-auto w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl font-[600]"
          style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          What We Do in Design
        </motion.h2>
        <motion.p
          className="mt-4 pt-4 mx-auto text-lg"
          style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Ensuring Success through Quality Assurance, Timely Delivery, Scalability, and Collaboration.
        </motion.p>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {designItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center text-center pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.15, ease: "easeOut" }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3
                className="font-semibold mb-4 text-lg"
                style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
              >
                {item.title}
              </h3>
              <p style={{ color: getThemeColor(isDarkMode, 'mutedText') }}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
