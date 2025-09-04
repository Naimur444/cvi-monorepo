"use client";

import Layout from "@/app/components/Layout";
import DataTable from "@/components/DataTable";
import React, { useState } from "react";

const SubmitFormPage = () => {
  const [submittedForms, setSubmittedForms] = useState([
    {
      id: 1,
      name: "Kareim",
      email: "abc@gmail.com",
      phone: "01234567890",
      companyName: "ACXC",
      services: "Mobile App",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      status: "pending",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.com",
      phone: "+1-555-123-4567",
      companyName: "TechCorp Solutions",
      services: "Web Development",
      details:
        "Looking for a comprehensive web application with modern UI/UX design and backend integration.",
      status: "new",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@startup.io",
      phone: "+44-20-7946-0958",
      companyName: "StartupIO",
      services: "Cloud Migration",
      details:
        "Need assistance migrating our legacy systems to cloud infrastructure with minimal downtime.",
      status: "done",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      email: "emily@digitalagency.com",
      phone: "+1-416-555-0123",
      companyName: "Digital Agency Pro",
      services: "UI/UX Design",
      details:
        "Require professional UI/UX design services for our client's e-commerce platform.",
      status: "pending",
    },
    {
      id: 5,
      name: "David Kim",
      email: "david.kim@enterprise.com",
      phone: "+82-2-1234-5678",
      companyName: "Enterprise Solutions",
      services: "DevOps",
      details:
        "Looking for DevOps expertise to streamline our deployment pipeline and improve CI/CD processes.",
      status: "new",
    },
  ]);

  // Handle status change
  const handleStatusChange = (formId, newStatus) => {
    setSubmittedForms((prev) =>
      prev.map((form) =>
        form.id === formId ? { ...form, status: newStatus } : form
      )
    );
  };

  // Handle delete
  const handleDelete = (formId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this submitted form? This action cannot be undone."
      )
    ) {
      setSubmittedForms((prev) => prev.filter((form) => form.id !== formId));
    }
  };

  const columns = [
    { key: "id", header: "SI No." },
    {
      key: "name",
      header: "Name",
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      ),
    },
    {
      key: "email",
      header: "Email/Phone",
      render: (value, row) => (
        <div className="space-y-1">
          <div className="text-sm text-gray-700">{value}</div>
          <div className="text-sm text-gray-500">{row.phone}</div>
        </div>
      ),
    },
    {
      key: "companyName",
      header: "Company Name",
      render: (value) => <div className="text-sm text-gray-700">{value}</div>,
    },
    {
      key: "services",
      header: "Services",
      render: (value) => <div className="text-sm text-gray-700">{value}</div>,
    },
    {
      key: "details",
      header: "Details",
      render: (value) => (
        <div className="max-w-xs">
          <p className="text-sm text-gray-700 line-clamp-2">{value}</p>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value, row) => (
        <select
          value={value}
          onChange={(e) => handleStatusChange(row.id, e.target.value)}
          className={`w-full py-2 px-3 rounded-full border shadow-sm focus:outline-none focus:ring-2 transition duration-200 ease-in-out text-sm
          ${
            value === "done"
              ? "bg-green-500 text-white border-green-600 focus:ring-green-400"
              : value === "pending"
              ? "bg-yellow-300 text-black border-yellow-400 focus:ring-yellow-400"
              : "bg-cyan-900 text-white border-cyan-800 focus:ring-cyan-600"
          }`}
        >
          <option value="done">Done</option>
          <option value="pending">Pending</option>
          <option value="new">New</option>
        </select>
      ),
    },
  ];

  return (
    <section>
      <Layout>
        <div className="bg-white rounded-2xl mt-6 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#181818] font-semibold text-xl">
              Submit Form
            </h3>
          </div>

          <DataTable columns={columns} data={submittedForms} />
        </div>
      </Layout>
    </section>
  );
};

export default SubmitFormPage;
