"use client";
import Image from "next/image"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils"

export default function CollaborationProcessSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { isDarkMode } = useTheme()
  const processItems = [
    {
      title: "Daily Scrum",
      time: "Every Day",
      duration: "15 Minutes",
      description:
        "Collaboration with our team and key members of your team to ensure smooth progress and better outcomes.",
      type: "normal",
    },
    {
      title: "Join With",
      description: "Regular Meetings at CVI: A Key Element for Shared Understanding",
      platforms: [
        { name: "Google Meet", icon: "/meet.png" },
        { name: "Zoom", icon: "/zoom.png" },
      ],
      type: "highlight",
    },
    {
      title: "Weekly Priority",
      time: "Every Week",
      duration: "1 hour",
      description:
        "Key Decision-Making and Priority Setting for Your Product's Success: A weekly meeting to align goals and ensure smooth progress.",
      type: "normal",
    },
    {
      title: "Sprint Planning",
      time: "Every 4 Weeks",
      duration: "1-2 hours",
      description:
        "Aligning goals and ensuring smooth progress with input from key members of your technical team. Held once every sprint.",
      type: "normal",
    },
    {
      title: "Sprint Delivery Review",
      time: "Every 4 Weeks",
      duration: "1-2 hours",
      description: "Showcasing progress and achievements to key members of your team and ensuring alignment of goals.",
      type: "normal",
    },
    {
      title: "Special Quarterly Meeting",
      time: "Every Quarter",
      duration: "1-2 hours",
      description:
        "Aligning goals and mapping out a plan for the next quarter with key members of your leadership team.",
      type: "normal",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 collaboration-gradient text-white min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-0 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Collaboration-Driven Process
        </motion.h2>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-lg "
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Regular meetings, daily standups, and ongoing collaboration for the best outcomes for your custom software
          development needs.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {processItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl shadow-lg flex flex-col items-start text-left min-h-[320px]"
              style={{
                ...(item.type === "highlight"
                  ? {
                      background: "#142626",
                      border: "2px solid transparent",
                      backgroundImage:
                        "linear-gradient(#142626, #142626), linear-gradient(135deg, #009EA1 0%, transparent 30%, transparent 70%, #009EA1 100%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : {
                      backgroundColor: getCardBackgroundColor(isDarkMode),
                      border: isDarkMode ? 'none' : '1px solid #E5E7EB'
                    }),
                color: item.type === "highlight" ? "#ffffff" : getThemeColor(isDarkMode, 'secondaryText')
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15, ease: "easeOut" }}
            >
              {/* Pin image section */}
              <div className="mb-4 w-full flex items-center">
                <Image
                  src="/pin.png"
                  alt="Pin"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
              {/* Title section */}
              <motion.h3
                className="text-[20px] font-bold mb-4 w-full"
                style={{
                  color: item.type === "highlight" ? "#ffffff" : getThemeColor(isDarkMode, 'secondaryText')
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15, ease: "easeOut" }}
              >
                {item.title}
              </motion.h3>

              {item.type === "normal" && (
                <>
                  {/* Time/Duration section */}
                  <motion.div
                    className="flex flex-row items-center mb-4 w-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.15, ease: "easeOut" }}
                  >
                    <div
                      className="h-16 w-1 mr-2"
                      style={{ backgroundColor: getAccentColor(isDarkMode) }}
                    />
                    <div className="flex flex-col gap-2">
                      <span
                        className="text-[16px] font-normal"
                        style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                      >
                        {item.time}
                      </span>
                      <span
                        className="text-[16px] font-normal"
                        style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                      >
                        {item.duration}
                      </span>
                    </div>
                  </motion.div>
                  {/* Description section */}
                  <motion.p
                    className="text-[16px] font-normal leading-relaxed mb-4 w-full"
                    style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.75 + index * 0.15, ease: "easeOut" }}
                  >
                    {item.description}
                  </motion.p>
                </>
              )}

              {item.type === "highlight" && (
                <>
                  {/* Description section */}
                  <motion.p
                    className="text-white text-[16px] font-normal leading-relaxed mb-4 w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.75 + index * 0.15, ease: "easeOut" }}
                  >
                    {item.description}
                  </motion.p>
                  {/* Platforms section */}
                  <div className="flex flex-col gap-4 w-full mb-4">
                    {item.platforms?.map((platform, pIndex) => (
                      <motion.div
                        key={pIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.15 + pIndex * 0.07, ease: "easeOut" }}
                      >
                        <Image
                          src={platform.icon || "/placeholder.svg"}
                          alt={platform.name}
                          width={24}
                          height={24}
                        />
                        <span className="text-white text-[16px] font-normal">{platform.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
