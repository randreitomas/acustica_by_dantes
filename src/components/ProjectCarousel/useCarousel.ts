import { useCallback, useEffect, useMemo, useState } from "react"

export type CarouselBreakpoint = "mobile" | "tablet" | "desktop"

/** Relative slot of a card from the active index (-1 left, 0 center, 1 right). */
export type CarouselSlot = -1 | 0 | 1

export type UseCarouselOptions = {
  /** Total number of slides. */
  length: number
  /** Initial active index. */
  initialIndex?: number
}

export type UseCarouselReturn = {
  activeIndex: number
  breakpoint: CarouselBreakpoint
  next: () => void
  prev: () => void
  goTo: (index: number) => void
  /** Shortest signed distance from active → index, wrapped. */
  getOffset: (index: number) => number
  /** Whether a card should be mounted/visible for the current breakpoint. */
  isVisible: (index: number) => boolean
  /** Slot used for 3D transform presets, or null when off-stage. */
  getSlot: (index: number) => CarouselSlot | null
}

/** Minimum horizontal drag (px) to commit a slide change. */
export const CAROUSEL_DRAG_THRESHOLD = 80

function getBreakpoint(width: number): CarouselBreakpoint {
  if (width < 640) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

/**
 * Shared carousel state: infinite index math, responsive visibility,
 * and keyboard-friendly next/prev helpers.
 */
export function useCarousel({
  length,
  initialIndex = 0,
}: UseCarouselOptions): UseCarouselReturn {
  const [activeIndex, setActiveIndex] = useState(() =>
    length > 0 ? ((initialIndex % length) + length) % length : 0
  )
  const [breakpoint, setBreakpoint] = useState<CarouselBreakpoint>("desktop")

  useEffect(() => {
    const update = () => setBreakpoint(getBreakpoint(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    if (length <= 0) return
    setActiveIndex((prev) => ((prev % length) + length) % length)
  }, [length])

  const goTo = useCallback(
    (index: number) => {
      if (length <= 0) return
      setActiveIndex(((index % length) + length) % length)
    },
    [length]
  )

  const next = useCallback(() => {
    if (length <= 0) return
    setActiveIndex((prev) => (prev + 1) % length)
  }, [length])

  const prev = useCallback(() => {
    if (length <= 0) return
    setActiveIndex((prev) => (prev - 1 + length) % length)
  }, [length])

  const getOffset = useCallback(
    (index: number) => {
      if (length <= 0) return 0
      let diff = index - activeIndex
      const half = length / 2
      if (diff > half) diff -= length
      if (diff < -half) diff += length
      return diff
    },
    [activeIndex, length]
  )

  const getSlot = useCallback(
    (index: number): CarouselSlot | null => {
      const offset = getOffset(index)
      if (offset === 0 || offset === -1 || offset === 1) return offset
      return null
    },
    [getOffset]
  )

  const isVisible = useCallback(
    (index: number) => {
      const offset = Math.abs(getOffset(index))
      // Mobile: center only · tablet/desktop: center + neighbors
      if (breakpoint === "mobile") return offset === 0
      return offset <= 1
    },
    [breakpoint, getOffset]
  )

  return useMemo(
    () => ({
      activeIndex,
      breakpoint,
      next,
      prev,
      goTo,
      getOffset,
      isVisible,
      getSlot,
    }),
    [activeIndex, breakpoint, next, prev, goTo, getOffset, isVisible, getSlot]
  )
}
