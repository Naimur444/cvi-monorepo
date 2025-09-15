import MenuItem from "@/app/components/re-usable/MenuItem";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="mb-6">
        <MenuItem
          parent={"Portfolio"}
          page={"Work"}
          addPage={"Add Work"}
          href={"/portfolio/work"}
        />
      </div>

        <div className="bg-white rounded-2xl p-4">
          <h3 className="text-[#181818] font-bold text-lg mb-6">Add Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col ">
                <label className="text-[#181818] mb-1"> Title</label>
                <input
                  type="text"
                  className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#181818] mb-1"> Link</label>
                <input
                  type="text"
                  className="py-2 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="category" className="text-[#181818] mb-1">
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  className="py-2 px-3 bg-[#FAF9FC] border border-[#DCDCDC] rounded-lg text-sm"
                >
                  <option value="">Select category</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="product">Product</option>
                  <option value="support">Support</option>
                </select>
              </div>
            </div>

            <div>
              <p className="text-[#181818] mb-2">Product Image</p>
              <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6 w-full bg-[#FAF9FC]">
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
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24 26.5V42.5M24 26.5C22.5996 26.5 19.9831 30.4886 19 31.5M24 26.5C25.4004 26.5 28.017 30.4886 29 31.5"
                      stroke="#0E4F53"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <p className="text-[#181818] text-center">
                  Choose or drag & drop an image or video
                </p>

                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*,video/*"
                  multiple
                />

                {/* Styled button triggers file input click */}
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-[#0E4F53] px-6 py-2 rounded-md hover:bg-[#0b3b41] hover:text-white transition border border-[#DCDCDC]"
                >
                  Upload Files
                </label>
              </div>
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
