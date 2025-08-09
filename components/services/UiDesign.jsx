import React from "react";

const UiDesign = () => {
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
            d="M44 24C44 12.9543 35.0456 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0456 12.9543 44 24 44C25.6834 44 28 44.2326 28 42C28 40.782 27.3664 39.8424 26.7372 38.9088C25.8164 37.543 24.9046 36.1906 26 34C27.3334 31.3334 29.5556 31.3334 32.963 31.3334C34.6668 31.3334 36.6668 31.3334 39 31C43.202 30.3998 44 27.8168 44 24Z"
            stroke="#0E4F53"
            strokeWidth="3"
          />
          <path
            d="M14 30.0039L14.0174 29.9991"
            stroke="#0E4F53"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 20C20.6569 20 22 18.6569 22 17C22 15.3431 20.6569 14 19 14C17.3431 14 16 15.3431 16 17C16 18.6569 17.3431 20 19 20Z"
            stroke="#0E4F53"
            strokeWidth="3"
          />
          <path
            d="M33 22C34.6569 22 36 20.6569 36 19C36 17.3431 34.6569 16 33 16C31.3431 16 30 17.3431 30 19C30 20.6569 31.3431 22 33 22Z"
            stroke="#0E4F53"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <h3 className="text-2xl  font-bold mb-4">
            UI/UX Design
          </h3>
          <p className="  mb-6">
            User-first design to make your software intuitive, beautiful, and
            functional. We combine wireframes, prototypes, and user testing to
            craft smooth digital experiences.
          </p>

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

            <p className="  text-xl">Wireframing & Prototyping</p>
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

            <p className="  text-xl">Web & Mobile App UI</p>
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

            <p className="  text-xl">Design Systems</p>
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

            <p className="  text-xl">Usability Testing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiDesign;
