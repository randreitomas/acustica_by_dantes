import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Gallery } from "@/components/sections/Gallery"
import { Hero } from "@/components/sections/Hero"
import { Menu } from "@/components/sections/Menu"
import { Navbar } from "@/components/sections/Navbar"
import { OnlineOrdering } from "@/components/sections/OnlineOrdering"
import { Reviews } from "@/components/sections/Reviews"

export default function App() {
  return (
    <div className="paper-canvas min-h-svh font-body text-espresso">
      <Navbar />
      <main className="pt-16 sm:pt-[4.25rem]">
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
        <OnlineOrdering />
      </main>
      <Footer />
    </div>
  )
}
