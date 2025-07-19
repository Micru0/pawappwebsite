"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#services", label: "Services" },
    { href: "/#clinics", label: "Clinics" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "h-16 bg-navy-900/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
            : "h-20 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white relative group transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-2 text-sm">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">🇰🇼</button>
              <span className="text-white/60">/</span>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">🇬🇧</button>
            </div>
            <Button asChild size="sm" className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-bold">
              <Link href="https://apps.apple.com/lv/app/paw-app/id6474899820?platform=iphone">
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex flex-col">
          <div className="flex justify-between items-center h-20">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-14 w-auto" />
            </Link>
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMenuOpen(false)}>
              <X className="h-7 w-7" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-white hover:text-paw-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pb-12 text-center">
            <Button
              asChild
              size="lg"
              className="w-full bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-bold"
            >
              <Link href="https://apps.apple.com/lv/app/paw-app/id6474899820?platform=iphone">
                <Download className="mr-2 h-5 w-5" />
                Download Pawapp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
} 