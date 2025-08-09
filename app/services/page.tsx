import MobileDev from "@/components/services/MobileDev";
import SoftwareDev from "@/components/services/SoftwareDev";
import UiDesign from "@/components/services/UiDesign";
import WebDev from "@/components/services/WebDev";
import Head from "next/head";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Our Core Services | Cloud Vortex Innovation</title>
        <meta
          name="description"
          content="Explore our core services: Web Development, Mobile App Development, UI/UX Design, and Custom Software tailored to real-world business needs."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="web development, mobile app, UI/UX design, software services, IT solutions"
        />
        <link
          rel="canonical"
          href="https://cloudvortexinnovation.com/services"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Our Core Services | Cloud Vortex Innovation"
        />
        <meta
          property="og:description"
          content="Modern software solutions designed for real-world business needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cloudvortexinnovation.com/services"
        />
        <meta
          property="og:image"
          content="https://cloudvortexinnovation.com/assets/og-image.jpg"
        />
      </Head>
      <div className="pb-8">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto w-full py-10" style={{ marginTop: '58px' }}>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Our Core Services
        </h1>
        <p className="  text-center text-xl mb-10" style={{ marginBottom: '40px' }}>
          Modern software solutions designed for real-world business needs.
        </p>

        <WebDev />

        <div className="w-full h-[1px] bg-[#DCDCDC] my-10"></div>

        <SoftwareDev />

        <div className="w-full h-[1px] bg-[#DCDCDC] my-10"></div>

        <MobileDev />

        <div className="w-full h-[1px] bg-[#DCDCDC] my-10"></div>

        <UiDesign />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
