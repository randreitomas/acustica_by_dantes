import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Gallery } from "@/components/sections/Gallery"
import { Hero } from "@/components/sections/Hero"
import { Menu } from "@/components/sections/Menu"
import { Navbar } from "@/components/sections/Navbar"
import { OnlineOrdering } from "@/components/sections/OnlineOrdering"
import { Reservations } from "@/components/sections/Reservations"
import { Reviews } from "@/components/sections/Reviews"

export default function App() {
  return (
    <div className="min-h-svh bg-cream font-body text-espresso">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Reservations />
        <Contact />
        <Reviews />
        <OnlineOrdering />
      </main>
      <Footer />
    </div>
  )
}
