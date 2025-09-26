"use client";

import MenuItem from "@/app/components/re-usable/MenuItem";
import React, { useState, useEffect } from "react";
import { settingsAPI } from "../../utils/settings";
import toast from "react-hot-toast";

const page = () => {
  const [settings, setSettings] = useState({
    logoUrl: '',
    faviconUrl: '',
    companyName: 'Cloud Vortex Innovation'
  });
  const [logoFile, setLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [faviconPreview, setFaviconPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Load current settings on component mount
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      setIsLoading(true);
      const currentSettings = await settingsAPI.getCurrentSettings();
      setSettings(currentSettings);
      setLogoPreview(currentSettings.logoUrl);
      setFaviconPreview(currentSettings.faviconUrl);
    } catch (error) {
      console.error('Error loading settings:', error);
      toast.error('Failed to load settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setLogoPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFaviconChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFaviconFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setFaviconPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      let logoUrl = settings.logoUrl;
      let faviconUrl = settings.faviconUrl;

      // Upload logo if changed
      if (logoFile) {
        const logoResponse = await settingsAPI.uploadLogo(logoFile);
        logoUrl = logoResponse.url;
      }

      // Upload favicon if changed
      if (faviconFile) {
        const faviconResponse = await settingsAPI.uploadFavicon(faviconFile);
        faviconUrl = faviconResponse.url;
      }

      // Update settings
      const updatedSettings = await settingsAPI.updateCurrentSettings({
        logoUrl,
        faviconUrl,
        companyName: settings.companyName
      });

      setSettings(updatedSettings);
      setLogoFile(null);
      setFaviconFile(null);
      toast.success('Settings saved successfully');

      // Clear previews and reload
      setLogoPreview(updatedSettings.logoUrl);
      setFaviconPreview(updatedSettings.faviconUrl);

    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    // Reset to current settings
    setLogoFile(null);
    setFaviconFile(null);
    setLogoPreview(settings.logoUrl);
    setFaviconPreview(settings.faviconUrl);
  };

  if (isLoading) {
    return (
      <section>
        <div className="mb-6">
          <MenuItem page={"Settings"} />
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0E4F53]"></div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <MenuItem page={"Settings"} />
      </div>

      <div className="bg-white p-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-[#181818] mb-2">Logo</p>
          <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6 w-full min-h-[200px]">
            {logoPreview ? (
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="max-w-full max-h-32 object-contain rounded"
                />
                <p className="text-[#181818] text-sm text-center">Current logo</p>
              </div>
            ) : (
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
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 26.5V42.5M24 26.5C22.5996 26.5 19.9831 30.4886 19 31.5M24 26.5C25.4004 26.5 28.017 30.4886 29 31.5"
                    stroke="#0E4F53"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            <p className="text-[#181818] text-center">
              Choose or drag & drop an image
            </p>

            <input
              type="file"
              id="logo-upload"
              className="hidden"
              accept="image/*"
              onChange={handleLogoChange}
            />

            <label
              htmlFor="logo-upload"
              className="cursor-pointer text-[#0E4F53] px-6 py-2 rounded-md hover:bg-[#0b3b41] hover:text-white transition border border-[#DCDCDC]"
            >
              {logoPreview && !logoFile ? 'Change Logo' : 'Upload Logo'}
            </label>
          </div>
        </div>

        <div>
          <p className="text-[#181818] mb-2">Favicon</p>
          <div className="border-2 border-dashed border-[#0E4F53] rounded-lg p-4 flex flex-col items-center justify-center space-y-6 w-full min-h-[200px]">
            {faviconPreview ? (
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={faviconPreview}
                  alt="Favicon preview"
                  className="w-16 h-16 object-contain rounded"
                />
                <p className="text-[#181818] text-sm text-center">Current favicon</p>
              </div>
            ) : (
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
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 26.5V42.5M24 26.5C22.5996 26.5 19.9831 30.4886 19 31.5M24 26.5C25.4004 26.5 28.017 30.4886 29 31.5"
                    stroke="#0E4F53"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            <p className="text-[#181818] text-center">
              Choose or drag & drop an image
            </p>

            <input
              type="file"
              id="favicon-upload"
              className="hidden"
              accept="image/*"
              onChange={handleFaviconChange}
            />

            <label
              htmlFor="favicon-upload"
              className="cursor-pointer text-[#0E4F53] px-6 py-2 rounded-md hover:bg-[#0b3b41] hover:text-white transition border border-[#DCDCDC]"
            >
              {faviconPreview && !faviconFile ? 'Change Favicon' : 'Upload Favicon'}
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer hover:bg-[#ED1400] hover:text-white transition"
          onClick={handleCancel}
          disabled={isSaving}
        >
          Cancel
        </button>
        <button
          className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#0b3b41] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>}
          {isSaving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </section>
  );
};

export default page;
