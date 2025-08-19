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
        <FAQAboutProcess />
      </main>
      <Footer />
    </>
  );
};

export default Page;