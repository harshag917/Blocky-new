"use client"

import Image from "next/image"
import type React from "react"
import { Rocket, Flame, Briefcase, TrendingUp, Users, Target } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"

export default function Features() {
  return (
    <section id="feature" className="py-16 md:py-20 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-gray-800 px-4 py-1 text-xs uppercase tracking-wider text-gray-400">
              KEY FEATURES
            </span>
          </div>
        </FadeIn>

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-3 md:mb-8">
          What Makes Us <span className="text-amber-500">Different</span>
        </h2>
        <h3 className="text-center text-1xl md:text-4xl font-bold mb-12 md:mb-16 text-amber-500">We are the evolution of memes</h3>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          <StaggerItem>
            <FeatureCard
              icon={<Rocket className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />}
              title="100x Vibes Only"
              description="Backed by degens who know the game. We're not here for small gains—we're aiming for the moon and beyond."
              highlight="Explosive Growth Potential"
              highlightIcon={<TrendingUp className="h-4 w-4 text-amber-500 mr-2" />}
            />
          </StaggerItem>

          <StaggerItem delay={0.1}>
            <FeatureCard
              icon={<Flame className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />}
              title="Community-Driven"
              description="Powered by memes, madness, and momentum. Our community is what makes BLOCKY unstoppable."
              highlight="Strong Community Focus"
              highlightIcon={<Users className="h-4 w-4 text-amber-500 mr-2" />}
            />
          </StaggerItem>

          <StaggerItem delay={0.2}>
            <FeatureCard
              icon={<Briefcase className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />}
              title="Built for Gains"
              description="Tokenomics tailored for real boss moves. Every aspect of our token is designed to reward holders."
              highlight="Holder-Focused Rewards"
              highlightIcon={<Target className="h-4 w-4 text-amber-500 mr-2" />}
            />
          </StaggerItem>
        </StaggerChildren>

        {/* Content Image */}
        <FadeIn direction="up" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full rounded-lg overflow-hidden shadow-2xl mb-16 md:mb-20"
          >
            <Image
              src="/images/content.jpeg"
              alt="BLOCKY Lifestyle"
              width={1200}
              height={400}
              className="w-full object-cover"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  highlight: string
  highlightIcon: React.ReactNode
}

function FeatureCard({ icon, title, description, highlight, highlightIcon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="rounded-lg bg-gray-900 p-6 md:p-8 flex flex-col h-full border border-transparent hover:border-gray-800 transition-all duration-300"
    >
      <motion.div
        className="flex justify-center mb-4 md:mb-6"
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      >
        {icon}
      </motion.div>

      <h3 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4">{title}</h3>

      <p className="text-sm md:text-base text-gray-400 text-center mb-6 md:mb-8 flex-grow">{description}</p>

      <div className="border-t border-gray-800 pt-3 md:pt-4 mt-auto">
        <motion.div
          className="flex items-center justify-center text-amber-500 text-xs md:text-sm"
          whileHover={{ scale: 1.05 }}
        >
          {highlightIcon}
          {highlight}
        </motion.div>
      </div>
    </motion.div>
  )
}
