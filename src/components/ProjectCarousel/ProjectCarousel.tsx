import {
  animate,
  motion,
  useMotionValue,
  type PanInfo,
} from "framer-motion"
import { useEffect, useId, useRef } from "react"

import { cn } from "@/lib/utils"

import { ProjectCard, type ProjectCardData } from "./ProjectCard"
import {
  CAROUSEL_DRAG_THRESHOLD,
  useCarousel,
  type CarouselBreakpoint,
  type CarouselSlot,
} from "./useCarousel"

export type { ProjectCardData }

type ProjectCarouselProps = {
  projects: ProjectCardData[]
  className?: string
  label?: string
}

const SPRING = { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.9 }

function slotTransform(
  slot: CarouselSlot,
  breakpoint: CarouselBreakpoint
): {
  x: number
  rotateY: number
  scale: number
  opacity: number
  zIndex: number
} {
  if (breakpoint === "mobile") {
    return { x: 0, rotateY: 0, scale: 1, opacity: 1, zIndex: 30 }
  }

  const lateral = breakpoint === "tablet" ? 160 : 220

  if (slot === 0) {
    return { x: 0, rotateY: 0, scale: 1, opacity: 1, zIndex: 30 }
  }
  if (slot === -1) {
    return {
      x: -lateral,
      rotateY: 18,
      scale: 0.93,
      opacity: 0.45,
      zIndex: 20,
    }
  }
  return {
    x: lateral,
    rotateY: -18,
    scale: 0.93,
    opacity: 0.45,
    zIndex: 20,
  }
}

/**
 * 3D stacked carousel — no stage chrome, sits on the page background.
 */
export function ProjectCarousel({
  projects,
  className,
  label = "Project carousel",
}: ProjectCarouselProps) {
  const regionId = useId()
  const stageRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)

  const { breakpoint, next, prev, goTo, getSlot, isVisible } = useCarousel({
    length: projects.length,
  })

  useEffect(() => {
    const node = stageRef.current
    if (!node) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        next()
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        prev()
      } else if (event.key === "Home") {
        event.preventDefault()
        goTo(0)
      }
    }

    node.addEventListener("keydown", onKeyDown)
    return () => node.removeEventListener("keydown", onKeyDown)
  }, [next, prev, goTo])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info
    const swiped =
      Math.abs(offset.x) > CAROUSEL_DRAG_THRESHOLD || Math.abs(velocity.x) > 500

    if (swiped) {
      if (offset.x < 0 || velocity.x < -500) next()
      else prev()
    }

    void animate(dragX, 0, SPRING)
  }

  if (projects.length === 0) return null

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={stageRef}
        id={regionId}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        className="relative outline-none focus-visible:ring-2 focus-visible:ring-mustard/50 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
      >
        <div
          className="relative mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-2 sm:px-8"
          style={{ perspective: 1200, perspectiveOrigin: "50% 50%" }}
        >
          {/* Width-driven frame locked to menu board ratio 1080×1350 */}
          <motion.div
            className="relative aspect-[1080/1350] w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]"
            style={{ x: dragX, transformStyle: "preserve-3d" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={onDragEnd}
          >
            {projects.map((project, index) => {
              if (!isVisible(index)) return null
              const slot = getSlot(index)
              if (slot === null) return null

              const t = slotTransform(slot, breakpoint)
              const isActive = slot === 0

              return (
                <motion.div
                  key={project.id}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  style={{ transformStyle: "preserve-3d", zIndex: t.zIndex }}
                  initial={false}
                  animate={{
                    x: t.x,
                    rotateY: t.rotateY,
                    scale: t.scale,
                    opacity: t.opacity,
                    zIndex: t.zIndex,
                  }}
                  transition={SPRING}
                  onClick={() => {
                    if (!isActive) goTo(index)
                  }}
                  aria-hidden={!isActive}
                >
                  <ProjectCard project={project} isActive={isActive} />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </div>
    </div>
  )
}
