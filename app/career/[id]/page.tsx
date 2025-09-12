"use client";
import React, { useRef } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { notFound, useParams } from 'next/navigation';
import { Share2 } from 'lucide-react';
import { getAccentColor } from '../../../lib/theme-utils';
import { useState, useRef as useReactRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { getCardBackgroundColor } from '../../../lib/theme-utils';

// Should match the jobs array in Opening.tsx
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


const Page = () => {
  const params = useParams();
  const jobId = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params.id[0] : '';
  const job = jobs.find(j => j.id === jobId);
  const { isDarkMode } = useTheme();
  const cardBg = getCardBackgroundColor(isDarkMode);
  const accent = getAccentColor(isDarkMode);

  // Share dropdown state
  const [shareOpen, setShareOpen] = useState(false);
  const shareBtnRef = useReactRef<HTMLButtonElement>(null);
  const shareDropdownRef = useReactRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        shareOpen &&
        shareDropdownRef.current &&
        !(shareDropdownRef.current as HTMLDivElement).contains(e.target as Node) &&
        shareBtnRef.current &&
        !(shareBtnRef.current as HTMLButtonElement).contains(e.target as Node)
      ) {
        setShareOpen(false);
      }
    }
    if (shareOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [shareOpen, shareBtnRef, shareDropdownRef]);

  if (!job) return notFound();

  return (
    <>
      <Header />
      <main>
        <motion.div
          ref={sectionRef}
          className="max-w-7xl mx-auto mt-10 md:mt-18 lg:mt-22"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Top section: Title and Apply box */}
          <motion.div
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex-1 min-w-0">
              <motion.h1
                className="text-xl md:text-2xl lg:text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              >
                {job.title}
              </motion.h1>
              <motion.div
                className="rounded-md overflow-hidden border border-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 text-sm divide-y md:divide-y-0 md:divide-x divide-gray-400 dark:divide-[#374151] border-b border-gray-400 dark:border-[#374151]">
                  <div className="px-4 py-6 flex flex-col gap-1">
                    <div className="text-[#888] dark:text-[#aaa] font-medium">Salary</div>
                    <div className="font-bold text-[#181818] dark:text-[#eee]">{job.salary}</div>
                  </div>
                  <div className="px-4 py-6 flex flex-col gap-1">
                    <div className="text-[#888] dark:text-[#aaa] font-medium">Job Type</div>
                    <div className="font-bold text-[#181818] dark:text-[#eee]">Full-Time</div>
                  </div>
                  <div className="px-4 py-6 flex flex-col gap-1">
                    <div className="text-[#888] dark:text-[#aaa] font-medium">Location</div>
                    <div className="font-bold text-[#181818] dark:text-[#eee]">Dhaka, Bangladesh</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 text-sm divide-y md:divide-y-0 md:divide-x divide-gray-400 dark:divide-[#374151]">
                  <div className="px-4 py-6 flex flex-col gap-1">
                    <div className="text-[#888] dark:text-[#aaa] font-medium">Vacancies</div>
                    <div className="font-bold text-[#181818] dark:text-[#eee]">03</div>
                  </div>
                  <div className="px-4 py-6 flex flex-col gap-1">
                    <div className="text-[#888] dark:text-[#aaa] font-medium">Experience</div>
                    <div className="font-bold text-[#181818] dark:text-[#eee]">02 Years</div>
                  </div>
                  <div className="px-4 py-6 flex flex-col gap-1">
                    <div className="text-[#888] dark:text-[#aaa] font-medium">Deadline</div>
                    <div className="font-bold text-[#181818] dark:text-[#eee]">{job.deadline}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="w-full px-4 md:px-0 md:w-auto md:max-w-xs flex flex-col gap-2 bg-transparent md:bg-transparent md:ml-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              <div className="text-[#181818] dark:text-[#eee]" style={{ fontSize: '20px', fontWeight: 600 }}>Ready to apply? <br/> We can&apos;t wait to meet you!</div>
              <div className="text-xs text-[#888] dark:text-[#aaa] mb-2">Next, you&apos;ll face an assessment to proceed. Apply for one job at a time and prepare well.</div>
              <div className="flex gap-2">
                <a
                  href={`/career/${job.id}/apply`}
                  className="group/btn flex items-center justify-between w-fit rounded-md px-5 py-2 cursor-pointer font-medium text-sm text-white bg-theme-accent hover:bg-theme-accent/90 transition-all"
                  style={{ minWidth: '0' }}
                >
                  <span className="mr-3">Apply Now</span>
                  <svg
                    className="w-4 h-4 text-white transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
                {/* Share button with dropdown (fixed hooks) */}
                <div className="relative inline-block">
                  <button
                    type="button"
                    ref={shareBtnRef}
                    onClick={() => setShareOpen((v) => !v)}
                    className="cursor-pointer flex items-center gap-2 px-6 py-2 rounded-sm border font-normal text-base bg-transparent focus:outline-none"
                    style={{
                      borderColor: accent,
                      color: isDarkMode ? '#fff' : '#222',
                      borderWidth: 2,
                    }}
                  >
                    Share
                    <Share2 size={28} strokeWidth={2} style={{ color: accent }} />
                  </button>
                  {shareOpen && (
                    <div
                      ref={shareDropdownRef}
                      className={`absolute z-20 left-0 mt-2 w-72 rounded-2xl shadow-lg px-6 py-4 border ${isDarkMode ? 'bg-[#23232a] border-[#23232a]' : 'bg-white border-gray-200'}`}
                    >
                      <div className="flex items-center mb-4">
                        <span className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-[#181818]'}`}>Share On</span>
                      </div>
                      <div className="flex justify-between items-center mb-1">
                        <a href="https://www.facebook.com/profile.php?id=61557546942505" title="Share on Facebook" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                          <Image src="/fb.webp" alt="Facebook" width={28} height={28} className="group-hover:scale-110 transition-transform" />
                          <span className={`text-xs mt-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Facebook</span>
                        </a>
                        <a href="https://www.linkedin.com/company/cloud-vortex-innovation-technology" title="Share on LinkedIn" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                          <Image src="/lk.svg" alt="LinkedIn" width={28} height={28} className="group-hover:scale-110 transition-transform" />
                          <span className={`text-xs mt-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Linkedin</span>
                        </a>
                        <a href="https://x.com/home" title="Share on X" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                          <Image src="/x.webp" alt="X" width={28} height={28} className="group-hover:scale-110 transition-transform" />
                          <span className={`text-xs mt-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>X</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Description Section with Opening.tsx background and color */}
        </motion.div>
        <motion.div
          className="mt-8 px-6 py-16 rounded-lg"
          style={{ backgroundColor: cardBg }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        >
          <div className='max-w-7xl mx-auto '>
            <h2
              className="font-semibold text-base md:text-lg mb-2"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              Description
            </h2>
            <p
              className="text-sm md:text-base mb-4"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h3
              className="font-semibold text-base md:text-lg mb-1 mt-6"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              Education
            </h3>
            <ul
              className="list-disc pl-5 text-sm md:text-base mb-4"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              <li>Bachelor&apos;s degree/MBA/Master&apos;s from any reputed University.</li>
              <li>Public University will be preferable.</li>
            </ul>
            <h3
              className="font-semibold text-base md:text-lg mb-1 mt-6"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              Additional Requirements
            </h3>
            <ul
              className="list-disc pl-5 text-sm md:text-base mb-4"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              <li>Oversee store operations, including receipt, storage, and dispatch of goods.</li>
              <li>Maintain accurate inventory records and ensure proper documentation.</li>
              <li>Conduct regular stock audits and reconcile variances</li>
              <li>Coordinate with procurement, logistics, and other departments for the smooth flow of materials</li>
              <li>Prepare daily/weekly reports on inventory status and movement</li>
              <li>Ensure the Inventory Register and Computer entry of all types of new or old products.</li>
              <li>Maintain Delivery Challan copy, Money Receipt copy, Goods Requisition Slip, Legal Notice File, Approval & Delivery File, etc., as required.</li>
              <li>Responsible for periodic Inventory statements as desired by Management.</li>
              <li>Report to the Management for Inventory Statement.</li>
              <li>Any other job assigned by the management.</li>
            </ul>
            <h3
              className="font-semibold text-base md:text-lg mb-1 mt-6"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              Skills
            </h3>
            <ul
              className="list-disc pl-5 text-sm md:text-base mb-4"
              style={{ color: isDarkMode ? '#fff' : '#181818' }}
            >
              <li>Expertise with Python Data and Machine Learning libraries</li>
              <li>Moderate experience with LLMs and RAG pipelines</li>
              <li>Comfortable in handling large amount of data and running ML algorithms on them</li>
              <li>Basic understanding of XAI</li>
              <li>Expertise in visualizing and manipulating big datasets</li>
            </ul>
            <a
              href={`/career/${job.id}/apply`}
              className="mt-6 px-5 py-2 rounded-md text-white font-medium text-sm bg-theme-accent flex items-center justify-between w-fit hover:bg-theme-accent/90 transition-all"
              style={{ minWidth: '0' }}
            >
              <span className="mr-3">Apply Now</span>
              <svg
                className="w-4 h-4 text-white transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Page;