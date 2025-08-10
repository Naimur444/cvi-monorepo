"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../contexts/ThemeContext"

/** 
 * Main navigation header component with responsive design
 * Features fixed positioning, dropdown menus, and mobile optimization
 * Includes company branding and smooth animations
 */
export default function Header() {
  // Theme context
  const { isDarkMode } = useTheme()

  // State management for dropdown and mobile menu visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)

  // Refs for dropdown positioning and management
  const headerRef = useRef<HTMLElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const companyDropdownRef = useRef<HTMLDivElement>(null)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Enhanced hover handlers with delay for better UX
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150) // Small delay to prevent flickering
  }

  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current)
    }
    setIsCompanyOpen(true)
  }

  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setIsCompanyOpen(false)
    }, 150)
  }

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
      if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current)
    }
  }, [])

  // Services data for easier maintenance
  const servicesData = [
    { name: "Web Development", href: "/web", icon: "🌐" },
    { name: "Mobile App Development", href: "/application", icon: "📱" },
    { name: "Custom Software Development", href: "/software", icon: "⚙️" },
    { name: "UI/UX Design", href: "/ui-ux", icon: "🎨" },
    { name: "Cloud Solutions", href: "/cloud", icon: "☁️" },
    { name: "Digital Marketing", href: "/marketing", icon: "📈" }
  ]

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 w-full px-6 z-50 backdrop-blur-md transition-colors duration-300"
      style={{
        background: isDarkMode ? 'rgba(19, 19, 19, 0.8)' : 'rgba(244, 243, 247, 0.8)',
        height: '72px'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        
        {/* Company logo and brand name - clickable, redirects to home */}
        <Link href="/" className="flex items-center space-x-2" style={{ textDecoration: 'none' }}>
          <Image
            src="/nav.svg"
            alt="Cloud Vertex Innovation Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold" style={{ color: '#0E4F53' }}>Cloud Vertex Innovation</span>
        </Link>

        {/* Desktop navigation menu - hidden on mobile */}
        <nav className="hidden md:flex items-center">
          {/* Products navigation link with hover underline effect */}
          <div className="px-4">
            <Link
              href="/products"
              className="relative font-medium transition-colors duration-200 group"
              style={{
                color: isDarkMode ? '#989898' : '#6B7280'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#BDBDBD' : '#181818'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#989898' : '#6B7280'
              }}
            >
              Products
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
            </Link>
          </div>

          {/* Services dropdown menu with enhanced UX */}
          <div 
            ref={servicesDropdownRef}
            className="relative px-4"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              className="relative flex items-center space-x-1 font-medium transition-colors duration-200 group"
              style={{
                color: isDarkMode ? '#989898' : '#6B7280'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#BDBDBD' : '#181818'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#989898' : '#6B7280'
              }}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
            </button>

            {/* Enhanced Services dropdown with full screen width */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="fixed left-0 right-0 top-[72px] backdrop-blur-md border-b border-white/20 shadow-xl overflow-hidden z-50"
                  style={{
                    background: isDarkMode ? 'rgba(19, 19, 19, 0.95)' : 'rgba(244, 243, 247, 0.95)',
                    width: '100vw'
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  {/* Container to match header layout */}
                  <div className="max-w-7xl mx-auto">
                    {/* Services Grid - 2 columns with divider, left-aligned, arrows at end */}
                    <div className="flex flex-col py-10">
                      <div className="flex flex-row w-full justify-start mb-8">
                        {/* Left column */}
                        <div className="flex flex-col flex-1 pr-8">
                          {[0, 1].map((i) => (
                            <motion.a
                              key={servicesData[i].name}
                              href={servicesData[i].href}
                              className="flex items-center justify-between text-lg font-medium py-3 px-2 group transition-colors duration-200 rounded-md"
                              style={{
                                color: isDarkMode ? '#BDBDBD' : '#181818'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = isDarkMode ? '#057C80' : '#003C42'
                                e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = isDarkMode ? '#BDBDBD' : '#181818'
                                e.currentTarget.style.backgroundColor = 'transparent'
                              }}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.2 }}
                            >
                              <span>{servicesData[i].name}</span>
                              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </motion.a>
                          ))}
                        </div>
                        {/* Divider */}
                        <div className="w-px bg-gray-300 mx-4" style={{ minHeight: '80px' }}></div>
                        {/* Right column */}
                        <div className="flex flex-col flex-1 pl-8">
                          {[2, 3].map((i) => (
                            <motion.a
                              key={servicesData[i].name}
                              href={servicesData[i].href}
                              className="flex items-center justify-between text-lg font-medium py-3 px-2 group transition-colors duration-200 rounded-md"
                              style={{
                                color: isDarkMode ? '#BDBDBD' : '#181818'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = isDarkMode ? '#057C80' : '#003C42'
                                e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = isDarkMode ? '#BDBDBD' : '#181818'
                                e.currentTarget.style.backgroundColor = 'transparent'
                              }}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.2 }}
                            >
                              <span>{servicesData[i].name}</span>
                              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center w-full">
                        <motion.a
                          href="/services"
                          className="flex items-center gap-2 px-8 py-3 rounded-lg text-base font-semibold text-white transition-colors"
                          style={{ backgroundColor: '#0E4F53' }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#003C42'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0E4F53'}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.2 }}
                        >
                          All Services
                          <span className="ml-2 text-xl">→</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio navigation link */}
          <div className="px-4">
            <a
              href="/portfolio"
              className="relative font-medium transition-colors duration-200 group"
              style={{
                color: isDarkMode ? '#989898' : '#6B7280'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#BDBDBD' : '#181818'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#989898' : '#6B7280'
              }}
            >
              Portfolio
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
            </a>
          </div>

          {/* Company dropdown menu with enhanced UX */}
          <div 
            ref={companyDropdownRef}
            className="relative px-4"
            onMouseEnter={handleCompanyMouseEnter}
            onMouseLeave={handleCompanyMouseLeave}
          >
            <button
              className="relative flex items-center space-x-1 font-medium transition-colors duration-200 group"
              style={{
                color: isDarkMode ? '#989898' : '#6B7280'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#BDBDBD' : '#181818'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#989898' : '#6B7280'
              }}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isCompanyOpen ? "rotate-180" : ""}`}
              />
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
            </button>

            {/* Company dropdown content with sub nav */}
            <AnimatePresence>
              {isCompanyOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 min-w-[280px] backdrop-blur-md border border-white/20 shadow-xl rounded-lg overflow-hidden z-50"
                  style={{
                    background: isDarkMode ? 'rgba(19, 19, 19, 0.95)' : 'rgba(244, 243, 247, 0.95)'
                  }}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onMouseEnter={handleCompanyMouseEnter}
                  onMouseLeave={handleCompanyMouseLeave}
                >
                  <div className="flex flex-col">
                    <div className="p-4 space-y-2">
                      <motion.a
                        href="/about"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/40 transition-all duration-200"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05, duration: 0.2 }}
                      >
                        <div className="p-2 bg-teal-50 rounded-lg">
                          <svg className="w-5 h-5 text-teal-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9941 16H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium ">About Us</h3>
                        </div>
                      </motion.a>
                      
                      <motion.a
                        href="/contact"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/40 transition-all duration-200"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <div className="p-2 bg-teal-50 rounded-lg">
                          <svg className="w-5 h-5 text-teal-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.0299 11.9999C15.0299 9.53992 13.1399 7.5199 10.8499 7.5199C8.5599 7.5199 6.66992 9.53992 6.66992 11.9999C6.66992 14.4599 8.5599 16.4799 10.8499 16.4799C13.1399 16.4799 15.0299 14.4599 15.0299 11.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.3398 7.5199V16.4799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium ">Contact Us</h3>
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle Switch - inside nav */}
          <div className="px-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu toggle button - only visible on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 transition-colors duration-200"
          style={{
            color: isDarkMode ? '#989898' : '#6B7280'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0E4F53'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = isDarkMode ? '#989898' : '#6B7280'
          }}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation menu with slide-down animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="backdrop-blur-3xl border border-white/70 shadow-2xl rounded-t-lg rounded-b-3xl p-6 w-80"
              style={{
                background: isDarkMode ? 'rgba(19, 19, 19, 0.95)' : 'rgba(244, 243, 247, 0.95)'
              }}
            >
              <nav className="flex flex-col items-center space-y-6">
                
                {/* Mobile Products link */}
                <motion.a
                  href="/products"
                  className="relative  font-medium transition-colors duration-200 hover:text-gray-900 group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                >
                  Products
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
                </motion.a>

                {/* Mobile Services dropdown */}
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="relative flex items-center justify-center space-x-2  font-medium transition-colors duration-200 hover:text-gray-900 group w-full"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
                  </button>
                  
                  {/* Mobile services submenu */}
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        className="mt-3 pl-4 space-y-2 border-l-2 border-gray-300"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {servicesData.slice(0, 4).map((service, index) => (
                          <motion.a
                            key={service.name}
                            href={service.href}
                            className="block text-sm  hover:text-gray-800 transition-colors duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.2 }}
                          >
                            {service.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Portfolio link */}
                <motion.a
                  href="/portfolio"
                  className="relative  font-medium transition-colors duration-200 hover:text-gray-900 group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                >
                  Portfolio
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
                </motion.a>

                {/* Mobile Company dropdown */}
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                >
                  <button
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className="relative flex items-center justify-center space-x-2  font-medium transition-colors duration-200 hover:text-gray-900 group w-full"
                  >
                    <span>Company</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`}
                    />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: '#0E4F53' }}></span>
                  </button>

                  {/* Mobile company submenu */}
                  <AnimatePresence>
                    {mobileCompanyOpen && (
                      <motion.div
                        className="mt-3 pl-4 space-y-2 border-l-2 border-gray-300"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.a
                          href="/contact"
                          className="block text-sm  hover:text-gray-800 transition-colors duration-200"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          Contact Us
                        </motion.a>
                        <motion.a
                          href="/about"
                          className="block text-sm  hover:text-gray-800 transition-colors duration-200"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05, duration: 0.2 }}
                        >
                          About Us
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Theme Toggle Switch */}
                <motion.div
                  className="w-full flex justify-center pt-4 border-t border-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                >
                  <ThemeToggle />
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}