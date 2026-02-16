import { ExternalLink, Github } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}

    >
      <Card className="glass-border-effect h-full pt-0 backdrop-blur-xl bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 shadow-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 overflow-hidden">
        <div className="relative aspect-video overflow-hidden flex items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/10">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-20 w-20 rounded-2xl"
              loading="lazy"
            />
          ) : (
            <div className="h-20 w-20 rounded-2xl bg-foreground/10" />
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-mono text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          {project.github && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.live && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Live
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
