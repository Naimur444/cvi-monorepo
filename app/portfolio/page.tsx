"use client"


import Header from "../../components/header"
import Footer from "../../components/footer"
import HeroSection from "../../components/software/hero-section"
import Portfolio from "../../components/portfolio/portfolio"

export default function PortfolioPage() {

  return (
    <>
      <Header />
      <main className="min-h-[60vh] px-4 flex flex-col items-center justify-center w-full">
        <div className="mt-8 w-full">
          <HeroSection title="Our Portfolio" image="/portfolio-banner.png" />
        </div>
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
