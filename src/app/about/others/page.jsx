import MenuItem from "@/app/components/re-usable/MenuItem";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="mb-6">
        <MenuItem page={"About"} addPage={"Others"} href={"/about"} />
      </div>

        <div className="bg-white p-4 rounded-2xl md:w-1/2">
          <h3 className="text-[#181818] font-bold text-xl mb-6">Add</h3>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label> Years Experience</label>
              <input
                type="text"
                className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label> Team</label>
              <input
                type="text"
                className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label> Projects Completed</label>
              <input
                type="text"
                className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label> Client Feedbacks</label>
              <input
                type="text"
                className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label> Happy Clients</label>
              <input
                type="text"
                className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer">
              Cancel
            </button>
            <button className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer">
              Save
            </button>
          </div>
        </div>
    </section>
  );
};

export default page;
