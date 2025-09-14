"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TableFilter from "@/components/FilterTable";

const ClientFeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [confirmingId, setConfirmingId] = useState(null);
  const [message, setMessage] = useState(null);
  const [filters, setFilters] = useState({ status: "", name: "" });

  const API_BASE =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.NEXT_PUBLIC_VITE_API_URL ||
    process.env.NEXT_PUBLIC_REACT_APP_API_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  const fetchFeedbacks = async (qs = {}) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (qs.status) params.append("status", qs.status);
      if (qs.name) params.append("name", qs.name);
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/client-feedback${
            params.toString() ? `?${params.toString()}` : ""
          }`
        : `/api/client-feedback${
            params.toString() ? `?${params.toString()}` : ""
          }`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch feedbacks: ${res.status}`);
      const data = await res.json();
      setFeedbacks(Array.isArray(data) ? data : data?.data || []);
    } catch (err) {
      setError(err.message || "Failed to load client feedbacks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStatusToggle = async (id) => {
    // optimistic toggle
    setFeedbacks((prev) =>
      prev.map((f) =>
        String(f.id) === String(id)
          ? {
              ...f,
              status:
                f.status === "active" || f.status === true
                  ? "inactive"
                  : "active",
            }
          : f
      )
    );
    try {
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/client-feedback/${id}`
        : `/api/client-feedback/${id}`;
      await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
    } catch (e) {
      // revert on failure
      setFeedbacks((prev) =>
        prev.map((f) =>
          String(f.id) === String(id)
            ? {
                ...f,
                status:
                  f.status === "active" || f.status === true
                    ? "inactive"
                    : "active",
              }
            : f
        )
      );
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;
    setMessage(null);
    setDeletingId(id);
    try {
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/client-feedback/${id}`
        : `/api/client-feedback/${id}`;
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Delete failed: ${res.status}`);
      }
      setFeedbacks((prev) => prev.filter((f) => String(f.id) !== String(id)));
      toast.success("Client feedback deleted.");
    } catch (err) {
      toast.error(err.message || "Failed to delete.");
    } finally {
      setDeletingId(null);
      setConfirmingId(null);
    }
  };

  const columns = [
    { key: "si", header: "SI No." },
    {
      key: "name",
      header: "Client Name",
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      ),
    },
    {
      key: "position",
      header: "Details",
      render: (value) => <div className="text-sm text-gray-600">{value}</div>,
    },
    {
      key: "feedback",
      header: "Feedback",
      render: (value) => (
        <div className="max-w-xs">
          <p className="text-sm text-gray-700 line-clamp-3">{value}</p>
        </div>
      ),
    },
    {
      key: "imageUrl",
      header: "Image/Video",
      render: (value) => (
        <img
          src={value}
          alt="Client Preview"
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
            checked={value === "active" || value === true}
            onChange={() => handleStatusToggle(row.id)}
          />
          <div
            className={`w-11 h-6 rounded-full transition-colors relative ${
              value === "active" || value === true
                ? "bg-[#0E4F53]"
                : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                value === "active" || value === true ? "translate-x-5" : ""
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
          <Link href={`/content/client-feedback/edit/${row.id}`}>
            <button
              className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
              title="Edit Client Feedback"
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
            title="Delete Client Feedback"
            onClick={() => setConfirmingId(row.id)}
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

  // FilterTable props (clean variables)
  const filterConfig = [
    {
      key: "name",
      label: "Name",
      type: "text",
      placeholder: "Search by name",
      className: "w-64 text-gray-500",
    },
    {
      key: "status",
      label: "Status",
      type: "select",
      className: "w-48 text-gray-500",
      options: [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
    },
  ];

  const handleFilterApply = (next) => {
    const normalized = {
      ...filters,
      ...next,
      status: next.status === "all" ? "" : next.status,
    };
    setFilters(normalized);
    fetchFeedbacks(normalized);
  };

  return (
    <section>
      <Layout>
        <MenuItem
          parent={"Content"}
          page={"Client Feedback"}
          href={"/content/client-feedback"}
        />

        <div className="bg-white rounded-2xl mt-6 p-6">
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
          <div className="mb-4">
            <TableFilter
              filtersConfig={filterConfig}
              onFilter={handleFilterApply}
            />
          </div>

          {loading && (
            <div className="px-4 py-3 text-sm text-gray-600">Loading...</div>
          )}
          {error && (
            <div className="px-4 py-3 text-sm text-red-600">{error}</div>
          )}
          {!loading && !error && (
            <DataTable
              columns={columns}
              data={feedbacks.map((f, i) => ({
                ...f,
                si: i + 1,
                name: f.name || f.clientName || "",
                position: f.position || f.details || "",
                imageUrl:
                  f.imageUrl || f.image_url || f.img || "/placeholder.jpg",
              }))}
            />
          )}
          {!loading && !error && feedbacks.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-gray-600">
              No client feedback found.
            </div>
          )}
        </div>
      </Layout>
      {Boolean(confirmingId) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm">
            <div className="px-5 py-4 border-b">
              <h4 className="text-lg font-semibold text-[#181818]">
                Confirm deletion
              </h4>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700">
              Are you sure you want to delete this client feedback? This action
              cannot be undone.
            </div>
            <div className="px-5 py-4 flex items-center justify-end gap-3 border-t">
              <button
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 cursor-pointer"
                onClick={() => setConfirmingId(null)}
                disabled={deletingId === confirmingId}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-[#ED1400] text-white cursor-pointer disabled:opacity-70"
                onClick={() => handleDelete(confirmingId)}
                disabled={deletingId === confirmingId}
              >
                {deletingId === confirmingId ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientFeedbackPage;
