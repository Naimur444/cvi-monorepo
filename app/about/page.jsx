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
      <FAQAboutProcess />
      <Footer />
    </motion.div>
  );
};

export default page;
