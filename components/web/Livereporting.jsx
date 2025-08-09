import Image from "next/image";
import React from "react";

const Livereporting = () => {
  return (
    <section className="  py-10 md:py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-2xl md:text-4xl  font-semibold text-center mb-4">
          Live Reporting
        </h2>
        <p className="  text-center mb-10">
          A Visual Representation of Progress and Remaining Work in Relation to
          Time.
        </p>

        <div className="flex justify-center">
          <Image
            src="/live.png"
            alt="Live Report"
            width={1000}
            height={1000}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Livereporting;
