import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type GrainOverlayProps = {
  className?: string
  children: ReactNode
  intensity?: "default" | "strong"
}

export function GrainOverlay({
  className,
  children,
  intensity = "default",
}: GrainOverlayProps) {
  return (
    <div
      className={cn(
        "grain-overlay",
        intensity === "strong" && "grain-overlay-strong",
        className
      )}
    >
      {children}
    </div>
  )
}
