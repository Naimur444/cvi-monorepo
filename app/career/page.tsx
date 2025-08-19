import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import FAQAboutProcess from '../../components/software/faq-about-process';
import Teammate from '../../components/career/Teammate';
import Opening from '../../components/career/Opening';
import Benifits from '../../components/career/benifits';
import Hero from '../../components/career/career-hero';

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <div className="mt-8 md:mt-16 lg:mt-20">
          <Hero />
        </div>
        <Benifits/>
        <Opening/>
        <Teammate />
        <FAQAboutProcess
          header="Careers at CVI: FAQ"
          description="Answers to common questions about working at CVI, our culture, and opportunities."
          faqs={[
            {
              question: "What types of career opportunities are available at CVI?",
              answer: `We offer a wide range of career opportunities in software development, design, project management, quality assurance, and business analysis. Whether you're an experienced professional or a recent graduate, we have roles that support growth and learning in a collaborative environment.`
            },
            {
              question: "What is the company culture like at CVI?",
              answer: `Our culture is built on collaboration, innovation, and continuous learning. We value open communication, diversity, and a supportive atmosphere where every team member can contribute ideas and grow professionally.`
            },
            {
              question: "How does CVI support employee growth and development?",
              answer: `We invest in our employees through mentorship, training programs, and opportunities to work on diverse projects. Regular feedback, career path planning, and access to industry events help our team members advance their skills and careers.`
            },
            {
              question: "What is the recruitment process at CVI?",
              answer: `Our recruitment process typically includes an initial application review, a phone or video interview, technical assessments (if applicable), and a final interview with team leads or management. We aim to make the process transparent and respectful of your time.`
            }
          ]}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;