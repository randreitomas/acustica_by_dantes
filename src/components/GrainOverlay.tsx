import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type GrainOverlayProps = {
  className?: string
  children: ReactNode
}

export function GrainOverlay({ className, children }: GrainOverlayProps) {
  return <div className={cn("grain-overlay", className)}>{children}</div>
}
