import Banner from "@/components/ui-ux/Banner";
import Diamond from "@/components/ui-ux/Diamond";
import FAQAboutProcess from '../../components/software/faq-about-process';
import Lifecycle from "@/components/ui-ux/Lifecycle";
import LiveProgressTracking from '../../components/software/live-progress-tracking';
import Srs from "@/components/ui-ux/Srs";
import UiDesign from "@/components/ui-ux/UiDesign";
import Wireframe from "@/components/ui-ux/Wireframe";
import CollaborationSection from '../../components/software/collaboration';
import ContactSection from '../../components/contact-section';import Header from "@/components/header";
import Footer from "@/components/footer";
import Design from "@/components/ui-ux/Design"

import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-8 md:mt-16 lg:mt-20">
        <Banner />
      </div>
      <Design />
      <div className="mt-8 md:mt-16 lg:mt-20">
      <CollaborationSection />
      </div>
      <Diamond />
      <Lifecycle />
      <Wireframe />
      <UiDesign />
      <Srs />
      <LiveProgressTracking />
      <FAQAboutProcess />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default page;
