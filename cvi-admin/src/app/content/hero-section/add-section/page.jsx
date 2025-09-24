"use client";
import MenuItem from "@/app/components/re-usable/MenuItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import api from "@/utils/api";

const AddSectionPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    img: "",
    status: "active",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? "active" : "closed") : value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Only allow image files
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file only.');
        return;
      }

      try {
        const formDataObj = new FormData();
        formDataObj.append('file', file);

        const response = await api.post('/upload/image', formDataObj, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setFormData((prev) => ({
          ...prev,
          img: response.data.url || response.data.fileUrl,
        }));
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image. Please try again.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/hero', formData);

      alert("Hero section created successfully!");
      router.push("/content/hero-section");
    } catch (error) {
      console.error("Error creating hero section:", error);
      alert("Error creating hero section. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mb-6">
        <MenuItem
          parent={"Content"}
          page={"Hero Section"}
          addPage={"Add Section"}
          href={"/content/hero-section"}
        />
      </div>

      <div className="bg-white rounded-2xl p-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#181818] font-semibold text-xl">
            Add Section
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex flex-col mb-4">
                <label className="text-[#181818] mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="bg-[#FAF9FC] text-gray-700 rounded-lg border border-[#DCDCDC] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                  required
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-[#181818] mb-2">Sub Title</label>
                <input
                  type="text"
                  name="subTitle"
                  value={formData.subTitle}
                  onChange={handleInputChange}
                  className="bg-[#FAF9FC] text-gray-700 rounded-lg border border-[#DCDCDC] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                  required
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-[#181818] mb-2">Status</label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="status"
                    checked={formData.status === "active"}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div
                    className={`w-11 h-6 rounded-full transition-colors relative ${
                      formData.status === "active" ? "bg-[#0E4F53]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        formData.status === "active" ? "translate-x-5" : ""
                      }`}
                    ></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">
                    {formData.status === "active" ? "Active" : "Inactive"}
                  </span>
                </label>
              </div>
            </div>

            <div>
              <p className="text-[#181818] mb-2">Image</p>
              <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6">
                {formData.img && (
                  <div className="mb-4">
                    <img
                      src={formData.img}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      Uploaded Image
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
                  Choose or drag & drop an image
                </p>

                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
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
            <Link href={"/content/hero-section"}>
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
              {isLoading ? "Saving..." : "Create Section"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSectionPage;
