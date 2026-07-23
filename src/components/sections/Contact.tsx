import { motion } from "framer-motion"
import { Clock, MapPin } from "lucide-react"

import { GrainOverlay } from "@/components/GrainOverlay"
import { SectionHeading } from "@/components/SectionHeading"

const hours = [
  { day: "Monday – Wednesday", time: "1:00 PM – 10:00 PM" },
  { day: "Thursday (Open Mic)", time: "1:00 PM – 12:00 AM" },
  { day: "Friday", time: "1:00 PM – 11:00 PM" },
  { day: "Saturday (Acoustic Night)", time: "1:00 PM – 12:00 AM" },
  { day: "Sunday", time: "1:00 PM – 9:00 PM" },
] as const

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
      <GrainOverlay>
        <div className="relative z-[2] mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading
            tone="dark"
            eyebrow="Find Us"
            title="Contact & Location"
            description="Espanya, Didache Building, 2nd Floor — look for the warm lights and the open door."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-md border border-cream/10 bg-espresso-soft shadow-card"
            >
              <div
                className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-[linear-gradient(145deg,#3a2a1e_0%,#2e2118_50%,#4e1414_100%)] p-6 text-center"
                role="img"
                aria-label="Map placeholder for Acustica location"
              >
                <MapPin className="size-10 text-mustard" aria-hidden />
                <p className="font-body font-semibold text-sm uppercase tracking-[0.18em] text-cream">
                  Map Placeholder
                </p>
                <p className="max-w-xs font-body text-sm text-cream/70">
                  Interactive map embed goes here — Espanya, Didache Bldg, 2nd Floor
                </p>
              </div>
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
                  Acustica by Dantes
                  <br />
                  Didache Building, 2nd Floor
                  <br />
                  Espanya, Manila
                </p>
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

              <div>
                <h3 className="mb-3 font-body font-semibold text-sm uppercase tracking-[0.18em] text-mustard">
                  Social
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-[0.16em] text-mustard transition-colors hover:text-mustard-light"
                  >
                    <FacebookIcon className="size-4" />
                    @acusticabydantes
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-[0.16em] text-mustard transition-colors hover:text-mustard-light"
                  >
                    <InstagramIcon className="size-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </GrainOverlay>
    </section>
  )
}
