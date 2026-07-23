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

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-sm border border-cream/15 bg-espresso-soft shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                aria-label="Open Acustica By Dantes on Google Maps"
              >
                <img
                  src={mapPlaceholder}
                  alt="Map showing Acustica By Dantes on España Blvd near UST, Sampaloc, Manila"
                  width={1024}
                  height={695}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.06 }}
              className="flex flex-col justify-center gap-8"
            >
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-[0.18em] text-mustard">
                  <MapPin className="size-4" aria-hidden />
                  Address
                </h3>
                <p className="font-body text-base leading-relaxed text-cream">
                  Acustica Bistro
                  <br />
                  2nd Floor, Didache Building
                  <br />
                  #1508 España Blvd., Sampaloc, Manila
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-body font-semibold text-sm uppercase tracking-[0.18em] text-mustard">
                  Reach Us
                </h3>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
                  <a
                    href="tel:+639554937058"
                    className="inline-flex items-center gap-2 font-body text-base text-cream transition-colors hover:text-mustard"
                  >
                    <Phone className="size-4 shrink-0 text-mustard" aria-hidden />
                    0955 493 7058
                  </a>
                  <a
                    href="mailto:acusticabistro@gmail.com"
                    className="inline-flex items-center gap-2 font-body text-base text-cream transition-colors hover:text-mustard"
                  >
                    <Mail className="size-4 shrink-0 text-mustard" aria-hidden />
                    acusticabistro@gmail.com
                  </a>
                  <a
                    href="https://www.facebook.com/AcusticabyDantes/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-body text-base text-cream transition-colors hover:text-mustard"
                  >
                    <FacebookIcon className="size-4 shrink-0 text-mustard" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/acusticabydantes/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-body text-base text-cream transition-colors hover:text-mustard"
                  >
                    <InstagramIcon className="size-4 shrink-0 text-mustard" />
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-[0.18em] text-mustard">
                  <Clock className="size-4" aria-hidden />
                  Hours
                </h3>
                <ul className="space-y-2">
                  {hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex flex-col gap-0.5 border-b border-dotted border-cream/15 pb-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="font-body text-sm text-cream/90">{row.day}</span>
                      <span className="font-body font-semibold text-xs uppercase tracking-wider text-cream/70">
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </GrainOverlay>
    </section>
  )
}
