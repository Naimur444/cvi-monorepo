import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Cloud Vortex Innovation Admin Dashboard",
  description:
    "Cloud Vortex Innovation is a cutting-edge software solution platform delivering scalable, secure, and innovative cloud-based services tailored to empower businesses and streamline operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-inter">
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            gutter={10}
            toastOptions={{
              duration: 3500,
              className:
                "rounded-xl bg-white/90 backdrop-blur border border-gray-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] text-[#0E4F53]",
              style: {
                padding: "12px 14px",
              },
              success: {
                iconTheme: {
                  primary: "#0E4F53",
                  secondary: "#ffffff",
                },
                className:
                  "rounded-xl bg-white/95 backdrop-blur border border-[#0E4F53]/20 shadow-[0_12px_35px_-12px_rgba(14,79,83,0.45)] text-[#0E4F53]",
              },
              error: {
                iconTheme: {
                  primary: "#ED1400",
                  secondary: "#ffffff",
                },
                className:
                  "rounded-xl bg-white/95 backdrop-blur border border-[#ED1400]/20 shadow-[0_12px_35px_-12px_rgba(237,20,0,0.45)] text-[#7A1B14]",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
