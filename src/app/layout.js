import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className="font-inter">{children}</body>
    </html>
  );
}
