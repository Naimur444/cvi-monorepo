"use client";
import Banner from "@/components/about/Banner";
import Career from "@/components/about/Career";
import FAQAboutProcess from '../../components/software/faq-about-process';
import Leadership from "@/components/about/Leadership";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header />
      <div className="mt-8 md:mt-16 lg:mt-20">
        <Banner />
      </div>
      <Leadership />
      <Career />
      <FAQAboutProcess
        header="About Our Company: FAQ"
        description="Answers to common questions about our company, mission, and values."
        faqs={[
          {
            question: "Who are you and what does your company do?",
            answer: `We are a full-service software solution and technology company. Our mission is to help businesses of all sizes transform their ideas into innovative, reliable, and scalable digital solutions.`
          },
          {
            question: "What makes your company different from others?",
            answer: `We combine technical expertise with a client-focused approach. Our team prioritizes understanding your business goals, delivering tailored solutions, and maintaining transparency throughout the project lifecycle. With experience across multiple industries, we ensure each project is innovative, reliable, and aligned with best practices.`
          },
          {
            question: "Who are your clients?",
            answer: `We serve a wide range of clients, from startups and small businesses to mid-sized enterprises and large corporations worldwide. Our solutions are customized to meet the unique needs and budgets of each client.`
          },
          {
            question: "What is your company’s mission and vision?",
            answer: `Our mission is to empower businesses through innovative digital solutions, providing seamless technology experiences that drive growth and efficiency. Our vision is to be recognized globally as a trusted partner for delivering exceptional software solutions and services.`
          },
          {
            question: "What values guide your company?",
            answer: `We are guided by integrity, innovation, collaboration, and customer satisfaction. These core values shape our approach to projects, teamwork, and client relationships, ensuring we consistently deliver quality and value.`
          }
        ]}
      />
      <Footer />
    </motion.div>
  );
};

export default page;
