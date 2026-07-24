import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { createPortal } from "react-dom"

import type { ProjectCardData } from "./ProjectCard"
import { menuLightboxLayoutId } from "./useCarousel"

type MenuLightboxProps = {
  project: ProjectCardData | null
  onClose: () => void
}

const LIGHTBOX_SPRING = {
  type: "spring" as const,
  stiffness: 300,
  damping: 32,
  mass: 0.9,
}

/**
 * BRAND REFRESH — "click the active board to full-screen it" (desktop + mobile).
 *
 * v2: the first pass faded in a disconnected full-size overlay, which read
 * as an abrupt swap rather than a "zoom." This version shares a
 * framer-motion `layoutId` with the exact card that was tapped (see
 * ProjectCard / the mobile strip in ProjectCarousel.tsx), so the board
 * itself visibly morphs from its small on-page size up to near-fullscreen —
 * a real "zoom," not a jump-cut. The rest of the page dims and softly
 * blurs behind it so the board reads as the only thing in focus.
 *
 * v3: this was still mounted inside the Menu section's `overflow-hidden`
 * wrapper (needed to contain the 3D carousel's side cards). Turns out
 * `overflow: hidden` on an ancestor clips `position: fixed` descendants
 * too, not just normally-flowed ones — so the dim/blur backdrop was only
 * ever painted within the Menu section's box, letting Hero/Our Story show
 * through above and below it instead of the whole viewport dimming.
 * Portaling straight to `document.body` escapes that clipping entirely.
 */
export function MenuLightbox({ project, onClose }: MenuLightboxProps) {
  useEffect(() => {
    if (!project) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          key="menu-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/55 p-4 backdrop-blur-md sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — full view`}
          onClick={onClose}
        >
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Close full view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 bg-espresso/60 text-cream transition-colors hover:border-gold hover:bg-espresso hover:text-gold sm:right-6 sm:top-6"
          >
            <X className="size-5" aria-hidden />
          </motion.button>

          <figure
            className="relative m-0 flex max-h-full max-w-full flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <motion.img
              layoutId={menuLightboxLayoutId(project.id)}
              transition={LIGHTBOX_SPRING}
              src={project.image}
              alt={project.imageAlt ?? project.title}
              className="max-h-[82vh] w-auto max-w-[92vw] rounded-sm border border-cream/15 object-contain shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:max-h-[88vh]"
            />
            <motion.figcaption
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mt-4 font-caption text-xs font-semibold uppercase tracking-[0.2em] text-cream/70"
            >
              {project.title}
            </motion.figcaption>
          </figure>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  )
}
