"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { settingsAPI } from '../utils/settings';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    logoUrl: '',
    faviconUrl: '',
    companyName: 'Cloud Vortex Innovation'
  });
  const [isLoading, setIsLoading] = useState(true);

  const loadSettings = async () => {
    try {
      const currentSettings = await settingsAPI.getCurrentSettings();
      setSettings(currentSettings);
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const value = {
    settings,
    isLoading,
    loadSettings,
    updateSettings
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
