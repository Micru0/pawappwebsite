import type { Metadata } from 'next'
import './globals.css'
import DecorativeScatter from '@/components/layout/decorative-scatter'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PawApp Kuwait — Book vets, grooming, and pet care",
    template: "%s | PawApp Kuwait",
  },
  description:
    "Kuwait's #1 pet care app. Book vets, grooming, and services, manage health records, and get 24/7 triage — all in one place.",
  openGraph: {
    title: "PawApp Kuwait — Book vets, grooming, and pet care",
    description:
      "Kuwait's #1 pet care app. Book vets, grooming, and services, manage health records, and get 24/7 triage — all in one place.",
    url: "/",
    siteName: "PawApp Kuwait",
    images: [
      {
        url: "/images/pawapp-iphone-screenshot.png",
        width: 1200,
        height: 630,
        alt: "PawApp on iPhone",
      },
    ],
    locale: "en_KW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PawApp Kuwait — Book vets, grooming, and pet care",
    description:
      "Kuwait's #1 pet care app. Book vets, grooming, and services, manage health records, and get 24/7 triage — all in one place.",
    images: ["/images/pawapp-iphone-screenshot.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
