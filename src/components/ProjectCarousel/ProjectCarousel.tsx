import {
  animate,
  motion,
  useMotionValue,
  type PanInfo,
} from "framer-motion"
import { useCallback, useEffect, useId, useRef, useState } from "react"

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

function MobileMenuStrip({
  projects,
  label,
}: {
  projects: ProjectCardData[]
  label: string
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const syncActive = useCallback(() => {
    const node = scrollerRef.current
    if (!node) return
    const slide = node.querySelector<HTMLElement>("[data-menu-slide]")
    if (!slide) return
    const slideWidth = slide.offsetWidth
    const gap = 12
    const index = Math.round(node.scrollLeft / (slideWidth + gap))
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, index)))
  }, [projects.length])

  useEffect(() => {
    const node = scrollerRef.current
    if (!node) return
    syncActive()
    node.addEventListener("scroll", syncActive, { passive: true })
    return () => node.removeEventListener("scroll", syncActive)
  }, [syncActive])

  const goTo = (index: number) => {
    const node = scrollerRef.current
    const slide = node?.querySelectorAll<HTMLElement>("[data-menu-slide]")[index]
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={scrollerRef}
        className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Leading spacer so first card can center */}
        <div className="w-[8vw] shrink-0 snap-none sm:w-0" aria-hidden />

        {projects.map((project, index) => (
          <div
            key={project.id}
            data-menu-slide
            className="w-[78vw] max-w-[320px] shrink-0 snap-center"
          >
            <div className="overflow-hidden rounded-sm border border-espresso/15 bg-[#efe3c8] shadow-[0_10px_28px_rgba(42,30,22,0.2)]">
              <img
                src={project.image}
                alt={project.imageAlt ?? project.title}
                width={1080}
                height={1350}
                className="h-auto w-full select-none"
                draggable={false}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <p className="mt-3 text-center font-caption text-xs font-medium uppercase tracking-[0.16em] text-espresso-soft">
              {project.title}
            </p>
          </div>
        ))}

        <div className="w-[8vw] shrink-0 snap-none sm:w-0" aria-hidden />
      </div>

      <div
        className="mt-5 flex justify-center gap-2"
        role="tablist"
        aria-label="Menu boards"
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${project.title}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-2 rounded-sm transition-all duration-250",
              index === activeIndex
                ? "w-7 bg-mustard"
                : "w-2 bg-espresso/25"
            )}
          />
        ))}
      </div>
    </div>
  )
}

function DesktopMenuCarousel({
  projects,
  label,
  className,
}: {
  projects: ProjectCardData[]
  label: string
  className?: string
}) {
  const regionId = useId()
  const stageRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)

  const { activeIndex, breakpoint, next, prev, goTo, getSlot, isVisible } =
    useCarousel({ length: projects.length })

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
      Math.abs(offset.x) > CAROUSEL_DRAG_THRESHOLD || Math.abs(velocity.x) > 400

    if (swiped) {
      if (offset.x < 0 || velocity.x < -400) next()
      else prev()
    }

    void animate(dragX, 0, SPRING)
  }

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
          className="relative mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-2"
          style={{ perspective: 1200, perspectiveOrigin: "50% 50%" }}
        >
          <motion.div
            className="relative aspect-[1080/1350] w-full max-w-[340px] lg:max-w-[400px]"
            style={{ x: dragX, transformStyle: "preserve-3d" }}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
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

        <div
          className="mt-4 flex justify-center gap-2"
          role="tablist"
          aria-label="Menu boards"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${project.title}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-sm transition-all duration-250",
                index === activeIndex
                  ? "w-7 bg-mustard"
                  : "w-2 bg-espresso/25 hover:bg-espresso/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Mobile: native scroll-snap strip (readable boards, real swipe).
 * Tablet/desktop: 3D stacked carousel.
 */
export function ProjectCarousel({
  projects,
  className,
  label = "Project carousel",
}: ProjectCarouselProps) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : true
  )

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  if (projects.length === 0) return null

  if (isMobile) {
    return (
      <div className={cn("relative w-full", className)}>
        <MobileMenuStrip projects={projects} label={label} />
      </div>
    )
  }

  return (
    <DesktopMenuCarousel
      projects={projects}
      label={label}
      className={className}
    />
  )
}
