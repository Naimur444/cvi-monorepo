"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useTheme } from "../../contexts/ThemeContext"
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

const portfolioData = [
  {
    id: 1,
    title: "Travel Website",
    category: "Management",
    image: "/images/travel-card.png",
    tag: "Saas",
    tagColor: "#003C42",
    previewUrl: "https://example.com/travel-website",
  },
  {
    id: 2,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Mobile+App+Interface",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/mobile-app",
  },
  {
    id: 3,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Coffee+Shop+Laptop+Scene",
    tag: "Blog",
    tagColor: "#003C42",
    previewUrl: "https://example.com/blog-website",
  },
  {
    id: 4,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Website+Design+Mockup",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/website-design",
  },
  {
    id: 5,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Web+Application+Dashboard",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/web-dashboard",
  },
  {
    id: 6,
    title: "Travel Website",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Responsive+Website+Design",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/responsive-website",
  },
  // Additional Management projects to show "See More" button
  {
    id: 16,
    title: "CRM System",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=CRM+Dashboard",
    tag: "Dashboard",
    tagColor: "#003C42",
    previewUrl: "https://example.com/crm-system",
  },
  {
    id: 17,
    title: "Project Management Tool",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=Project+Management",
    tag: "Saas",
    tagColor: "#003C42",
    previewUrl: "https://example.com/project-management",
  },
  {
    id: 18,
    title: "HR Management System",
    category: "Management",
    image: "/placeholder.svg?height=240&width=360&text=HR+System",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/hr-system",
  },
  // System projects (formerly E-Commerce)
  {
    id: 7,
    title: "Travel Website",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=System+Store",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/system-store",
  },
  {
    id: 8,
    title: "Travel Website",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Shopping+App",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/shopping-app",
  },
  {
    id: 9,
    title: "Travel Website",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Online+Store+Dashboard",
    tag: "Dashboard",
    tagColor: "#003C42",
    previewUrl: "https://example.com/store-dashboard",
  },
  {
    id: 20,
    title: "Fashion E-store",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Fashion+Store",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/fashion-store",
  },
  {
    id: 21,
    title: "Electronics Store",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Electronics+Store",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/electronics-store",
  },
  {
    id: 22,
    title: "Marketplace App",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Marketplace+App",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/marketplace-app",
  },
  {
    id: 23,
    title: "Food Delivery App",
    category: "System",
    image: "/placeholder.svg?height=240&width=360&text=Food+Delivery",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/food-delivery",
  },
  // Website projects
  {
    id: 10,
    title: "Travel Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Corporate+Website",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/corporate-website",
  },
  {
    id: 11,
    title: "Travel Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Portfolio+Website",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/portfolio-website",
  },
  {
    id: 12,
    title: "Travel Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Business+Website",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/business-website",
  },
  {
    id: 24,
    title: "Real Estate Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Real+Estate",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/real-estate",
  },
  {
    id: 25,
    title: "Healthcare Website",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Healthcare+Site",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/healthcare-site",
  },
  {
    id: 26,
    title: "Education Platform",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=Education+Platform",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/education-platform",
  },
  {
    id: 27,
    title: "News Portal",
    category: "Website",
    image: "/placeholder.svg?height=240&width=360&text=News+Portal",
    tag: "Website",
    tagColor: "#003C42",
    previewUrl: "https://example.com/news-portal",
  },
  // Mobile App projects
  {
    id: 13,
    title: "Travel Website",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Travel+Mobile+App",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/travel-mobile-app",
  },
  {
    id: 14,
    title: "Travel Website",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=iOS+App+Design",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/ios-app",
  },
  {
    id: 15,
    title: "Travel Website",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Android+App+Interface",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/android-app",
  },
  {
    id: 28,
    title: "Fitness Tracker App",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Fitness+App",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/fitness-app",
  },
  {
    id: 29,
    title: "Banking App",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Banking+App",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/banking-app",
  },
  {
    id: 30,
    title: "Social Media App",
    category: "Mobile App",
    image: "/placeholder.svg?height=240&width=360&text=Social+Media",
    tag: "Mobile App",
    tagColor: "#003C42",
    previewUrl: "https://example.com/social-media-app",
  },
]

const categories = ["Management", "System", "Website", "Mobile App"]

