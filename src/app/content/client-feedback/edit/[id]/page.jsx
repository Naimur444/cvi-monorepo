"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";

const EditClientFeedbackPage = () => {
  const params = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    feedback: "",
    image: null,
    status: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const API_BASE = useMemo(
    () =>
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.NEXT_PUBLIC_VITE_API_URL ||
      process.env.NEXT_PUBLIC_REACT_APP_API_URL ||
      (process.env.NODE_ENV === "development" ? "http://localhost:3002" : ""),
    []
  );

  // Load existing data
  useEffect(() => {
    const load = async () => {
      if (!params?.id) return;
      setIsFetching(true);
      try {
        const url = API_BASE
          ? `${API_BASE.replace(/\/$/, "")}/client-feedback/${params.id}`
          : `/api/client-feedback/${params.id}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load (${res.status})`);
        const data = await res.json();
        const item = Array.isArray(data) ? data[0] : data?.data || data;
        setFormData({
          name: item?.name || item?.clientName || "",
          position: item?.position || item?.details || "",
          feedback: item?.feedback || "",
          image:
            item?.imageUrl ||
            item?.image_url ||
            item?.img ||
            "/placeholder.jpg",
          status: item?.status === "active" || item?.status === true,
        });
      } catch (e) {
        toast.error(e.message || "Failed to fetch item");
      } finally {
        setIsFetching(false);
      }
    };
    load();
  }, [API_BASE, params?.id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const endpoint = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/client-feedback/${params.id}`
        : `/api/client-feedback/${params.id}`;

      let res;
      if (formData.image && typeof formData.image !== "string") {
        const fd = new FormData();
        fd.append("clientName", formData.name);
        fd.append("details", formData.position);
        fd.append("feedback", formData.feedback);
        fd.append("status", formData.status ? "active" : "inactive");
        fd.append("img", formData.image);
        res = await fetch(endpoint, { method: "PATCH", body: fd });
      } else {
        const payload = {
          clientName: formData.name,
          details: formData.position,
          feedback: formData.feedback,
          img: typeof formData.image === "string" ? formData.image : "",
          status: formData.status ? "active" : "inactive",
        };
        res = await fetch(endpoint, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Update failed: ${res.status}`);
      }

      toast.success("Client feedback updated.");
      router.push("/content/client-feedback");
    } catch (error) {
      toast.error(error.message || "Error updating client feedback");
    } finally {
      setIsLoading(false);
    }
  };

  const performDelete = async () => {
    setIsLoading(true);
    try {
      const url = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/client-feedback/${params.id}`
        : `/api/client-feedback/${params.id}`;
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Delete failed: ${res.status}`);
      }
      toast.success("Client feedback deleted.");
      router.push("/content/client-feedback");
    } catch (error) {
      toast.error(error.message || "Error deleting client feedback");
    } finally {
      setIsLoading(false);
      setConfirmOpen(false);
    }
  };

  return (
    <div>
      <Layout>
        <div className="mb-6">
          <MenuItem
            parent={"Content"}
            page={"Client Feedback"}
            addPage={"Edit Client Feedback"}
            href={"/content/client-feedback"}
          />
        </div>

        <div className="bg-white rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Edit Client Feedback
            </h3>
            <button
              onClick={() => setConfirmOpen(true)}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M20.3 5.5L19.6803 15.5251C19.5219 18.0864 19.4428 19.3671 18.8008 20.2879C18.4833 20.7431 18.0747 21.1273 17.6007 21.416C16.6421 22 15.359 22 12.7927 22C10.2232 22 8.93835 22 7.9791 21.4149C7.50485 21.1257 7.09605 20.7408 6.77873 20.2848C6.13693 19.3626 6.0595 18.0801 5.90466 15.5152L5.30005 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3.80005 5.5H21.8M16.8557 5.5L16.1731 4.09173C15.7196 3.15626 15.4928 2.68852 15.1017 2.39681C15.015 2.3321 14.9231 2.27454 14.827 2.2247C14.3939 2 13.8741 2 12.8345 2C11.7688 2 11.236 2 10.7957 2.23412C10.6981 2.28601 10.605 2.3459 10.5173 2.41317C10.1217 2.7167 9.90068 3.20155 9.45866 4.17126L8.85297 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Delete
            </button>
          </div>

          {isFetching ? (
            <div className="px-4 py-8 text-center text-sm text-gray-600">
              Loading current data...
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex flex-col mb-4">
                    <label className="text-[#181818] mb-2">Client Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#FAF9FC] text-gray-700 rounded-lg border border-[#DCDCDC] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                      placeholder="Enter client name..."
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label className="text-[#181818] mb-2">
                      Position/Details
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="bg-[#FAF9FC] text-gray-700 rounded-lg border border-[#DCDCDC] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                      placeholder="Enter client position..."
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label className="text-[#181818] mb-2">Feedback</label>
                    <textarea
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      className="bg-[#FAF9FC] text-gray-700 rounded-lg border border-[#DCDCDC] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent min-h-[120px] resize-none"
                      placeholder="Enter client feedback..."
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label className="text-[#181818] mb-2">Status</label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="status"
                        checked={formData.status}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div
                        className={`w-11 h-6 rounded-full transition-colors relative ${
                          formData.status ? "bg-[#0E4F53]" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            formData.status ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm text-gray-600">
                        {formData.status ? "Active" : "Inactive"}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <p className="text-[#181818] mb-2">Client Image/Video</p>
                  <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6">
                    {formData.image && typeof formData.image === "string" && (
                      <div className="mb-4">
                        <img
                          src={formData.image}
                          alt="Current Client Image"
                          className="w-32 h-32 object-cover rounded"
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center">
                          Current Image
                        </p>
                      </div>
                    )}

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="49"
                        viewBox="0 0 48 49"
                        fill="none"
                      >
                        <path
                          d="M34.9552 18.5221C34.97 18.522 34.985 18.522 35 18.522C39.9706 18.522 44 22.5588 44 27.5386C44 32.1796 40.5 36.0016 36 36.5M34.9552 18.5221C34.9848 18.1921 35 17.8579 35 17.5202C35 11.4339 30.0752 6.5 24 6.5C18.2465 6.5 13.5247 10.9253 13.0408 16.5638M34.9552 18.5221C34.7506 20.7952 33.8572 22.8692 32.4856 24.533M13.0408 16.5638C7.96796 17.0475 4 21.3278 4 26.5366C4 31.3834 7.43552 35.4264 12 36.3546M13.0408 16.5638C13.3565 16.5337 13.6765 16.5183 14 16.5183C16.2516 16.5183 18.3295 17.2639 20.001 18.522"
                          stroke="#0E4F53"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24 26.5V42.5M24 26.5C22.5996 26.5 19.9831 30.4886 19 31.5M24 26.5C25.4004 26.5 28.017 30.4886 29 31.5"
                          stroke="#0E4F53"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="text-[#181818] text-center">
                      Choose or drag & drop an image or video
                    </p>

                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                    />

                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-[#0E4F53] px-6 py-2 rounded-md hover:bg-[#0b3b41] hover:text-white transition border border-[#DCDCDC]"
                    >
                      Upload New File
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link href={"/content/client-feedback"}>
                  <button
                    type="button"
                    className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer hover:bg-[#ED1400] hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#0E4F53]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          )}
        </div>
      </Layout>

      {confirmOpen && (
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
                onClick={() => setConfirmOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-[#ED1400] text-white cursor-pointer disabled:opacity-70"
                onClick={performDelete}
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditClientFeedbackPage;
