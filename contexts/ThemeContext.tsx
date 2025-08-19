"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * Theme Provider Component
 * Manages global theme state with localStorage persistence and system preference detection
 * Provides theme context to all child components
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initial state should default to dark mode to prevent flash of light mode
  const [isDarkMode, setIsDarkMode] = useState(true) 
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      // Use saved theme or default to dark if none saved
      const shouldBeDark = savedTheme ? savedTheme === 'dark' : true
      
      setIsDarkMode(shouldBeDark)
      applyTheme(shouldBeDark)
      setIsInitialized(true)
    }
  }, [])

  // Apply theme to document and persist to localStorage
  const applyTheme = (darkMode: boolean) => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', darkMode)

      // Update body background color immediately
      document.body.style.backgroundColor = darkMode ? '#131313' : '#F4F3F7'
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }
  }

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    applyTheme(newTheme)
  }

  // Set specific theme
  const setTheme = (theme: 'light' | 'dark') => {
    const darkMode = theme === 'dark'
    setIsDarkMode(darkMode)
    applyTheme(darkMode)
  }

  // Always render children, no need to wait for initialization since we apply dark theme immediately
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Custom hook to use theme context
 * Throws error if used outside of ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
