"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Stethoscope,
  Scissors,
  Dog,
  Calendar,
  ShoppingBag,
  Star,
  Download,
  Apple,
  Globe,
  Instagram,
  Twitter,
  MessageCircle,
  MapPin,
  Phone,
  Menu,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

// Paw Print SVG Component
const PawPrint = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2M21 9C19.9 9 19 9.9 19 11S19.9 13 21 13 23 12.1 23 11 22.1 9 21 9M3 9C1.9 9 1 9.9 1 11S1.9 13 3 13 5 12.1 5 11 4.1 9 3 9M15.6 5.5C14.5 5.5 13.6 6.4 13.6 7.5S14.5 9.5 15.6 9.5 17.6 8.6 17.6 7.5 16.7 5.5 15.6 5.5M8.4 5.5C7.3 5.5 6.4 6.4 6.4 7.5S7.3 9.5 8.4 9.5 10.4 8.6 10.4 7.5 9.5 5.5 8.4 5.5M12 22C16.97 22 21 17.97 21 13C21 12.65 20.96 12.31 20.88 11.98C20.12 12.33 19.28 12.5 18.5 12.5C15.46 12.5 13 10.04 13 7C13 6.22 13.17 5.38 13.52 4.62C13.19 4.54 12.85 4.5 12.5 4.5C12.15 4.5 11.81 4.54 11.48 4.62C11.83 5.38 12 6.22 12 7C12 10.04 9.54 12.5 6.5 12.5C5.72 12.5 4.88 12.33 4.12 11.98C4.04 12.31 4 12.65 4 13C4 17.97 8.03 22 13 22H12Z" />
  </svg>
)

