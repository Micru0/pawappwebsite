import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact PawApp | Get in Touch",
  description:
    "Have questions or need support? Contact the PawApp team. We're here to help with all your pet care needs in Kuwait. Reach out via email, phone, or our contact form.",
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
} 