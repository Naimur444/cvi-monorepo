"use client";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Marquee, MarqueeContent, MarqueeItem } from "../ui/shadcn-io/marquee";

const Banner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="  py-10 md:py-20">
      <motion.div
        className="max-w-7xl mx-auto w-full px-6 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb-10 md:mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h2
              className="text-2xl md:text-4xl font-bold text-[#0E4F53] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Our Story
            </motion.h2>

            <motion.p
              className=" "
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Cloud Vortex Innovation was born from a shared vision: to create a
              technology company that doesn't just deliver code, but delivers
              change. <br /> <br />
              In 2023, a group of passionate developers, designers, and digital
              strategists came together in Dhaka with one goal—to help
              businesses navigate the fast-evolving digital world with clarity,
              creativity, and confidence. <br /> <br />
              We started small—with big ideas. From late-night brainstorming
              sessions to our first lines of code, we’ve always believed that
              great software is more than functionality—it’s about experience,
              impact, and solving real problems. <br /> <br />
              What began as a modest team has grown into a dynamic technology
              partner trusted by startups and enterprises across multiple
              industries. We've helped businesses go digital, scale faster, and
              work smarter—always staying ahead of the curve with new
              technologies and user-first thinking.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {/* Row 1 */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[150px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image
                  src="/our-story-1.png"
                  alt="about-us"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Manual Box */}
              <div className="w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[150px] sm:h-[150px] md:h-[180px] lg:h-[200px] bg-[#0E4F53] flex flex-col items-start justify-end p-3 md:p-4 rounded-tr-[48px] sm:rounded-tr-[64px] md:rounded-tr-[80px] lg:rounded-tr-[96px]">
                <p className="text-lg md:text-xl text-white">Team</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white">50+</h3>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              {/* Manual Box */}
              <div className="w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[150px] sm:h-[150px] md:h-[180px] lg:h-[200px] bg-[#0E4F53] flex flex-col items-start justify-start p-3 md:p-4 rounded-bl-[48px] sm:rounded-bl-[64px] md:rounded-bl-[80px] lg:rounded-bl-[96px] order-2 sm:order-1">
                <p className="text-lg md:text-xl text-white">Experience</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white">4+</h3>
              </div>

              {/* Image */}
              <div className="w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[150px] sm:h-[150px] md:h-[180px] lg:h-[200px] order-1 sm:order-2">
                <Image
                  src="/our-story-2.png"
                  alt="about-us"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl md:text-4xl text-center font-bold   mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            Trusted by 12+ Companies Worldwide
          </motion.h2>
          <motion.p
            className="  text-center md:w-9/12 md:mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          >
            Experience and Expertise You Can Count On. Our team has a proven
            track record of delivering top-quality solutions for businesses
            across a variety of industries.
          </motion.p>

          <motion.div
            className="pt-[42px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          >
            <Marquee className="w-full py-4">
              <MarqueeContent speed={50} direction="left">
                {[
                  { src: "/wrongs.png", alt: "wrongs" },
                  { src: "/zen.png", alt: "zen" },
                  { src: "/tree.png", alt: "tree" },
                  { src: "/t.png", alt: "t" },
                  { src: "/security.png", alt: "security" },
                  { src: "/insight.png", alt: "insight" }
                ].map((logo) => (
                  <MarqueeItem key={logo.alt} className="mx-8">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={170}
                      height={70}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
