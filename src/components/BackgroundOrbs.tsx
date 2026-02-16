import { motion, useReducedMotion } from "motion/react"

const orbs = [
  {
    className: "w-72 h-72 bg-blue-400/10 dark:bg-blue-500/8 top-[10%] left-[15%]",
    animate: { x: [0, 50, -30, 0], y: [0, -40, 30, 0] },
    duration: 25,
  },
  {
    className: "w-96 h-96 bg-purple-400/10 dark:bg-purple-500/8 top-[50%] right-[10%]",
    animate: { x: [0, -60, 40, 0], y: [0, 50, -20, 0] },
    duration: 30,
  },
  {
    className: "w-80 h-80 bg-indigo-300/12 dark:bg-indigo-500/8 bottom-[15%] left-[40%]",
    animate: { x: [0, 30, -50, 0], y: [0, -30, 50, 0] },
    duration: 35,
  },
  {
    className: "w-48 h-48 bg-violet-400/15 dark:bg-violet-500/10 top-[30%] left-[60%]",
    animate: { x: [0, -40, 20, 0], y: [0, 30, -40, 0] },
    duration: 20,
  },
  {
    className: "w-[32rem] h-[32rem] bg-blue-300/8 dark:bg-blue-600/5 bottom-[30%] -left-[10%]",
    animate: { x: [0, 40, -20, 0], y: [0, -50, 30, 0] },
    duration: 40,
  },
]

export function BackgroundOrbs() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={prefersReducedMotion ? undefined : orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
