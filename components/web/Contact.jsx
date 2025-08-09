import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="  py-10 md:py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          <div>
            <h2 className="text-2xl md:text-4xl  font-bold mb-6">
              Have a Project in your Mind? Let's Make Together
            </h2>
            <p className="  mb-10 md:mb-20">
              We'll schedule a call to discuss your idea. After discovery
              sessions, we'll send a proposal, and upon approval, we'll get
              started.
            </p>

            <p className=" ">
              Simply fill out the form or email us at
            </p>
            <p className="  font-semibold mb-6">
              cloudvortexinnovation@gmail.com
            </p>

            <div className="flex items-center gap-4">
              <div>
                <Image
                  src="/Ellipse 2.svg"
                  alt="Samuel"
                  width={80}
                  height={80}
                  className="object-contain max-w-full h-auto rounded-full"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#181818]">
                  Nobir Hossain Samuel
                </h3>
                <p className=" ">Project Manager</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl shadow border-l-4 border-[#0E4F53]">
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block  font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Johan"
                  className="w-full px-4 py-2 border border-[#DCDCDC] rounded-lg focus:outline-none focus:border-[#0E4F53] focus:ring-2 focus:ring-[#0E4F53]"
                />
              </div>

              {/* Company Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block  font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="ABC"
                    className="w-full px-4 py-2 border border-[#DCDCDC]  rounded-lg focus:outline-none focus:border-[#0E4F53] focus:ring-2 focus:ring-[#0E4F53]"
                  />
                </div>
                <div>
                  <label className="block  font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="info@gmail.com"
                    className="w-full px-4 py-2 border border-[#DCDCDC]  rounded-lg focus:outline-none focus:border-[#0E4F53] focus:ring-2 focus:ring-[#0E4F53]"
                  />
                </div>
              </div>

              {/* Services Required + Project Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block  font-medium mb-2">
                    Services Required <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-2 border border-[#DCDCDC]  rounded-lg focus:outline-none focus:border-[#0E4F53] focus:ring-2 focus:ring-[#0E4F53]">
                    <option value="">Select</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="seo">SEO Optimization</option>
                  </select>
                </div>
                <div>
                  <label className="block  font-medium mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="+880"
                    className="w-full px-4 py-2 border border-[#DCDCDC]  rounded-lg focus:outline-none focus:border-[#0E4F53] focus:ring-2 focus:ring-[#0E4F53]"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block  font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  placeholder="Describe your project..."
                  rows={5}
                  className="w-full px-4 py-2 border border-[#DCDCDC] rounded-lg focus:outline-none focus:border-[#0E4F53] focus:ring-2 focus:ring-[#0E4F53]"
                ></textarea>
              </div>

              {/* Send Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#0E4F53] text-white font-medium rounded-lg transition cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
