"use client"

import { CheckCircle, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"
import TextReveal from "@/components/animations/text-reveal"
import ParallaxScroll from "@/components/animations/parallax-scroll"

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-gray-800 px-4 py-1 text-xs uppercase tracking-wider text-gray-400">
              Our Journey
            </span>
          </div>
        </FadeIn>

        <TextReveal text="Roadmap" as="h2" className="text-center text-4xl md:text-5xl font-bold mb-12" />

        <FadeIn direction="up" delay={0.3}>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Our strategic vision for BLOCKY's growth and development. Each phase brings us closer to establishing a
            dominant presence in the crypto space.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <StaggerItem>
            <ParallaxScroll speed={0.2}>
              <RoadmapPhase
                number={1}
                title="Foundation"
                date="Q2 2025"
                status="completed"
                items={[
                  "Token development and Smart Contract Audit",
                  "CoinGecko,Dex Screener and CoinMarketCap listings",
                  "Brand Launch and Identity Creation",
                  "Community building on Telegram and Discord",
                  "Initial marketing campaign",
                ]}
              />
            </ParallaxScroll>
          </StaggerItem>

          <StaggerItem delay={0.1}>
            <ParallaxScroll speed={0.3} direction="down">
              <RoadmapPhase
                number={2}
                title="Expansion"
                date="Q3 2025"
                status="in-progress"
                items={["NFT Collection Development and Launch", "Strategic Partnerships"]}
              />
            </ParallaxScroll>
          </StaggerItem>

          <StaggerItem delay={0.2}>
            <ParallaxScroll speed={0.2}>
              <RoadmapPhase
                number={3}
                title="Acceleration"
                date="Q4 2025"
                status="upcoming"
                items={["Tier 2 exchange listings", "Enhanced marketing campaigns"]}
              />
            </ParallaxScroll>
          </StaggerItem>

          <StaggerItem delay={0.3}>
            <ParallaxScroll speed={0.3} direction="down">
              <RoadmapPhase
                number={4}
                title="Domination"
                date="Q4 2025 - Q1 2026"
                status="upcoming"
                items={["Tier 1 exchange listings", "Global brand recognition campaign"]}
              />
            </ParallaxScroll>
          </StaggerItem>
        </StaggerChildren>

        {/* CoinGecko and CoinMarketCap buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg w-full"
              onClick={() =>
                window.open("https://www.coingecko.com/en/coins/blocky", "_blank", "noopener,noreferrer")
              }
            >
              CoinGecko
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#8DC63F"
                  stroke="#8DC63F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  fill="#8DC63F"
                />
              </svg>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg w-full"
              onClick={() => window.open("https://dex.coinmarketcap.com/token/solana/9TwGzR67b7pVjhiDZyHoYk5ynYGLaCG3hezKXK6642US/", "_blank", "noopener,noreferrer")}
            >
              CoinMarketCap
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#17181B"
                  stroke="#17181B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12L10 15L17 8"
                  stroke="#16C784"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg w-full"
              onClick={() => window.open("https://dexscreener.com/solana/6awvwe21stdebwgtmxytir6hnrtlj4hyfdanccdzko6r", "_blank", "noopener,noreferrer")}
            >
              DexScreener
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#17181B"
                  stroke="#17181B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12L10 15L17 8"
                  stroke="#16C784"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Vertical line connecting roadmap phases */}
      <div className="absolute left-1/2 top-[300px] bottom-20 w-px bg-gradient-to-b from-amber-500/0 via-amber-500/30 to-amber-500/0 hidden md:block"></div>
    </section>
  )
}

interface RoadmapPhaseProps {
  number: number
  title: string
  date: string
  status: "completed" | "in-progress" | "upcoming"
  items: string[]
}

function RoadmapPhase({ number, title, date, status, items }: RoadmapPhaseProps) {
  return (
    <div className="flex group">
      <div className="mr-4 mt-1">
        <div
          className={`h-6 w-6 rounded-full ${
            status === "completed" ? "bg-amber-500" : status === "in-progress" ? "bg-amber-500/20" : "bg-gray-800"
          } flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
        >
          {status === "completed" ? (
            <CheckCircle className="h-6 w-6 text-amber-500" />
          ) : (
            <Circle className="h-6 w-6 text-amber-500" />
          )}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold">
            Phase {number}: {title}
          </h3>
          <span
            className={`text-xs px-2 py-0.5 rounded ${
              status === "completed"
                ? "bg-green-900/30 text-green-500"
                : status === "in-progress"
                  ? "bg-amber-900/30 text-amber-500"
                  : "bg-gray-800 text-gray-400"
            }`}
          >
            {status === "completed" ? "COMPLETED" : status === "in-progress" ? "IN PROGRESS" : "UPCOMING"}
          </span>
        </div>
        <p className="text-gray-500 mb-4">{date}</p>

        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 group/item">
              {status === "completed" ? (
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
              ) : status === "in-progress" && index < 2 ? (
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
              ) : (
                <Circle
                  className={`h-5 w-5 ${
                    status === "in-progress" ? "text-amber-500" : "text-gray-700"
                  } mt-0.5 shrink-0 transition-transform duration-300 group-hover/item:scale-110`}
                />
              )}
              <span
                className={`${
                  status === "upcoming" ? "text-gray-500" : "text-gray-300"
                } transition-colors duration-300 group-hover/item:text-white`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
