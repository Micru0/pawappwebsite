"use client"

import { Stethoscope, MapPin, ShoppingBag } from "lucide-react"

export default function StatsStrip() {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="inline-flex items-center gap-4 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/90">
        <span className="inline-flex items-center gap-2">
          <Stethoscope className="h-4 w-4 text-paw-yellow" />
          24/7 vet triage
        </span>
        <span className="text-white/20">•</span>
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-paw-yellow" />
          20+ clinics
        </span>
        <span className="text-white/20">•</span>
        <span className="inline-flex items-center gap-2">
          <ShoppingBag className="h-4 w-4 text-paw-yellow" />
          Same-day delivery
        </span>
      </div>
    </div>
  )
}


