import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { BackgroundOrbs } from "@/components/BackgroundOrbs"
import { NoiseOverlay } from "@/components/NoiseOverlay"

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundOrbs />
      <NoiseOverlay />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
