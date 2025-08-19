import React from 'react';
import Header from '../../components/header';
import ContactSection from '../../components/contact-section';
import Footer from '../../components/footer';
import HeroSection from '../../components/software/hero-section';
import ProcessSection from '../../components/software/process-section';
import AgileProcessSection from '../../components/software/agile-process';
import CollaborationSection from '../../components/software/collaboration';
import Lifecycle from "@/components/web/Lifecycle";
import Wireframe from "@/components/web/Wireframe";
import UiDesign from "@/components/web/UiDesign";
import Srs from "@/components/web/Srs";
import Testing from "@/components/web/Testing";
import LiveProgressTracking from '../../components/software/live-progress-tracking';
import LiveReporting from '../../components/software/live-reporting';
import FAQAboutProcess from '../../components/software/faq-about-process';

const Page = () => {
  return (
    <>
      <Header />
      
      <main>
        <div className="mt-8 md:mt-16 lg:mt-20">
          <HeroSection title="Mobile App Development" />
        </div>
        <ProcessSection />
        <AgileProcessSection subtitle="Flexible, fast and goal-oriented. CVI Agile Mobile App development approach delivers results." />
        <CollaborationSection subtitle="Regular meetings, daily standups, and ongoing collaboration for the best outcomes for your custom Mobile App development needs." />
        <Lifecycle />
        <Wireframe />
        <UiDesign />
        <Srs />
        <Testing />
        <LiveProgressTracking />
        <LiveReporting />
        <FAQAboutProcess
          header="FAQ About Our Process"
          description="Answers to common questions about our full-service mobile app development process."
          faqs={[
            {
              question: "What services are included in your full-service mobile app development offering?",
              answer: `We provide end-to-end mobile app development services, covering everything from initial consultation and requirement analysis to UI/UX design, native or cross-platform development, testing, deployment, and ongoing support. We start with a discovery phase to understand your target users, business goals, and app requirements. Then our designers create interactive prototypes and wireframes to ensure a smooth user experience. Our developers build secure, scalable, and feature-rich mobile applications tailored to your needs. Post-launch, we offer maintenance, updates, and performance monitoring. Our solutions serve startups, SMBs, and large enterprises, fully customized to fit your goals, timeline, and budget.`
            },
            {
              question: "How does the mobile app development process work from start to finish?",
              answer: `We follow a structured, phased approach:\nDiscovery and Planning: Define project goals, target audience, and technical requirements.\nDesign: Create wireframes, interactive prototypes, and UI/UX layouts.\nDevelopment: Implement the app for iOS, Android, or cross-platform using the chosen technology stack, integrating APIs and backend systems as needed.\nTesting: Perform thorough testing, including functionality, performance, compatibility, and security checks.\nDeployment and Launch: Deploy the app to app stores and ensure smooth installation and user access.\nWe provide updates and communication throughout, ensuring the app meets your expectations. Typical development timelines range from 8–24 weeks depending on complexity.`
            },
            {
              question: "What technologies do you use, and how is UI/UX design handled?",
              answer: `We use modern tools and frameworks suited to your app’s requirements, such as Swift and Objective-C for iOS, Kotlin and Java for Android, and Flutter or React Native for cross-platform development. Our in-house design team develops intuitive, mobile-first UI/UX designs, focusing on seamless navigation, responsiveness, and engaging visuals. By integrating design and development from the outset, we deliver apps that are both functional and visually appealing.`
            },
            {
              question: "Do you provide ongoing support and maintenance after launch?",
              answer: `Yes. We offer ongoing support and maintenance to keep your app secure, up to date, and running smoothly. This includes bug fixes, OS updates, performance monitoring, new feature integration, and app store compliance. Regular updates and monitoring ensure your app continues to provide a great user experience and adapts to evolving business needs.`
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