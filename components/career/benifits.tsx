"use client";
import { useTheme } from "../../contexts/ThemeContext";
import { getAccentColor } from "../../lib/theme-utils";
import { Briefcase, Gift, HandPlatter, TrendingUp, Star, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
	{ icon: Briefcase, label: "Excellent Culture & Environment" },
	{ icon: Gift, label: "Two Festival Bonuses" },
	{ icon: HandPlatter, label: "Meals, Coffee & Snacks" },
	{ icon: TrendingUp, label: "Mentorship & Personal Growth" },
	{ icon: Star, label: "Performance Bonus" },
	{ icon: Calendar, label: "Leave Encashment" },
];

export default function Benefits() {
	const { isDarkMode } = useTheme();
	const textColor = isDarkMode ? "#fff" : "#18181b";
		const cardBg = isDarkMode ? "#23232a" : "#fff"; // cardBg is not used, but kept for future use
	const accent = getAccentColor(isDarkMode);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<section ref={sectionRef} className="w-full px-6 py-12">
			<motion.div
				className="max-w-7xl mx-auto w-full"
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<motion.h2
					className="text-2xl md:text-3xl font-semibold mb-8 text-left"
					style={{ color: textColor }}
					initial={{ opacity: 0, x: -30 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				>
					Benefits
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{benefits.map((b, idx) => (
						<motion.div
							key={idx}
							className="rounded-xl p-8 flex flex-col items-start gap-6 shadow-sm min-h-[180px] justify-center"
							style={{ backgroundColor: isDarkMode ? "#191919" : "#FAF9FC" }}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
						>
							<b.icon size={32} strokeWidth={2} color={accent} />
							<span
								className="text-base font-medium leading-relaxed"
								style={{ color: isDarkMode ? "#fff" : "#181818" }}
							>
								{b.label}
							</span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
