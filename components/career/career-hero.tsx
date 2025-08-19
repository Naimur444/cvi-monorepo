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
	const [isScrolling, setIsScrolling] = React.useState(false);

	// Enhanced smooth scroll to opening section with better easing
	const scrollToOpening = () => {
		setIsScrolling(true);
		const openingSection = document.getElementById('opening-section');
		if (openingSection) {
			// Get the current position and target position
			const targetPosition = openingSection.offsetTop - 80; // 80px offset for better visual positioning
			const startPosition = window.pageYOffset;
			const distance = targetPosition - startPosition;
			const duration = 1800; // 1.8 seconds for slower, smoother animation
			
			let start: number | null = null;

			// Custom easing function for ultra-smooth animation (ease-in-out-quart)
			const easeInOutQuart = (t: number): number => {
				return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
			};

			const step = (timestamp: number) => {
				if (!start) start = timestamp;
				const progress = Math.min((timestamp - start) / duration, 1);
				const easedProgress = easeInOutQuart(progress);
				
				window.scrollTo(0, startPosition + distance * easedProgress);
				
				if (progress < 1) {
					window.requestAnimationFrame(step);
				} else {
					// Reset scrolling state when animation completes
					setTimeout(() => setIsScrolling(false), 100);
				}
			};

			window.requestAnimationFrame(step);
		}
	};

	return (
		<section
			ref={sectionRef}
			className="w-full px-6 py-8 md:py-16 lg:py-20"
		>
			<motion.div
				className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-6 lg:gap-8"
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
			>
				{/* Mobile: Stack image, text, button, image. Desktop: Original layout */}
				{/* First image - always visible, order 1 on mobile, 1 on desktop */}
				<motion.div
					className="flex-shrink-0 order-1 md:order-none mb-4 md:mb-0"
					initial={{ opacity: 0, x: -40 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
					transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
				>
					<div
						style={{ width: 320, height: 380, background: cardBg }}
						className="rounded-lg overflow-hidden mx-auto"
					>
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

				{/* Center text and button section - order 2 and 3 on mobile, 2 on desktop */}
				<motion.div
					className="flex-1 flex flex-col items-start text-left gap-4 px-4 order-2 md:order-none"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
				>
					<p
						className="text-base font-normal leading-relaxed"
						style={{ color: textColor }}
					>
						   Are you searching for a career where you can create, shape, and celebrate the extraordinary? Look no further you&apos;ve found the perfect place!
					</p>
					<button
						className="cursor-pointer px-6 py-2 text-white font-medium text-sm rounded-md transition-all duration-200"
						style={{ background: getAccentColor(isDarkMode) }}
						onClick={scrollToOpening}
						disabled={isScrolling}
					>
						{isScrolling ? (
							<div className="flex items-center gap-2 ">
								<div className=" w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
								Scrolling...
							</div>
						) : (
							"Join Our Team"
						)}
					</button>
				</motion.div>

				{/* Second image - visible on all screens, order 4 on mobile, 3 on desktop */}
				<motion.div
					className="flex-shrink-0 order-3 md:order-none mt-4 md:mt-0 block md:block"
					initial={{ opacity: 0, x: 40 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
					transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
				>
					<div
						style={{ width: 300, height: 200, background: cardBg }}
						className="rounded-lg overflow-hidden mx-auto"
					>
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