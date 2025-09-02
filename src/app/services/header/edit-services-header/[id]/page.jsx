"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import { useRouter, useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditServicesHeaderPage = () => {
  const router = useRouter();
  const params = useParams();
  const headerId = params.id;

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    status: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  // Simulate fetching services header data (replace with actual API call)
  useEffect(() => {
    // Mock data - replace with actual API call
    const mockHeaderData = {
      title: "Utilizing Leading Tech",
      image: "/placeholder.jpg",
      status: true,
    };

    setFormData(mockHeaderData);
  }, [headerId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would make the actual API call to update the services header
      console.log("Updating services header:", { id: headerId, ...formData });

      // Show success message (you can add a toast notification here)
      alert("Services header updated successfully!");

      // Redirect back to services header page
      router.push("/services/header");
    } catch (error) {
      console.error("Error updating services header:", error);
      alert("Error updating services header. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/services/header");
  };

  return (
    <section>
      <Layout>
        <MenuItem page={"Edit Services Header"} href={"/services/header"} />

        <div className="bg-white rounded-2xl mt-6 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Edit Services Header Information
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                  placeholder="Enter header title"
                />
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image *
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="status"
                  className="sr-only peer"
                  checked={formData.status}
                  onChange={handleInputChange}
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
                <span className="ml-3 text-sm text-gray-700">
                  {formData.status ? "Active" : "Inactive"}
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-[#0E4F53] text-white rounded-lg hover:bg-[#0a3d40] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  "Update Services Header"
                )}
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </section>
  );
};

export default EditServicesHeaderPage;
