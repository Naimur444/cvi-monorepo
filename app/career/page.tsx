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
                question: "How to apply?",
                answer: `To apply, review our current openings to find a role that aligns with your skills and expertise. By pressing the Apply button above or below, you’ll receive a link to proceed with your application.`
              },
              {
                question: "What are the steps involved?",
                answer: `1. Task or onsite visit: Depending on the job's nature, you may receive a task to complete or an invitation for an onsite visit. Your task performance and resume review determine if you move to the next stage.\n\n2. Face-to-face interview: This step typically involves a personal interview. If you perform exceptionally well compared to other candidates, a job offer may follow within a few days, though exceptions can occur.`
              },
              {
                question: "What is the timeline for the application process to begin?",
                answer: `The timeline to initiate the application process varies, typically ranging from 1 to 3 months, influenced by the number of applications. Roles that remain continuously open may experience extended processing times.`
              }
            ]}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;