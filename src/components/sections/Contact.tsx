import { Mail } from "lucide-react"
import { AnimatedSection } from "@/components/AnimatedSection"
import { GlassCard } from "@/components/GlassCard"
import { SectionHeading } from "@/components/SectionHeading"
import { SocialLinks } from "@/components/SocialLinks"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <GlassCard className="p-8 md:p-12">
            <SectionHeading>Get In Touch</SectionHeading>
            <p className="text-muted-foreground mb-6">
              Have a question or want to work together? Drop me a line.
            </p>
            <a
              href="mailto:yurlovandrew@gmail.com"
              className="inline-flex items-center gap-2 text-foreground font-mono hover:opacity-70 transition-opacity break-all sm:break-normal"
            >
              <Mail className="h-5 w-5" />
              yurlovandrew@gmail.com
            </a>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-4">
                Or find me elsewhere
              </p>
              <SocialLinks />
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
