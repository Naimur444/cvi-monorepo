"use client"

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { getAccentColor } from "../../lib/theme-utils";

const Revolution = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const items = [
    {
      id: 1,
      title: "Software",
      icon: "/software.svg",
      description:
        "We excel in web, app, and software development, delivering tailored solutions that drive digital transformation across the software industry landscape.",
    },

    {
      id: 2,
      title: "Startup",
      icon: "/startup.svg",
      description:
        "Let's empower startups with MVP development, cloud infrastructure, and technology consulting for efficient scaling and market success. ",
    },

    {
      id: 3,
      title: "E-Commerce",
      icon: "/e-commerce.svg",
      description:
        "CVI’s state-of-the-art solutions empower e-commerce ecosystems with AI-enhanced data analytics, predictive customer behavior modeling, and seamless omnichannel integration.  ",
    },
    {
      id: 4,
      title: "Education",
      icon: "/education.svg",
      description:
        "Can be revolutionized through CVI's advanced solutions and technological support, fostering personalized, accessible, and future-ready learning experiences globally.",
    },
    {
      id: 5,
      title: "Healthcare",
      icon: "/healthcare.svg",
      description:
        "By integrating CVI’s advanced technology, healthcare can offer more accurate diagnostics, faster treatments, and seamless communication, transforming patient care and outcomes.",
    },
    {
      id: 6,
      title: "Real Estate",
      icon: "/real-estate.svg",
      description:
        "By integrating CVI’s advanced technology, healthcare can offer more accurate diagnostics, faster treatments, and seamless communication, transforming patient care and outcomes.",
    },
    {
      id: 7,
      title: "Food & Beverage",
      icon: "/food-beverage.svg",
      description:
        "CVI’s technology-driven approach transforms the Food & Beverage sector by streamlining workflow management, enhancing customer interactions, and delivering deep market insights.",
    },
    {
      id: 8,
      title: "Manufacturing",
      icon: "/manufacturing.svg",
      description:
        "CVI’s advanced digital solutions revolutionize Manufacturing by integrating smart automation, optimizing resource utilization, and delivering data-driven operational strategies.",
    },

    {
      id: 9,
      title: "Retail",
      icon: "/retail.svg",
      description:
        "CVI’s advanced digital solutions revolutionize Retail by integrating AI-driven analytics, enhancing omnichannel experiences, and maximizing operational efficiency.",
    },
  ];

  return (
    <div ref={sectionRef} className="bg-[#181818] mt-[60px] px-6 pt-10 md:pt-16">
      <motion.div
        className="max-w-7xl mx-auto pt-[66px] pb-[116px]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-4xl text-center font-semibold text-[#EFEFEF] mb-6 leading-[1.2]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Revolutionizing Industries <br /> Through Advanced Solutions.
        </motion.h2>
        <motion.p
          className="text-[#EFEFEF] text-center md:w-9/12 md:mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          CVI transcends conventional IT solutions, delivering transformative
          technologies <br /> tailored to the unique demands of the given
          industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="p-4"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="p-3 rounded-lg flex items-center justify-center w-12 h-12"
                  style={{ backgroundColor: getAccentColor(isDarkMode) }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: isDarkMode ? "#046B70" : "#0A3D41"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold mt-4"
                  style={{ color: getAccentColor(isDarkMode) }}
                  whileHover={{ color: isDarkMode ? "#046B70" : "#0A3D41" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-[#989898] mt-2 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Revolution;
