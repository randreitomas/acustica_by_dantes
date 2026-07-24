import { motion } from "framer-motion"

import { SectionHeading } from "@/components/SectionHeading"

import flyer01 from "@/assets/feed/01-acoustic-night-john.png"
import flyer02 from "@/assets/feed/02-open-mic-jus.png"
import flyer03 from "@/assets/feed/03-fathers-day.png"
import flyer04 from "@/assets/feed/04-independence-day.png"
import flyer05 from "@/assets/feed/05-pride-month.png"
import flyer06 from "@/assets/feed/06-acoustic-night-june6.png"
import flyer07 from "@/assets/feed/07-open-mic-june4.png"
import flyer08 from "@/assets/feed/08-open-mic-may28.png"
import flyer09 from "@/assets/feed/09-acoustic-night-japs-andrei.png"

const feedItems = [
  {
    src: flyer01,
    alt: "Acoustic Night with John Ojacastro — June 26, 8PM",
    label: "Acoustic Night · John Ojacastro",
  },
  {
    src: flyer02,
    alt: "Open Mic at Acustica with guest Jus — June 25, Thursday 8PM",
    label: "Open Mic · Jus",
  },
  {
    src: flyer03,
    alt: "Happy Father's Day greeting from Acustica by Dantes",
    label: "Happy Father's Day",
  },
  {
    src: flyer04,
    alt: "128th Philippine Independence Day — June 12",
    label: "Independence Day",
  },
  {
    src: flyer05,
    alt: "Happy Pride Month — Love wins, from Acustica by Dantes",
    label: "Pride Month",
  },
  {
    src: flyer06,
    alt: "Acoustic Night with John Ojacastro — June 6, Saturday 8PM",
    label: "Acoustic Night · June 6",
  },
  {
    src: flyer07,
    alt: "Open Mic at Acustica with Jus — June 4th, Thursday 8PM",
    label: "Open Mic · June 4",
  },
  {
    src: flyer08,
    alt: "Open Mic at Acustica — May 28th 2026, Thursday, stage opens 8PM",
    label: "Open Mic · May 28",
  },
  {
    src: flyer09,
    alt: "Acoustic Night featuring Japs and Andrei — May 15, Friday 8PM",
    label: "Acoustic Night · Japs & Andrei",
  },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="paper-surface overflow-hidden py-16 sm:py-24">
      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Events & Community"
          title="The Feed"
          description={
            <>
              Real flyers from the wall — open mics, acoustic nights,
              <br />
              and the holidays we celebrate together.
            </>
          }
        />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {feedItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.src}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.28, delay: (index % 6) * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className="aged-photo group relative aspect-[819/1024] overflow-hidden rounded-sm border border-espresso/20 bg-cream-stain/40 shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={item.alt}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="relative z-[1] h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-espresso/75 to-transparent px-2.5 pb-2.5 pt-8 opacity-0 transition-opacity duration-250 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-caption text-xs font-semibold uppercase tracking-[0.12em] text-cream">
                  {item.label}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
