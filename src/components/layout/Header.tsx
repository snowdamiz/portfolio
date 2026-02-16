import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"
import { ScrollProgress } from "@/components/ScrollProgress"

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      animate={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.3 }}
      style={{ borderBottomWidth: "1px", borderBottomStyle: "solid" }}
    >
      <ScrollProgress />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
