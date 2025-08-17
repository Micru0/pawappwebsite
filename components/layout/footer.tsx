import Link from "next/link"
import { Instagram, Twitter, MessageCircle, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-white/10 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Image src="/images/paw-app-logo.png" alt="Pawapp Logo" width={96} height={48} className="h-12 w-auto mb-4" />
          <p className="text-sm text-white/60">Kuwait's #1 app for pet care.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-paw-yellow">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/#features" className="text-sm text-white/80 hover:text-white transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-sm text-white/80 hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-white/80 hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-paw-yellow">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-white/80 hover:text-white">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              <MessageCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-paw-yellow">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-white/80">
              <MapPin className="h-4 w-4 mr-2" />
              Kuwait City, Kuwait
            </li>
            <li className="flex items-center text-white/80">
              <Phone className="h-4 w-4 mr-2" />
              +965 1234 5678
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-white/50 mt-12 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} PawApp. All rights reserved.
      </div>
    </footer>
  )
}