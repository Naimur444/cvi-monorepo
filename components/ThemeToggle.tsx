"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

/**
 * Theme Toggle Switch Component
 * A sleek toggle switch that allows users to switch between light and dark themes
 * Features smooth sliding animation, icon transitions, and localStorage persistence
 */
export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${className}`}
      style={{
        backgroundColor: isDarkMode ? '#0E4F53' : '#E5E7EB'
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toggle track background */}
      <div
        className="absolute inset-0 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: isDarkMode ? '#0E4F53' : '#E5E7EB'
        }}
      />
      
      {/* Sliding toggle circle */}
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: isDarkMode ? '#FFFFFF' : '#FFFFFF',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}
        animate={{
          x: isDarkMode ? 32 : 4
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Icon inside the toggle circle */}
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.div
              key="moon"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon
                className="w-3 h-3"
                style={{ color: '#0E4F53' }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun 
                className="w-3 h-3" 
                style={{ color: '#F59E0B' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}
