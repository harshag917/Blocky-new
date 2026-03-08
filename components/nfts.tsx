"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Diamond, Coins, CheckSquare, Percent } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"

export default function NFTs() {
  return (
    <section id="nfts" className="py-20 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-gray-800 px-4 py-1 text-xs uppercase tracking-wider text-gray-400">
              COLLECTION
            </span>
          </div>
        </FadeIn>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
          Exclusive{" "}
          <span className="text-amber-500">
           <span className="text-amber-500">NFT </span>
          </span>
          Collection
        </h2>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            A collector's piece, not just an asset. Our NFTs give you early access, community perks, and a badge of
            honor. But let's be clear—this is the side hustle. The real action is in the meme coin.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <StaggerItem>
                <NFTBenefitCard
                  icon={<Diamond className="h-6 w-6 text-amber-500" />}
                  title="Exclusive Access"
                  description="Priority entry to all BLOCKY events, both virtual and physical"
                />
              </StaggerItem>

              <StaggerItem delay={0.1}>
                <NFTBenefitCard
                  icon={<Coins className="h-6 w-6 text-amber-500" />}
                  title="Token Airdrops"
                  description="Regular token airdrops exclusive to NFT holders"
                />
              </StaggerItem>

              <StaggerItem delay={0.2}>
                <NFTBenefitCard
                  icon={<CheckSquare className="h-6 w-6 text-amber-500" />}
                  title="Governance Rights"
                  description="Voting power on project decisions and future developments"
                />
              </StaggerItem>

              <StaggerItem delay={0.3}>
                <NFTBenefitCard
                  icon={<Percent className="h-6 w-6 text-amber-500" />}
                  title="Angel Investor Opportunity"
                  description="Early access to information on meme calls"
                />
              </StaggerItem>
            </StaggerChildren>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FadeIn direction="up" delay={0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[5/8] rounded-xl overflow-hidden border border-gray-800"
                >
                  <Image src="/images/diamond.jpeg" alt="BLOCKY Diamond NFT" fill className="object-cover" />
                </motion.div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[5/8] rounded-xl overflow-hidden border border-gray-800"
                >
                  <Image src="/images/gold.jpeg" alt="BLOCKY Gold NFT" fill className="object-cover" />
                </motion.div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[5/8] rounded-xl overflow-hidden border border-gray-800"
                >
                  <Image src="/images/silver.jpeg" alt="BLOCKY Silver NFT" fill className="object-cover" />
                </motion.div>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.4}>
              <div className="mt-8 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg">
                    Coming Soon...
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] -z-10"
      />
    </section>
  )
}

interface NFTBenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function NFTBenefitCard({ icon, title, description }: NFTBenefitCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg bg-gray-900 p-6 border border-transparent hover:border-gray-800 transition-all duration-300"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.7 }}
        className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
