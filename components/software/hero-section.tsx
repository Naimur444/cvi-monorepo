
'use client'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { getAccentColor } from "../../lib/theme-utils"

type HeroSectionProps = {
  title?: string;
  image?: string;
};

export default function HeroSection({ title = "Custom Software Development", image }: HeroSectionProps) {
  const { isDarkMode } = useTheme()
  const [showCalendar, setShowCalendar] = React.useState(false)
  const calendarRef = React.useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Close calendar when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false)
      }
    }
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showCalendar])

  return (
    <section ref={sectionRef} className="w-full px-6 py-8 md:py-16 lg:py-20 ">
      <motion.div
        className="max-w-7xl mx-auto w-full grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col justify-center space-y-6 pt-8 md:pt-0"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.h1
              className="text-[39px] font-bold tracking-tight sm:text-[39px] md:text-[39px] lg:text-[39px]"
              style={{ color: getAccentColor(isDarkMode) }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.h2
              className="text-[39px] font-bold tracking-tight  sm:text-[39px] md:text-[39px] lg:text-[39px] pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              Utilizing Leading Tech
            </motion.h2>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              className="w-[340px] h-[46px] text-lg font-medium bg-theme-accent text-white hover:bg-theme-accent/90"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <div className="relative w-fit">
              <button
                type="button"
                aria-label="Open calendar"
                className="flex items-center text-primary hover:underline w-fit focus:outline-none"
                onClick={() => setShowCalendar((v) => !v)}
              >
                {/* Calendar icon (lucide-react) for clickable trigger */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Or, Schedule a Free Consultation
              </button>
              {showCalendar && (
                <div
                  ref={calendarRef}
                  className="absolute z-50 mt-2 left-0 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
                >
                  <Calendar />
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2  ">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              >
                <Check className="h-5 w-5 text-primary" />
                <span>Recognized as Delaware&apos;s Top Software Developer 2023</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative flex justify-center lg:justify-end ml-auto"
          style={{ height: '366px' }}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src={image || "/banner-image.png"}
            width={1200}
            height={600}
            alt={title}
            className="rounded-sm w-full h-full"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
