"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import { useRouter, useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditOthersPage = () => {
  const router = useRouter();
  const params = useParams();
  const othersId = params.id;

  const [formData, setFormData] = useState({
    title: "",
    details: "",
    status: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  // Simulate fetching others data (replace with actual API call)
  useEffect(() => {
    // Mock data - replace with actual API call
    const mockOthersData = {
      title: "Experience",
      details:
        "5+ years of experience in software development and digital transformation",
      status: true,
    };

    setFormData(mockOthersData);
  }, [othersId]);

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

      // Here you would make the actual API call to update the others item
      console.log("Updating others item:", { id: othersId, ...formData });

      // Show success message
      alert("Others item updated successfully!");

      // Redirect back to about page
      router.push("/about");
    } catch (error) {
      console.error("Error updating others item:", error);
      alert("Error updating others item. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this item? This action cannot be undone."
      )
    ) {
      setIsLoading(true);

      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would make the actual API call to delete the others item
        console.log("Deleting others item:", othersId);

        // Show success message
        alert("Others item deleted successfully!");

        // Redirect back to about page
        router.push("/about");
      } catch (error) {
        console.error("Error deleting others item:", error);
        alert("Error deleting others item. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section>
      <Layout>
        <MenuItem page={"About"} addPage={"Edit Others"} href={"/about"} />

        <div className="bg-white rounded-2xl mt-6 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Edit Others
            </h3>
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              Delete Others
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
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
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                  placeholder="Enter title"
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details *
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                  placeholder="Enter details"
                />
              </div>

              {/* Status Toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="status"
                      checked={formData.status}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0E4F53]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0E4F53]"></div>
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      {formData.status ? "Active" : "Inactive"}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => router.push("/about")}
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
                  "Update Others"
                )}
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </section>
  );
};

export default EditOthersPage;
