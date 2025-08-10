"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "../contexts/ThemeContext"
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../lib/theme-utils"

// TypeScript interfaces for type safety
interface Product {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
}

interface ProductCardProps {
  product: Product
}

/**
 * Individual product card component with hover animations
 * Features image display, product information, and navigation to detail page
 * Includes sophisticated hover effects and smooth transitions
 */
export default function ProductCard({ product }: ProductCardProps) {
  const { isDarkMode } = useTheme()

  return (
    <motion.div
      className="rounded-2xl shadow-sm overflow-hidden group cursor-pointer"
      style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
      // Card lift animation on hover for engaging interaction
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Product image section with padding for visual breathing room */}
      <div className="relative h-60 sm:h-64 md:h-[280px] p-4">
        <motion.div 
          className="relative w-full h-full rounded-xl overflow-hidden"
          // Subtle image zoom on hover
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.imageAlt}
            fill
            className="object-cover"
          />
          {/* Overlay effect that appears on hover */}
          <motion.div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      </div>

      {/* Product information and call-to-action section */}
      <motion.div 
        className="p-8"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Product title with color change on hover */}
        <motion.h3
          className="text-xl font-semibold mb-4"
          style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
          whileHover={{ color: "#0E4F53" }}
          transition={{ duration: 0.2 }}
        >
          {product.title}
        </motion.h3>

        {/* Product description */}
        <p
          className="leading-relaxed mb-6"
          style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
        >
          {product.description}
        </p>

        {/* Navigation button to product detail page */}
        <Link href={`/products/${product.id}`} passHref legacyBehavior>
          <motion.a
            className="group/btn flex items-center justify-between w-fit border-2 rounded-lg px-4 py-2 cursor-pointer"
            style={{
              backgroundColor: getCardBackgroundColor(isDarkMode), // Uses #FAF9FC in light mode, #191919 in dark mode
              borderColor: isDarkMode ? '#404040' : '#E5E7EB'
            }}
            // Button hover effects with border color change and scale
            whileHover={{
              borderColor: "#0E4F53",
              scale: 1.05
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="font-medium mr-3"
              style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
            >
              Explore Now
            </span>
            
            {/* Animated icon with rotation and color change */}
            <motion.div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ backgroundColor: getAccentColor(isDarkMode) }}
              whileHover={{
                backgroundColor: "#0E4F53",
                rotate: 5
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Arrow icon with movement animation */}
              <motion.svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ 
                  x: 2, 
                  y: -2 
                }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </motion.svg>
            </motion.div>
          </motion.a>
        </Link>
      </motion.div>
    </motion.div>
  )
}
