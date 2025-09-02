"use client";
import Layout from "@/app/components/Layout";
import MenuItem from "@/app/components/re-usable/MenuItem";
import React from "react";

const page = () => {
  return (
    <div>
      <Layout>
        <div>
          {" "}
          <MenuItem
            parent={"Content"}
            page={"Terms"}
            addPage={"Add Terms"}
            href={"/content/terms"}
          />
          <div className="bg-white rounded-2xl p-4 mt-6">
            <h3 className="text-[#181818] font-semibold text-xl mb-4">
              Add terms & condition
            </h3>

            <textarea
              name=""
              id=""
              className="w-full h-64 border border-[#DCDCDC] rounded-lg p-2 font-bold bg-[#FAF9FC]"
              placeholder="Write text....."
            ></textarea>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer">
                Save
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default page;
