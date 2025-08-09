"use client"
import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

/**
 * Contact section component with project inquiry form
 * Features two-column layout with company information and contact form
 * Includes project manager profile and comprehensive form validation
 */
export default function ContactSection() {
  // Form state management for all input fields
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    servicesRequired: "",
    projectDetails: "",
  })

  // Intersection observer for scroll-triggered animations
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Form submission handler - in production would integrate with backend API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // TODO: Integrate with email service or CRM system
  }

  // Generic input change handler for form state updates
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
  <section ref={ref} className="w-full px-6 py-20" style={{ marginBottom: 80 }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[624px]">
          
          {/* Left column: Company information and project manager profile */}
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
              <h2 className="text-4xl md:text-5xl font-bold     mb-6 leading-tight">
                Have a Project in your Mind? Let&#39;s Make Together
              </h2>
              <p className="text-lg   leading-relaxed">
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
              <p className=" ">Simply fill out the form or email us at</p>
              <motion.a
                href="mailto:cloudvertexinnovation@gmail.com"
                className="transition-colors duration-200 font-medium"
                style={{ color: '#003C42' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                info@cloudvortexinnovation.com
              </motion.a>
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
                  src="/Ellipse 2.svg?height=64&width=64"
                  alt="Nobir Hossain Samuel - Project Manager"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <h3 className="font-semibold    ">Nobir Hossain Samuel</h3>
                <p className=" ">Project Manager</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column: Contact form with comprehensive project details */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md p-10 md:p-12 border-l-6 border-[#003C42] w-full max-w-[632px] mx-auto lg:mx-0"
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
                <label htmlFor="fullName" className="block text-sm font-medium   mb-3">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="fullName"
                  placeholder="e.g. Johan"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full bg-gray-50 h-12"
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
                  <label htmlFor="companyName" className="block text-sm font-medium   mb-3">
                    Company Name
                  </label>
                <Input
                  id="companyName"
                  placeholder="ABC"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full bg-gray-50 h-12"
                />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium   mb-3">
                    Email <span className="text-red-500">*</span>
                  </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="info@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-gray-50 h-12"
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
                  <label htmlFor="servicesRequired" className="block text-sm font-medium   mb-3">
                    Services Required <span className="text-red-500">*</span>
                  </label>
                  <Select onValueChange={(value) => handleInputChange("servicesRequired", value)} value={formData.servicesRequired}>
                    <SelectTrigger className="w-full h-12 bg-gray-50 px-3 py-2 text-sm rounded-md border border-input focus-visible:border-ring focus-visible:ring-ring/50 transition-colors duration-200">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium   mb-3">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="+880"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  className="w-full bg-gray-50 h-12"
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
                <label htmlFor="projectDetails" className="block text-sm font-medium   mb-3">
                  Project Details
                </label>
                <Textarea
                  id="projectDetails"
                  placeholder="Tell about your project idea"
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                  className="w-full min-h-[140px] resize-none bg-gray-50"
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
                    className="w-full bg-[#003C42] hover:bg-[#002A2F] text-white h-12 rounded-lg transition-colors duration-200 font-medium text-lg"
                  >
                    Send
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}