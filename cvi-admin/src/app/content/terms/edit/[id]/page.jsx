"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditTermsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    content: "",
    status: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, fetch from API based on ID
  useEffect(() => {
    // Simulate fetching data based on ID
    const mockData = {
      content: "Empowering Business With Cloud Vortex Innovation",
      status: true,
    };
    setFormData(mockData);
  }, [params.id]);

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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In real app, make API call to update the term
      console.log("Updating term:", formData);

      // Show success message (you can add toast notification here)
      alert("Term updated successfully!");

      // Navigate back to terms page
      router.push("/content/terms");
    } catch (error) {
      console.error("Error updating term:", error);
      alert("Error updating term. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this term? This action cannot be undone."
      )
    ) {
      setIsLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // In real app, make API call to delete the term
        console.log("Deleting term with ID:", params.id);

        alert("Term deleted successfully!");
        router.push("/content/terms");
      } catch (error) {
        console.error("Error deleting term:", error);
        alert("Error deleting term. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Layout>
        <div className="mb-6">
          <MenuItem
            parent={"Content"}
            page={"Terms"}
            addPage={"Edit Term"}
            href={"/content/terms"}
          />
        </div>

        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">Edit Term</h3>
            <button
              onClick={handleDelete}
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

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex flex-col mb-4">
                  <label className="text-[#181818] mb-2">
                    Terms & Condition
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    className="bg-[#FAF9FC] text-gray-700 rounded-lg border border-[#DCDCDC] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent min-h-[200px] resize-none"
                    placeholder="Enter terms and conditions..."
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
            </div>

            <div className="flex items-center justify-center gap-4">
              <Link href={"/content/terms"}>
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
        </div>
      </Layout>
    </div>
  );
};

export default EditTermsPage;
