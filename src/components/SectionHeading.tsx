import { motion, useReducedMotion } from "motion/react"

interface SectionHeadingProps {
  children: React.ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {children}
      </h2>
      <motion.div
        className="mt-3 h-0.5 w-12 bg-foreground/30 origin-left"
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  )
}
