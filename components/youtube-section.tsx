"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function YouTubeSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-red-900/30 px-4 py-1 text-xs uppercase tracking-wider text-red-400">
              Watch Now
            </span>
          </div>
        </FadeIn>

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
          Learn How to Buy <span className="text-amber-500">$BLOCKY</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            Watch our quick tutorial on how to buy $BLOCKY tokens. Follow along with this step-by-step guide to join the
            BLOCKY community.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <Button
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg"
              onClick={() =>
                window.open("https://youtube.com/shorts/Vr1DMzImVtk?feature=share", "_blank", "noopener,noreferrer")
              }
            >
              <Youtube className="mr-2 h-5 w-5" />
              Watch Tutorial
            </Button>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}
