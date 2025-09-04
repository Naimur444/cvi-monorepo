"use client";
import React, { useState } from "react";
import Layout from "../components/Layout";
import MenuItem from "../components/re-usable/MenuItem";
import DataTable from "@/components/DataTable";
import Link from "next/link";

const AboutPage = () => {
  // Leadership Team Data
  const [leadershipTeam, setLeadershipTeam] = useState([
    {
      id: 1,
      name: "Shahriar Mushficul Islam",
      designation: "CEO",
      image: "/placeholder.jpg",
      status: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      designation: "CTO",
      image: "/placeholder.jpg",
      status: true,
    },
    {
      id: 3,
      name: "Michael Chen",
      designation: "Head of Design",
      image: "/placeholder.jpg",
      status: false,
    },
  ]);

  // Others Data
  const [others, setOthers] = useState([
    {
      id: 1,
      title: "Experience",
      details:
        "5+ years of experience in software development and digital transformation",
      status: true,
    },
    {
      id: 2,
      title: "Awards",
      details: "Best Tech Startup 2023, Innovation Excellence Award 2022",
      status: true,
    },
    {
      id: 3,
      title: "Certifications",
      details: "ISO 27001, SOC 2 Type II, AWS Partner Network",
      status: false,
    },
  ]);

  // Handle Leadership Team Status Toggle
  const handleLeadershipStatusToggle = (leaderId) => {
    setLeadershipTeam((prev) =>
      prev.map((leader) =>
        leader.id === leaderId ? { ...leader, status: !leader.status } : leader
      )
    );
  };

  // Handle Leadership Team Delete
  const handleLeadershipDelete = (leaderId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this leadership team member? This action cannot be undone."
      )
    ) {
      setLeadershipTeam((prev) =>
        prev.filter((leader) => leader.id !== leaderId)
      );
    }
  };

  // Handle Others Status Toggle
  const handleOthersStatusToggle = (otherId) => {
    setOthers((prev) =>
      prev.map((other) =>
        other.id === otherId ? { ...other, status: !other.status } : other
      )
    );
  };

  // Handle Others Delete
  const handleOthersDelete = (otherId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this item? This action cannot be undone."
      )
    ) {
      setOthers((prev) => prev.filter((other) => other.id !== otherId));
    }
  };
  return (
    <section>
      <Layout>
        <div className="mb-6">
          <MenuItem page={"About"} href={"/about"} />
        </div>

        <div className="bg-white p-4 rounded-2xl mb-6">
          <div className="flex items-center justify-between mb-6 border-b border-[#DCDCDC] pb-4">
            <h3 className="text-[#181818] font-semibold text-xl">
              Content Image
            </h3>
            <Link href={"about/content-image"}>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-[#FAF9FC] text-[#181818] rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506"
                    stroke="#0E4F53"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5"
                    stroke="#0E4F53"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Edit
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="/placeholder.jpg"
              alt="Placeholder"
              className="w-[100px] h-[100px]"
            />

            <img
              src="/placeholder.jpg"
              alt="Placeholder"
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl mb-6">
          <div className="flex items-center justify-between mb-6 border-b border-[#DCDCDC] pb-4">
            <h3 className="text-[#181818] font-semibold text-xl">Our Story</h3>
            <Link href={"about/our-story"}>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-[#FAF9FC] text-[#181818] rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506"
                    stroke="#0E4F53"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5"
                    stroke="#0E4F53"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Edit
              </button>
            </Link>
          </div>

          <p className="text-[#181818] text-sm overflow-y-scroll">
            Cloud Vortex Innovation was born from a shared vision: to create a
            technology company that doesn't just deliver code, but delivers
            change. In 2023, a group of passionate developers, designers, and
            digital strategists came together in Dhaka with one goal—to help
            businesses navigate the fast-evolving digital world with clarity,
            creativity, and confidence. We started small—with big ideas. From
            late-night brainstorming sessions to our first lines of code, we’ve
            always believed that great software is more than functionality—it’s
            about experience, impact, and solving real problems. What began as a
            modest team has grown into a dynamic technology partner trusted by
            startups and enterprises across multiple industries. We've helped
            businesses go digital, scale faster, and work smarter—always staying
            ahead of the curve with new technologies and user-first thinking.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Leadership Team
            </h3>
            <Link href={"about/leadership-team"}>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-[#0E4F53] text-white rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-[#0E4F53]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#0E4F53]/25 active:scale-95 active:bg-[#0E4F53]/80 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:ring-offset-2">
                + Add
              </button>
            </Link>
          </div>

          <DataTable
            columns={[
              { key: "id", header: "SI No." },
              {
                key: "image",
                header: "Image",
                render: (value) => (
                  <img
                    src={value}
                    alt="Leadership"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                ),
              },
              {
                key: "name",
                header: "Name",
                render: (value) => (
                  <div className="font-medium text-gray-900">{value}</div>
                ),
              },
              {
                key: "designation",
                header: "Designation",
                render: (value) => (
                  <div className="text-sm text-gray-600">{value}</div>
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
                      checked={value}
                      onChange={() => handleLeadershipStatusToggle(row.id)}
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
                  <div className="flex gap-2">
                    <Link href={`/about/leadership-team/edit/${row.id}`}>
                      <button
                        className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
                        title="Edit Leadership"
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
                      className="p-1 hover:bg-red-50 rounded transition-colors"
                      title="Delete Leadership"
                      onClick={() => handleLeadershipDelete(row.id)}
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
            ]}
            data={leadershipTeam}
          />
        </div>

        <div className="bg-white p-4 rounded-2xl mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">Others</h3>
            <Link href={"about/others"}>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-[#0E4F53] text-white rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-[#0E4F53]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#0E4F53]/25 active:scale-95 active:bg-[#0E4F53]/80 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:ring-offset-2">
                + Add
              </button>
            </Link>
          </div>

          <DataTable
            columns={[
              { key: "id", header: "SI No." },
              {
                key: "title",
                header: "Title",
                render: (value) => (
                  <div className="font-medium text-gray-900">{value}</div>
                ),
              },
              {
                key: "details",
                header: "Details",
                render: (value) => (
                  <div className="max-w-xs">
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {value}
                    </p>
                  </div>
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
                      checked={value}
                      onChange={() => handleOthersStatusToggle(row.id)}
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
                  <div className="flex gap-2">
                    <Link href={`/about/others/edit/${row.id}`}>
                      <button
                        className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
                        title="Edit Others"
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
                      className="p-1 hover:bg-red-50 rounded transition-colors"
                      title="Delete Others"
                      onClick={() => handleOthersDelete(row.id)}
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
            ]}
            data={others}
          />
        </div>
      </Layout>
    </section>
  );
};

export default AboutPage;
