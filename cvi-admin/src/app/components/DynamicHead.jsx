"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import { useSettings } from '../../contexts/SettingsContext';

const DynamicHead = () => {
  const { settings } = useSettings();

  useEffect(() => {
    // Update favicon dynamically
    if (settings.faviconUrl) {
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = settings.faviconUrl;
      } else {
        // Create favicon link if it doesn't exist
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = settings.faviconUrl;
        document.head.appendChild(link);
      }
    }

    // Update title with company name
    if (settings.companyName) {
      document.title = `${settings.companyName} Admin Dashboard`;
    }
  }, [settings]);

  return (
    <Head>
      <title>{settings.companyName ? `${settings.companyName} Admin Dashboard` : 'Cloud Vortex Innovation Admin Dashboard'}</title>
      {settings.faviconUrl && (
        <link rel="icon" href={settings.faviconUrl} />
      )}
      {settings.logoUrl && (
        <link rel="apple-touch-icon" href={settings.logoUrl} />
      )}
    </Head>
  );
};

export default DynamicHead;
