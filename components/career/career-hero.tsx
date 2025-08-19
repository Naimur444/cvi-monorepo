"use client"
import { useTheme } from "../../contexts/ThemeContext"
import { getAccentColor } from "../../lib/theme-utils"
import Image from "next/image"
import * as React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CareerHero() {
	const { isDarkMode } = useTheme();
	const textColor = isDarkMode ? "#fff" : "#18181b";
	const cardBg = isDarkMode ? "#23232a" : "#fff";
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<section ref={sectionRef} className="w-full px-6 py-8 md:py-16 lg:py-20">
			<motion.div
				className="max-w-7xl mx-auto w-full flex items-center gap-6 lg:gap-8"
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				{/* Left image section - larger and taller */}
				<motion.div
					className="flex-shrink-0"
					initial={{ opacity: 0, x: -40 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				>
					<div style={{ width: 320, height: 380, background: cardBg }} className="rounded-lg overflow-hidden">
						<Image
							src="/career1.jpg"
							alt="Career team meeting"
							width={320}
							height={280}
							className="w-full h-full object-cover"
							style={{ objectFit: 'cover' }}
							priority
						/>
					</div>
				</motion.div>

				{/* Center text and button section */}
				<motion.div
					className="flex-1 flex flex-col items-start text-left gap-4 px-4"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
				>
					<p
						className="text-base font-normal leading-relaxed"
						style={{ color: textColor }}
					>
						Are you searching for a career where you can create, shape, and celebrate the extraordinary? Look no further you've found the perfect place!
					</p>
					<button
						className="px-6 py-2 text-white font-medium text-sm rounded-md transition-all duration-200"
						style={{ background: getAccentColor(isDarkMode) }}
					>
						Join Our Team
					</button>
				</motion.div>

				{/* Right image section - smaller */}
				<motion.div
					className="flex-shrink-0 hidden md:block"
					initial={{ opacity: 0, x: 40 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
					transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
				>
					<div style={{ width: 300, height: 200, background: cardBg }} className="rounded-lg overflow-hidden">
						<Image
							src="/career2.jpg"
							alt="Team meeting"
							width={225}
							height={190}
							className="w-full h-full object-cover"
							style={{ objectFit: 'cover' }}
							priority
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}