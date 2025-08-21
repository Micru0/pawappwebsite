import { PawPrint } from "lucide-react"

type SectionDividerProps = {
  className?: string
  variant?: "icon" | "trail"
}

export default function SectionDivider({ className = "", variant = "icon" }: SectionDividerProps) {
  return (
    <div className={`relative my-12 flex items-center justify-center ${className}`}>
      <div className="h-px w-full bg-white/10" />
      <div className="absolute bg-white px-3">
        {variant === "icon" ? (
          <PawPrint className="h-4 w-4 text-white/50" aria-hidden="true" />
        ) : (
          <div className="flex items-center gap-1">
            {[0.35, 0.6, 0.85, 0.6, 0.35].map((opacity, index) => (
              <PawPrint
                key={index}
                className="h-3.5 w-3.5"
                style={{ opacity }}
                aria-hidden="true"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


