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
import Scrolltrigger from '../../components/scrolltrigger'

const testingText = "Development and Testing ensures the Quality and Functionality of Your Custom Software. Our development process follows industry best practices and standards, while our rigorous testing phase ensures that the final product is free of defects and meets the requirements set out in the design phase.";

const Page = () => {
  return (
    <>
      <Header />
      
      <main>
        <div className="mt-8 md:mt-16 lg:mt-20">
          <HeroSection />
        </div>
        <ProcessSection />
        <AgileProcessSection />
        <CollaborationSection />
        <Scrolltrigger testingText={testingText} />
        <LiveProgressTracking />
        <LiveReporting /> 
        <FAQAboutProcess
          header="FAQ About Our Process"
          description="Answers to common questions about our full-service custom software development process."
          faqs={[
            {
              question: "What services are included in your full-service custom software development offering?",
              answer: `We provide end-to-end custom software development, covering everything from initial consultation and requirement analysis to system architecture, development, testing, deployment, and ongoing support. Our process begins with a discovery phase to understand your business goals, workflows, and user needs. Then we design prototypes and technical specifications to ensure the software meets functional and usability requirements. Our developers build scalable, secure, and maintainable solutions tailored to your business. After deployment, we provide continuous support, updates, and enhancements. We serve clients ranging from startups to large enterprises, customizing each solution to meet your goals, timeline, and budget.`
            },
            {
              question: "How does the custom software development process work from start to finish?",
              answer: `We follow a structured, phased approach. First, we conduct discovery and planning, analyzing business needs, processes, and technical requirements. Next, we design the software architecture, user interface, and experience, creating wireframes, prototypes, and technical documentation. Then our developers implement the solution, integrating front-end and back-end functionality, APIs, and databases as needed. After development, we perform comprehensive testing, including functional, security, performance, and compatibility tests. Finally, we deploy the software to your environment and provide post-launch support. A typical medium-sized project takes 12–24 weeks, depending on complexity, with progress updates at every stage.`
            },
            {
              question: "What technologies do you use, and how is UI/UX design handled?",
              answer: `We select technologies based on your project requirements, scalability needs, and budget. Our developers are proficient in multiple programming languages and frameworks, such as Java, Python, C#, Node.js, React, Angular, and more. For database and server-side solutions, we work with SQL/NoSQL databases, cloud platforms, and microservices architectures. UI/UX design is handled by our in-house design team, creating user-friendly, intuitive interfaces. By integrating design and development from the start, we ensure the software is both functional and visually engaging.`
            },
            {
              question: "Do you provide ongoing support and maintenance after deployment?",
              answer: `Yes. After deployment, we provide ongoing support and maintenance to ensure your software remains secure, up to date, and fully functional. This includes bug fixes, software updates, performance monitoring, and feature enhancements. We can also assist with scaling, integrations, and adapting the software as your business grows. Regular maintenance ensures long-term reliability, much like keeping essential machinery in peak condition.`
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