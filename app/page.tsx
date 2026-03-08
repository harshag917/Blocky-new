"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowToBuy from "@/components/how-to-buy"
import YouTubeSection from "@/components/youtube-section"
import Roadmap from "@/components/roadmap"
import NFTs from "@/components/nfts"
import Community from "@/components/community"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/animations/scroll-progress"

export default function Home() {
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")
        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <HowToBuy />
      <YouTubeSection />
      <Roadmap />
      <NFTs />
      <Community />
      <Footer />
    </main>
  )
}
