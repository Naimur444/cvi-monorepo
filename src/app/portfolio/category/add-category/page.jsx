import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import React from "react";

const page = () => {
  return (
    <section>
      <Layout>
        <div className="mb-6">
          <MenuItem
            parent={"Portfolio"}
            page={"Category"}
            addPage={"Add Category"}
            href={"/portfolio/category"}
          />
        </div>

        <div className="bg-white rounded-2xl p-4 md:w-1/2">
          <h3 className="text-[#181818] font-bold text-lg mb-6">
            Add Category
          </h3>
          <div className="flex flex-col">
            <label className="text-[#181818] mb-1"> Category Name</label>
            <input
              type="text"
              className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
            />
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
      </Layout>
    </section>
  );
};

export default page;
