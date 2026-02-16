export interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: "Clippster",
    description:
      "A desktop application for automated long-form to short-form video clip generation and editing. Combines AI-powered video processing with a professional timeline editor for content creators.",
    tags: ["Tauri", "Vue", "Elixir", "Rust"],
    image: "/clippster.svg",
    github: "https://github.com/snowdamiz/clippster-mono",
    live: "https://clippster.app/",
  },
  {
    title: "Mesh Lang",
    description:
      "A general-purpose programming language designed to make concurrent software scalable, fault-tolerant, and maintainable.",
    tags: ["Rust", "LLVM", "Programming Language"],
    image: "/mesh.svg",
    github: "https://github.com/snowdamiz/mesh-lang",
    live: "https://meshlang.dev",
  },
  {
    title: "Lit UI",
    description:
      "Build your UI once with Lit web components and use it everywhere. A framework-agnostic component library powered by web standards.",
    tags: ["TypeScript", "Web Components", "Lit"],
    image: "/litui.svg",
    github: "https://github.com/snowdamiz/lit-ui",
    live: "https://litui.dev",
  },
  {
    title: "OnVibe",
    description:
      "A social media platform for the vibe coding community — developers and creators who embrace AI-assisted development.",
    tags: ["Elixir", "TypeScript", "Phoenix"],
    image: "/onvibe.svg",
    github: "https://github.com/snowdamiz/onvibe",
    live: "https://onvibe.dev",
  },
]
