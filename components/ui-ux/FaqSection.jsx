"use client";

import { useState } from "react";
import Image from "next/image";
import FAQItem from "../web/FAQItem";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How do you ensure the quality of the software being developed?",
      a: "6sense ensures the quality of the software being developed by following a rigorous testing phase. This includes unit testing, integration testing, and acceptance testing.These tests are designed to ensure that the software meets the requirements set out in the design phase and is free of defects. Additionally, we follow industry best practices and standards during the development process to ensure that the code is maintainable and scalable. Additionally, we use agile development methodologies that allow us to receive feedback from clients and make adjustments as needed to ensure that the final product meets their requirements.",
    },
    {
      q: "How do you handle securities issues",
      a: "Data updates automatically every few seconds to ensure accuracy.",
    },
    {
      q: "How CVI handles maintenance and support after the software is deployed?",
      a: "Yes, you can adjust filters, time ranges, and layout options based on your needs.",
    },
    {
      q: "How is CVI able to work with so many different industries?",
      a: "Absolutely! The report is fully responsive and works seamlessly on mobile devices.",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-2xl md:text-4xl  font-semibold text-center mb-4">
          FAQ About Our Process
        </h2>
        <p className="  text-center mb-10">
          Answers to Common Questions: A Guide to Understanding Our Process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 place-items-center">
          {/* FAQ Accordion */}
          <div className="w-full">
            {faqs.map((item, index) => (
              <FAQItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>

          {/* Image */}
          <div>
            <Image
              src="/image-3.png"
              alt="Live Progress"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
