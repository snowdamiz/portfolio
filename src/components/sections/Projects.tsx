import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/AnimatedSection"
import { SectionHeading } from "@/components/SectionHeading"
import { ProjectCard } from "@/components/ProjectCard"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading>Projects</SectionHeading>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild className="group">
            <a
              href="https://github.com/snowdamiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
