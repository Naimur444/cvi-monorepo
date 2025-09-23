"use client";
import React from "react";
import Lifecycle from "@/components/web/Lifecycle";
import Wireframe from "@/components/web/Wireframe";
import UiDesign from "@/components/web/UiDesign";
import Srs from "@/components/web/Srs";
import { ReactLenis } from 'lenis/react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ScrollTriggerweb() {
  const { isDarkMode } = useTheme();
  const bgColor = isDarkMode ? '#131313' : '#F4F3F7';
  const textColor = isDarkMode ? 'text-[#BDBDBD]' : 'text-[#181818]';
  
  return (
    <ReactLenis root>
      <main className="">
        <section className="w-full py-6 md:py-12 lg:py-24">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <section 
              className={`${textColor} min-h-screen w-full flex items-center justify-center sticky top-0 py-8 md:py-12`}
              style={{ backgroundColor: bgColor }}
            >
              <div className="relative z-10 w-full">
                <Lifecycle />
              </div>
            </section>
            <section 
              className={`${textColor} min-h-screen w-full flex items-center justify-center sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden py-8 md:py-12`}
              style={{ backgroundColor: bgColor }}
            >
              <div className="relative z-10 w-full">
                <Wireframe />
              </div>
            </section>
            <section 
              className={`${textColor} min-h-screen w-full flex items-center justify-center sticky top-0 py-8 md:py-12`}
              style={{ backgroundColor: bgColor }}
            >
              <div className="relative z-10 w-full">
                <UiDesign />
              </div>
            </section>
            <section 
              className={`${textColor} min-h-screen w-full flex items-center justify-center sticky top-0 py-8 md:py-12`}
              style={{ backgroundColor: bgColor }}
            >
              <div className="relative z-10 w-full">
                <Srs />
              </div>
            </section>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}