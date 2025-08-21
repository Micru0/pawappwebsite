"use client"

import { useEffect, useState } from "react"
import { PawPrint } from "lucide-react"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-paw-yellow text-navy-900 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-paw-yellow/70"
    >
      <PawPrint className="h-5 w-5" />
    </button>
  )
}


