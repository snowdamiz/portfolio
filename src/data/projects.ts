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
    title: "Xero",
    description:
      "A local-first desktop app for building custom coding agents, visual workflows, and production software with your own model provider keys.",
    tags: ["Tauri", "AI Agents", "Developer Tools"],
    image: "/xero.svg",
    github: "https://github.com/hyperpush-org/xero",
    live: "https://xeroshell.com",
  },
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
    title: "Hyperpush",
    description:
      "Open-source error tracking with built-in token economics for funding projects and rewarding contributors who fix bugs.",
    tags: ["TypeScript", "Solana", "Developer Tools"],
    image: "/hyperpush.svg",
    github: "https://github.com/hyperpush-org/hyperpush",
    live: "https://hyperpush.dev",
  },
  {
    title: "Slop Heroes",
    description:
      "A playful project built around fast iteration, expressive systems, and sharp visual identity.",
    tags: ["Game", "TypeScript", "Mesh"],
    image: "/slopheroes.svg",
    live: "https://meshlang.dev",
  },
]
