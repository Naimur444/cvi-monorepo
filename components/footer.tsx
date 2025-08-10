"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useTheme } from "../contexts/ThemeContext"
import { getAccentColor } from "../lib/theme-utils"

/**
 * Site footer component with company branding and social links
 * Features responsive layout, legal links, and company badge
 * Includes scroll-triggered animation for smooth appearance
 */
export default function Footer() {
  // Theme context
  const { isDarkMode } = useTheme()

  // Intersection observer for scroll-triggered animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="w-full px-6 py-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main footer content with company info and social media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          
          {/* Left section: Company branding and tagline */}
          <div className="space-y-3 mb-6 md:mb-0">
            {/* Company logo and name */}
            <div className="flex items-center space-x-2">
              <Image
                src={isDarkMode ? "/darknav.svg" : "/nav.svg"}
                alt="Cloud Vortex Innovation Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-semibold" style={{ color: getAccentColor(isDarkMode) }}>Cloud Vortex Innovation</span>
            </div>

            {/* Company tagline */}
            <p className="  text-sm max-w-md">
              This is a cloud. A vortex of innovation is just the beginning.
            </p>
          </div>

          {/* Right section: Social media links */}
          <div className="flex items-center space-x-4">
            {/* Facebook link */}
            <a
              href="https://www.facebook.com/profile.php?id=61557546942505"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-200"
              style={{ backgroundColor: getAccentColor(isDarkMode) }}
              aria-label="Facebook"
            >
              <Image
                src="/fb.svg"
                alt="Facebook"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </a>
            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/company/cloud-vortex-innovation-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-200"
              style={{ backgroundColor: getAccentColor(isDarkMode) }}
              aria-label="LinkedIn"
            >
              <Image
                src="/ln.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </a>
            {/* X (Twitter) link */}
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-200"
              style={{ backgroundColor: getAccentColor(isDarkMode) }}
              aria-label="X (Twitter)"
            >
              <Image
                src="/x.svg"
                alt="X (Twitter)"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </a>
            {/* YouTube link */}
            <a
              href="https://www.youtube.com/@creativeCVI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-200"
              style={{ backgroundColor: getAccentColor(isDarkMode) }}
              aria-label="YouTube"
            >
              <Image
                src="/yt.svg"
                alt="YouTube"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>

        {/* Bottom footer section with copyright and legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
          {/* Copyright notice */}
          <p className="text-sm   mb-4 md:mb-0">
            Copyright © 2025 Cloud Vortex Innovation All rights reserved
          </p>

          {/* Legal links and company badge */}
          <div className="flex items-center space-x-4">
            {/* Legal navigation links */}
            <div className="flex items-center space-x-4 text-sm  ">
              <a href="/privacy" className="hover:text-teal-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/terms-and-conditions" className="hover:text-teal-600 transition-colors duration-200">
                Terms & Conditions
              </a>
            </div>

            {/* Company branding badge */}
            <div className="flex items-center rounded-sm bg-[#165B5E] h-[40px] min-w-[195px] pl-3 pr-0">
              {/* CVI logo icon */}
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-4 mr-2"
              >
                <g clipPath="url(#clip0_966_558)">
                  <path
                    d="M0.101008 9.48135C0.684794 9.48036 1.26505 9.57091 1.82014 9.74961C2.66958 10.0399 3.44302 10.5134 4.08432 11.1359C4.72561 11.7585 5.21869 12.5143 5.52777 13.3487C5.67416 13.8067 5.78669 14.2746 5.86447 14.7488C5.93496 15.1568 5.97994 15.5688 5.99915 15.9824H8.89871C8.99638 15.2814 8.99638 14.5705 8.89871 13.8695C8.52438 11.1967 6.81713 9.50093 6.24078 8.94481C3.8324 6.62833 0.875413 6.33461 0 6.28174L0.101008 9.48135Z"
                    fill="white"
                  />
                  <path
                    d="M0.0456543 2.97051C1.75386 2.95902 3.44006 3.35179 4.96341 4.11602C5.74885 4.52614 6.48444 5.02345 7.15591 5.59834C8.3158 6.53334 9.31445 7.64832 10.1129 8.89977C10.5979 9.68841 10.9963 10.526 11.3012 11.3984C11.8372 12.8782 12.1496 14.4281 12.2282 15.998H15.1099C15.1582 15.242 15.3115 14.4962 15.5654 13.7814C15.7773 13.194 16.6943 10.6151 18.8769 9.88276C18.9977 9.84164 19.1304 9.80639 19.1304 9.80639C19.7318 9.64724 20.3588 9.60534 20.9763 9.68303V6.48342C20.6232 6.45204 20.2679 6.45204 19.9148 6.48342C16.9023 6.74777 14.9197 9.22482 14.2246 10.1824L12.2915 7.10807C12.4341 6.97883 12.65 6.78889 12.9154 6.56566C14.0721 5.58659 15.4486 4.44499 17.1796 3.78314C18.3972 3.32916 19.6966 3.12916 20.9961 3.19569V0.00783509C20.6971 -0.00391378 20.402 -0.00391378 20.0871 0.00783509C15.9021 0.174277 12.6203 2.59454 10.5645 4.58206C10.3327 4.34317 9.95842 3.97112 9.46922 3.55012C8.37396 2.60433 6.20721 0.736265 3.04622 0.184068C2.06161 0.0130803 1.05768 -0.0211916 0.0634802 0.0822448L0.0456543 2.97051Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_966_558">
                    <rect width="21" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* Badge text */}
              <span className="text-base font-normal text-[#165B5E] bg-[#EFFEFD] px-4 py-1 rounded-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Made With CVI</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
