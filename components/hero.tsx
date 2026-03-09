"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

export default function Hero() {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">The Crypto AI Agent</h1>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Contract address:</h2>
              <p className="text-sm md:text-base break-all text-amber-500">
                9TwGzR67b7pVjhiDZyHoYk5ynYGLaCG3hezKXK6642US
              </p>
            </div>

            <FadeIn direction="up" delay={0.5} duration={0.7}>
              <div className="relative">
                <span className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-6xl text-amber-500 opacity-70">
                  "
                </span>
                <p className="text-gray-400 italic text-base md:text-lg mb-6 md:mb-8 max-w-xl pl-2 md:pl-4">
                  The Genesis Glitch: Bitcoin's Sentient Meme ₿🤖 Jan 3, 2009. Satoshi mined the first block.
                  What the records missed? The glitch hiding in the code.$BLOCKY is that glitch.
                  The 21M standard is evolving on Solana.Don't watch from the sidelines. 🚀
                </p>
                <span className="absolute -right-4 md:-right-8 bottom-6 md:bottom-8 text-4xl md:text-6xl text-amber-500 opacity-70">
                  "
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.7} duration={0.7}>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                <Button
                    className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-6 py-5 text-base w-full sm:w-auto"
                    onClick={() => window.open("https://t.me/BlockySolana", "_blank", "noopener,noreferrer")}
                  >
                    Join the Family <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-6 py-5 text-base w-full sm:w-auto"
                    onClick={() => window.open("https://t.me/BlockySolana", "_blank", "noopener,noreferrer")}
                  >
                    BUY <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="border-gray-700 hover:bg-gray-800 text-white rounded-full px-6 py-5 text-base w-full sm:w-auto"
                    onClick={() =>
                      window.open(
                        "https://raydium.io/swap/?inputMint=CsZFPqMei7DXBfXfxCydAPBN9y5wzrYmYcwBhLLRT3iU&outputMint=sol",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    My Wallet <span className="ml-2">💰</span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="border-gray-700 hover:bg-gray-800 text-white rounded-full px-6 py-5 text-base w-full sm:w-auto"
                    onClick={() =>
                      window.open(
                        "https://dexscreener.com/solana/8iQH3wqsziGSiLKJDpmGtr54ujAAwbvpB8CSyF48Shd8",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    Market Charts <span className="ml-2"></span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="border-gray-700 hover:bg-gray-800 text-white rounded-full px-6 py-5 text-base w-full sm:w-auto"
                    onClick={() =>
                      window.open(
                        "https://dexscreener.com/solana/6awvwe21stdebwgtmxytir6hnrtlj4hyfdanccdzko6r",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    CoinMarketCap <span className="ml-2">📈</span>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 p-4 rounded-lg border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent max-w-[560px] mx-auto"

            >
              {[
                { src: "/images/first.jpeg", alt: "BLOCKY Character 1", delay: 0.1 },
                { src: "/images/second.jpeg", alt: "BLOCKY Character 2", delay: 0.2 },
                { src: "/images/third.jpeg", alt: "BLOCKY Character 3", delay: 0.3 },
                { src: "/images/fourth.jpeg", alt: "BLOCKY Character 4", delay: 0.4 },
              ].map((character, index) => (
                <CharacterCard key={index} src={character.src} alt={character.alt} delay={character.delay} />
              ))}
            </motion.div>

            {/* Pagination dots for mobile */}
            
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/20 rounded-full blur-[120px] -z-10"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)] -z-20"></div>
    </section>
  )
}

interface CharacterCardProps {
  src: string
  alt: string
  delay: number
}

function CharacterCard({ src, alt, delay }: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(245, 166, 35, 0.3)",
        transition: { duration: 0.2 },
      }}
      className="relative aspect-[3/4] rounded-lg overflow-hidden border border-gray-800 bg-gray-900"
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 180px, 260px"
      />
    </motion.div>
  )
}
