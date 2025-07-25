import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PawApp Blog | Pet Care Tips, News & Stories",
  description:
    "Stay updated with the latest news, expert tips, and heartwarming stories from the PawApp community. Your go-to resource for all things pet care in Kuwait.",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
} 