"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const schema = z.object({
  clientName: z.string().min(2, "Client name is required"),
  details: z.string().optional().default(""),
  feedback: z.string().min(5, "Feedback is required"),
  status: z.enum(["active", "inactive"]).default("active"),
  imageUrl: z.string().url().optional().or(z.literal("")),
});

const AddClientFeedbackPage = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const API_BASE = useMemo(
    () =>
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.NEXT_PUBLIC_VITE_API_URL ||
      process.env.NEXT_PUBLIC_REACT_APP_API_URL ||
      (process.env.NODE_ENV === "development" ? "http://localhost:3002" : ""),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      clientName: "",
      details: "",
      feedback: "",
      status: "active",
      imageUrl: "",
    },
  });

  const onSubmit = async (values) => {
    setSubmitting(true);
    setMessage(null);
    try {
      const endpoint = API_BASE
        ? `${API_BASE.replace(/\/$/, "")}/client-feedback`
        : "/api/client-feedback";

      let res;
      if (selectedFile) {
        const formData = new FormData();
        formData.append("clientName", values.clientName);
        formData.append("details", values.details || "");
        formData.append("feedback", values.feedback);
        formData.append("status", values.status);
        formData.append("img", selectedFile);

        res = await fetch(endpoint, {
          method: "POST",
          body: formData,
        });
      } else {
        const payload = {
          clientName: values.clientName,
          details: values.details || "",
          feedback: values.feedback,
          img: values.imageUrl || "",
          status: values.status,
        };
        res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Failed to create (${res.status})`);
      }

      toast.success("Feedback created successfully.");
      reset();
      setSelectedFile(null);
      setPreviewUrl("");
      router.push("/content/client-feedback");
    } catch (err) {
      toast.error(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl("");
    }
  };

  return (
    <div>
      <Layout>
        <div className="mb-6">
          <MenuItem
            parent={"Content"}
            page={"Client Feedback"}
            addPage={"Add Feedback"}
            href={"/content/client-feedback"}
          />
        </div>

        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-[#181818] font-semibold text-xl mb-6">
            Add Feedback
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex flex-col mb-4">
                  <label className="text-[#181818] mb-2">Client Name</label>
                  <input
                    type="text"
                    className="bg-[#FAF9FC] rounded-lg border border-[#DCDCDC] py-2 px-3 text-gray-500"
                    placeholder="e.g., John Doe"
                    {...register("clientName")}
                  />
                  {errors.clientName && (
                    <span className="text-sm text-red-600 mt-1">
                      {errors.clientName.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-[#181818] mb-2">Details</label>
                  <input
                    type="text"
                    className="bg-[#FAF9FC] rounded-lg border border-[#DCDCDC] py-2 px-3 text-gray-500"
                    placeholder="e.g., CEO of Example Corp."
                    {...register("details")}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-[#181818] mb-2">Feedback</label>
                  <textarea
                    rows={4}
                    className="bg-[#FAF9FC] rounded-lg border border-[#DCDCDC] py-2 px-3 text-gray-500"
                    placeholder="Write feedback"
                    {...register("feedback")}
                  />
                  {errors.feedback && (
                    <span className="text-sm text-red-600 mt-1">
                      {errors.feedback.message}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <input
                    id="status-active"
                    type="radio"
                    value="active"
                    className="accent-[#0E4F53]"
                    {...register("status")}
                  />
                  <label
                    htmlFor="status-active"
                    className="mr-4 text-[#181818]"
                  >
                    Active
                  </label>
                  <input
                    id="status-inactive"
                    type="radio"
                    value="inactive"
                    className="accent-[#0E4F53]"
                    {...register("status")}
                  />
                  <label htmlFor="status-inactive" className="text-[#181818]">
                    Inactive
                  </label>
                </div>
              </div>

              <div>
                <p className="text-[#181818] mb-2">Image/Video</p>
                <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded"
                    />
                  ) : (
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
                  )}

                  <p className="text-[#181818] text-center">
                    Choose or drag & drop an image or select a file
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
                    Upload File
                  </label>

                  <div className="w-full">
                    <label className="text-[#181818] mb-2 block">
                      Or Image URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com/image.png"
                      className="bg-[#FAF9FC] rounded-lg border border-[#DCDCDC] py-2 px-3 w-full text-gray-500"
                      {...register("imageUrl")}
                    />
                    {errors.imageUrl && (
                      <span className="text-sm text-red-600 mt-1 block">
                        {errors.imageUrl.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer"
                onClick={() => router.push("/content/client-feedback")}
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-70"
                disabled={submitting}
              >
                {submitting ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default AddClientFeedbackPage;
