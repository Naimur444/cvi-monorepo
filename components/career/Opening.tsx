"use client";

import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
	{
		id: "assistant-manager-sales-1",
		title: "Assistant Manager / Manager - Sales",
		type: "Onsite · Full-time",
		salary: "20000 Taka/Monthly",
		deadline: "12 July, 2025",
		description: "Lead sales teams, manage client relationships, and drive revenue growth.",
	},
	{
		id: "assistant-manager-sales-2",
		title: "Assistant Manager / Manager - Sales",
		type: "Onsite · Full-time",
		salary: "20000 Taka/Monthly",
		deadline: "12 July, 2025",
		description: "Develop and implement sales strategies for new markets.",
	},
	{
		id: "assistant-manager-sales-3",
		title: "Assistant Manager / Manager - Sales",
		type: "Onsite · Full-time",
		salary: "20000 Taka/Monthly",
		deadline: "12 July, 2025",
		description: "Coordinate with marketing and product teams to achieve targets.",
	},
	{
		id: "assistant-manager-sales-4",
		title: "Assistant Manager / Manager - Sales",
		type: "Onsite · Full-time",
		salary: "20000 Taka/Monthly",
		deadline: "12 July, 2025",
		description: "Mentor junior sales staff and oversee daily operations.",
	},
	{
		id: "assistant-manager-sales-5",
		title: "Assistant Manager / Manager - Sales",
		type: "Onsite · Full-time",
		salary: "20000 Taka/Monthly",
		deadline: "12 July, 2025",
		description: "Analyze sales data and prepare performance reports.",
	},
	{
		id: "assistant-manager-sales-6",
		title: "Assistant Manager / Manager - Sales",
		type: "Onsite · Full-time",
		salary: "20000 Taka/Monthly",
		deadline: "12 July, 2025",
		description: "Build and maintain strong customer relationships.",
	},
];

export default function Opening() {
	const { isDarkMode } = useTheme();
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
	return (
		<section
			ref={sectionRef}
			className="w-full px-6 py-16"
			style={{ backgroundColor: getCardBackgroundColor(isDarkMode) }}
		>
			<motion.div
				className="max-w-7xl mx-auto w-full"
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<motion.h2
					className="text-2xl md:text-3xl font-semibold mb-8 text-left"
					style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
					initial={{ opacity: 0, x: -30 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				>
					Current Opening
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{jobs.map((job, idx) => (
						<motion.div
							key={job.id}
							className="rounded-lg shadow-sm p-6 flex flex-col gap-4 border border-gray-100 dark:border-[#23232a]"
							style={{ backgroundColor: isDarkMode ? "#212121" : "#FFFFFF" }}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
						>
							{/* Job Title */}
							<div className="font-semibold text-base md:text-lg" style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}>
								{job.title}
							</div>
							{/* Job Type - Onsite • Full-time */}
							<div className="text-sm text-[#444] dark:text-[#bbb]">
								{job.type}
							</div>
							{/* Salary and Deadline Row */}
							<div className="flex justify-between items-start">
								<div>
									<div className="text-xs text-[#888] dark:text-[#aaa] font-medium mb-1">Salary</div>
									<div className="text-sm text-[#181818] dark:text-[#eee] font-semibold">{job.salary}</div>
								</div>
								<div className="text-right">
									<div className="text-xs text-[#888] dark:text-[#aaa] font-medium mb-1">Deadline</div>
									<div className="text-sm text-[#181818] dark:text-[#eee] font-semibold">{job.deadline}</div>
								</div>
							</div>
							{/* Button */}
							<Link
								href={`/career/${job.id}`}
								className="mt-2 px-5 py-2 rounded-md text-white font-medium text-sm self-start"
								style={{ backgroundColor: getAccentColor(isDarkMode) }}
							>
								Job Details
							</Link>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
