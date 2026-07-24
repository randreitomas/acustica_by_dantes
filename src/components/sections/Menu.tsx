import { ProjectCarousel, type ProjectCardData } from "@/components/ProjectCarousel"
import { SectionHeading } from "@/components/SectionHeading"

/* BRAND REFRESH — Task 7: typography audit.
   The "cocktails" / "coffee" / "non-coffee" lettering visible on these
   boards is baked into the flattened board photos themselves (a script
   display face + italic serif for line items) — it isn't live HTML/CSS
   text, so it can't be restyled from here, and there's no source file to
   re-typeset. Verdict: keep as intentional texture, not a bug. It reads
   as an actual handwritten specials board (matches the "handcrafted,
   well-worn" brief) and mirrors the same choice already made for the real
   event flyers in The Feed. The section chrome around it — this "Menu"
   heading, the "On Offer" eyebrow, and the nav/footer "Menu" link — all
   use the core Cormorant Garamond / Jost pairing, so the divergence stays
   isolated to the photographed boards and doesn't leak into our own UI. */

import barChow from "@/assets/menu/bar-chow.png"
import cocktails from "@/assets/menu/cocktails.png"
import coffee from "@/assets/menu/coffee.png"
import lightBeers from "@/assets/menu/light-beers.png"
import ricePasta from "@/assets/menu/rice-pasta.png"

const menuProjects: ProjectCardData[] = [
  {
    id: "bar-chow",
    title: "Bar Chow",
    image: barChow,
    imageAlt: "Acustica bar chow menu board",
  },
  {
    id: "rice-pasta",
    title: "Rice Meals & Pasta",
    image: ricePasta,
    imageAlt: "Acustica rice meals and pasta menu board",
  },
  {
    id: "coffee",
    title: "Coffee & Non-Coffee",
    image: coffee,
    imageAlt: "Acustica coffee and non-coffee menu board",
  },
  {
    id: "cocktails",
    title: "Cocktails",
    image: cocktails,
    imageAlt: "Acustica cocktails menu board",
  },
  {
    id: "light-beers",
    title: "Light Beers",
    image: lightBeers,
    imageAlt: "Acustica light beers menu board",
  },
]

export function Menu() {
  return (
    <section id="menu" className="paper-surface overflow-hidden py-16 sm:py-24">
      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="On Offer" title="Menu" />

        <ProjectCarousel
          projects={menuProjects}
          label="Acustica menu boards"
          className="mt-2"
        />
      </div>
    </section>
  )
}
