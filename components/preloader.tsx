"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  onComplete?: () => void
  duration?: number
}

export default function Preloader({ onComplete, duration = 3000 }: PreloaderProps) {
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Geometric Shapes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute opacity-5"
                style={{
                  backgroundColor: "#0E4F53",
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
                backgroundImage: `radial-gradient(circle at 1px 1px, #0E4F53 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Main Logo Container with Notification */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
            className="relative z-10 mb-6"
          >
            {/* Logo with Subtle Animation */}
            <motion.div
              animate={{
                y: [-3, 3, -3],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-2xl border border-gray-100"
              style={{
                boxShadow: "0 20px 40px -12px rgba(14, 79, 83, 0.15), 0 0 0 1px rgba(14, 79, 83, 0.05)",
              }}
            >
              <img src="/nav.svg" alt="Cloud Vertex Innovation" className="w-20 h-16" />

              {/* Notification Counter Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 min-w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                style={{ backgroundColor: "#0E4F53" }}
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
                  style={{ borderColor: "#0E4F53" }}
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

          {/* CVI Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 mb-8"
          >
            <motion.h1
              className="text-6xl font-bold tracking-wider"
              style={{ color: "#0E4F53" }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(14, 79, 83, 0)",
                  "0 0 20px rgba(14, 79, 83, 0.3)",
                  "0 0 0px rgba(14, 79, 83, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              CVI
            </motion.h1>
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
                  backgroundColor: progress > i * 20 ? "#0E4F53" : "#e5e7eb",
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
              style={{ color: "#0E4F53" }}
            >
              Loading Experience...
            </motion.p>
            <motion.p className="text-sm font-light opacity-60" style={{ color: "#0E4F53" }}>
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
                  backgroundColor: "#0E4F53",
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
