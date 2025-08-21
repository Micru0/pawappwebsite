"use client"

import { Stethoscope, MapPin, ShoppingBag } from "lucide-react"

function Badge({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-paw-yellow shadow-sm"
      aria-label={label}
    >
      {children}
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default function IconBadgeRow() {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="flex items-center gap-3 opacity-80">
        <Badge label="24/7 vet triage">
          <Stethoscope className="h-4 w-4" />
        </Badge>
        <div className="h-px w-8 bg-white/10" />
        <Badge label="20+ clinics">
          <MapPin className="h-4 w-4" />
        </Badge>
        <div className="h-px w-8 bg-white/10" />
        <Badge label="Same-day delivery">
          <ShoppingBag className="h-4 w-4" />
        </Badge>
      </div>
    </div>
  )
}


