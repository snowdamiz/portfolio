import { motion, useReducedMotion } from "motion/react"
import { SocialLinks } from "@/components/SocialLinks"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-shimmer"
          {...fadeUp(0.2)}
        >
          Andrew Yurlov
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl font-mono text-muted-foreground"
          {...fadeUp(0.4)}
        >
          <span className="text-muted-foreground/40">&lt; </span>
          Software Engineer
          <span className="cursor-blink">_</span>
          <span className="text-muted-foreground/40"> /&gt;</span>
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto"
          {...fadeUp(0.6)}
        >
          Building thoughtful, performant software with clean code and modern
          tools.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          {...fadeUp(0.8)}
        >
          <SocialLinks staggerDelay={1.0} />
        </motion.div>
      </div>

      {/* Decorative floating glass elements */}
      <motion.div
        className="absolute top-1/4 -left-20 w-40 h-40 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 rotate-12 hidden lg:block"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -20, 0], rotate: [12, 15, 12] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-16 w-32 h-32 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 -rotate-6 hidden lg:block"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 15, 0], rotate: [-6, -9, -6] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[5%] w-24 h-24 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 rotate-[20deg] hidden lg:block"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -12, 0], rotate: [20, 24, 20] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
