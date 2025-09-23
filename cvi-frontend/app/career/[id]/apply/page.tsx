"use client";
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Removed Select imports for custom dropdown
import { UploadCloud } from 'lucide-react';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';


const Page = () => {
  // Custom dropdown state and options for Location
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const locationOptions = [
    { value: "dhaka", label: "Dhaka" },
    { value: "chittagong", label: "Chittagong" },
    { value: "rajshahi", label: "Rajshahi" },
    { value: "khulna", label: "Khulna" },
    { value: "barisal", label: "Barisal" },
    { value: "sylhet", label: "Sylhet" },
    { value: "rangpur", label: "Rangpur" },
    { value: "mymensingh", label: "Mymensingh" },
  ];
  // Close dropdown on outside click
  React.useEffect(() => {
    if (!dropdownOpen) return;
    const handle = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement && e.target.closest('.relative'))) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [dropdownOpen]);
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
                <Input type="text" required placeholder="e.g. Johan" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
                <Input type="tel" required placeholder="+880" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <Input type="email" required placeholder="e.g. abc@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location <span className="text-red-500">*</span></label>
                {/* Custom dropdown select for Location */}
                <div className="relative">
                  <button
                    type="button"
                    className="w-full h-12 px-3 py-2 text-sm rounded-md border border-input focus-visible:border-ring focus-visible:ring-ring/50 transition-colors duration-200 flex items-center justify-between bg-[#FAF9FC] dark:bg-[#191919] text-[#222] dark:text-[#eee]"
                    onClick={() => setDropdownOpen((open) => !open)}
                  >
                    <span>{
                      location ? locationOptions.find(opt => opt.value === location)?.label : 'Select Location'
                    }</span>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6"/></svg>
                  </button>
                  {dropdownOpen && (
                    <ul
                      className="absolute left-0 right-0 mt-2 z-50 rounded-md shadow-lg bg-white dark:bg-[#191919]"
                    >
                      {locationOptions.map(option => (
                        <li
                          key={option.value}
                          className="px-4 py-2 cursor-pointer hover:bg-accent transition-colors"
                          style={{
                            backgroundColor: location === option.value ? 'rgba(0,0,0,0.04)' : 'transparent',
                            color: 'inherit'
                          }}
                          onClick={() => {
                            setLocation(option.value);
                            setDropdownOpen(false);
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = location === option.value ? 'rgba(0,0,0,0.04)' : 'transparent';
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Portfolio</label>
                <Input type="url" placeholder="link" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn <span className="text-red-500">*</span></label>
                <Input type="url" required placeholder="link" />
              </div>
              {/* Upload Image */}
              <div>
                <label className="block text-base font-normal mb-2">Upload Image <span className="text-red-500">*</span></label>
                <label className="w-full flex flex-row items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-6  text-[#222] cursor-pointer transition-all hover:border-theme-accent focus-within:border-theme-accent">
                  <UploadCloud className="w-8 h-8 text-gray-400" />
                  <span className="text-base font-normal text-[#888] text-center">Choose or drag & drop an Image</span>
                  <Input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
              {/* Upload CV */}
              <div>
                <label className="block text-base font-normal mb-2">Upload CV <span className="text-red-500">*</span></label>
                <label className="w-full flex flex-row items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-6  text-[#222] cursor-pointer transition-all hover:border-theme-accent focus-within:border-theme-accent">
                  <UploadCloud className="w-8 h-8 text-gray-400" />
                  <span className="text-base font-normal text-[#888] text-center">Choose or drag & drop an CV</span>
                  <Input type="file" required accept=".pdf,.doc,.docx" className="hidden" />
                </label>
              </div>
              <Button type="submit" className="mt-6 px-8 py-2 rounded-md text-white font-medium text-base bg-theme-accent hover:bg-theme-accent/90 transition-all mx-auto block w-auto">Submit</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;