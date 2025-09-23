
"use client"

import React from "react";
import Link from "next/link";
import { useTheme } from '../../contexts/ThemeContext';

const MobileDev = () => {
  const { isDarkMode } = useTheme();
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
            d="M37 14C37 9.28596 37 6.92894 35.5356 5.46446C34.071 4 31.714 4 27 4H21C16.286 4 13.9289 4 12.4645 5.46446C11 6.92894 11 9.28596 11 14M37 34C37 38.714 37 41.071 35.5356 42.5356C34.071 44 31.714 44 27 44H21C16.286 44 13.9289 44 12.4645 42.5356C11 41.071 11 38.714 11 34"
            stroke="#0E4F53"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 4H20L21 6H27L28 4Z"
            stroke="#0E4F53"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.0002 30.9999C31.0002 30.9999 38 25.8445 38 23.9999C38 22.1553 31 17 31 17"
            stroke="#0E4F53"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9999 31C16.9999 31 10 25.8446 10 24C9.99998 22.1554 17 17 17 17"
            stroke="#0E4F53"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <h3 className="text-2xl  font-bold mb-4">
            Mobile Development
          </h3>
          <p className="  mb-6">
            From Android to iOS and cross-platform, we create apps that engage
            users and drive results.
          </p>

          <Link href="/application" passHref legacyBehavior>
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

            <p className="  text-xl">
              Flutter / React Native Apps
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

            <p className="  text-xl">Native iOS & Android</p>
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

            <p className="  text-xl">Backend APIs & Admin Panel</p>
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
              Play Store & App Store Deployment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDev;
