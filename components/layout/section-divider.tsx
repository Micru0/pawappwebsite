import { PawPrint } from "lucide-react"

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative my-12 flex items-center justify-center ${className}`}>
      <div className="h-px w-full bg-white/10" />
      <div className="absolute bg-navy-900 px-3">
        <PawPrint className="h-4 w-4 text-white/50" aria-hidden="true" />
      </div>
    </div>
  )
}


