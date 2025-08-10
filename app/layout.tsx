import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../contexts/ThemeContext"
import AppWrapper from "../components/app-wrapper"

// Configure Inter font with Latin character subset for optimal loading
const inter = Inter({ subsets: ["latin"] })

// SEO metadata configuration for the products showcase website
export const metadata: Metadata = {
  title: "Cloud Vortex Innovation",
  description: "Dedicated UI/UX talent providing partners with economical solutions for company expansion.",
  icons: {
    icon: "/nav.svg",
    shortcut: "/nav.svg",
    apple: "/nav.svg",
  },
}

/**
 * Root layout component that wraps all pages
 * Provides consistent font loading, theme management, and styling across the application
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var shouldBeDark = savedTheme === 'dark' || (!savedTheme && true);
                  document.documentElement.classList.toggle('dark', shouldBeDark);
                  document.body.style.backgroundColor = shouldBeDark ? '#131313' : '#F4F3F7';
                } catch (e) {
                  // Fallback to dark mode if localStorage is not available
                  document.documentElement.classList.add('dark');
                  document.body.style.backgroundColor = '#131313';
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AppWrapper>
            {children}
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
