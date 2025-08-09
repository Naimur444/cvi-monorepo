"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, useInView } from "framer-motion";

const feedbacks = [
  {
    name: "Mr. Kader Ali",
    role: "CEO, Impromek",
    image: "/client-image.png",
    quoteIcon: "/quote.svg",
    message:
      "Figma ipsum component variant main layer. Inspect stroke group union vector line main. Stroke pencil variant polygon text vertical blur effect share thumbnail. Outline figma flows bold shadow prototype star.",
    videoLink: "https://www.youtube.com/embed/vYuoECsqZy8?si=6CsQ9y1w9vj2vot2", // example link
  },
  {
    name: "Mr. Kader Ali",
    role: "CEO, Impromek",
    image: "/client-image.png",
    quoteIcon: "/quote.svg",
    message:
      "Figma ipsum component variant main layer. Inspect stroke group union vector line main. Stroke pencil variant polygon text vertical blur effect share thumbnail. Outline figma flows bold shadow prototype star.",
    videoLink: "https://www.youtube.com/embed/vYuoECsqZy8?si=6CsQ9y1w9vj2vot2",
  },
  {
    name: "Mr. Kader Ali",
    role: "CEO, Impromek",
    image: "/client-image.png",
    quoteIcon: "/quote.svg",
    message:
      "Figma ipsum component variant main layer. Inspect stroke group union vector line main. Stroke pencil variant polygon text vertical blur effect share thumbnail. Outline figma flows bold shadow prototype star.",
    videoLink: "https://www.youtube.com/embed/vYuoECsqZy8?si=6CsQ9y1w9vj2vot2",
  },
];

const Feedback = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div ref={sectionRef} className=" py-10 md:py-16 relative px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-4xl text-[#0E4F53] text-center font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Client Feedback
        </motion.h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <motion.button
            ref={prevRef}
            className="group absolute z-10 top-1/2 -left-5 transform -translate-y-1/2 bg-white border border-[#0E4F53] text-[#0E4F53] p-2 rounded-md shadow hover:bg-[#0E4F53] hover:text-white transition cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-[#0E4F53] group-hover:stroke-white transition"
            >
              <path
                d="M3.99982 11.9998H19.9998"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <motion.button
            ref={nextRef}
            className="group absolute z-10 top-1/2 -right-5 transform -translate-y-1/2 bg-white border border-[#0E4F53] text-[#0E4F53] p-2 rounded-md shadow hover:bg-[#0E4F53] hover:text-white transition cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-[#0E4F53] group-hover:stroke-white transition"
            >
              <path
                d="M20.0001 12.0002H4.00014"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0004 7C15.0004 7 20.0003 10.6824 20.0004 12C20.0004 13.3176 15.0004 17 15.0004 17"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
          >
            {feedbacks.map((fb, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 border-l-4 border-r-4 border-[#0E4F53] rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                    {/* Image with play button overlay */}
                    <div className="relative w-full h-[300px] md:h-[500px] group cursor-pointer">
                      <Image
                        src={fb.image}
                        alt={fb.name}
                        fill
                        className="object-contain md:object-cover rounded-2xl"
                      />
                      <div
                        onClick={() => openModal(fb.videoLink)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                      >
                        <div className="bg-white p-3 rounded-full shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-[#0E4F53]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <Image
                        src={fb.quoteIcon}
                        alt="Quote"
                        width={40}
                        height={40}
                        className="object-contain mb-6"
                      />
                      <p className="  mb-6 w-11/12">
                        {fb.message}
                      </p>
                      <h3 className="text-xl font-bold text-[#181818]">
                        {fb.name}
                      </h3>
                      <p className=" ">{fb.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={paginationRef}
            className="custom-swiper-pagination mt-6 flex justify-center gap-2"
          />
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="rounded-lg relative max-w-[90%] w-[600px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-[#0E4F53] py-1 px-2 rounded-md z-10 cursor-pointer"
            >
              <X />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
