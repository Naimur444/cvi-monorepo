"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"
import { getAccentColor, getCardBackgroundColor } from "../lib/theme-utils"

interface PreloaderProps {
  onComplete?: () => void
  duration?: number
}

export default function Preloader({ onComplete, duration = 3000 }: PreloaderProps) {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsVisible(false)
            onComplete?.()
          }, 800)
          return 100
        }
        return prev + 100 / (duration / 50)
      })
    }, 50)

    // Counter animation - starts immediately and counts independently
    let counterValue = 0
    const counterInterval = setInterval(() => {
      if (counterValue < 100) {
        counterValue += 1
        setCounter(counterValue)
      } else {
        clearInterval(counterInterval)
      }
    }, duration / 100) // This ensures it counts from 1-100 over the full duration

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
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
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

          {/* Main Logo Container - Horizontal Layout */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
            className="relative z-10 mb-8"
          >
            {/* Horizontal Logo and CVI Layout */}
            <motion.div
              animate={{
                y: [-1, 1, -1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative flex items-center space-x-6 p-6 rounded-3xl shadow-2xl border"
              style={{
                background: isDarkMode
                  ? "linear-gradient(135deg, rgba(19, 19, 19, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)"
                  : "linear-gradient(135deg, rgba(249, 250, 251, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)",
                borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                boxShadow: isDarkMode
                  ? `0 20px 40px -12px rgba(5, 124, 128, 0.15), 0 0 0 1px rgba(5, 124, 128, 0.05)`
                  : `0 20px 40px -12px rgba(14, 79, 83, 0.15), 0 0 0 1px rgba(14, 79, 83, 0.05)`,
              }}
            >
              {/* Logo */}
              <img
                src={isDarkMode ? "/darknav.svg" : "/nav.svg"}
                alt="Cloud Vertex Innovation"
                className="w-16 h-12"
              />

              {/* CVI Text */}
              <motion.h1
                className="text-5xl font-bold tracking-wider"
                style={{ color: getAccentColor(isDarkMode) }}
                animate={{
                  textShadow: isDarkMode
                    ? [
                        "0 0 0px rgba(5, 124, 128, 0)",
                        "0 0 10px rgba(5, 124, 128, 0.2)",
                        "0 0 0px rgba(5, 124, 128, 0)",
                      ]
                    : [
                        "0 0 0px rgba(14, 79, 83, 0)",
                        "0 0 10px rgba(14, 79, 83, 0.2)",
                        "0 0 0px rgba(14, 79, 83, 0)",
                      ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                CVI
              </motion.h1>

              {/* Notification Counter Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 min-w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                style={{ backgroundColor: getAccentColor(isDarkMode) }}
              >
                <motion.span
                  key={counter}
                  initial={{ scale: 1.2, opacity: 0, y: -5 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {counter}
                </motion.span>

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
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Progress Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative z-10 flex space-x-2 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: progress > i * 20
                    ? getAccentColor(isDarkMode)
                    : isDarkMode ? "#374151" : "#e5e7eb",
                }}
                animate={{
                  scale: progress > i * 20 ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative z-10 text-center"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="text-lg font-medium mb-2"
              style={{ color: getAccentColor(isDarkMode) }}
            >
              Loading Experience...
            </motion.p>
            <motion.p
              className="text-sm font-light opacity-60"
              style={{ color: getAccentColor(isDarkMode) }}
            >
              Cloud Vortex Innovation
            </motion.p>
          </motion.div>

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
