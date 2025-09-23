
'use client'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"
// Calendar removed as requested
import * as React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { getAccentColor } from "../../lib/theme-utils"

type HeroSectionProps = {
  title?: string;
  image?: string;
};

export default function HeroSection({ title = "Custom Software Development", image }: HeroSectionProps) {
  const { isDarkMode } = useTheme()
  const [isScrolling, setIsScrolling] = React.useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const recognitions = [
    "Recognized for Excellent Software Solution Support",
    "Recognized for Excellent Team Support management",
    "Recognized for Trusted Global Partner of Excellence",
  ]

  // Enhanced smooth scroll to contact section with better easing
  const scrollToContact = () => {
    setIsScrolling(true)
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      // Get the current position and target position
      const targetPosition = contactSection.offsetTop - 80 // 80px offset for better visual positioning
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 1800 // 1.8 seconds for slower, smoother animation
      
      let start: number | null = null

      // Custom easing function for ultra-smooth animation (ease-in-out-quart)
      const easeInOutQuart = (t: number): number => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
      }

      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const easedProgress = easeInOutQuart(progress)
        
        window.scrollTo(0, startPosition + distance * easedProgress)
        
        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          // Reset scrolling state when animation completes
          setTimeout(() => setIsScrolling(false), 100)
        }
      }

      window.requestAnimationFrame(step)
    }
  }

  // calendar UI removed

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
              className="w-[340px] h-[46px] text-lg font-medium bg-theme-accent text-white hover:bg-theme-accent/90 transition-all duration-200"
              onClick={scrollToContact}
              disabled={isScrolling}
            >
              {isScrolling ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Scrolling...
                </div>
              ) : (
                "Get In Touch"
              )}
            </Button>
            {/* calendar trigger removed as requested */}
          </div>
          <div className="space-y-2  ">
            {recognitions.map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              >
                <Check className="h-5 w-5 text-primary" />
                <span>{text}</span>
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