export default function Component() {
  // Theme context for dark/light mode
  const { isDarkMode } = useTheme()

  const [activeCategory, setActiveCategory] = useState("Management")
  
  // Track which tabs have "See More" clicked
  const [showMoreClicked, setShowMoreClicked] = useState({
    "Management": false,
    "System": false,
    "Website": false,
    "Mobile App": false
  })

  // Pagination state for remaining cards
  const [currentPages, setCurrentPages] = useState({
    "Management": 1,
    "System": 1,
    "Website": 1,
    "Mobile App": 1
  })

  const itemsPerPage = 6

  // Get all projects for current category
  const allCategoryProjects = portfolioData.filter((project) => project.category === activeCategory)
  const hasMoreThanSix = allCategoryProjects.length > 6
  const isShowingMore = showMoreClicked[activeCategory as keyof typeof showMoreClicked]

  // Calculate projects to show
  let projectsToShow
  if (!isShowingMore) {
    // Show first 6 projects
    projectsToShow = allCategoryProjects.slice(0, 6)
  } else {
    // Show remaining projects with pagination
    const remainingProjects = allCategoryProjects.slice(6)
    const currentPage = currentPages[activeCategory as keyof typeof currentPages]
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    projectsToShow = remainingProjects.slice(startIndex, endIndex)
  }

  // Calculate pagination info for remaining projects
  const remainingProjects = allCategoryProjects.slice(6)
  const totalPagesForRemaining = Math.ceil(remainingProjects.length / itemsPerPage)
  const currentPage = currentPages[activeCategory as keyof typeof currentPages]

  // Handle "See More" click (no scroll)
  const handleSeeMoreClick = () => {
    setShowMoreClicked(prev => ({
      ...prev,
      [activeCategory]: true
    }))
    setCurrentPages(prev => ({
      ...prev,
      [activeCategory]: 1
    }))
    // No scroll/jump
  }

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  // Handle page change for remaining projects
  const handlePageChange = (page: number) => {
    setCurrentPages(prev => ({
      ...prev,
      [activeCategory]: page
    }))
  }


  return (
    <section className="w-full px-4 sm:px-6 py-8 md:py-16 lg:py-20">
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
                onClick={() => handleCategoryChange(category)}
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
            {projectsToShow.map((project, index) => (
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
                      style={{ backgroundColor: getAccentColor(isDarkMode) }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base sm:text-lg font-bold transition-colors duration-200 mb-3 sm:mb-4"
                    style={{
                      color: getThemeColor(isDarkMode, 'secondaryText')
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Enhanced Preview Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.previewUrl, '_blank')
                    }}
                    className="group/btn flex items-center justify-between border-2 rounded-lg px-4 py-3 cursor-pointer"
                    style={{
                      backgroundColor: getCardBackgroundColor(isDarkMode),
                      borderColor: isDarkMode ? '#404040' : '#E5E7EB',
                      width: 'auto',
                      minWidth: 0
                    }}
                    whileHover={{
                      borderColor: getAccentColor(isDarkMode),
                      scale: 1.02,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                    >
                      Preview Project
                    </span>

                    {/* Animated icon with rotation and color change */}
                    <motion.div
                      className="w-8 h-8 rounded flex items-center justify-center ml-3"
                      style={{ backgroundColor: getAccentColor(isDarkMode) }}
                      whileHover={{
                        backgroundColor: isDarkMode ? '#046B6F' : '#002A30',
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button - Only show if category has more than 6 projects and not showing more yet */}
        {hasMoreThanSix && !isShowingMore && (
          <div className="text-center mt-8 sm:mt-12">
            <motion.button
              onClick={handleSeeMoreClick}
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

        {/* Pagination - Show when showing more projects */}
        {isShowingMore && hasMoreThanSix && (
          <div className="mt-8 sm:mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                {/* Previous Button */}
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) {
                        handlePageChange(currentPage - 1)
                      } else {
                        // Go back to initial view
                        setShowMoreClicked(prev => ({
                          ...prev,
                          [activeCategory]: false
                        }))
                        setCurrentPages(prev => ({
                          ...prev,
                          [activeCategory]: 1
                        }))
                      }
                    }}
                    style={{
                      color: getAccentColor(isDarkMode),
                      backgroundColor: getCardBackgroundColor(isDarkMode),
                      border: `1px solid ${getAccentColor(isDarkMode)}`
                    }}
                  />
                </PaginationItem>

                {/* Page Numbers */}
                {Array.from({ length: totalPagesForRemaining }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(page)
                      }}
                      style={{
                        backgroundColor: page === currentPage 
                          ? getAccentColor(isDarkMode) 
                          : getCardBackgroundColor(isDarkMode),
                        color: page === currentPage 
                          ? '#ffffff' 
                          : getAccentColor(isDarkMode),
                        border: `1px solid ${getAccentColor(isDarkMode)}`
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {/* Next Button */}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPagesForRemaining) {
                        handlePageChange(currentPage + 1)
                      }
                    }}
                    style={{
                      color: currentPage < totalPagesForRemaining ? getAccentColor(isDarkMode) : getThemeColor(isDarkMode, 'mutedText'),
                      backgroundColor: getCardBackgroundColor(isDarkMode),
                      border: `1px solid ${currentPage < totalPagesForRemaining ? getAccentColor(isDarkMode) : getThemeColor(isDarkMode, 'mutedText')}`,
                      opacity: currentPage < totalPagesForRemaining ? 1 : 0.5,
                      pointerEvents: currentPage < totalPagesForRemaining ? 'auto' : 'none'
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  )
}
