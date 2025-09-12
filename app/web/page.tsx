import React from 'react';
import Header from '../../components/header';
import ContactSection from '../../components/contact-section';
import Footer from '../../components/footer';
import HeroSection from '../../components/software/hero-section';
import ProcessSection from '../../components/software/process-section';
import AgileProcessSection from '../../components/software/agile-process';
import CollaborationSection from '../../components/software/collaboration';
import LiveProgressTracking from '../../components/software/live-progress-tracking';
import LiveReporting from '../../components/software/live-reporting';
import FAQAboutProcess from '../../components/software/faq-about-process';
import Scrolltrigger from '../../components/scrolltrigger';

const testingText = "Development and Testing ensures the Quality and Functionality of Your Custom Website. Our development process follows industry best practices and standards, while our rigorous testing phase ensures that the final product is free of defects and meets the requirements set out in the design phase.";

const Page = () => {
  return (
    <>
      <Header />
      
      <main>
        <div className="mt-8 md:mt-16 lg:mt-20">
          <HeroSection title="Web Development" />
        </div>
        <ProcessSection />
        <AgileProcessSection subtitle="Flexible, fast and goal-oriented. CVI Agile web development approach delivers results." />
        <CollaborationSection subtitle="Regular meetings, daily standups, and ongoing collaboration for the best outcomes for your custom web development needs." />
        <Scrolltrigger testingText={testingText} />
        <LiveProgressTracking />
        <LiveReporting />
        <FAQAboutProcess
          header="FAQ About Our Process"
          description="Answers to common questions about our full-service web development process."
          faqs={[
            {
              question: "What services are included in your full-service web development offering?",
              answer: `We provide end-to-end web development services, covering everything from initial consultation and planning through UI/UX design, custom front-end and back-end development, to deployment and ongoing maintenance. We begin with a discovery phase to define your goals and audience, then create wireframes and interactive prototypes to ensure a user-friendly design. Next, our developers code both the client-side and server-side functionality, building a secure, scalable website tailored to your needs. Once the site is launched, we perform routine maintenance (updates, backups, security patches, etc.) to keep your site running smoothly. We serve clients from startups and small businesses to large enterprises and tailor each solution to fit their goals and budget.`
            },
            {
              question: "How does the web development process work from start to finish?",
              answer: `We follow a structured, phased process. First is discovery and planning: we work with you to define your business goals, target audience, and project requirements. Then we plan the site by creating a sitemap and wireframes to outline content and page structure, and our designers develop UI/UX mockups for your review. Next, our team implements the site by coding both the front-end and back-end, integrating the planned features and ensuring responsiveness. After development we conduct thorough testing (functionality, compatibility, performance) to catch and fix any issues. Finally, we deploy your site to a secure hosting environment and launch it. A typical medium-sized project takes about 12–20 weeks from start to launch, and we keep you informed at each step to ensure the site meets your expectations.`
            },
            {
              question: "What technologies do you use, and how is UI/UX design handled?",
              answer: `We are technology-agnostic and select the stack that best fits your project's needs and budget. Our full-stack developers are proficient in a wide range of modern tools – for example, popular front-end frameworks (React, Angular, Vue, etc.) and robust back-end platforms (Node.js, .NET, PHP, Python, etc.) – focusing on proven, reliable technologies to deliver the project on time and on budget. At the same time, our in-house designers create responsive, mobile-first UI/UX prototypes and layouts from the outset. By integrating design and development early, we ensure the final website is both functionally robust and visually engaging.`
            },
            {
              question: "What about hosting and ongoing maintenance after launch?",
              answer: `After we build your site, we handle deployment and hosting on a secure, high-performance server. We also provide our good hosting  server– a good host ensures your site's files are always accessible and load quickly for visitors. Once live, we offer ongoing maintenance services to keep your site up to date and secure. This includes applying software updates, fixing bugs, performing backups, and monitoring performance. As one industry guide notes, a website is like a new car – routine maintenance is necessary to protect your investment and keep it running smoothly.`
            }
          ]}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Page;