"use client";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FAQAboutProcess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <section ref={sectionRef} className="w-full px-6 py-20  text-gray-900">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ About Our Process</h2>
          <p className="text-lg text-gray-600">
            Answers to Common Questions: A Guide to Understanding Our Process.
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
              <AccordionItem
                value="item-1"
                className="rounded-lg shadow-md border border-gray-200 border-t-4 border-t-[#0E4F53]"
                style={{ backgroundColor: '#FAF9FC' }}
              >
                <AccordionTrigger className="font-bold hover:no-underline px-6 py-4">
                  How do you ensure the quality of the software being developed?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  CVI ensures the quality of the software being developed by following a rigorous testing phase. This includes unit testing, integration testing, and acceptance testing. These tests are designed to ensure that the software meets the requirements set out in the design phase and is free of defects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: '#FAF9FC' }}>
                <AccordionTrigger className="font-bold hover:no-underline px-6 py-4">
                  How do you handle securities issues?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We follow industry best practices and standards during the development process to ensure that the code is maintainable and scalable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: '#FAF9FC' }}>
                <AccordionTrigger className="font-bold hover:no-underline px-6 py-4">
                  How CVI handles maintenance and support after the software is deployed?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We use agile development methodologies that allow us to receive feedback from clients and make adjustments as needed to ensure that the final product meets their requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: '#FAF9FC' }}>
                <AccordionTrigger className="font-bold hover:no-underline px-6 py-4">
                  How is CVI able to work with so many different industries?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Our team is experienced in adapting to various industry standards and requirements, ensuring tailored solutions for each client.
                </AccordionContent>
              </AccordionItem>
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
