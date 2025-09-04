"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditAdvantagePage = () => {
  const params = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    text: "",
    image: null,
    status: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, fetch from API based on ID
  useEffect(() => {
    // Simulate fetching data based on ID
    const mockData = {
      text: "Empowering Business With Cloud Vortex Innovation",
      image: "/placeholder.jpg",
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In real app, make API call to update the advantage
      console.log("Updating advantage:", formData);

      // Show success message (you can add toast notification here)
      alert("Advantage updated successfully!");

      // Navigate back to advantages page
      router.push("/content/advantages");
    } catch (error) {
      console.error("Error updating advantage:", error);
      alert("Error updating advantage. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this advantage? This action cannot be undone."
      )
    ) {
      setIsLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // In real app, make API call to delete the advantage
        console.log("Deleting advantage with ID:", params.id);

        alert("Advantage deleted successfully!");
        router.push("/content/advantages");
      } catch (error) {
        console.error("Error deleting advantage:", error);
        alert("Error deleting advantage. Please try again.");
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
            page={"Advantages"}
            addPage={"Edit Advantage"}
            href={"/content/advantages"}
          />
        </div>

        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Edit Advantage
            </h3>
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
                  <label className="text-[#181818] mb-2">Advantage Text</label>
                  <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    className="bg-[#FAF9FC] text-gray-700 rounded-lg border border-[#DCDCDC] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent min-h-[120px] resize-none"
                    placeholder="Enter advantage description..."
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
                <p className="text-[#181818] mb-2">Image/Video</p>
                <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6">
                  {formData.image && typeof formData.image === "string" && (
                    <div className="mb-4">
                      <img
                        src={formData.image}
                        alt="Current Image"
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
              <Link href={"/content/advantages"}>
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

export default EditAdvantagePage;
