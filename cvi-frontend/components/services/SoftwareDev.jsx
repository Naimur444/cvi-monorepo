
"use client"

import React from "react";
import Link from "next/link";
import { useTheme } from '../../contexts/ThemeContext';

const SoftwareDev = () => {
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
            d="M32 20L34.453 22.1144C35.4844 23.0032 36 23.4478 36 24C36 24.5522 35.4844 24.9968 34.453 25.8856L32 28"
            stroke="#0E4F53"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 20L13.5469 22.1144C12.5156 23.0032 12 23.4478 12 24C12 24.5522 12.5156 24.9968 13.5469 25.8856L16 28"
            stroke="#0E4F53"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 18L22 30"
            stroke="#0E4F53"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 24C5 15.0433 5 10.565 7.78248 7.78248C10.565 5 15.0433 5 24 5C32.9566 5 37.435 5 40.2176 7.78248C43 10.565 43 15.0433 43 24C43 32.9566 43 37.435 40.2176 40.2176C37.435 43 32.9566 43 24 43C15.0433 43 10.565 43 7.78248 40.2176C5 37.435 5 32.9566 5 24Z"
            stroke="#0E4F53"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <h3 className="text-2xl  font-bold mb-4">
            Custom Software Development
          </h3>
          <p className="  mb-6">
            Tailored software to meet your exact business goals. From internal
            tools to client-facing platforms — we build what fits.
          </p>

          <Link href="/software" passHref legacyBehavior>
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

            <p className="  text-xl">Requirement Analysis</p>
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

            <p className="  text-xl">Custom Backend Logic</p>
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

            <p className="  text-xl">Dashboard & Admin Panels</p>
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
              Enterprise Workflow Automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;
