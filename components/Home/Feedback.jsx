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
import { useTheme } from "../../contexts/ThemeContext";
import { getCardBackgroundColor, getThemeColor, getAccentColor } from "../../lib/theme-utils";

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
    videoLink: "https://youtube.com/shorts/ELgPO6yhHIA?si=Qrvz7gnaiFzuvPND",
  },
];

const Feedback = () => {
  // Theme context for dark/light mode
  const { isDarkMode } = useTheme();

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
          className="text-2xl md:text-4xl text-center font-bold mb-8"
          style={{ color: getAccentColor(isDarkMode) }}
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
            className="group absolute z-10 top-1/2 -left-5 transform -translate-y-1/2 p-2 rounded-md shadow transition cursor-pointer"
            style={{
              backgroundColor: getCardBackgroundColor(isDarkMode),
              borderColor: getAccentColor(isDarkMode),
              color: getAccentColor(isDarkMode),
              border: `1px solid ${getAccentColor(isDarkMode)}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = getAccentColor(isDarkMode);
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = getCardBackgroundColor(isDarkMode);
              e.currentTarget.style.color = getAccentColor(isDarkMode);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition"
              style={{ stroke: 'currentColor' }}
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
            className="group absolute z-10 top-1/2 -right-5 transform -translate-y-1/2 p-2 rounded-md shadow transition cursor-pointer"
            style={{
              backgroundColor: getCardBackgroundColor(isDarkMode),
              borderColor: getAccentColor(isDarkMode),
              color: getAccentColor(isDarkMode),
              border: `1px solid ${getAccentColor(isDarkMode)}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = getAccentColor(isDarkMode);
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = getCardBackgroundColor(isDarkMode);
              e.currentTarget.style.color = getAccentColor(isDarkMode);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition"
              style={{ stroke: 'currentColor' }}
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
                <div
                  className="p-6 border-l-4 border-r-4 rounded-2xl"
                  style={{
                    backgroundColor: getCardBackgroundColor(isDarkMode),
                    borderLeftColor: getAccentColor(isDarkMode),
                    borderRightColor: getAccentColor(isDarkMode)
                  }}
                >
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
                            className="w-10 h-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: getAccentColor(isDarkMode) }}
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-6"
                        style={{ color: getAccentColor(isDarkMode) }}
                      >
                        <path
                          d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                          fill="currentColor"
                        />
                      </svg>
                      <p
                        className="mb-6 w-11/12"
                        style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
                      >
                        {fb.message}
                      </p>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: getThemeColor(isDarkMode, 'secondaryText') }}
                      >
                        {fb.name}
                      </h3>
                      <p
                        className=""
                        style={{ color: getThemeColor(isDarkMode, 'mutedText') }}
                      >
                        {fb.role}
                      </p>
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
              className="absolute top-2 right-2 text-white py-1 px-2 rounded-md z-10 cursor-pointer"
              style={{ backgroundColor: getAccentColor(isDarkMode) }}
            >
              <X />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={currentVideo}
              title="YouTube video player"
              style={{ border: 'none' }}
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
