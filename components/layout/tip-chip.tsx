"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Info } from "lucide-react"

type Tip = {
  text: string
  href: string
}

const TIPS: Tip[] = [
  { text: "Keep pets hydrated during summer walks.", href: "/blog/keeping-pets-cool-in-kuwait-summer" },
  { text: "Know emergency clinic hours near you.", href: "/blog/pets-into-kuwait-rules-2025" },
  { text: "Add vaccine records to stay on schedule.", href: "/blog/pet-insurance-kuwait-2025" },
]

export default function TipChip() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TIPS.length), 6000)
    return () => clearInterval(id)
  }, [])

  const tip = TIPS[index]

  return (
    <div className="w-full flex justify-center my-6">
      <Link
        href={tip.href}
        className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-sm text-white hover:bg-white/15 transition-colors"
      >
        <Info className="h-4 w-4 text-paw-yellow" />
        <span className="whitespace-pre-line text-white/90">{tip.text}</span>
      </Link>
    </div>
  )
}


