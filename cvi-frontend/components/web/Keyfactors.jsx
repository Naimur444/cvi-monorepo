import React from "react";
import CollabItem from "./CollabItem";

const Keyfactors = () => {
  const collabitems = [
    "Regular check-ins",
    "Open Communication",
    "Collaborative problem-solving",
    "Transparent Progress Tracking",
  ];

  const deliveryItems = [
    "Project Management",
    "Clear Milestones",
    "Regular Updates",
    "Flexibility",
  ];

  const qualityItems = [
    "Thorough Testing",
    "Code Review",
    "Automated Testing",
    "User Testing",
  ];

  const futureItems = [
    "Flexible Architecture",
    "Modularity",
    "Code Maintainability",
    "Future Proofing",
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-2xl md:text-4xl  text-center font-semibold mb-4">
          Key Factors in CVI Process
        </h2>

        <p className="  text-center mb-10">
          Ensuring Success through Quality Assurance, Timely Delivery,
          Scalability, and Collaboration.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Collaboration */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Collaboration</h3>
            {collabitems.map((item, idx) => (
              <CollabItem key={idx} text={item} />
            ))}
          </div>

          {/* Time Delivery */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Timely Delivery</h3>
            {deliveryItems.map((item, idx) => (
              <CollabItem key={idx} text={item} />
            ))}
          </div>

          {/* Quality Assurance */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quality Assurance</h3>
            {qualityItems.map((item, idx) => (
              <CollabItem key={idx} text={item} />
            ))}
          </div>

          {/* Future Development */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Future Development</h3>
            {futureItems.map((item, idx) => (
              <CollabItem key={idx} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keyfactors;
