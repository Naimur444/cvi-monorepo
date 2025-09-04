"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditWorkPage = () => {
  const params = useParams();
  const router = useRouter();
  const workId = params.id;

  const [formData, setFormData] = useState({
    name: "",
    status: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const mock = { name: "Website Redesign", status: true };
    setFormData(mock);
  }, [workId]);

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
      await new Promise((r) => setTimeout(r, 1000));
      console.log("Updating work:", { id: workId, ...formData });
      alert("Work updated successfully!");
      router.push("/portfolio/work");
    } catch (err) {
      console.error(err);
      alert("Error updating work. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this work item? This action cannot be undone."
      )
    ) {
      setIsLoading(true);
      try {
        await new Promise((r) => setTimeout(r, 1000));
        console.log("Deleting work:", workId);
        alert("Work deleted successfully!");
        router.push("/portfolio/work");
      } catch (err) {
        console.error(err);
        alert("Error deleting work. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section>
      <Layout>
        <MenuItem
          parent={"Portfolio"}
          page={"Work"}
          addPage={"Edit Work"}
          href={"/portfolio/work"}
        />

        <div className="bg-white rounded-2xl mt-6 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">Edit Work</h3>
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
                <div className="flex flex-col mb-6">
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

                <div className="flex flex-col">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4F53] focus:border-transparent"
                    placeholder="Enter work name"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => router.push("/portfolio/work")}
                className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer hover:bg-[#ED1400] hover:text-white transition-colors"
              >
                Cancel
              </button>
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
    </section>
  );
};

export default EditWorkPage;
