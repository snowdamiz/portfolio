import type { ComponentType, SVGProps } from "react"
import { Github, Mail } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"

export interface SocialLink {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/snowdamiz",
    icon: Github,
  },
  {
    label: "X",
    href: "https://x.com/andrew_da_miz",
    icon: XIcon,
  },
  {
    label: "Email",
    href: "mailto:yurlovandrew@gmail.com",
    icon: Mail,
  },
]
