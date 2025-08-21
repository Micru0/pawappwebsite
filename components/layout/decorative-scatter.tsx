"use client"

import { useEffect, useMemo, useState } from "react"
import { Bone, Cat, Dog, PawPrint, Heart } from "lucide-react"

type IconDescriptor = {
  Component: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

type Point = {
  topPct: number
  leftPct: number
  sizePx: number
  rotationDeg: number
  opacity: number
  Icon: IconDescriptor["Component"]
}

export default function DecorativeScatter({
  count = 12,
  minOpacity = 0.12,
  maxOpacity = 0.22,
  colorClass = "text-navy-900",
  className = "",
  exclusions = [],
}: {
  count?: number
  minOpacity?: number
  maxOpacity?: number
  colorClass?: string
  className?: string
  exclusions?: Array<{ top: number; left: number; width: number; height: number }>
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const icons: IconDescriptor["Component"][] = useMemo(
    () => [Bone, Cat, Dog, PawPrint, Heart],
    [],
  )

  const points: Point[] = useMemo(() => {
    const pts: Point[] = []
    const rows = Math.ceil(Math.sqrt(count))
    const cols = Math.ceil(count / rows)
    let placed = 0
    const isExcluded = (topPct: number, leftPct: number) =>
      exclusions.some((ex) =>
        topPct >= ex.top && topPct <= ex.top + ex.height && leftPct >= ex.left && leftPct <= ex.left + ex.width,
      )
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (placed >= count) break
        const Icon = icons[placed % icons.length]
        const cellTop = (r * 100) / rows
        const cellLeft = (c * 100) / cols
        const jitterTop = Math.random() * (100 / rows)
        const jitterLeft = Math.random() * (100 / cols)
        const candidateTop = Math.min(95, Math.max(5, cellTop + jitterTop))
        const candidateLeft = Math.min(95, Math.max(5, cellLeft + jitterLeft))
        if (isExcluded(candidateTop, candidateLeft)) continue
        pts.push({
          topPct: candidateTop,
          leftPct: candidateLeft,
          sizePx: 14 + Math.floor(Math.random() * 18),
          rotationDeg: Math.floor(Math.random() * 360),
          opacity: minOpacity + Math.random() * Math.max(0, maxOpacity - minOpacity),
          Icon,
        })
        placed++
      }
    }
    return pts
  }, [count, icons, minOpacity, maxOpacity, exclusions])

  if (!mounted) return null

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {points.map((p, idx) => (
        <p.Icon
          key={idx}
          className={colorClass}
          style={{
            position: "absolute",
            top: `${p.topPct}%`,
            left: `${p.leftPct}%`,
            width: p.sizePx,
            height: p.sizePx,
            opacity: p.opacity,
            transform: `rotate(${p.rotationDeg}deg)`,
          }}
        />
      ))}
    </div>
  )
}


