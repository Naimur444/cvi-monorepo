"use client";
import { BadgeCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils";

export default function ProcessSection() {
  // Theme context for dark/light mode
  const { isDarkMode } = useTheme();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const columns = [
    {
      title: "Collaboration",
      items: [
        "Regular check-ins",
        "Open communication",
        "Collaborative problem-solving",
        "Transparent progress tracking",
      ],
    },
    {
      title: "Timely delivery",
      items: [
        "Project management",
        "Clear milestones",
        "Regular updates",
        "Flexibility",
      ],
    },
    {
      title: "Quality assurance",
      items: [
        "Thorough testing",
        "Code review",
        "Automated testing",
        "User testing",
      ],
    },
    {
      title: "Future Development",
      items: [
        "Flexible architecture",
        "Modularity",
        "Code maintainability",
        "Future proofing",
      ],
    },
  ];
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
          Key Factors in CVI Process
        </motion.h2>
        <motion.p
          className="mt-4 pt-4 mx-auto text-lg"
          style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Ensuring Success through Collaboration, Timely Delivery, Quality Assurance and Scalability.
        </motion.p>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {columns.map((col, colIdx) => (
            <motion.div
              key={col.title}
              className="flex flex-col items-start text-left pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.5 + colIdx * 0.15, ease: "easeOut" }}
            >
              <div className="max-w-7xl mx-auto w-full">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: getAccentColor(isDarkMode) }}
                >
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center space-x-2 pt-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.7 + colIdx * 0.15 + i * 0.07, ease: "easeOut" }}
                    >
                      <BadgeCheck
                        className="h-5 w-5"
                        style={{ color: getAccentColor(isDarkMode) }}
                      />
                      <span style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
