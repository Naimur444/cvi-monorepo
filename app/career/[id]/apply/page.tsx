import React from 'react';
import { UploadCloud } from 'lucide-react';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';


const Page = () => {
  return (
    <>
      <Header />
      <main>
        <div className="mt-10 mb-4 md:mt-18 lg:mt-22 flex flex-col items-center">
          {/* Job Title and Type outside the form */}
          <div className="mb-6 text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-1">Assistant Manager / Manager – Sales</h1>
            <div className="text-sm text-[#888] dark:text-[#444]">Onsite • Full-time</div>
          </div>
          <div
            className="w-full max-w-xl rounded-xl shadow p-6 md:p-8 bg-[#FAF9FC] dark:bg-[#191919]"
          >
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="e.g. Johan" className="w-full border   rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent placeholder:text-[#555]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" required placeholder="+880" className="w-full border   rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent placeholder:text-[#555]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input type="email" required placeholder="e.g. abc@gmail.com" className="w-full border   rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent placeholder:text-[#555]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location <span className="text-red-500">*</span></label>
                <select required className="w-full border   rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent placeholder:text-[#555]">
                  <option value="">Select Location</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="khulna">Khulna</option>
                  <option value="barisal">Barisal</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Portfolio</label>
                <input type="url" placeholder="link" className="w-full border   rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent placeholder:text-[#555]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn <span className="text-red-500">*</span></label>
                <input type="url" required placeholder="link" className="w-full border   rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent placeholder:text-[#555]" />
              </div>
              {/* Upload Image */}
              <div>
                <label className="block text-base font-normal mb-2">Upload Image <span className="text-red-500">*</span></label>
                <label className="w-full flex flex-row items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-6  text-[#222] cursor-pointer transition-all hover:border-theme-accent focus-within:border-theme-accent">
                  <UploadCloud className="w-8 h-8 text-gray-400" />
                  <span className="text-base font-normal text-[#888] text-center">Choose or drag & drop an Image</span>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
              {/* Upload CV */}
              <div>
                <label className="block text-base font-normal mb-2">Upload CV <span className="text-red-500">*</span></label>
                <label className="w-full flex flex-row items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-6  text-[#222] cursor-pointer transition-all hover:border-theme-accent focus-within:border-theme-accent">
                  <UploadCloud className="w-8 h-8 text-gray-400" />
                  <span className="text-base font-normal text-[#888] text-center">Choose or drag & drop an CV</span>
                  <input type="file" required accept=".pdf,.doc,.docx" className="hidden" />
                </label>
              </div>
              <button type="submit" className="mt-6 px-8 py-2 rounded-md text-white font-medium text-base bg-theme-accent hover:bg-theme-accent/90 transition-all mx-auto block w-auto">Submit</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;