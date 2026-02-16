import { Separator } from "@/components/ui/separator"
import { SocialLinks } from "@/components/SocialLinks"

export function Footer() {
  return (
    <footer className="mt-24">
      <Separator className="opacity-20" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Andrew Yurlov
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
