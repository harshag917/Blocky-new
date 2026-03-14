"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"
import TextReveal from "@/components/animations/text-reveal"

interface NFT {
  name: string
  image: string
  price: string
  link: string
}

export default function NFTs() {
  const [nfts, setNfts] = useState<NFT[]>([
    {
      name: "BLOCKY #765",
      image: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/63a688f1ffcdd2a903f9681e125426/e463a688f1ffcdd2a903f9681e125426.png?w=350",
      price: "5.00 ETH",
      link: "https://opensea.io/item/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/740"
    },
    {
      name: "BLOCKY #8700",
      image: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/1a74644378d9dfcf913866d1924be4/4e1a74644378d9dfcf913866d1924be4.png?w=350",
      price: "3.00 ETH",
      link: "https://opensea.io/item/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/8618"
    },
    {
      name: "BLOCKY #461",
      image: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/d739b720c67c017f3eaccd6c6b3506/b7d739b720c67c017f3eaccd6c6b3506.png?w=350",
      price: "1.00 ETH",
      link: "https://opensea.io/item/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/483"
    }
  ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const res = await fetch(
          "https://api.opensea.io/api/v2/collection/blocky-ai-agents/nfts?limit=3&order_by=sale_count",
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_OPENSEA_API_KEY || "",
            },
          }
        )
        if (!res.ok) throw new Error("Failed")
        const data = await res.json()
        if (data.nfts && data.nfts.length > 0) {
          const mapped = data.nfts.map((nft: any) => ({
            name: nft.name || "BLOCKY NFT",
            image: nft.image_url || "",
            price: "View on OpenSea",
            link: `https://opensea.io/item/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/${nft.identifier}`
          }))
          setNfts(mapped)
        }
      } catch (e) {
        // Keep default fallback NFTs if API fails
      } finally {
        setLoading(false)
      }
    }
    fetchNFTs()
  }, [])

  return (
    <section id="nfts" className="py-20 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-amber-900/30 px-4 py-1 text-xs uppercase tracking-wider text-amber-400">
              COLLECTION
            </span>
          </div>
        </FadeIn>

        <TextReveal text="Exclusive NFT Collection" as="h2" className="text-center text-4xl md:text-5xl font-bold mb-6" />

        <FadeIn direction="up" delay={0.3}>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            A collector's piece, not just an asset. Our NFTs give you early access, community perks, and a badge of honor.
          </p>
        </FadeIn>

        {/* NFT Perks */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Exclusive Access", desc: "Priority entry to all BLOCKY events, both virtual and physical" },
            { title: "Token Airdrops", desc: "Regular token airdrops exclusive to NFT holders" },
            { title: "Governance Rights", desc: "Voting power on project decisions and future developments" },
            { title: "Angel Investor Opportunity", desc: "Early access to information on meme calls" },
          ].map((perk, i) => (
            <StaggerItem key={i} delay={i * 0.1}>
              <div className="bg-gray-900/50 border border-amber-500/10 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                <h3 className="text-lg font-bold mb-2 text-amber-400">{perk.title}</h3>
                <p className="text-gray-400 text-sm">{perk.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Live NFT Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {nfts.map((nft, i) => (
            <motion.a
              key={i}
              href={nft.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 166, 35, 0.3)" }}
              transition={{ duration: 0.2 }}
              className="block rounded-xl overflow-hidden border border-amber-500/20 bg-gray-900 cursor-pointer"
            >
              {nft.image && (
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full aspect-square object-cover"
                />
              )}
              <div className="p-4">
                <p className="font-bold text-white">{nft.name}</p>
                <p className="text-amber-500 text-sm">{nft.price}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-8 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg"
                onClick={() => window.open("https://opensea.io/collection/blocky-ai-agents", "_blank", "noopener,noreferrer")}
              >
                Buy Now
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] -z-10"
      />
    </section>
  )
}
