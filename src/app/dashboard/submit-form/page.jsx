"use client";

import Layout from "@/app/components/Layout";
import React, { useState } from "react";

const SubmitFormPage = () => {
  const [status, setStatus] = useState("pending");
  return (
    <section>
      <Layout>
        <div className="bg-[#FAF9FC] p-4 rounded-2xl mb-6">
          <h4 className="text-[#181818] text-xl font-bold mb-6">Submit Form</h4>

          {/* Table */}
          <div className="overflow-x-auto shadow-sm">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3">SI No.</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email/Phone</th>

                  <th className="px-4 py-3">Company Name</th>
                  <th className="px-4 py-3">Services</th>
                  <th className="px-4 py-3">Details</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#DCDCDC] align-top">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Kareim</td>
                  <td className="px-4 py-3 ">abc@gmail.com 01234567890</td>
                  <td className="px-4 py-3">ACXC</td>
                  <td className="px-4 py-3">Mobile App</td>
                  <td className="px-4 py-3 max-w-xs truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className={`w-full py-2 px-3 rounded-full border shadow-sm focus:outline-none focus:ring-2 transition duration-200 ease-in-out
                      ${
                        status === "done"
                          ? "bg-green-500 text-white border-green-600 focus:ring-green-400"
                          : status === "pending"
                          ? "bg-yellow-300 text-black border-yellow-400 focus:ring-yellow-400"
                          : "bg-cyan-900 text-white border-cyan-800 focus:ring-cyan-600"
                      }`}
                    >
                      <option value="done">Done</option>
                      <option value="pending">Pending</option>
                      <option value="new">New</option>
                    </select>
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

export default SubmitFormPage;
