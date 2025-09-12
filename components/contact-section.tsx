"use client"
import React, { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// Removed Select imports for custom dropdown
import { useTheme } from "@/contexts/ThemeContext"
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "@/lib/theme-utils"
import EmailModal from "./email-modal"

export default function ContactSection() {

  const { isDarkMode } = useTheme()

  const [showEmailModal, setShowEmailModal] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'maintenance', label: 'Maintenance & Support' },
  ]

  React.useEffect(() => {
    if (!dropdownOpen) return
    const handle = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.relative')) setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [dropdownOpen])


  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    servicesRequired: "",
    projectDetails: "",
  })


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
  <section id="contact-section" ref={ref} className="w-full px-6 py-20" style={{ marginBottom: 80 }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[624px]">
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Main call-to-action heading and process description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
              >
                Have a Project in your Mind? Let&#39;s Make Together
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
              >
                We&#39;ll schedule a call to discuss your idea. After discovery session, we&#39;ll send a proposal, and upon
                approval, we&#39;ll get started.
              </p>
            </motion.div>
            
            {/* Alternative contact method with email link */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <p
                className=""
                style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
              >
                Simply fill out the form or email us at
              </p>
              <motion.button
                onClick={() => setShowEmailModal(true)}
                className="transition-colors duration-200 font-medium border-none bg-transparent cursor-pointer"
                style={{ color: getAccentColor(isDarkMode) }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                info@cloudvortexinnovation.com
              </motion.button>
            </motion.div>
            
            {/* Project manager profile section for trust building */}
            <motion.div 
              className="flex items-center space-x-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="relative w-16 h-16 rounded-full overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/coo.jpg?height=64&width=64"
                  alt="Shabab Musficul Islam - COO"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <h3
                  className="font-semibold"
                  style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                >
                  Shabab Musficul Islam 
                </h3>
                <p
                  className=""
                  style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
                >
                  COO
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column: Contact form with comprehensive project details */}
          <motion.div
            className="rounded-2xl shadow-md p-10 md:p-12 border-l-6 w-full max-w-[632px] mx-auto lg:mx-0"
            style={{
              backgroundColor: getCardBackgroundColor(isDarkMode),
              borderLeftColor: getAccentColor(isDarkMode)
            }}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Full name input field - required */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              >
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-3"
                  style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="fullName"
                  placeholder="e.g. Johan"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full h-12"
                  style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
                />
              </motion.div>
              
              {/* Company name and email row - responsive grid layout */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              >
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium mb-3"
                    style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                  >
                    Company Name
                  </label>
                <Input
                  id="companyName"
                  placeholder="ABC"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full h-12"
                  style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
                />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-3"
                    style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="info@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full h-12"
                  style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
                />
                </div>
              </motion.div>
              
              {/* Services and contact number row */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
              >
                <div>
                    <label
                      htmlFor="servicesRequired"
                      className="block text-sm font-medium mb-3"
                      style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                    >
                      Services Required <span className="text-red-500">*</span>
                    </label>
                    {/* Custom dropdown select */}
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full h-12 px-3 py-2 text-sm rounded-md border border-input focus-visible:border-ring focus-visible:ring-ring/50 transition-colors duration-200 flex items-center justify-between"
                        style={{
                          backgroundColor: getCardBackgroundColor(isDarkMode),
                          color: getThemeColor(isDarkMode, 'secondaryText')
                        }}
                        onClick={() => setDropdownOpen((open) => !open)}
                      >
                        <span>{
                          formData.servicesRequired
                            ? serviceOptions.find(opt => opt.value === formData.servicesRequired)?.label
                            : 'Select'
                        }</span>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6"/></svg>
                      </button>
                      {dropdownOpen && (
                        <ul
                          className="absolute left-0 right-0 mt-2 z-50 rounded-md shadow-lg border"
                          style={{
                            backgroundColor: getCardBackgroundColor(isDarkMode),
                            borderColor: isDarkMode ? '#404040' : '#E5E7EB'
                          }}
                        >
                          {serviceOptions.map(option => (
                            <li
                              key={option.value}
                              className="px-4 py-2 cursor-pointer hover:bg-accent transition-colors"
                              style={{
                                color: getThemeColor(isDarkMode, 'secondaryText'),
                                backgroundColor: formData.servicesRequired === option.value ? (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)') : 'transparent'
                              }}
                              onClick={() => {
                                handleInputChange('servicesRequired', option.value)
                                setDropdownOpen(false)
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = formData.servicesRequired === option.value ? (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)') : 'transparent'
                              }}
                            >
                              {option.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                </div>
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium mb-3"
                    style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                  >
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="+880"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  className="w-full h-12"
                  style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
                  required
                />
                </div>
              </motion.div>
              
              {/* Project details textarea for comprehensive project description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              >
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium mb-3"
                  style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                >
                  Project Details
                </label>
                <Textarea
                  id="projectDetails"
                  placeholder="Tell about your project idea"
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                  className="w-full min-h-[140px] resize-none"
                  style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
                />
              </motion.div>
              
              {/* Form submission button with hover animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    className="w-full text-white h-12 rounded-lg transition-colors duration-200 font-medium text-lg"
                    style={{
                      backgroundColor: getAccentColor(isDarkMode),
                      borderColor: getAccentColor(isDarkMode)
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = isDarkMode ? '#046B6F' : '#002A2F'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = getAccentColor(isDarkMode)
                    }}
                  >
                    Send
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Email Modal */}
      <EmailModal 
        email="info@cloudvortexinnovation.com"
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
      />
    </section>
  )
}