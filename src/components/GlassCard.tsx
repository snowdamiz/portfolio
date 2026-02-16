import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-white/10 dark:bg-white/5",
        "border border-white/20 dark:border-white/10",
        "rounded-2xl shadow-lg",
        "transition-all duration-300",
        "glass-border-effect",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
