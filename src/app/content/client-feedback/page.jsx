"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import React, { useState } from "react";

const partners = [
  {
    id: 1,
    name: "Mr Mansur Ali",
    position: "CEO Impromek",
    feedback:
      "Figma ipsum component variant main layer. Inspect stroke group union vector line main. Stroke pencil variant polygon text vertical blur effect share thumbnail. Outline figma flows bold shadow prototype star.",
    imageUrl: "/placeholder.jpg",
    isOn: true,
  },
  {
    id: 2,
    name: "Ms Sabrina Noor",
    position: "Marketing Head",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "/placeholder.jpg",
    isOn: false,
  },
  {
    id: 3,
    name: "John Doe",
    position: "Product Manager",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    imageUrl: "/placeholder.jpg",
    isOn: true,
  },
];

const ClientFeedbackPage = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) onChange(newState);
  };

  return (
    <section>
      <Layout>
        <MenuItem
          parent={"Content"}
          page={"Client Feedback"}
          href={"/content/client-feedback"}
        />

        <div className="bg-white rounded-2xl mt-6 p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Client Feedback
            </h3>
            <Link href={"/content/client-feedback/add-client-feedback"}>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-[#0E4F53] text-white rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-[#0E4F53]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#0E4F53]/25 active:scale-95 active:bg-[#0E4F53]/80 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:ring-offset-2">
                + Add
              </button>
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto shadow-sm">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3">SI No.</th>
                  <th className="px-4 py-3">Client Name</th>
                  <th className="px-4 py-3">Details</th>
                  <th className="px-4 py-3">Feedback</th>
                  <th className="px-4 py-3">Image/Video</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((partner, idx) => (
                  <tr key={partner.id} className="border-b align-top">
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="px-4 py-3">{partner.name}</td>
                    <td className="px-4 py-3">{partner.position}</td>
                    <td className="px-4 py-3 max-w-xs truncate">
                      {partner.feedback}
                    </td>
                    <td className="px-4 py-3">
                      <img
                        src={partner.imageUrl}
                        alt={`Preview of ${partner.name}`}
                        className="w-14 h-14 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={partner.isOn}
                          onChange={() => toggleIsOn(partner.id)}
                        />
                        <div
                          className={`w-11 h-6 rounded-full transition-colors relative ${
                            partner.isOn ? "bg-[#0E4F53]" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              partner.isOn ? "translate-x-5" : ""
                            }`}
                          ></div>
                        </div>
                      </label>
                    </td>
                    <td className="px-4 py-3 flex gap-2 items-center">
                      {/* Edit Icon */}
                      <button
                        className="cursor-pointer"
                        aria-label={`Edit ${partner.name}`}
                      >
                        {/* SVG from your example */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M17.2249 4.60509L18.2149 3.6151C19.0351 2.79497 20.3648 2.79497 21.1849 3.6151C22.005 4.43524 22.005 5.76493 21.1849 6.58507L20.1949 7.57506M17.2249 4.60509L10.5656 11.2644C10.0581 11.772 9.69809 12.4078 9.52402 13.1041L8.80005 16L11.6959 15.276C12.3922 15.102 13.028 14.7419 13.5356 14.2344L20.1949 7.57506M17.2249 4.60509L20.1949 7.57506"
                            stroke="#0E4F53"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.7999 13.5C19.7999 16.7875 19.7999 18.4312 18.892 19.5376C18.7258 19.7401 18.5401 19.9258 18.3375 20.092C17.2312 21 15.5874 21 12.2999 21H11.8C8.02881 21 6.14321 21 4.97164 19.8284C3.80008 18.6569 3.80005 16.7712 3.80005 13V12.5C3.80005 9.21252 3.80005 7.56879 4.70799 6.46244C4.87422 6.2599 5.05995 6.07417 5.26249 5.90794C6.36884 5 8.01257 5 11.3 5"
                            stroke="#0E4F53"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Delete Icon */}
                      <button
                        className="cursor-pointer"
                        aria-label={`Delete ${partner.name}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M20.3 5.5L19.6803 15.5251C19.5219 18.0864 19.4428 19.3671 18.8008 20.2879C18.4833 20.7431 18.0747 21.1273 17.6007 21.416C16.6421 22 15.359 22 12.7927 22C10.2232 22 8.93835 22 7.9791 21.4149C7.50485 21.1257 7.09605 20.7408 6.77873 20.2848C6.13693 19.3626 6.0595 18.0801 5.90466 15.5152L5.30005 5.5"
                            stroke="#ED1400"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3.80005 5.5H21.8M16.8557 5.5L16.1731 4.09173C15.7196 3.15626 15.4928 2.68852 15.1017 2.39681C15.015 2.3321 14.9231 2.27454 14.827 2.2247C14.3939 2 13.8741 2 12.8345 2C11.7688 2 11.236 2 10.7957 2.23412C10.6981 2.28601 10.605 2.3459 10.5173 2.41317C10.1217 2.7167 9.90068 3.20155 9.45866 4.17126L8.85297 5.5"
                            stroke="#ED1400"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 px-4">
            {/* Entries info */}
            <div className="text-gray-600 text-sm">
              Showing 1 to 10 of 50 entries
            </div>

            {/* Pagination controls */}
            <div className="flex space-x-2 mt-6">
              <button className="px-3 py-1 rounded-md bg-[#DCDCDC] border border-[#DCDCDC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.16 7.41L10.58 12L15.16 16.59L13.75 18L7.75003 12L13.75 6L15.16 7.41Z"
                    fill="#181818"
                  />
                </svg>
              </button>
              <button className="px-3 py-1 rounded border border-gray-300 bg-[#0E4F53] text-white hover:bg-[#0b3b41]">
                1
              </button>

              <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                ...
              </button>
              <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                9
              </button>
              <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                10
              </button>
              <button className="px-3 py-1 rounded-md bg-[#DCDCDC] border border-[#DCDCDC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.83997 7.41L13.42 12L8.83997 16.59L10.25 18L16.25 12L10.25 6L8.83997 7.41Z"
                    fill="#656565"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default ClientFeedbackPage;
