"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import ProductCard from "@/components/product-card"

/**
 * Main products showcase section with animated grid layout
 * Features scroll-triggered animations and responsive design
 * Displays company's product portfolio with engaging descriptions
 */
export default function ProductsSection() {
  // Intersection observer setup for scroll-triggered animations
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Product data array - in production this would come from a CMS or API
  const products = [
    {
      id: 1,
      title: "Travel Website",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat montes suspendisse pulvinar metus nec amet et quibusdam. Quam et et egestas tristique amet leo egestas lorem elit.",
      image: "/products1.png",
      imageAlt: "Travel website mockup showing responsive design on desktop and mobile",
    },
    {
      id: 2,
      title: "Travel Website",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat montes suspendisse pulvinar metus nec amet et quibusdam. Quam et et egestas tristique amet leo egestas lorem elit.",
      image: "/products2.png",
      imageAlt: "Laptop displaying travel website on wooden surface",
    },
    {
      id: 3,
      title: "Travel Website",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat montes suspendisse pulvinar metus nec amet et quibusdam. Quam et et egestas tristique amet leo egestas lorem elit.",
      image: "/products3.png",
      imageAlt: "Travel website mockup showing responsive design on desktop and mobile",
    },
    {
      id: 4,
      title: "Travel Website",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat montes suspendisse pulvinar metus nec amet et quibusdam. Quam et et egestas tristique amet leo egestas lorem elit.",
      image: "/products4.png",
      imageAlt: "Laptop displaying travel website on wooden surface",
    },
  ]

  return (
    <section ref={ref} className="w-full px-6 py-16" style={{ paddingTop: '140px' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section header with company value proposition */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Main section title */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold  mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Our Products
          </motion.h1>
          
          {/* Company value proposition description */}
          <motion.p 
            className="text-lg  max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Our dedicated team of UI/UX talent provides our partners with a vastly more economical avenue for Company
            expansion, saving huge over hiring US-based developers or wasting resources on employees, training, and
            maintaining an internal team.
          </motion.p>
        </motion.div>

        {/* Responsive product grid with staggered animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + (index * 0.2), // Staggered animation for each card
                ease: "easeOut" 
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
