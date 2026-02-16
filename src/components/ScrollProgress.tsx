import { motion, useScroll, useSpring, useReducedMotion } from "motion/react"

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="h-0.5 bg-foreground/20 origin-left"
      style={{ scaleX }}
    />
  )
}
