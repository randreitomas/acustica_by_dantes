import { motion } from "framer-motion"
import { useState } from "react"

import { SectionHeading } from "@/components/SectionHeading"
import { cn } from "@/lib/utils"

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
    date: "Jun 26",
  },
  {
    src: flyer02,
    alt: "Open Mic at Acustica with guest Jus — June 25, Thursday 8PM",
    label: "Open Mic · Jus",
    date: "Jun 25",
  },
  {
    src: flyer03,
    alt: "Happy Father's Day greeting from Acustica by Dantes",
    label: "Happy Father's Day",
    date: undefined,
  },
  {
    src: flyer04,
    alt: "128th Philippine Independence Day — June 12",
    label: "Independence Day",
    date: "Jun 12",
  },
  {
    src: flyer05,
    alt: "Happy Pride Month — Love wins, from Acustica by Dantes",
    label: "Pride Month",
    date: undefined,
  },
  {
    src: flyer06,
    alt: "Acoustic Night with John Ojacastro — June 6, Saturday 8PM",
    label: "Acoustic Night · June 6",
    date: "Jun 6",
  },
  {
    src: flyer07,
    alt: "Open Mic at Acustica with Jus — June 4th, Thursday 8PM",
    label: "Open Mic · June 4",
    date: "Jun 4",
  },
  {
    src: flyer08,
    alt: "Open Mic at Acustica — May 28th 2026, Thursday, stage opens 8PM",
    label: "Open Mic · May 28",
    date: "May 28",
  },
  {
    src: flyer09,
    alt: "Acoustic Night featuring Japs and Andrei — May 15, Friday 8PM",
    label: "Acoustic Night · Japs & Andrei",
    date: "May 15",
  },
] as const

type FeedItem = (typeof feedItems)[number]

/* BRAND REFRESH — Task 4: shared flyer card. `featured` spans 2 cols/rows
   in the desktop bento; `pinnedCaption` keeps the label+date visible at
   all times (vintage kicker type) instead of only revealing on hover —
   used sparingly so it reads as curation, not a rule applied to every tile. */
function FeedCard({
  item,
  featured = false,
  pinnedCaption = false,
  trailingOdd = false,
  delay = 0,
}: {
  item: FeedItem
  featured?: boolean
  pinnedCaption?: boolean
  /* BRAND REFRESH — mobile gap fix v2: when a row-group (supporting/
     overflow) has an odd item count, the last card would otherwise sit
     alone in a 2-col mobile row, leaving an empty cell beside it.
     Centering it at normal card width (v1) still read as "a gap" with
     padding on both sides, so instead it now spans the full row —
     same treatment as `featured` — filling the row cleanly instead of
     floating in the middle of empty space. Resets to normal
     single-column behavior at sm+. */
  trailingOdd?: boolean
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.28, delay }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        // BRAND REFRESH: these flyers used to open the raw image in a new
        // tab (a leftover from early placeholder content) — not an actual
        // destination worth linking to, so this is now a plain hover
        // card: no href/target, no focus-visible link outline, just the
        // same hover-reveal caption treatment.
        "aged-photo group relative aspect-[819/1024] cursor-default overflow-hidden rounded-sm border border-espresso/20 bg-cream-stain/40 shadow-soft",
        featured && "col-span-2 sm:row-span-2",
        trailingOdd && "col-span-2 sm:col-span-1"
      )}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="relative z-[1] h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
      />
      <span
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between gap-2 bg-gradient-to-t from-espresso/80 to-transparent px-2.5 pb-2.5 pt-8 transition-opacity duration-250",
          pinnedCaption ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      >
        <span className="font-caption text-xs font-semibold uppercase tracking-[0.12em] text-cream">
          {item.label}
        </span>
        {item.date ? (
          <span className="font-caption text-[0.65rem] font-medium uppercase tracking-[0.14em] text-gold-light">
            {item.date}
          </span>
        ) : null}
      </span>
    </motion.div>
  )
}

/* BRAND REFRESH — Task 4: curated to a 1 featured + 5 supporting bento
   instead of a flat, uneditorialized 3x3 of all 9 posters. The remaining
   3 stay in the data and are revealed with "See more". */
const FEATURED_COUNT = 6
const featured = feedItems[0]
const supporting = feedItems.slice(1, FEATURED_COUNT)
const overflow = feedItems.slice(FEATURED_COUNT)
const pinnedLabels = new Set(["Open Mic · Jus", "Acoustic Night · June 6"])

export function Gallery() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="gallery" className="paper-surface overflow-hidden py-16 sm:py-24">
      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Events & Community"
          title="The Feed"
          description={
            <>
              {/* BRAND REFRESH: desktop gets an intentional break after
                  "nights," (reads as two balanced clauses); mobile relies
                  on natural reflow since the line is short enough there.
                  Using string literals (not raw JSX text around the <br>)
                  so the leading space on the second half can never get
                  silently trimmed and glue "nights," to "and". */}
              {"Real flyers from the wall — open mics, acoustic nights,"}
              <br className="hidden sm:block" />
              {" and the holidays we celebrate together."}
            </>
          }
        />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          <FeedCard item={featured} featured pinnedCaption />
          {supporting.map((item, index) => (
            <FeedCard
              key={item.label}
              item={item}
              delay={(index + 1) * 0.04}
              pinnedCaption={pinnedLabels.has(item.label)}
              trailingOdd={
                supporting.length % 2 === 1 && index === supporting.length - 1
              }
            />
          ))}
        </div>

        {overflow.length > 0 ? (
          <>
            {showAll ? (
              <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-3 sm:gap-3">
                {overflow.map((item, index) => (
                  <FeedCard
                    key={item.label}
                    item={item}
                    delay={index * 0.04}
                    trailingOdd={
                      overflow.length % 2 === 1 && index === overflow.length - 1
                    }
                  />
                ))}
              </div>
            ) : null}

            <div className="mt-8 flex justify-center sm:mt-10">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="group inline-flex items-center gap-2 border-b border-terracotta/50 pb-1 font-caption text-xs font-semibold uppercase tracking-[0.18em] text-terracotta transition-colors hover:border-terracotta hover:text-espresso"
                aria-expanded={showAll}
              >
                {showAll ? "Show less" : `See more (${overflow.length})`}
                <span
                  className={cn(
                    "inline-block transition-transform duration-300",
                    showAll && "-rotate-180"
                  )}
                  aria-hidden
                >
                  ↓
                </span>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
