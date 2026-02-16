import { motion, useReducedMotion } from "motion/react"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/data/social"

interface SocialLinksProps {
  staggerDelay?: number
}

export function SocialLinks({ staggerDelay = 0 }: SocialLinksProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link, i) => (
        <motion.div
          key={link.label}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: staggerDelay + i * 0.1,
          }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  scale: 1.15,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }
          }
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-white/20 dark:hover:bg-white/10"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
