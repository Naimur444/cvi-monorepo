"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import React, { useState } from "react";

const AddPartnerPage = () => {
  // State holds an array of partners; each partner can hold selected files
  const [partners, setPartners] = useState([
    {
      files: [],
    },
  ]);

  // Add a new empty partner block
  const addPartner = () => {
    setPartners((prev) => [...prev, { files: [] }]);
  };

  // Remove partner block by index
  const removePartner = (indexToRemove) => {
    setPartners((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  // Handle file changes for specific partner block
  const handleFileChange = (index, e) => {
    const selectedFiles = Array.from(e.target.files);
    setPartners((prev) => {
      const updated = [...prev];
      updated[index].files = selectedFiles;
      return updated;
    });
  };

  return (
    <Layout>
      <div className="mb-6">
        <MenuItem
          parent={"Content"}
          page={"Partner"}
          addPage={"Add Partner"}
          href={"/content/partner"}
        />
      </div>

      <div className="flex flex-col gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 md:w-1/2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#181818] font-semibold text-xl">
                Add Partner {index + 1}
              </h3>
              {partners.length > 1 && (
                <button
                  onClick={() => removePartner(index)}
                  className="text-red-600 font-semibold hover:underline"
                  aria-label={`Remove Partner ${index + 1}`}
                >
                  Remove
                </button>
              )}
            </div>

            <div className="mb-4">
              <p className="text-[#181818] mb-2">Image/Video</p>
              <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6 mb-6">
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
                  id={`file-upload-${index}`}
                  className="hidden"
                  accept="image/*,video/*"
                  multiple
                  onChange={(e) => handleFileChange(index, e)}
                />

                <label
                  htmlFor={`file-upload-${index}`}
                  className="cursor-pointer text-[#0E4F53] px-6 py-2 rounded-md hover:bg-[#0b3b41] hover:text-white transition border border-[#DCDCDC]"
                >
                  Upload Files
                </label>

                {/* Show selected files names */}
                {partner.files.length > 0 && (
                  <div className="mt-2 text-sm text-gray-700">
                    Selected files:
                    <ul className="list-disc list-inside">
                      {partner.files.map((file, i) => (
                        <li key={i}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <p
                className="text-[#0E4F53] font-medium mb-6 cursor-pointer w-fit"
                onClick={addPartner}
              >
                + Add Another Partner
              </p>

              <div className="flex items-center justify-center gap-4">
                <button className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer">
                  Cancel
                </button>
                <button className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AddPartnerPage;
