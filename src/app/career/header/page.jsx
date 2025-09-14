"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import React, { useState } from "react";
import DataTable from "@/components/DataTable";

const CareerHeader = () => {
  const [headers, setHeaders] = useState([
    {
      id: 1,
      title: "We'll schedule a call to discuss your",
      image1: "/placeholder.jpg",
      image2: "/placeholder.jpg",
      status: true,
    },
  ]);

  const handleStatusToggle = (id) => {
    setHeaders((prev) =>
      prev.map((h) => (h.id === id ? { ...h, status: !h.status } : h))
    );
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this header? This action cannot be undone."
      )
    ) {
      setHeaders((prev) => prev.filter((h) => h.id !== id));
    }
  };

  const columns = [
    { key: "id", header: "SI No." },
    {
      key: "title",
      header: "Title",
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      ),
    },
    {
      key: "image1",
      header: "Image 1",
      render: (value) => (
        <img
          src={value}
          alt="Preview"
          className="w-14 h-14 object-cover rounded"
        />
      ),
    },
    {
      key: "image2",
      header: "Image 2",
      render: (value) => (
        <img
          src={value}
          alt="Preview"
          className="w-14 h-14 object-cover rounded"
        />
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value, row) => (
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={!!value}
            onChange={() => handleStatusToggle(row.id)}
          />
          <div
            className={`w-11 h-6 rounded-full transition-colors relative ${
              value ? "bg-[#0E4F53]" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                value ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>
      ),
    },
    {
      key: "actions",
      header: "Action",
      render: (_, row) => (
        <div className="flex gap-2 items-center">
          <Link href={`/career/header/edit/${row.id}`}>
            <button
              className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
              title="Edit Header"
            >
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
          </Link>
          <button
            className="cursor-pointer p-1 hover:bg-red-50 rounded transition-colors"
            title="Delete Header"
            onClick={() => handleDelete(row.id)}
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
        </div>
      ),
    },
  ];
  return (
    <section>
      <Layout>
        <MenuItem parent={"Career"} page={"Header"} href={"/career/header"} />

        <div className="bg-white rounded-2xl mt-6 p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Career Header
            </h3>
            <Link href={"/career/header/add-career-header"}>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-[#0E4F53] text-white rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-[#0E4F53]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#0E4F53]/25 active:scale-95 active:bg-[#0E4F53]/80 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:ring-offset-2">
                + Add
              </button>
            </Link>
          </div>
          <DataTable columns={columns} data={headers} />
        </div>
      </Layout>
    </section>
  );
};

export default CareerHeader;
