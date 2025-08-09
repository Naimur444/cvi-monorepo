import React from "react";

const Agile = () => {
  const designPhaseItems = [
    "Design Strategy",
    "Business Understanding",
    "Low Fidelity Wireframe",
    "Prototype",
    "Test",
    "Virtual Screens",
  ];

  const developmentPhaseItems = [
    "Sprint Planning",
    "Product Backlog",
    "Database Architecture",
    "UI Implementation",
    "API Implementation",
    "Product Release",
  ];

  const deployPhaseItems = [
    "Version Controlling",
    "Deployment Monitoring",
    "Test Case",
    "Functional & Non Functional",
    "API & Unit Testing",
    "Automation",
  ];

  return (
    <section className="  py-10 md:py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-2xl md:text-4xl  text-center font-semibold mb-4">
          Speeding Up Success: Agile
        </h2>
        <p className="  text-center mb-10">
          Flexible, fast and goal-oriented. CVI Agile software development
          approach delivers results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Design Phase */}
          <div>
            <div className="w-full py-2 font-semibold text-white bg-[#003C42] text-center rounded-lg mb-6">
              Design Phase
            </div>
            {designPhaseItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2 px-4 bg-white rounded-lg mb-4"
              >
                <div className="flex items-center justify-center p-2 rounded-md border border-[#DCDCDC]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.3332 7.99988H2.6665"
                      stroke="#181818"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0001 11.3333C10.0001 11.3333 13.3333 8.87836 13.3333 7.99996C13.3333 7.12156 10 4.66663 10 4.66663"
                      stroke="#181818"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className=" font-semibold">{item}</p>
              </div>
            ))}
          </div>

          {/* Development Phase */}
          <div>
            <div className="w-full py-2 font-semibold text-white bg-[#003C42] text-center rounded-lg mb-6">
              Development Phase
            </div>
            {developmentPhaseItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2 px-4 bg-white rounded-lg mb-4"
              >
                <div className="flex items-center justify-center p-2 rounded-md border border-[#DCDCDC]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.3332 7.99988H2.6665"
                      stroke="#181818"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0001 11.3333C10.0001 11.3333 13.3333 8.87836 13.3333 7.99996C13.3333 7.12156 10 4.66663 10 4.66663"
                      stroke="#181818"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className=" font-semibold">{item}</p>
              </div>
            ))}
          </div>

          {/* Deploy and Testing Phase */}
          <div>
            <div className="w-full py-2 font-semibold text-white bg-[#003C42] text-center rounded-lg mb-6">
              Deploy & Testing Phase
            </div>
            {deployPhaseItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2 px-4 bg-white rounded-lg mb-4"
              >
                <div className="flex items-center justify-center p-2 rounded-md border border-[#DCDCDC]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.3332 7.99988H2.6665"
                      stroke="#181818"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0001 11.3333C10.0001 11.3333 13.3333 8.87836 13.3333 7.99996C13.3333 7.12156 10 4.66663 10 4.66663"
                      stroke="#181818"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className=" font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agile;
