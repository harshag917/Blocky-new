"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Wallet, DollarSign, ArrowRightLeft } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-16 md:py-20 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-gray-800 px-4 py-1 text-xs uppercase tracking-wider text-gray-400">
              GET STARTED
            </span>
          </div>
        </FadeIn>

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 md:mb-16">How to Buy</h2>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StaggerItem>
            <StepCard
              number={1}
              icon={<Wallet className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />}
              title="Create a Wallet"
              description="The name of the wallet is PHANTOM. Click here to download."
              link="https://phantom.app/download"
            />
          </StaggerItem>

          <StaggerItem delay={0.1}>
            <StepCard
              number={2}
              icon={<DollarSign className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />}
              title="Get Some Solana"
              description="Have solana in your wallet to swap for $Blocky."
              link="#"
            />
          </StaggerItem>

          <StaggerItem delay={0.2}>
            <StepCard
              number={3}
              icon={<ArrowRightLeft className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />}
              title="Swap Solana for $Blocky"
              description="Go to wallet, connect your wallet, and swap Solana for $Blocky. Congratulations, you now own $BLOCKY!"
              link="https://raydium.io/swap/?inputMint=9TwGzR67b7pVjhiDZyHoYk5ynYGLaCG3hezKXK6642US&outputMint=sol"
            />
          </StaggerItem>
        </StaggerChildren>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

interface StepCardProps {
  number: number
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

function StepCard({ number, icon, title, description, link }: StepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="rounded-lg bg-gray-900 p-6 md:p-8 flex flex-col h-full border border-transparent hover:border-gray-800 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
          className="flex justify-center"
        >
          {icon}
        </motion.div>
        <span className="text-3xl md:text-4xl font-bold text-amber-500/20">#{number}</span>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{title}</h3>

      <p className="text-sm md:text-base text-gray-400 mb-5 md:mb-6 flex-grow">
        {description.split("Click here").map((part, i, arr) =>
          i === 0 && arr.length > 1 ? (
            <span key={i}>
              {part}
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">
                Click here
              </a>
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </p>

      {link !== "#" && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-amber-500 text-sm md:text-base font-medium flex items-center justify-center py-2 px-4 rounded-md border border-amber-500/20 hover:bg-amber-500/10 transition-all"
        >
          Learn More
          <ArrowRightLeft className="ml-2 h-4 w-4" />
        </motion.a>
      )}
    </motion.div>
  )
}
