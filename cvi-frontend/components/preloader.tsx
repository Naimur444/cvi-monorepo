"use client"

import { useEffect, useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useTheme } from "../contexts/ThemeContext"
import { getAccentColor, getCardBackgroundColor } from "../lib/theme-utils"

interface PreloaderProps {
  onComplete?: () => void
  duration?: number
}

export default function Preloader({ onComplete, duration = 1000 }: PreloaderProps) {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    // Progress animation (linear, matches duration)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsVisible(false)
            onComplete?.()
          }, 200) // shorter exit
          return 100
        }
        return prev + 100 / (duration / 50)
      })
    }, 50)

    // Counter: 1 to 10, evenly spaced over duration
    let counterValue = 1
    const counterMax = 10
    const counterStep = duration / counterMax
    setCounter(1)
    const counterInterval = setInterval(() => {
      counterValue += 1
      setCounter(counterValue)
      if (counterValue >= counterMax) {
        clearInterval(counterInterval)
      }
    }, counterStep)

    return () => {
      clearInterval(progressInterval)
      clearInterval(counterInterval)
    }
  }, [duration, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Geometric Shapes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute opacity-5"
                style={{
                  backgroundColor: getAccentColor(isDarkMode),
                  width: `${20 + i * 10}px`,
                  height: `${20 + i * 10}px`,
                  borderRadius: i % 2 === 0 ? "50%" : "20%",
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 12}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Subtle Grid Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, ${getAccentColor(isDarkMode)} 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Logo and CVI Text - Simple Fade/Scale In */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 flex items-center space-x-4 mb-8"
          >
            <Image
              src={isDarkMode ? "/darknav.svg" : "/nav.svg"}
              alt="Cloud Vertex Innovation"
              width={48}
              height={36}
              className="w-12 h-9"
            />
            <h1
              className="text-4xl font-bold tracking-wider"
              style={{ color: getAccentColor(isDarkMode) }}
            >
              CVI
            </h1>
            {/* Counter Badge with Pulse Ring */}
            <div
              className="ml-2 min-w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg relative"
              style={{ backgroundColor: getAccentColor(isDarkMode) }}
            >
              {counter}
              {/* Pulse Ring Animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: getAccentColor(isDarkMode) }}
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
          {/* Simple Progress Bar */}
          <div className="w-40 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-6 relative z-10">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: getAccentColor(isDarkMode),
                transition: "width 0.2s linear",
              }}
            />
          </div>
          {/* Loading Text */}
          <div className="relative z-10 text-center">
            <p
              className="text-lg font-medium mb-2"
              style={{ color: getAccentColor(isDarkMode) }}
            >
              Loading Experience...
            </p>
            <p
              className="text-sm font-light opacity-60"
              style={{ color: getAccentColor(isDarkMode) }}
            >
              Cloud Vortex Innovation
            </p>
          </div>

          {/* Subtle Animated Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px opacity-10"
                style={{
                  backgroundColor: getAccentColor(isDarkMode),
                  width: "100px",
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
