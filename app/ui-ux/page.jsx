import HeroSection from "@/components/software/hero-section";
import Diamond from "@/components/ui-ux/Diamond";
import FAQAboutProcess from '../../components/software/faq-about-process';
import LiveProgressTracking from '../../components/software/live-progress-tracking';
import CollaborationSection from '../../components/software/collaboration';
import ContactSection from '../../components/contact-section';import Header from "@/components/header";
import Footer from "@/components/footer";
import Design from "@/components/ui-ux/Design"
import ScrollTriggerweb from '../../components/Scrolltriggerweb';


import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-8 md:mt-16 lg:mt-20">
        <HeroSection 
          title="UI/UX Design"
          image="/ui-ux-banner.png"
        />
      </div>
      <Design />
      <CollaborationSection subtitle="Regular meetings, daily standups, and ongoing collaboration for the best outcomes for your custom UI/UX Design needs." />
      <Diamond />
      <ScrollTriggerweb/>
      <LiveProgressTracking />
      <FAQAboutProcess
        header="FAQ About Our Process"
        description="Answers to common questions about our end-to-end UI/UX design process."
        faqs={[
          {
            question: "What services are included in your UI/UX design offering?",
            answer: `We provide end-to-end UI/UX design services, including user research, wireframing, interactive prototyping, visual design, and usability testing. Our goal is to create intuitive, visually appealing interfaces that enhance user experience across web, mobile, and software applications. We begin by understanding your business objectives, target audience, and user behaviors. Then, we design wireframes and interactive prototypes to map out user flows and interactions. Finally, our designers craft polished, responsive visuals that align with your brand identity.`
          },
          {
            question: "How does the UI/UX design process work from start to finish?",
            answer: `Our process is structured in phases:\nDiscovery and Research: Analyze user needs, market trends, and competitor solutions.\nWireframing and Prototyping: Create low- and high-fidelity wireframes and interactive prototypes to visualize the interface and user journey.\nVisual Design: Develop final UI designs, including color schemes, typography, icons, and branding elements.\nUsability Testing: Conduct testing with real users to validate the design, identify pain points, and refine interactions.\nHandoff to Development: Provide design assets and guidelines to the development team for implementation.`
          },
          {
            question: "What tools and methodologies do you use for UI/UX design?",
            answer: `We use industry-standard tools like Figma, Adobe XD, Sketch, and InVision to create wireframes, prototypes, and high-fidelity designs. Our team follows user-centered design principles, ensuring designs are intuitive, accessible, and responsive. We incorporate iterative feedback loops, usability testing, and analytics insights to continuously improve the user experience.`
          },
          {
            question: "Do you provide ongoing support after the design phase?",
            answer: `Yes. We support the implementation phase by collaborating with developers, ensuring the designs are accurately translated into the final product. Additionally, we provide post-launch UI/UX optimization based on user feedback, analytics, and emerging design trends to enhance usability, engagement, and overall satisfaction.`
          }
        ]}
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default page;
