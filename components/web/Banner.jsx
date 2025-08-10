import Image from "next/image";
import React from "react";

const Banner = () => {
  // Smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="  py-10 md:py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Web Development
            </h2>

            <h2 className="text-2xl   md:text-4xl font-bold mb-6">
              Utilizing Leading Tech
            </h2>
            <button
              className="py-2 px-6 bg-[#003C42] font-semibold text-white rounded-lg w-1/2 mb-6"
              onClick={scrollToContact}
            >
              Get in Touch
            </button>

            <div className="flex items-center gap-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 2V4M6 2V4"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                  stroke="#3D3D3D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 8H20.5"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 8H21"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="   font-semibold">or, </p>

              <p className="  font-semibold underline">
                Schedule a Free Consultant
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                    stroke="#3D3D3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className=" ">
                Recognized as Delaware’s Top Software Developer 2023
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                    stroke="#3D3D3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className=" ">
                Recognized as Delaware’s Top Software Developer 2023
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                    stroke="#3D3D3D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className=" ">
                Recognized as Delaware’s Top Software Developer 2023
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/banner-image.png"
              alt="Banner"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
