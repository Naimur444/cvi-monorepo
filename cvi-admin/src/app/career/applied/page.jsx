import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import React from "react";

const CareerApplied = () => {
  return (
    <section>
      <MenuItem parent={"Career"} page={"Applied"} href={"/career/applied"} />

        <div className="bg-white rounded-2xl mt-6 p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">Applied</h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto shadow-sm">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3">SI No.</th>
                  <th className="px-4 py-3">Title</th>

                  <th className="px-4 py-3">Deadline </th>
                  <th className="px-4 py-3">Applied</th>

                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#DCDCDC] align-top">
                  <td className="px-4 py-3">01</td>
                  <td className="px-4 py-3">UI-UX Designer</td>

                  <td className="px-4 py-3 ">12 Sep, 2025</td>
                  <td className="px-4 py-3 ">17</td>

                  <td className="px-4 py-3 cursor-pointer">
                    <Link href={"/career/applied/view"}>
                      <div className="inline-flex items-center justify-center bg-[#FAF9FC] rounded-md p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                            stroke="#0E4F53"
                            stroke-width="1.5"
                          />
                          <path
                            d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                            stroke="#0E4F53"
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </section>
  );
};

export default CareerApplied;
