"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DataTable from "@/components/DataTable";

const careerJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [message, setMessage] = useState(null);
  const [filters, setFilters] = useState({ status: "", title: "" });

  const API_BASE =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.NEXT_PUBLIC_VITE_API_URL ||
    process.env.NEXT_PUBLIC_REACT_APP_API_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  const fetchJobs = async (qs = {}) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (qs.status) params.append("status", qs.status);
      if (qs.title) params.append("title", qs.title);
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/jobs${
            params.toString() ? `?${params.toString()}` : ""
          }`
        : `/api/jobs${params.toString() ? `?${params.toString()}` : ""}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.status}`);
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : data?.data || []);
    } catch (err) {
      setError(err.message || "Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(filters);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
  };

  const applyFilters = () => fetchJobs(filters);

  const deleteJob = async (id) => {
    if (!id) return;
    const ok = confirm("Are you sure you want to delete this job?");
    if (!ok) return;
    setMessage(null);
    setDeletingId(id);
    try {
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/jobs/${id}`
        : `/api/jobs/${id}`;
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Delete failed: ${res.status}`);
      }
      setJobs((prev) => prev.filter((j) => String(j.id) !== String(id)));
      setMessage({ type: "success", text: "Job deleted." });
    } catch (err) {
      setMessage({
        type: "error",
        text: err.message || "Failed to delete job",
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleStatusToggle = async (id) => {
    if (!id) return;
    // optimistic toggle
    setJobs((prev) =>
      prev.map((j) =>
        String(j.id) === String(id)
          ? { ...j, status: j.status === "active" ? "inactive" : "active" }
          : j
      )
    );
    try {
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/jobs/${id}`
        : `/api/jobs/${id}`;
      await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
    } catch (e) {
      // on failure revert
      setJobs((prev) =>
        prev.map((j) =>
          String(j.id) === String(id)
            ? { ...j, status: j.status === "active" ? "inactive" : "active" }
            : j
        )
      );
    }
  };
  return (
    <section>
      <Layout>
        <MenuItem parent={"Career"} page={"Jobs"} href={"/career/jobs"} />

        <div className="bg-white rounded-2xl mt-6 p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">Jobs</h3>
            <Link href={"/career/jobs/add-career-jobs"}>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-[#0E4F53] text-white rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-[#0E4F53]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#0E4F53]/25 active:scale-95 active:bg-[#0E4F53]/80 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:ring-offset-2">
                + Add
              </button>
            </Link>
          </div>

          {/* Filters */}
          <div className="mb-4 flex gap-2">
            <input
              name="title"
              value={filters.title}
              onChange={handleFilterChange}
              placeholder="Filter by title"
              className="border p-2 rounded text-[#181818]"
            />
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="border p-2 rounded text-[#181818]"
            >
              <option value="">All statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button
              onClick={applyFilters}
              className="bg-[#0E4F53] text-white px-3 rounded"
            >
              Apply
            </button>
          </div>
          {/* Table */}
          {loading && (
            <div className="px-4 py-3 text-sm text-gray-600">Loading...</div>
          )}
          {error && (
            <div className="px-4 py-3 text-sm text-red-600">{error}</div>
          )}
          {!loading && !error && (
            <DataTable
              columns={[
                { key: "si", header: "SI No." },
                {
                  key: "title",
                  header: "Title",
                  render: (v) => (
                    <div className="font-medium text-gray-900">{v}</div>
                  ),
                },
                {
                  key: "createdAt",
                  header: "Create Date",
                  render: (v, row) => (
                    <div className="text-sm text-gray-700">
                      {new Date(
                        v || row.created_at || Date.now()
                      ).toLocaleDateString()}
                    </div>
                  ),
                },
                {
                  key: "deadline",
                  header: "Deadline",
                  render: (v) => (
                    <div className="text-sm text-gray-700">
                      {v ? new Date(v).toLocaleDateString() : "-"}
                    </div>
                  ),
                },
                {
                  key: "status",
                  header: "Status",
                  render: (v, row) => (
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={v === "active"}
                        onChange={() => handleStatusToggle(row.id)}
                      />
                      <div
                        className={`w-11 h-6 rounded-full transition-colors relative ${
                          v === "active" ? "bg-[#0E4F53]" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            v === "active" ? "translate-x-5" : ""
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
                      <Link href={`/career/jobs/edit/${row.id || ""}`}>
                        <button
                          className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
                          title="Edit Job"
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
                        onClick={() => deleteJob(row.id)}
                        disabled={deletingId === row.id}
                        title="Delete Job"
                        className="cursor-pointer p-1 hover:bg-red-50 rounded transition-colors"
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
              data={jobs.map((j, i) => ({ ...j, si: i + 1 }))}
            />
          )}
          {!loading && !error && jobs.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-gray-600">
              No jobs found.
            </div>
          )}
          {message && (
            <div
              className={`mt-3 text-center ${
                message.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.text}
            </div>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default careerJobs;
