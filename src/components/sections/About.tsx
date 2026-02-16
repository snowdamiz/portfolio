import { AnimatedSection } from "@/components/AnimatedSection"
import { GlassCard } from "@/components/GlassCard"
import { SectionHeading } from "@/components/SectionHeading"

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <GlassCard className="p-8 md:p-12">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer who enjoys building things that live on
                the web. I focus on creating clean, performant applications with
                great user experiences.
              </p>
              <p>
                My work spans full-stack development, from crafting pixel-perfect
                interfaces to designing robust backend systems. I care deeply
                about code quality, accessibility, and developer experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring open-source
                projects, reading about distributed systems, or experimenting
                with new technologies.
              </p>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
