"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const careerJobs = () => {
  const [isOn, setIsOn] = useState(false);
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

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) onChange(newState);
  };

  const fetchJobs = async (qs = {}) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (qs.status) params.append("status", qs.status);
      if (qs.title) params.append("title", qs.title);
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/jobs${params.toString() ? `?${params.toString()}` : ""}`
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
      const url = API_BASE ? `${API_BASE.replace(/\/$/, "")}/jobs/${id}` : `/api/jobs/${id}`;
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Delete failed: ${res.status}`);
      }
      setJobs((prev) => prev.filter((j) => String(j.id) !== String(id)));
      setMessage({ type: "success", text: "Job deleted." });
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Failed to delete job" });
    } finally {
      setDeletingId(null);
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

          {/* Table */}
          <div className="mb-4 flex gap-2">
            <input
              name="title"
              value={filters.title}
              onChange={handleFilterChange}
              placeholder="Filter by title"
              className="border p-2 rounded"
            />
            <select name="status" value={filters.status} onChange={handleFilterChange} className="border p-2 rounded">
              <option value="">All statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button onClick={applyFilters} className="bg-[#0E4F53] text-white px-3 rounded">Apply</button>
          </div>

          <div className="overflow-x-auto shadow-sm">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3">SI No.</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Create Date</th>

                  <th className="px-4 py-3">Deadline </th>
                  <th className="px-4 py-3">Status</th>

                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-red-600">
                      {error}
                    </td>
                  </tr>
                ) : jobs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center">
                      No jobs found.
                    </td>
                  </tr>
                  ) : (
                  jobs.map((job, idx) => (
                    <tr key={job.id || idx} className="border-b border-[#DCDCDC] align-top">
                      <td className="px-4 py-3">{idx + 1}</td>
                      <td className="px-4 py-3">{job.title}</td>
                      <td className="px-4 py-3 ">{new Date(job.createdAt || job.created_at || Date.now()).toLocaleDateString()}</td>
                      <td className="px-4 py-3 ">{job.deadline ? new Date(job.deadline).toLocaleDateString() : "-"}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-white text-xs ${job.status === "active" ? "bg-[#0E4F53]" : "bg-gray-400"}`}>
                          {job.status || "-"}
                        </span>
                      </td>
                      <td className="px-4 py-3 flex gap-2 items-center">
                        <Link href={`/career/jobs/edit/${job.id || ''}`}>
                          <button className="cursor-pointer">Edit</button>
                        </Link>
                        <button
                          onClick={() => deleteJob(job.id)}
                          disabled={deletingId === job.id}
                          className="text-red-600 cursor-pointer"
                        >
                          {deletingId === job.id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {message && (
            <div className={`mt-3 text-center ${message.type === "error" ? "text-red-600" : "text-green-600"}`}>
              {message.text}
            </div>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default careerJobs;
