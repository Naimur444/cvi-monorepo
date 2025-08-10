"use client";
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils"

export default function AgileProcessSection() {
  // Theme context for dark/light mode
  const { isDarkMode } = useTheme()

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const phases = [
    {
      title: "Design Phase",
      items: [
        "Design Strategy",
        "Business Understanding",
        "Low fidelity wireframe",
        "Prototype",
        "Test",
        "Visual Screens",
      ],
    },
    {
      title: "Development Phase",
      items: [
        "Sprint Planning",
        "Product Backlog",
        "Database Architecture",
        "UI Implementation",
        "API Implementation",
        "Product Release",
      ],
    },
    {
      title: "Deploy & Testing Phase",
      items: [
        "Version Controlling",
        "Deployment Monitoring",
        "Test Case",
        "Functional & Non Functional",
        "API & Unit Testing",
        "Automation",
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32  ">
      <motion.div
        className="max-w-7xl mx-auto w-full px-6 md:px-0 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Speeding Up Success: Agile
        </motion.h2>
        <motion.p
          className="pt-8 max-w-3xl mx-auto text-lg"
          style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Flexible, fast and goal-oriented. CVI Agile software development approach delivers results.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15, ease: "easeOut" }}
            >
              <motion.div
                className="text-white px-6 py-4 rounded-lg font-semibold text-lg mb-6 w-full text-center"
                style={{ backgroundColor: getAccentColor(isDarkMode) }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15, ease: "easeOut" }}
              >
                {phase.title}
              </motion.div>
              <div className="w-full space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex items-center space-x-3 p-4 rounded-lg shadow-sm"
                    style={{
                      backgroundColor: getCardBackgroundColor(isDarkMode),
                      color: getThemeColor(isDarkMode, 'secondaryText')
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.15 + itemIndex * 0.07, ease: "easeOut" }}
                  >
                    <div
                      className="p-2 rounded-md border"
                      style={{
                        backgroundColor: getCardBackgroundColor(isDarkMode),
                        borderColor: isDarkMode ? '#404040' : '#E5E7EB'
                      }}
                    >
                      <ArrowRight
                        className="h-5 w-5"
                        style={{ color: getAccentColor(isDarkMode) }}
                      />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
