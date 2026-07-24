import { motion } from "framer-motion"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { GrainOverlay } from "@/components/GrainOverlay"
import { SectionHeading } from "@/components/SectionHeading"

import mapPlaceholder from "@/assets/map-placeholder.png"

const hours = [
  { day: "Sunday", time: "3:00 PM – 1:00 AM" },
  { day: "Monday – Tuesday", time: "11:00 AM – 1:00 AM" },
  { day: "Wednesday – Saturday", time: "11:00 AM – 2:00 AM" },
] as const

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Acustica+By+Dantes+España+Blvd+Manila"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-espresso">
      <GrainOverlay intensity="strong">
        <div className="relative z-[2] mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading
            tone="dark"
            eyebrow="Find Us"
            title="Contact & Location"
          />

          {/* BRAND REFRESH — Fix 5: dropped lg:items-start so this row falls
              back to the grid default (stretch) — the shorter content
              column now stretches to match the map's height instead of
              leaving empty space beneath it, and its own `justify-center`
              (below) centers Address/Reach Us/Hours within that space. */}
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              {/* BRAND REFRESH — Task 5b: gold "mat" frame (so the map art
                  doesn't bleed into the dark espresso background) plus a
                  sepia grade on the map itself, so a cold Google Maps
                  screenshot doesn't look like a raw embed dropped into a
                  warm page. aged-photo adds the same soft vignette used on
                  other photo inserts across the site.
                  Fix 5b: the image no longer sizes itself off its own
                  aspect ratio — it's absolutely positioned + object-cover
                  inside a frame that stretches (lg:h-full) to match the
                  content column's height, so the two columns line up
                  edge-to-edge instead of the map dictating a taller row. */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-md border border-gold/45 bg-espresso-soft p-2 shadow-lift transition-colors hover:border-gold/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:p-3 lg:h-full"
                aria-label="Open Acustica By Dantes on Google Maps"
              >
                <div className="aged-photo relative min-h-[260px] overflow-hidden rounded-sm border border-cream/20 sm:min-h-[340px] lg:h-full">
                  <img
                    src={mapPlaceholder}
                    alt="Map showing Acustica By Dantes on España Blvd near UST, Sampaloc, Manila"
                    width={1024}
                    height={695}
                    className="absolute inset-0 z-[1] h-full w-full object-cover [filter:sepia(0.45)_saturate(0.65)_brightness(0.97)_contrast(1.05)_hue-rotate(-6deg)] transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.06 }}
              className="flex flex-col justify-center gap-7"
            >
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-caption font-semibold text-sm uppercase tracking-[0.18em] text-gold">
                  <MapPin className="size-4" aria-hidden />
                  Address
                </h3>
                {/* BRAND REFRESH — Fix 1: "Acustica Bistro" anchored as the
                    primary line (bigger, heading weight); the street address
                    steps down in size/opacity to read as secondary detail. */}
                <p className="font-heading text-xl font-semibold leading-snug text-cream sm:text-2xl">
                  Acustica Bistro
                </p>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-cream/65">
                  2nd Floor, Didache Building
                  <br />
                  #1508 España Blvd., Sampaloc, Manila
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-caption font-semibold text-sm uppercase tracking-[0.18em] text-gold">
                  Reach Us
                </h3>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
                  <a
                    href="tel:+639554937058"
                    className="inline-flex items-center gap-2 font-body text-base text-cream transition-colors hover:text-gold"
                  >
                    <Phone className="size-4 shrink-0 text-gold" aria-hidden />
                    0955 493 7058
                  </a>
                  <a
                    href="mailto:acusticabistro@gmail.com"
                    className="inline-flex items-center gap-2 font-body text-base text-cream transition-colors hover:text-gold"
                  >
                    <Mail className="size-4 shrink-0 text-gold" aria-hidden />
                    acusticabistro@gmail.com
                  </a>
                </div>

                {/* BRAND REFRESH — Fix 3: plain icon+text links became small
                    circular icon buttons with their own visual weight and
                    separation, instead of trailing off the phone/email row
                    as an afterthought. Hover fills gold + inverts icon to
                    espresso. */}
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/AcusticabyDantes/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Acustica on Facebook"
                    className="flex size-10 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <FacebookIcon className="size-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/acusticabydantes/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Acustica on Instagram"
                    className="flex size-10 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <InstagramIcon className="size-4" />
                  </a>
                </div>
              </div>

              {/* BRAND REFRESH — Fix 5: extra top margin (beyond the column's
                  own gap-7) gives Hours more separation than Address/Reach
                  Us get from each other, since it's the most
                  practically-referenced block. */}
              <div className="mt-3 sm:mt-5">
                <h3 className="mb-3 flex items-center gap-2 font-caption font-semibold text-sm uppercase tracking-[0.18em] text-gold">
                  <Clock className="size-4" aria-hidden />
                  Hours
                </h3>
                {/* BRAND REFRESH — Fix 2: dot-leader treatment (see
                    .hours-row / .hours-row .day in index.css) replaces the
                    flat divider-line table, matching the vintage menu
                    board's connective-dots aesthetic. Day/time text
                    unchanged. */}
                <ul className="space-y-3">
                  {hours.map((row) => (
                    <li key={row.day} className="hours-row">
                      <span className="day font-body text-sm text-cream/90">
                        {row.day}
                      </span>
                      <span className="shrink-0 font-caption font-semibold text-xs uppercase tracking-wider text-cream/70">
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* BRAND REFRESH — Fix 4: one line of brand voice, styled
                    like the Story section's closing pull-quote
                    (font-accent italic), reinforcing the practical Hours
                    info right where visitors are deciding when to come. */}
                <p className="mt-5 font-accent text-lg italic leading-snug text-gold-light sm:text-xl">
                  Open mic every Thursday, 8PM — come early, seats fill fast.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </GrainOverlay>
    </section>
  )
}
