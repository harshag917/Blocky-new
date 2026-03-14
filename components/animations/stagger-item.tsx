"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerItemProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  distance?: number
  duration?: number
}

export default function StaggerItem({
  children,
  direction = "up",
  className = "",
  distance = 30,
  duration = 0.5,
}: StaggerItemProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  const initialPosition = directionMap[direction] || directionMap.up

  const item = {
    hidden: { opacity: 0, ...initialPosition },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
