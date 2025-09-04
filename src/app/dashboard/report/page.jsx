"use client";
import Layout from "@/app/components/Layout";
import DataTable from "@/components/DataTable";
import React, { useState } from "react";

const ReportPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: "today",
      title: "Today",
      value: 50,
      color: "#FF4F0F",
      border: "#FF4F0F",
    },
    {
      id: "week",
      title: "This Week",
      value: 120,
      color: "#799EFF",
      border: "#799EFF",
    },
    {
      id: "month",
      title: "This Month",
      value: 480,
      color: "#9929EA",
      border: "#9929EA",
    },
    {
      id: "year",
      title: "This Year",
      value: 3200,
      color: "#03A6A1",
      border: "#03A6A1",
    },
  ];

  // Enhanced data for different cards with more realistic report data
  const tableDataMap = {
    today: [
      {
        id: 1,
        country: "USA",
        state: "New York",
        social: "Facebook",
        visits: 25,
        duration: "2m 30s",
      },
      {
        id: 2,
        country: "Canada",
        state: "Toronto",
        social: "Instagram",
        visits: 15,
        duration: "1m 45s",
      },
      {
        id: 3,
        country: "UK",
        state: "London",
        social: "Twitter",
        visits: 10,
        duration: "3m 15s",
      },
    ],
    week: [
      {
        id: 1,
        country: "UK",
        state: "London",
        social: "Twitter",
        visits: 45,
        duration: "2m 20s",
      },
      {
        id: 2,
        country: "Germany",
        state: "Berlin",
        social: "LinkedIn",
        visits: 38,
        duration: "4m 10s",
      },
      {
        id: 3,
        country: "France",
        state: "Paris",
        social: "Facebook",
        visits: 32,
        duration: "1m 55s",
      },
      {
        id: 4,
        country: "Spain",
        state: "Madrid",
        social: "Instagram",
        visits: 28,
        duration: "3m 40s",
      },
    ],
    month: [
      {
        id: 1,
        country: "India",
        state: "Delhi",
        social: "Instagram",
        visits: 180,
        duration: "2m 15s",
      },
      {
        id: 2,
        country: "Japan",
        state: "Tokyo",
        social: "Twitter",
        visits: 165,
        duration: "3m 25s",
      },
      {
        id: 3,
        country: "Brazil",
        state: "Rio",
        social: "Facebook",
        visits: 142,
        duration: "2m 50s",
      },
      {
        id: 4,
        country: "Australia",
        state: "Sydney",
        social: "LinkedIn",
        visits: 128,
        duration: "4m 05s",
      },
      {
        id: 5,
        country: "South Korea",
        state: "Seoul",
        social: "Instagram",
        visits: 115,
        duration: "2m 35s",
      },
    ],
    year: [
      {
        id: 1,
        country: "China",
        state: "Beijing",
        social: "LinkedIn",
        visits: 1200,
        duration: "3m 20s",
      },
      {
        id: 2,
        country: "Russia",
        state: "Moscow",
        social: "Instagram",
        visits: 980,
        duration: "2m 45s",
      },
      {
        id: 3,
        country: "Mexico",
        state: "Mexico City",
        social: "Facebook",
        visits: 850,
        duration: "2m 10s",
      },
      {
        id: 4,
        country: "South Africa",
        state: "Cape Town",
        social: "Instagram",
        visits: 720,
        duration: "3m 55s",
      },
      {
        id: 5,
        country: "Italy",
        state: "Rome",
        social: "Twitter",
        visits: 650,
        duration: "2m 30s",
      },
      {
        id: 6,
        country: "Turkey",
        state: "Istanbul",
        social: "Facebook",
        visits: 580,
        duration: "2m 15s",
      },
    ],
  };

  // Handle delete functionality
  const handleDelete = (reportId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this report entry? This action cannot be undone."
      )
    ) {
      // Here you would make the actual API call to delete the report entry
      console.log("Deleting report entry:", reportId);
      alert("Report entry deleted successfully!");
    }
  };

  // Handle export CSV
  const handleExportCSV = () => {
    if (selectedCard && tableDataMap[selectedCard]) {
      const data = tableDataMap[selectedCard];
      const csvContent = [
        [
          "SL No.",
          "Country Name",
          "State",
          "Social Media",
          "Visits",
          "Duration",
        ],
        ...data.map((row, index) => [
          index + 1,
          row.country,
          row.state,
          row.social,
          row.visits,
          row.duration,
        ]),
      ]
        .map((row) => row.join(","))
        .join("\n");

      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedCard}_report.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <section>
      <Layout>
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <div className="bg-white p-6 rounded-2xl mb-6">
          <h4 className="text-[#181818] text-xl font-bold mb-6">
            Visit Report
          </h4>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`cursor-pointer shadow-md bg-[#FAF9FC] p-4 rounded-2xl border-l-4 flex flex-col items-start gap-6 transition-all duration-300
                  ${
                    selectedCard === card.id
                      ? "border-[#0E4F53] scale-105 shadow-lg"
                      : ""
                  }
                `}
                style={{
                  borderLeftColor:
                    selectedCard === card.id ? "#0E4F53" : card.border,
                }}
              >
                <h2
                  style={{ color: card.color }}
                  className="font-bold text-4xl"
                >
                  {card.value}
                </h2>
                <p className="text-[#3D3D3D] text-xl">{card.title}</p>
              </div>
            ))}
          </div>

          {/* Show table if a card is selected */}
          {selectedCard && (
            <div>
              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 mb-6">
                {/* Export CSV Button */}
                <button
                  onClick={handleExportCSV}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-3-3m3 3l3-3M8 8h8"
                    />
                  </svg>
                  Export CSV
                </button>

                {/* Conditional button */}
                {selectedCard === "today" ? (
                  // Date Range Button
                  <button className="flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Date Range
                  </button>
                ) : (
                  // Delete Button
                  <button className="flex items-center gap-2 border border-red-500 text-red-600 font-medium px-5 py-2 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M20.3 5.5L19.6803 15.5251C19.5219 18.0864 19.4428 19.3671 18.8008 20.2879C18.4833 20.7431 18.0747 21.1273 17.6007 21.416C16.6421 22 15.359 22 12.7927 22C10.2232 22 8.93835 22 7.9791 21.4149C7.50485 21.1257 7.09605 20.7408 6.77873 20.2848C6.13693 19.3626 6.0595 18.0801 5.90466 15.5152L5.30005 5.5"
                        stroke="#ED1400"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3.80005 5.5H21.8M16.8557 5.5L16.1731 4.09173C15.7196 3.15626 15.4928 2.68852 15.1017 2.39681C15.015 2.3321 14.9231 2.27454 14.827 2.2247C14.3939 2 13.8741 2 12.8345 2C11.7688 2 11.236 2 10.7957 2.23412C10.6981 2.28601 10.605 2.3459 10.5173 2.41317C10.1217 2.7167 9.90068 3.20155 9.45866 4.17126L8.85297 5.5"
                        stroke="#ED1400"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Delete
                  </button>
                )}
              </div>

              {/* DataTable */}
              <div className="bg-white rounded-2xl shadow">
                <DataTable
                  columns={[
                    { key: "id", header: "SL No." },
                    {
                      key: "country",
                      header: "Country Name",
                      render: (value) => (
                        <div className="font-medium text-gray-900">{value}</div>
                      ),
                    },
                    {
                      key: "state",
                      header: "State",
                      render: (value) => (
                        <div className="text-sm text-gray-700">{value}</div>
                      ),
                    },
                    {
                      key: "social",
                      header: "Social Media",
                      render: (value) => (
                        <div className="text-sm text-gray-700">{value}</div>
                      ),
                    },
                    {
                      key: "visits",
                      header: "Visits",
                      render: (value) => (
                        <div className="text-sm font-medium text-blue-600">
                          {value}
                        </div>
                      ),
                    },
                    {
                      key: "duration",
                      header: "Duration",
                      render: (value) => (
                        <div className="text-sm text-gray-600">{value}</div>
                      ),
                    },
                  ]}
                  data={tableDataMap[selectedCard]}
                />
              </div>
            </div>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default ReportPage;
