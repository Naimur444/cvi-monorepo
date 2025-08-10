"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useTheme } from "../../contexts/ThemeContext"
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils"

const portfolioData = [
  {
    id: 1,
    title: "Travel Website",
    category: "Management",
    image: "/images/travel-card.png",
    tag: "Saas",
    tagColor: "#003C42",
  },
  {
    id: 2,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Mobile+App+Interface",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 3,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Coffee+Shop+Laptop+Scene",
    tag: "Blog",
    tagColor: "#003C42",
  },
  {
    id: 4,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Website+Design+Mockup",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 5,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Web+Application+Dashboard",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 6,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Responsive+Website+Design",
    tag: "Website",
    tagColor: "#003C42",
  },
  // Additional Management projects to show "See More" button
  {
    id: 16,
    title: "CRM System",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=CRM+Dashboard",
    tag: "Dashboard",
    tagColor: "#003C42",
  },
  {
    id: 17,
    title: "Project Management Tool",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Project+Management",
    tag: "Saas",
    tagColor: "#003C42",
  },
  {
    id: 18,
    title: "HR Management System",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=HR+System",
    tag: "Website",
    tagColor: "#003C42",
  },
  // System projects (formerly E-Commerce)
  {
    id: 7,
    title: "Travel Website",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=System+Store",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 8,
    title: "Travel Website",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Shopping+App",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 9,
    title: "Travel Website",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Online+Store+Dashboard",
    tag: "Dashboard",
    tagColor: "#003C42",
  },
  {
    id: 20,
    title: "Fashion E-store",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Fashion+Store",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 21,
    title: "Electronics Store",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Electronics+Store",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 22,
    title: "Marketplace App",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Marketplace+App",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 23,
    title: "Food Delivery App",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Food+Delivery",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  // Website projects
  {
    id: 10,
    title: "Travel Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Corporate+Website",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 11,
    title: "Travel Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Portfolio+Website",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 12,
    title: "Travel Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Business+Website",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 24,
    title: "Real Estate Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Real+Estate",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 25,
    title: "Healthcare Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Healthcare+Site",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 26,
    title: "Education Platform",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Education+Platform",
    tag: "Website",
    tagColor: "#003C42",
  },
  {
    id: 27,
    title: "News Portal",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=News+Portal",
    tag: "Website",
    tagColor: "#003C42",
  },
  // Mobile App projects
  {
    id: 13,
    title: "Travel Website",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Travel+Mobile+App",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 14,
    title: "Travel Website",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=iOS+App+Design",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 15,
    title: "Travel Website",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Android+App+Interface",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 28,
    title: "Fitness Tracker App",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Fitness+App",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 29,
    title: "Banking App",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Banking+App",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
  {
    id: 30,
    title: "Social Media App",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Social+Media",
    tag: "Mobile App",
    tagColor: "#003C42",
  },
]

const categories = ["Management", "System", "Website", "Mobile App"]

export default function Component() {
  // Theme context for dark/light mode
  const { isDarkMode } = useTheme()

  const [activeCategory, setActiveCategory] = useState("Management")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = portfolioData.filter((project) => project.category === activeCategory).slice(0, 6)
  const allFilteredProjects = portfolioData.filter((project) => project.category === activeCategory)

  return (
  <section className="w-full px-4 sm:px-6 py-8 md:py-16 lg:py-20  ">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 w-full">
          <h2
            className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
            style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
          >
            Some of our Partnership Works
          </h2>
        </div>
        
        {/* Filter Tabs - Responsive Design */}
        <div className="mb-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-[24px]">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="text-xs sm:text-sm font-medium transition-all duration-200 h-10 sm:h-12 rounded px-2 sm:px-4 whitespace-nowrap flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: activeCategory === category
                    ? getAccentColor(isDarkMode)
                    : getCardBackgroundColor(isDarkMode),
                  color: activeCategory === category
                    ? '#ffffff'
                    : getAccentColor(isDarkMode),
                  border: `1.5px solid ${getAccentColor(isDarkMode)}`
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="truncate">{category}</span>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid - Responsive Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[24px]">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="group cursor-pointer"
              >
                {/* Complete Card with theme-aware background and box shadow */}
                <div
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 transform hover:-translate-y-1 w-full"
                  style={{
                    minHeight: "350px",
                    backgroundColor: getCardBackgroundColor(isDarkMode)
                  }}
                >
                  {/* Image Container */}
                  <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="/products1.png"
                      alt={project.title}
                      width={360}
                      height={240}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Tag positioned below image */}
                  <div className="mb-3 sm:mb-4">
                    <span
                      className={`inline-block text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium`}
                      style={{ backgroundColor: project.tagColor }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base sm:text-lg font-bold transition-colors duration-200"
                    style={{
                      color: getThemeColor(isDarkMode, 'secondaryText')
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        {allFilteredProjects.length > 6 && (
          <div className="text-center mt-8 sm:mt-12">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200"
              style={{
                backgroundColor: getAccentColor(isDarkMode)
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? '#046B6F' : '#002A30'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = getAccentColor(isDarkMode)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More
            </motion.button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />
              
              {/* Modal Content with Liquid Glass Effect */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="modal-liquid-glass rounded-2xl max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Liquid Glass Effect Layers */}
                <div className="modal-liquid-glass-effect"></div>
                <div className="modal-liquid-glass-tint"></div>
                <div className="modal-liquid-glass-shine"></div>
                
                {/* Modal Content */}
                <div className="modal-liquid-glass-content">
                  {/* Modal Header */}
                  <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200/50">
                    <h3
                      className="text-lg sm:text-2xl font-bold"
                      style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                    >
                      All {activeCategory} Projects
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="transition-colors"
                      style={{
                        color: getThemeColor(isDarkMode, 'mutedText')
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = getThemeColor(isDarkMode, 'secondaryText')
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = getThemeColor(isDarkMode, 'mutedText')
                      }}
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {allFilteredProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                          className="group cursor-pointer"
                        >
                          {/* Card */}
                          <div
                            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 transform hover:-translate-y-1 w-full backdrop-blur-sm"
                            style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
                          >
                            {/* Image Container */}
                            <div className="relative mb-2 sm:mb-3 overflow-hidden rounded-lg">
                              <Image
                                src="/products1.png"
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>

                            {/* Tag */}
                            <div className="mb-2 sm:mb-3">
                              <span
                                className="inline-block text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                                style={{ backgroundColor: project.tagColor }}
                              >
                                {project.tag}
                              </span>
                            </div>

                            {/* Title */}
                            <h4
                              className="text-sm sm:text-base font-bold transition-colors duration-200"
                              style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                            >
                              {project.title}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}