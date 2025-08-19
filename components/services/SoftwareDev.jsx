import React from "react";
import Link from "next/link";

const SoftwareDev = () => {
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

          <Link href="/software">
            <button className="flex items-center gap-4 group transition-colors duration-300 ease-in-out hover:bg-[#0E4F53] hover:text-white pr-4 py-2 rounded-md cursor-pointer hover:pl-4">
              Learn More
              <div className="bg-[#0E4F53] w-6 h-6 p-1 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="stroke-white transition-all duration-300 ease-in-out group-hover:translate-x-0.5"
                >
                  <path
                    d="M13.3334 7.99988H2.66675"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0003 11.3334C10.0003 11.3334 13.3336 8.87842 13.3336 8.00002C13.3336 7.12162 10.0002 4.66669 10.0002 4.66669"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
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
