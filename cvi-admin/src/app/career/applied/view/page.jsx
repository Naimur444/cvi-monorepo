import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import React from "react";

const ViewPage = () => {
  return (
    <section>
      <Layout>
        <MenuItem
          parent={"Career"}
          page={"Applied"}
          addPage={"UI/UX Designer"}
          href={"/career/applied"}
        />

        <div className="bg-white rounded-2xl mt-6 p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              UI-UX Designer (17)
            </h3>

            <div className="bg-[#FAF9FC] px-4 py-2 border border-[#DCDCDC] rounded-md flex items-center gap-2 text-[#3D3D3D] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.6663 1.33301V3.99967M5.33301 1.33301V3.99967"
                  stroke="#3D3D3D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66667 2.66699H7.33333C4.81917 2.66699 3.5621 2.66699 2.78105 3.44804C2 4.22909 2 5.48617 2 8.00033V9.33366C2 11.8478 2 13.1049 2.78105 13.8859C3.5621 14.667 4.81917 14.667 7.33333 14.667H8.66667C11.1808 14.667 12.4379 14.667 13.2189 13.8859C14 13.1049 14 11.8478 14 9.33366V8.00033C14 5.48617 14 4.22909 13.2189 3.44804C12.4379 2.66699 11.1808 2.66699 8.66667 2.66699Z"
                  stroke="#3D3D3D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 6.66699H14"
                  stroke="#3D3D3D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.33301 9.33301H10.6663M5.33301 9.33301H5.33899M8.66634 11.9997H5.33301M10.6663 11.9997H10.6603"
                  stroke="#3D3D3D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>Date</p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto shadow-sm">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3">SI No.</th>
                  <th className="px-4 py-3">Name</th>

                  <th className="px-4 py-3">Details </th>
                  <th className="px-4 py-3">Link</th>

                  <th className="px-4 py-3">Applied Date</th>
                  <th className="px-4 py-3">CV</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#DCDCDC] align-top">
                  <td className="px-4 py-3">01</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src="/images/career/applied/view/profile.png"
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <span>John Doe</span>
                  </td>

                  <td className="px-4 py-3 ">
                    <ul>
                      <li>+880123654789</li>
                      <li>abc@gmail.com</li>
                    </ul>
                  </td>
                  <td className="px-4 py-3 ">
                    <ul>
                      <li>www.facebook.com</li>
                      <li>www.facebook.com</li>
                    </ul>
                  </td>

                  <td className="px-4 py-3">22 Aug, 2025</td>

                  <td className="px-4 py-3 cursor-pointer">
                    <div className="inline-flex items-center justify-center bg-[#FAF9FC] rounded-md p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 17C3 17.93 3 18.395 3.10223 18.7765C3.37963 19.8117 4.18827 20.6204 5.22355 20.8978C5.60505 21 6.07003 21 7 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17"
                          stroke="#0E4F53"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 11.5C16.5 11.5 13.1858 16 11.9999 16C10.8141 16 7.5 11.5 7.5 11.5M11.9999 15V3"
                          stroke="#0E4F53"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default ViewPage;