export default function PawappLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Enhanced Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "h-14 bg-navy-900/90 backdrop-blur-sm shadow-lg" : "h-16 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              className="text-sm font-medium text-white hover:text-white relative group transition-colors duration-150"
              href="#features"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-150 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white hover:text-white relative group transition-colors duration-150"
              href="#services"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-150 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white hover:text-white relative group transition-colors duration-150"
              href="#clinics"
            >
              Clinics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-150 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white hover:text-white relative group transition-colors duration-150"
              href="#blog"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-150 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white hover:text-white relative group transition-colors duration-150"
              href="#contact"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-150 group-hover:w-full"></span>
            </Link>

            <div className="flex items-center space-x-1 text-xs">
              <button className="p-1 hover:bg-white/10 rounded transition-colors duration-150">🇰🇼</button>
              <span className="text-white/60">/</span>
              <button className="p-1 hover:bg-white/10 rounded transition-colors duration-150">🇬🇧</button>
            </div>

            <Button
              size="sm"
              className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-4 py-2 text-xs transition-all duration-150 hover:shadow-lg"
            >
              <Download className="mr-1.5 h-3 w-3" />
              Download App
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main>
        {/* Enhanced Hero Section */}
        <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-900 to-navy-700 overflow-hidden">
          {/* Decorative Paw Prints */}

          {/* Hero Image with Diagonal Mask */}
          <div className="absolute right-0 top-0 w-[50%] h-full">
            <div
              className="w-full h-full relative"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
              }}
            >
              <Carousel
                plugins={[plugin.current]}
                className="w-full h-full"
                opts={{ loop: true }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="/images/pawapp-background.png"
                      alt="Happy dog and cat illustration for Pawapp"
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/images/pawappdog.png"
                      alt="Pawapp Dog"
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/images/pawappcat.png"
                      alt="Pawapp Cat"
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/images/pawappbros.png"
                      alt="Pawapp Bros"
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-0 bg-navy-900/30"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="w-full lg:w-[50%] lg:pr-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                PawApp | Kuwait’s Trusted Pet Care Companion.
              </h1>
              <h4 className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 leading-relaxed max-w-2xl">
                Book vets, groomers, and more—all from your phone.
              </h4>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-5">
                <Button
                  size="lg"
                  className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-8 py-4 text-lg transition-all duration-150 hover:shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Pawapp
                </Button>
                <Button
                  size="lg"
                  className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-8 py-4 text-lg transition-all duration-150 hover:shadow-lg"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* App Preview & Download */}
        <section className="relative py-16 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/paw-app-logo.png"
              alt="Pawapp Logo Watermark"
              className="w-1/2 h-auto object-contain opacity-5 rotate-12"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-paw-yellow">
                  Everything Your Pet Needs in One App
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  From emergency vet consultations to daily care services, Pawapp brings Kuwait's best pet care directly
                  to your phone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-8 py-4 text-lg">
                    <Apple className="mr-3 h-6 w-6" />
                    Download on App Store
                  </Button>
                  <Button className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-8 py-4 text-lg">
                    <Download className="mr-3 h-6 w-6" />
                    Get it on Google Play
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/pawapp-iphone-screenshot.png"
                  alt="Pawapp mobile application interface"
                  className="max-w-sm w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section id="services" className="relative py-16 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/paw-app-logo.png"
              alt="Pawapp Logo Watermark"
              className="w-1/2 h-auto object-contain opacity-5 rotate-12"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-paw-yellow">PawApp Pet Services</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                From veterinary needs to grooming and walking, find trusted professionals for every aspect of your
                pet's well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pet Health & Emergency */}
              <Card className="bg-white/10 border border-paw-yellow/30 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <CardContent className="p-6">
                  <div className="bg-navy-700 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-paw-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">Pet Health & Emergency</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li>• 24/7 instant vet help</li>
                    <li>• Book in-clinic consultations</li>
                    <li>• Electronic vaccination & medical records</li>
                  </ul>
                  <p className="text-sm text-white font-medium">Puts a vet in your pocket day or night.</p>
                </CardContent>
              </Card>

              {/* Lifestyle Care */}
              <Card className="bg-white/10 border border-paw-yellow/30 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <CardContent className="p-6">
                  <div className="bg-navy-700 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Scissors className="h-6 w-6 text-paw-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">Lifestyle Care</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li>• Grooming (salon or mobile)</li>
                    <li>• Dog walking</li>
                    <li>• Pet sitting & boarding/hotels</li>
                  </ul>
                  <p className="text-sm text-white font-medium">All bookable in-app with real-time slots.</p>
                </CardContent>
              </Card>

              {/* Training & Behaviour */}
              <Card className="bg-white/10 border border-paw-yellow/30 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <CardContent className="p-6">
                  <div className="bg-navy-700 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Dog className="h-6 w-6 text-paw-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">Training & Behaviour</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li>• Basic obedience sessions</li>
                    <li>• Behaviour modification</li>
                    <li>• Professional trainers</li>
                  </ul>
                  <p className="text-sm text-white font-medium">Highlighted in App-Store copy.</p>
                </CardContent>
              </Card>

              {/* Transport & Logistics */}
              <Card className="bg-white/10 border border-paw-yellow/30 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <CardContent className="p-6">
                  <div className="bg-navy-700 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-paw-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">Transport & Logistics</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li>• Pet taxi (pick-up / drop-off)</li>
                    <li>• Pickup & delivery for grooming</li>
                    <li>• Boarding transport</li>
                  </ul>
                  <p className="text-sm text-white font-medium">Useful for non-drivers in Kuwait.</p>
                </CardContent>
              </Card>

              {/* Commerce */}
              <Card className="bg-white/10 border border-paw-yellow/30 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <CardContent className="p-6">
                  <div className="bg-navy-700 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-paw-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">Commerce</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li>• In-app marketplace for food, meds & accessories</li>
                    <li>• Door-to-door product delivery</li>
                  </ul>
                  <p className="text-sm text-white font-medium">Curated catalogue + cash-on-delivery.</p>
                </CardContent>
              </Card>

              {/* Community & Safety */}
              <Card className="bg-white/10 border border-paw-yellow/30 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <CardContent className="p-6">
                  <div className="bg-navy-700 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Star className="h-6 w-6 text-paw-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">Community & Safety</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li>• Lost-&-Found board</li>
                    <li>• SOP (Saving Our Pets) awareness hub</li>
                  </ul>
                  <p className="text-sm text-white font-medium">Drives engagement & CSR.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="relative py-16 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/paw-app-logo.png"
              alt="Pawapp Logo Watermark"
              className="w-1/2 h-auto object-contain opacity-5 -rotate-12"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-paw-yellow">Features</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Everything you need to manage your pet's life, from health records to appointment scheduling, right at
                your fingertips.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <Stethoscope className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Unified Pet Profile</h3>
                    <p className="text-sm text-gray-300">Store breed, age, vaccine records</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Instant Vet Triage 24/7</h3>
                    <p className="text-sm text-gray-300">Text or call a licensed vet in seconds</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Real-time Slot Booking</h3>
                    <p className="text-sm text-gray-300">See clinic & groomer availability instantly</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Multi-language UI</h3>
                    <p className="text-sm text-gray-300">Arabic ⇄ English toggle</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Geo-based Clinic Finder</h3>
                    <p className="text-sm text-gray-300">Nearest open clinic surfaced first</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Push & WhatsApp Alerts</h3>
                    <p className="text-sm text-gray-300">Appointment reminders and emergency pings</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <ShoppingBag className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Cash / K-Net / Apple Pay</h3>
                    <p className="text-sm text-gray-300">Local payment methods built in</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <Star className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Lost-&-Found Quick Post</h3>
                    <p className="text-sm text-gray-300">Upload photo, auto-broadcast to network</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-navy-700 p-2 rounded-lg">
                    <Download className="h-5 w-5 text-paw-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-paw-yellow mb-1">Product Marketplace</h3>
                    <p className="text-sm text-gray-300">Same-day delivery of essentials</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted Partner Clinics */}
        <section id="clinics" className="relative py-16 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/paw-app-logo.png"
              alt="Pawapp Logo Watermark"
              className="w-1/2 h-auto object-contain opacity-5 -rotate-12"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-paw-yellow">Trusted Partner Clinics</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Pawapp currently lists 20+ vetted partners across Kuwait. Here are our flagship clinics for your peace
                of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="VETZOO Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-gray-900">VETZOO Clinic</h3>
                  <span className="bg-navy-900 text-white px-2 py-1 rounded text-xs">Featured</span>
                </div>
                <p className="text-gray-600 mb-2">📍 Al-Rai</p>
                <p className="text-sm text-gray-500">Full-service veterinary care</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Safari Veterinary Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Safari Veterinary Clinic</h3>
                <p className="text-gray-600 mb-2">📍 Salmiya</p>
                <p className="text-sm text-gray-500">24/7 emergency services</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Q8.VET"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Q8.VET</h3>
                <p className="text-gray-600 mb-2">📍 Shuwaikh</p>
                <p className="text-sm text-gray-500">Modern diagnostic equipment</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Pets Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Pets Clinic</h3>
                <p className="text-gray-600 mb-2">📍 Farwaniya</p>
                <p className="text-sm text-gray-500">Specialized pet care</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Allvet Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Allvet Clinic</h3>
                <p className="text-gray-600 mb-2">📍 Abu Halifa</p>
                <p className="text-sm text-gray-500">Comprehensive veterinary services</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Beeka & Moe Animal Center"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Beeka & Moe Animal Center</h3>
                <p className="text-gray-600 mb-2">📍 Hawalli</p>
                <p className="text-sm text-gray-500">Animal wellness center</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Universal Animal Hospital"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Universal Animal Hospital</h3>
                <p className="text-gray-600 mb-2">📍 Sabah Al-Salem</p>
                <p className="text-sm text-gray-500">Advanced medical treatments</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Royal Animal Hospital"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Royal Animal Hospital</h3>
                <p className="text-gray-600 mb-2">📍 Mangaf</p>
                <p className="text-sm text-gray-500">Premium pet healthcare</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <img
                  src="/placeholder.svg"
                  alt="Pet Sky Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Pet Sky Clinic</h3>
                <p className="text-gray-600 mb-2">📍 Fintas</p>
                <p className="text-sm text-gray-500">Modern veterinary facility</p>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/80 mb-4">Plus Zoo Care Clinics in Salmiya, Shuwaikh, Mahboula & Al-Wafrah</p>
              <Button className="bg-navy-700 hover:bg-navy-700/90 text-white px-8 py-3 rounded transition-all duration-250">
                View All 20+ Partner Clinics
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="relative py-16 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/paw-app-logo.png"
              alt="Pawapp Logo Watermark"
              className="w-1/2 h-auto object-contain opacity-5 -rotate-12"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-paw-yellow">Latest from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border border-paw-yellow/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-gray-300 mb-2">December 15, 2024</p>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">
                    5 Signs Your Pet Needs Immediate Vet Attention
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Learn to recognize the warning signs that indicate your pet needs urgent veterinary care. Early
                    detection can save lives and prevent serious complications.
                  </p>
                  <Link href="#" className="text-white font-medium hover:underline">
                    Read more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border border-paw-yellow/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-gray-300 mb-2">December 12, 2024</p>
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">Winter Pet Care Tips for Kuwait's Climate</h3>
                  <p className="text-gray-300 mb-4">
                    Discover essential winter care tips specifically tailored for pets living in Kuwait's unique climate
                    conditions and seasonal changes.
                  </p>
                  <Link href="#" className="text-white font-medium hover:underline">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="relative py-16 bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/paw-app-logo.png"
              alt="Pawapp Logo Watermark"
              className="w-1/2 h-auto object-contain opacity-5 -rotate-12"
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-paw-yellow">Download Pawapp Today</h2>
            <p className="text-xl text-white opacity-80 mb-8 max-w-2xl mx-auto">
              Join thousands of pet owners across Kuwait who trust Pawapp for their pet care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-8 py-3 rounded transition-all duration-250">
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-8 py-3 rounded transition-all duration-250">
                <Download className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
            <div className="max-w-md mx-auto">
              <p className="text-white opacity-80 mb-4">Get updates on new features:</p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button
                  type="submit"
                  className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 px-6 rounded transition-all duration-250"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#092860] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-8 w-auto" />
              </div>
              <p className="text-gray-300 mb-4">Your trusted companion for pet care in Kuwait.</p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-paw-yellow cursor-pointer transition-colors duration-150" />
                <Twitter className="h-5 w-5 text-gray-300 hover:text-paw-yellow cursor-pointer transition-colors duration-150" />
                <MessageCircle className="h-5 w-5 text-gray-300 hover:text-paw-yellow cursor-pointer transition-colors duration-150" />
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-paw-yellow transition-colors duration-150">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-paw-yellow transition-colors duration-150">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-paw-yellow transition-colors duration-150">
                    Clinics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-paw-yellow transition-colors duration-150">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+965 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Kuwait City, Kuwait</span>
                </div>
                <Button className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 mt-4 w-full transition-all duration-150">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Download App</h4>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent transition-all duration-150"
                >
                  <Apple className="mr-2 h-4 w-4" />
                  App Store
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent transition-all duration-150"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 Pawapp. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-paw-yellow transition-colors duration-150">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-paw-yellow transition-colors duration-150">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-paw-yellow transition-colors duration-150">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
