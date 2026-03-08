"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, X } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"
import TextReveal from "@/components/animations/text-reveal"

export default function Community() {
  return (
    <section id="community" className="py-20 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-gray-800 px-4 py-1 text-xs uppercase tracking-wider text-gray-400">
              JOIN US
            </span>
          </div>
        </FadeIn>

        <TextReveal text="Join the Blocks" as="h2" className="text-center text-4xl md:text-5xl font-bold mb-12" />

        <FadeIn direction="up" delay={0.3}>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Telegram, Discord, Twitter—we're everywhere. This isn't just a project; it's a movement. Walk in like a
            boss. Trade like a Boss king.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <StaggerItem>
            <CommunityCard
              icon={<MessageCircle className="h-8 w-8 text-blue-400" />}
              title="Telegram"
              description="Join our active community for real-time updates and discussions"
              stats="900+ members"
              buttonText="Join Now"
              buttonLink="https://t.me/BlockySolana"
            />
          </StaggerItem>

          <StaggerItem delay={0.1}>
            <CommunityCard
              icon={<Instagram className="h-8 w-8 text-indigo-400" />}
              title="Instagram"
              description="Follow us for the latest news, updates, and announcements"
              stats="Many Followers"
              buttonText="Follow Us"
              buttonLink="https://www.instagram.com/blockyaiagent7?igsh=MW5naTl0NHRucWgyeA=="
            />
          </StaggerItem>

          <StaggerItem delay={0.2}>
            <CommunityCard
              icon={<X className="h-8 w-8 text-blue-500" />}
              title="X"
              description="Follow us for the latest news, updates, and announcements"
              stats="700+ followers"
              buttonText="Follow Us"
              buttonLink="https://x.com/blockyaiagent?s=11"
            />
          </StaggerItem>
        </StaggerChildren>

        {/* Track Us On section */}
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">Track Us On</h3>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StaggerItem>
            <CommunityCard
              icon={
                <svg className="h-8 w-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path
                    d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="#8DC63F"
                  />
                </svg>
              }
              title="CoinGecko"
              description="Track BLOCKY's price, market cap, and trading volume on CoinGecko"
              stats="Live tracking"
              buttonText="View Listing"
              buttonLink="https://www.coingecko.com/en/coins/blocky-ai-agent"
            />
          </StaggerItem>

          <StaggerItem delay={0.1}>
            <CommunityCard
              icon={
                <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path
                    d="M7 12L10 15L17 8"
                    stroke="#16C784"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="CoinMarketCap"
              description="Check BLOCKY's market performance and statistics on CoinMarketCap"
              stats="Real-time data"
              buttonText="View Listing"
              buttonLink="https://coinmarketcap.com/"
            />
          </StaggerItem>

          <StaggerItem delay={0.2}>
            <CommunityCard
              icon={
                <svg className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 6h4v2H6zM6 10h6v2H6zM6 14h4v2H6z" fill="currentColor"/>
                  <circle cx="17" cy="17" r="5" fill="#FBBF24"/>
                  <path d="M15 17l1.5 1.5L19 15" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              }
              title="DexScreener"
              description="Track BLOCKY's real-time price, liquidity, and on-chain trading activity on DexScreener"
              stats="Live on-chain data"
              buttonText="View Chart"
              buttonLink="https://dexscreener.com/solana/6awvwe21stdebwgtmxytir6hnrtlj4hyfdanccdzko6r"
            />
          </StaggerItem>
        </StaggerChildren>
      </div>

      {/* Background elements */}
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

interface CommunityCardProps {
  icon: React.ReactNode
  title: string
  description: string
  stats: string
  buttonText: string
  buttonLink: string
}

function CommunityCard({ icon, title, description, stats, buttonText, buttonLink }: CommunityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg bg-gray-900 p-8 flex flex-col h-full border border-transparent hover:border-gray-800 transition-all duration-300"
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px rgba(245, 166, 35, 0.3)",
        }}
        transition={{ duration: 0.3 }}
        className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6"
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>

      <p className="text-gray-400 text-center mb-8 flex-grow">{description}</p>

      <p className="text-gray-500 text-center mb-4">{stats}</p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">{buttonText}</Button>
        </a>
      </motion.div>
    </motion.div>
  )
}