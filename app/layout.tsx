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
  title: "Cloud Vertex Innovation - Our Products",
  description: "Dedicated UI/UX talent providing partners with economical solutions for company expansion.",
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
    <html lang="en">
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
