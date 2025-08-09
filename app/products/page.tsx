"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import ProductsSection from "@/components/products-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

/**
 * Main homepage component that orchestrates all page sections
 * Features smooth page load animation and consistent background styling
 */
export default function HomePage() {
  return (
    <motion.div 
      className="min-h-screen" 
      style={{ backgroundColor: '#F4F3F7' }}
      // Smooth fade-in animation when page loads
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Navigation header with responsive menu */}
      <Header />
      
      {/* Main product showcase section */}
      <ProductsSection />
      
      {/* Contact form and project manager information */}
      <ContactSection />
      
      {/* Site footer with company info and social links */}
      <Footer />
    </motion.div>
  )
}
