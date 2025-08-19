"use client"

import { useState, useEffect } from "react"
import Preloader from "./preloader"

interface AppWrapperProps {
  children: React.ReactNode
}

/**
 * App Wrapper Component
 * Manages the preloader state and shows it on initial app load
 * Hides the main content until preloader completes
 */
export default function AppWrapper({ children }: AppWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  // Handle preloader completion
  const handlePreloaderComplete = () => {
    setIsLoading(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <>
      {/* Show preloader on initial load */}
      {isLoading && (
        <Preloader 
          onComplete={handlePreloaderComplete}
          duration={1500} // 1.5 seconds duration
        />
      )}
      
      {/* Show main content after preloader completes */}
      {showContent && children}
    </>
  )
}
