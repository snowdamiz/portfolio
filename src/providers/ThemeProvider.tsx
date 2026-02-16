import { useEffect } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.document.documentElement.classList.add("dark")
  }, [])

  return <>{children}</>
}
