"use client";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils";


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAboutProcessProps {
  header?: string;
  description?: string;
  faqs: FAQItem[];
}

const FAQAboutProcess: React.FC<FAQAboutProcessProps> = ({ header = "FAQ About Our Process", description = "Answers to Common Questions: A Guide to Understanding Our Process.", faqs }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { isDarkMode } = useTheme();
  return (
    <section ref={sectionRef} className="w-full px-6 py-20 ">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
          >
            {header}
          </h2>
          <p
            className="text-lg"
            style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
          >
            {description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* FAQ Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx + 1}`}
                  className="rounded-lg shadow-md"
                  style={{
                    backgroundColor: getCardBackgroundColor(isDarkMode),
                    borderTop: idx === 0 ? `4px solid ${getAccentColor(isDarkMode)}` : undefined,
                    borderLeft: isDarkMode ? 'none' : '1px solid #E5E7EB',
                    borderRight: isDarkMode ? 'none' : '1px solid #E5E7EB',
                    borderBottom: isDarkMode ? 'none' : '1px solid #E5E7EB'
                  }}
                >
                  <AccordionTrigger
                    className="font-bold hover:no-underline px-6 py-4"
                    style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-6 pb-4"
                    style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/image-3.png"
              alt="Two men collaborating on a computer"
              width={437}
              height={366}
              className="rounded-sm "
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQAboutProcess;
