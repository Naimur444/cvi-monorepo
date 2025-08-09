import React from 'react';
import Header from '../../components/header';
import ContactSection from '../../components/contact-section';
import Footer from '../../components/footer';
import HeroSection from '../../components/software/hero-section';
import ProcessSection from '../../components/software/process-section';
import AgileProcessSection from '../../components/software/agile-process';
import CollaborationSection from '../../components/software/collaboration';
import ProcessLifeCycle from '../../components/software/process-life-cycle';
import LiveProgressTracking from '../../components/software/live-progress-tracking';
import LiveReporting from '../../components/software/live-reporting';
import FAQAboutProcess from '../../components/software/faq-about-process';

const Page = () => {
  return (
    <>
      <Header />
      
      <main>
        <div className="mt-8 md:mt-16 lg:mt-20">
          <HeroSection title="Web Development" />
        </div>
        <ProcessSection />
        <AgileProcessSection />
        <CollaborationSection />
        <ProcessLifeCycle />
        <LiveProgressTracking />
        <LiveReporting />
        <FAQAboutProcess />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Page;