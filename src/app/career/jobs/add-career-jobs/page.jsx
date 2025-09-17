"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import React, { useState } from "react";
import api from '@/utils/api';

const AddCareerJobs = () => {
  const [form, setForm] = useState({
    title: "",
    salary: "",
    location: "",
    jobType: "",
    vacancies: "",
    experience: "",
    deadline: "",
    status: "active",
    socialMediaImg: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.title) return "Title is required";
    if (!form.details) return "Details are required";
    if (form.vacancies && isNaN(Number(form.vacancies)))
      return "Vacancies must be a number";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const err = validate();
    if (err) {
      setMessage({ type: "error", text: err });
      return;
    }

    const payload = {
      title: form.title,
      salary: form.salary,
      location: form.location,
      jobType: form.jobType,
      vacancies: form.vacancies ? Number(form.vacancies) : undefined,
      experience: form.experience,
      deadline: form.deadline,
      status: form.status,
      socialMediaImg: form.socialMediaImg,
      details: form.details,
    };

    try {
      setLoading(true);
      const response = await api.post('/jobs', payload);
      const data = response.data;
      setMessage({ type: "success", text: "Job created successfully." });
      // Optionally clear form
      setForm({
        title: "",
        salary: "",
        location: "",
        jobType: "",
        vacancies: "",
        experience: "",
        deadline: "",
        status: "active",
        socialMediaImg: "",
        details: "",
      });
      return data;
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || error.message || "Failed to create job",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Layout>
        <MenuItem
          parent={"Career"}
          page={"Jobs"}
          addPage={"Add Jobs"}
          href={"/career/jobs"}
        />

        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 space-y-4 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={form.salary}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Location</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Job Type</label>
                <input
                  type="text"
                  name="jobType"
                  value={form.jobType}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Vacancies</label>
                <input
                  type="text"
                  name="vacancies"
                  value={form.vacancies}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[#181818] mb-2">
                  Social Media Thumbnail Image (URL)
                </p>
                <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6 w-full bg-[#FAF9FC]">
                  <div>
                    {/* graphic */}
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
                    Provide an accessible image URL for social previews
                  </p>

                  <input
                    type="text"
                    name="socialMediaImg"
                    value={form.socialMediaImg}
                    onChange={handleChange}
                    placeholder="https://example.com/image.png"
                    className="w-full border border-[#DCDCDC] text-gray-600 bg-white rounded-md p-2 text-[#181818]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181818]">Details</label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  className="border border-[#DCDCDC] bg-[#FAF9FC] rounded-md p-2 text-[#181818]"
                  rows={17}
                ></textarea>
              </div>
            </div>
          </div>

          {message && (
            <p
              className={`mt-4 text-center ${
                message.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.text}
            </p>
          )}

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() =>
                setForm({
                  title: "",
                  salary: "",
                  location: "",
                  jobType: "",
                  vacancies: "",
                  experience: "",
                  deadline: "",
                  status: "active",
                  socialMediaImg: "",
                  details: "",
                })
              }
              className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer hover:bg-[#ED1400] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </Layout>
    </section>
  );
};

export default AddCareerJobs;
