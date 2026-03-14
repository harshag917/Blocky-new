"use client"

import Link from "next/link"
import { MessageCircle, Twitter, Users, Instagram, X, Music2 } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FadeIn direction="up">
            <div className="col-span-1">
              <Link href="/" className="text-xl font-bold text-amber-500 mb-4 block">
                BLOCKY
              </Link>
              <p className="text-gray-400 mb-6">
                The meme coin with swagger. Built for those who don't follow trends—they start them.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <MessageCircle className="h-5 w-5 text-blue-400" />, href: "https://t.me/BlockySolana" },
                  { icon: <X className="h-5 w-5 text-blue-500" />, href: "https://x.com/blockyaiagent?s=11" },
                  { icon: <Instagram className="h-5 w-5 text-indigo-400" />, href: "https://www.instagram.com/blockyaiagent7?igsh=MW5naTl0NHRucWgyeA==" },
                  { icon: <Music2 className="h-5 w-5 text-indigo-400" />, href: "https://www.tiktok.com/@blocky.ai.agent?_t=ZM-8wNZY8ZZLde&_r=1" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      boxShadow: "0 0 10px rgba(245, 166, 35, 0.3)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Feature", "Roadmap", "NFTs"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-amber-500 transition-colors inline-block relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                  <a
                    href="https://dexscreener.com/solana/8iQH3wqsziGSiLKJDpmGtr54ujAAwbvpB8CSyF48Shd8" target="_blank"
                    className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-6 py-5 text-base w-full sm:w-auto"
                  >
              
                    Chart
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center text-gray-400"
                >
                  <motion.span whileHover={{ rotate: 20 }} className="text-amber-500 mr-2">
                    🤝
                  </motion.span>
                  Partnerships
                </motion.li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="border-t border-gray-800 mt-12 pt-6">
            <p className="text-gray-500 text-sm">Copyright © 2025 BLOCKY. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
