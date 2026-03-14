"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function YouTubeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [playerReady1, setPlayerReady1] = useState(false)
  const [playerReady2, setPlayerReady2] = useState(false)
  const player1Ref = useRef<any>(null)
  const player2Ref = useRef<any>(null)

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    ;(window as any).onYouTubeIframeAPIReady = () => {
      player1Ref.current = new (window as any).YT.Player("yt-player-1", {
        videoId: "078Ojsy_A0I",
        playerVars: { autoplay: 0, mute: 1, controls: 1, modestbranding: 1, rel: 0 },
        events: { onReady: () => setPlayerReady1(true) },
      })
      player2Ref.current = new (window as any).YT.Player("yt-player-2", {
        videoId: "Vr1DMzImVtk",
        playerVars: { autoplay: 0, mute: 1, controls: 1, modestbranding: 1, rel: 0 },
        events: { onReady: () => setPlayerReady2(true) },
      })
    }
  }, [])

  useEffect(() => {
    if (!playerReady1 || !playerReady2) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            player1Ref.current?.playVideo()
            player2Ref.current?.playVideo()
            setHasPlayed(true)
          }
        })
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [playerReady1, playerReady2, hasPlayed])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-block rounded-full bg-red-900/30 px-4 py-1 text-xs uppercase tracking-wider text-red-400">
              Watch Now
            </span>
          </div>
        </FadeIn>
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">
          Learn How to Buy <span className="text-amber-500">$BLOCKY</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
          Watch our quick tutorials on how to buy $BLOCKY tokens. Follow along with this step-by-step guide to join the BLOCKY community.
        </p>

        {/* Two videos side by side */}
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto mb-10">
          {/* Video 1 */}
          <div className="flex-1">
            <div className="relative w-full rounded-xl overflow-hidden border border-amber-500/20" style={{ paddingBottom: "56.25%" }}>
              <div id="yt-player-1" className="absolute top-0 left-0 w-full h-full" />
            </div>
            <p className="text-center text-gray-400 mt-3 text-sm">How to Buy $BLOCKY</p>
          </div>

          {/* Video 2 */}
          <div className="flex-1">
            <div className="relative w-full rounded-xl overflow-hidden border border-amber-500/20" style={{ paddingBottom: "56.25%" }}>
              <div id="yt-player-2" className="absolute top-0 left-0 w-full h-full" />
            </div>
            <p className="text-center text-gray-400 mt-3 text-sm">$BLOCKY Tutorial</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => window.open("https://www.youtube.com/watch?v=078Ojsy_A0I", "_blank", "noopener,noreferrer")}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Watch Tutorial 1
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => window.open("https://youtube.com/shorts/Vr1DMzImVtk", "_blank", "noopener,noreferrer")}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Watch Tutorial 2
            </Button>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}
