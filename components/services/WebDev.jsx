"use client"

import Link from "next/link";
import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

const WebDev = () => {
  const { isDarkMode } = useTheme();
  const strokeColor = isDarkMode ? '#057C80' : '#003C42';

  return (
    <div>
      <div className="mb-8">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M40 20.256C40 12.5929 40 8.76128 37.6568 6.38064C35.3138 4 31.5424 4 24 4H20C12.4575 4 8.6863 4 6.34314 6.38064C4 8.76128 4 12.5929 4 20.256C4 27.9192 4 31.7508 6.34314 34.1314C7.28236 35.0856 8.451 35.6574 10 36"
            stroke={strokeColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M44 35C44 31.2502 44 29.3754 43.045 28.061C42.7366 27.6366 42.3634 27.2634 41.939 26.955C40.6246 26 38.7498 26 35 26H25C21.2502 26 19.3754 26 18.0611 26.955C17.6366 27.2634 17.2633 27.6366 16.9549 28.061C16 29.3754 16 31.2502 16 35C16 38.7498 16 40.6246 16.9549 41.939C17.2633 42.3634 17.6366 42.7366 18.0611 43.045C19.3754 44 21.2502 44 25 44H35C38.7498 44 40.6246 44 41.939 43.045C42.3634 42.7366 42.7366 42.3634 43.045 41.939C44 40.6246 44 38.7498 44 35Z"
            stroke={strokeColor}
            strokeWidth="3"
          />
          <path
            d="M33 32L34.8398 33.5858C35.6132 34.2524 36 34.5858 36 35C36 35.4142 35.6132 35.7476 34.8398 36.4142L33 38"
            stroke={strokeColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 32L25.1602 33.5858C24.3868 34.2524 24 34.5858 24 35C24 35.4142 24.3868 35.7476 25.1602 36.4142L27 38"
            stroke={strokeColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12H39"
            stroke={strokeColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <h3 className="text-2xl  font-bold mb-4">
            Web Development
          </h3>
          <p className="  mb-6">
            Responsive, secure, and SEO-friendly websites and web applications
            that grow your digital presence.
          </p>

          <Link href="/web" passHref legacyBehavior>
            <a
              className="group/btn flex items-center justify-between w-fit border-2 rounded-lg px-4 py-2 cursor-pointer"
              style={{
                backgroundColor: isDarkMode ? '#191919' : '#FAF9FC',
                borderColor: isDarkMode ? '#222' : '#0E4F53'
              }}
            >
              <span
                className="font-medium mr-3"
                style={{ color: isDarkMode ? '#E5E7EB' : '#0E4F53' }}
              >
                Learn More
              </span>
              <span>
                <span
                  className="w-8 h-8 rounded flex items-center justify-center"
                  style={{ backgroundColor: isDarkMode ? '#057C80' : '#0E4F53', display: 'inline-flex' }}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ transition: 'transform 0.2s' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </span>
              <style jsx>{`
                .group\/btn:hover {
                  border-color: #0E4F53 !important;
                  transform: scale(1.05);
                  transition: border-color 0.2s, transform 0.2s;
                }
                .group\/btn:hover .w-8 {
                  background-color: #0E4F53 !important;
                  transform: rotate(5deg);
                }
                .group\/btn:hover .w-4 {
                  transform: translate(2px, -2px);
                }
              `}</style>
            </a>
          </Link>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.6666 7.99998H5.33325M10.6666 7.99998C10.6666 7.53318 9.33705 6.661 8.99992 6.33331M10.6666 7.99998C10.6666 8.46678 9.33705 9.33898 8.99992 9.66665"
                  stroke="#0E4F53"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66675 8.00002C1.66675 5.01446 1.66675 3.52168 2.59424 2.59418C3.52174 1.66669 5.01452 1.66669 8.00008 1.66669C10.9856 1.66669 12.4784 1.66669 13.4059 2.59418C14.3334 3.52168 14.3334 5.01446 14.3334 8.00002C14.3334 10.9856 14.3334 12.4784 13.4059 13.4059C12.4784 14.3334 10.9856 14.3334 8.00008 14.3334C5.01452 14.3334 3.52174 14.3334 2.59424 13.4059C1.66675 12.4784 1.66675 10.9856 1.66675 8.00002Z"
                  stroke="#0E4F53"
                />
              </svg>
            </div>

            <p className="  text-xl">Frontend</p>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.6666 7.99998H5.33325M10.6666 7.99998C10.6666 7.53318 9.33705 6.661 8.99992 6.33331M10.6666 7.99998C10.6666 8.46678 9.33705 9.33898 8.99992 9.66665"
                  stroke="#0E4F53"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66675 8.00002C1.66675 5.01446 1.66675 3.52168 2.59424 2.59418C3.52174 1.66669 5.01452 1.66669 8.00008 1.66669C10.9856 1.66669 12.4784 1.66669 13.4059 2.59418C14.3334 3.52168 14.3334 5.01446 14.3334 8.00002C14.3334 10.9856 14.3334 12.4784 13.4059 13.4059C12.4784 14.3334 10.9856 14.3334 8.00008 14.3334C5.01452 14.3334 3.52174 14.3334 2.59424 13.4059C1.66675 12.4784 1.66675 10.9856 1.66675 8.00002Z"
                  stroke="#0E4F53"
                />
              </svg>
            </div>

            <p className="  text-xl">
              Backend 
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.6666 7.99998H5.33325M10.6666 7.99998C10.6666 7.53318 9.33705 6.661 8.99992 6.33331M10.6666 7.99998C10.6666 8.46678 9.33705 9.33898 8.99992 9.66665"
                  stroke="#0E4F53"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66675 8.00002C1.66675 5.01446 1.66675 3.52168 2.59424 2.59418C3.52174 1.66669 5.01452 1.66669 8.00008 1.66669C10.9856 1.66669 12.4784 1.66669 13.4059 2.59418C14.3334 3.52168 14.3334 5.01446 14.3334 8.00002C14.3334 10.9856 14.3334 12.4784 13.4059 13.4059C12.4784 14.3334 10.9856 14.3334 8.00008 14.3334C5.01452 14.3334 3.52174 14.3334 2.59424 13.4059C1.66675 12.4784 1.66675 10.9856 1.66675 8.00002Z"
                  stroke="#0E4F53"
                />
              </svg>
            </div>

            <p className="  text-xl">CMS Integration</p>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.6666 7.99998H5.33325M10.6666 7.99998C10.6666 7.53318 9.33705 6.661 8.99992 6.33331M10.6666 7.99998C10.6666 8.46678 9.33705 9.33898 8.99992 9.66665"
                  stroke="#0E4F53"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66675 8.00002C1.66675 5.01446 1.66675 3.52168 2.59424 2.59418C3.52174 1.66669 5.01452 1.66669 8.00008 1.66669C10.9856 1.66669 12.4784 1.66669 13.4059 2.59418C14.3334 3.52168 14.3334 5.01446 14.3334 8.00002C14.3334 10.9856 14.3334 12.4784 13.4059 13.4059C12.4784 14.3334 10.9856 14.3334 8.00008 14.3334C5.01452 14.3334 3.52174 14.3334 2.59424 13.4059C1.66675 12.4784 1.66675 10.9856 1.66675 8.00002Z"
                  stroke="#0E4F53"
                />
              </svg>
            </div>

            <p className="  text-xl">eCommerce Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
