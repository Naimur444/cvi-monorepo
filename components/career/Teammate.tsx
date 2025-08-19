"use client"

import React, { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getAccentColor } from "../../lib/theme-utils";
import { Rocket, Globe, Users, Award, TrendingUp, Trophy } from "lucide-react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Accelerated Growth",
    description:
      "We craft personalized learning journeys, offer mentorship, and empower you to set and surpass career goals, fostering rapid professional development.",
    icon: Rocket,
  },
  {
    id: 2,
    title: "Versatile Experience",
    description:
      "We expose you to diverse projects, encouraging cross-domain exploration, cultivating adaptability, and enriching your skill set for dynamic growth.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Supportive Community",
    description:
      "We nurture collaboration, communication, knowledge sharing, and relationships to empower every team member in a supportive environment.",
    icon: Users,
  },
  {
    id: 4,
    title: "Recognition",
    description:
      "We value your contributions and achievements, spotlighting your accomplishments to fuel motivation and affirm the impact you bring to our team.",
    icon: Award,
  },
  {
    id: 5,
    title: "Shared Success",
    description:
      "We believe in collective success, fostering a culture where shared goals, teamwork, and mutual support lead to accomplishments that resonate throughout the team.",
    icon: Trophy,
  },
  {
    id: 6,
    title: "Future-Focused",
    description:
      "We drive innovation, keeping you engaged with cutting-edge projects, ensuring your work directly shapes our forward-looking approach and paves the way for your progress.",
    icon: TrendingUp,
  },
];

const Teammate: React.FC = () => {
  const { isDarkMode } = useTheme();
  // Theme colors
  const textColor = isDarkMode ? "#ffffff" : "#181818";
  const descColor = isDarkMode ? "#d1d5db" : "#4b5563";
  const dividerColor = isDarkMode ? "#374151" : "#e5e7eb";
  const accent = getAccentColor(isDarkMode);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-12 text-left"
          style={{ color: textColor }}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Being Our Teammate
        </motion.h2>
        {/* 2x3 Grid with dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* First Row */}
          {items.slice(0, 3).map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`px-4 py-8 border-b ${idx < 2 ? 'md:border-r' : ''}`}
                style={{ borderColor: dividerColor, minHeight: '240px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-4">
                  <IconComponent size={24} style={{ color: accent }} />
                  <h3 className="font-semibold text-lg leading-tight" style={{ color: textColor }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: descColor }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
          {/* Second Row */}
          {items.slice(3, 6).map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`px-4 py-8 ${idx < 2 ? 'md:border-r' : ''}`}
                style={{ borderColor: dividerColor, minHeight: '240px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-4">
                  <IconComponent size={24} style={{ color: accent }} />
                  <h3 className="font-semibold text-lg leading-tight" style={{ color: textColor }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: descColor }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Teammate;
