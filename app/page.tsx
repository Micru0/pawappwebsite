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
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)

  const mobilePlugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    }),
  )
  const desktopPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      mobilePlugin.current.stop()
      desktopPlugin.current.stop()
    }
  }, [])

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Enhanced Navigation */}
      <header
        className={`fixed top-0 w-full z-20 transition-all duration-300 ${
          isScrolled || isMenuOpen ? "h-16 bg-navy-900/80 backdrop-blur-md shadow-lg" : "h-20 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <Image src="/images/paw-app-logo.png" alt="Pawapp Logo" width={48} height={48} className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              className="text-sm font-medium text-white/90 hover:text-white relative group transition-colors duration-200"
              href="#features"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white/90 hover:text-white relative group transition-colors duration-200"
              href="#services"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white/90 hover:text-white relative group transition-colors duration-200"
              href="#clinics"
            >
              Clinics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white/90 hover:text-white relative group transition-colors duration-200"
              href="/blog"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-sm font-medium text-white/90 hover:text-white relative group transition-colors duration-200"
              href="/contact"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paw-yellow transition-all duration-200 group-hover:w-full"></span>
            </Link>

            <div className="flex items-center space-x-1 text-xs">
              <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors duration-200">🇰🇼</button>
              <span className="text-white/50">/</span>
              <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors duration-200">🇬🇧</button>
            </div>

            <Button
              size="sm"
              className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-bold px-4 py-2 text-xs transition-all duration-200 hover:shadow-[0_4px_12px_rgba(255,223,102,0.35)]"
            >
              <Download className="mr-1.5 h-3 w-3" />
              Download App
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main>
        {/* Responsive Hero Section */}
        <section className="relative w-full lg:h-screen flex flex-col lg:flex-row overflow-hidden pt-[env(safe-area-inset-top)]">
          {/* Mobile Image Carousel */}
          <div className="lg:hidden w-full aspect-[9/11] max-h-[70vh] relative">
            {hasMounted ? (
              <Carousel
                plugins={[mobilePlugin.current]}
                className="w-full h-full"
                opts={{ loop: true }}
                setApi={(api: CarouselApi) => {
                  if (api) {
                    api.on("select", () => setActiveIndex(api.selectedScrollSnap()))
                  }
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/images/pawapp-background.png"
                      alt="Happy dog and cat illustration"
                      className="w-full h-full object-cover object-[50%_20%]"
                      width={800}
                      height={1200}
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappdog.png"
                      alt="Pawapp Dog"
                      className="w-full h-full object-cover object-[50%_20%]"
                      width={800}
                      height={1200}
                      loading="lazy"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappcat.png"
                      alt="Pawapp Cat"
                      className="w-full h-full object-cover object-[50%_20%]"
                      width={800}
                      height={1200}
                      loading="lazy"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                {/* Optional: Add a loading spinner here */}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-navy-900/10 pointer-events-none"></div>
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0b1f3a] to-transparent pointer-events-none"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto flex-1 flex flex-col items-center justify-center lg:items-start lg:justify-center px-4 sm:px-6 -mt-16 lg:mt-0">
            <div className="w-full max-w-lg text-center lg:text-left">
              <h1
                className="font-extrabold text-white leading-tight mb-8"
                style={{ fontSize: "clamp(3.5rem, 10vw, 6rem)" }}
              >
                PawApp
              </h1>
              <p className="subtitle text-lg sm:text-xl text-white/80 max-w-md mx-auto lg:mx-0 mb-10">
                Your pet's health, simplified. All-in-one platform for vet records, appointments, and more.
              </p>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Link href="https://apps.apple.com/lv/app/paw-app/id6474899820?platform=iphone" passHref>
                  <Button
                    size="lg"
                    className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-bold px-6 py-3 h-14 rounded-full text-base transition-all duration-200 hover:shadow-[0_4px_12px_rgba(255,223,102,0.35)]"
                  >
                    <Apple className="mr-2 h-6 w-6" />
                    App Store
                  </Button>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.paw.app" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-3 h-14 rounded-full text-base transition-all duration-300"
                  >
                    <Globe className="mr-2 h-6 w-6" />
                    Google Play
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Image Carousel */}
          <div className="hidden lg:block lg:w-1/2 h-full relative">
            <div
              className="w-full h-full absolute inset-0"
              style={{
                clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)",
                maskImage: "radial-gradient(circle at 70% 50%, black 50%, transparent 90%)",
              }}
            >
              <Carousel plugins={[desktopPlugin.current]} className="w-full h-full" opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/images/pawapp-background.png"
                      alt="Happy dog and cat illustration"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappdog.png"
                      alt="Pawapp Dog"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      loading="lazy"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappcat.png"
                      alt="Pawapp Cat"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      loading="lazy"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappbros.png"
                      alt="Pawapp Bros"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      loading="lazy"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Mobile Carousel Dots */}
        <div className="lg:hidden flex justify-center gap-2 -mt-8 mb-8 z-10 relative">
          {[...Array(3).keys()].map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-paw-yellow" : "bg-white/40"
              }`}
              onClick={() => {
                const api = (mobilePlugin.current as any)?.api
                if (api) api.scrollTo(i)
              }}
            />
          ))}
        </div>

        {/* App Preview & Download */}
        <section className="relative py-20 overflow-hidden">
          <div className="relative container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-paw-yellow">
                  Everything Your Pet Needs in One App
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                  From emergency vet consultations to daily care services, Pawapp brings Kuwait's best pet care directly
                  to your phone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-semibold px-6 py-4 text-lg"
                  >
                    <Link href="https://apps.apple.com/lv/app/paw-app/id6474899820?platform=iphone">
                      <Apple className="mr-3 h-6 w-6" />
                      Download on App Store
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white/90 hover:bg-white text-navy-900 font-semibold px-6 py-4 text-lg"
                  >
                    <Link href="https://play.google.com/store/apps/details?id=com.paw.app">
                      <Globe className="mr-3 h-6 w-6" />
                      Get it on Google Play
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/pawapp-iphone-screenshot.png"
                  alt="Pawapp on iPhone"
                  className="w-[280px] h-auto rounded-2xl shadow-2xl"
                  width={400}
                  height={812}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section id="services" className="relative py-16 overflow-hidden">
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
        <section id="features" className="relative py-16 overflow-hidden">
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
        <section id="clinics" className="relative py-16 overflow-hidden">
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
                <Image
                  src="/placeholder.svg"
                  alt="VETZOO Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-gray-900">VETZOO Clinic</h3>
                  <span className="bg-navy-900 text-white px-2 py-1 rounded text-xs">Featured</span>
                </div>
                <p className="text-gray-600 mb-2">📍 Al-Rai</p>
                <p className="text-sm text-gray-500">Full-service veterinary care</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Safari Veterinary Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Safari Veterinary Clinic</h3>
                <p className="text-gray-600 mb-2">📍 Salmiya</p>
                <p className="text-sm text-gray-500">24/7 emergency services</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Q8.VET"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Q8.VET</h3>
                <p className="text-gray-600 mb-2">📍 Shuwaikh</p>
                <p className="text-sm text-gray-500">Modern diagnostic equipment</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Pets Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Pets Clinic</h3>
                <p className="text-gray-600 mb-2">📍 Farwaniya</p>
                <p className="text-sm text-gray-500">Specialized pet care</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Allvet Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Allvet Clinic</h3>
                <p className="text-gray-600 mb-2">📍 Abu Halifa</p>
                <p className="text-sm text-gray-500">Comprehensive veterinary services</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Beeka & Moe Animal Center"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Beeka & Moe Animal Center</h3>
                <p className="text-gray-600 mb-2">📍 Hawalli</p>
                <p className="text-sm text-gray-500">Animal wellness center</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Universal Animal Hospital"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Universal Animal Hospital</h3>
                <p className="text-gray-600 mb-2">📍 Sabah Al-Salem</p>
                <p className="text-sm text-gray-500">Advanced medical treatments</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Royal Animal Hospital"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
                />
                <h3 className="font-bold text-lg text-gray-900 mb-3">Royal Animal Hospital</h3>
                <p className="text-gray-600 mb-2">📍 Mangaf</p>
                <p className="text-sm text-gray-500">Premium pet healthcare</p>
              </Card>

              <Card className="bg-[#F5F7FA] border border-paw-yellow/30 p-6 rounded-xl hover:shadow-lg transition-all duration-250">
                <Image
                  src="/placeholder.svg"
                  alt="Pet Sky Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  width={400}
                  height={200}
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
        <section id="blog" className="relative py-16 overflow-hidden">
          <div className="relative container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-paw-yellow">Latest from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border border-paw-yellow/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post"
                  className="w-full h-48 object-cover rounded-t-lg"
                  width={400}
                  height={200}
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
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post"
                  className="w-full h-48 object-cover rounded-t-lg"
                  width={400}
                  height={200}
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
        <section className="relative py-16 overflow-hidden">
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
      <footer className="border-t border-white/10 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-12 mb-4" />
            <p className="text-sm text-white/60">Kuwait's #1 app for pet care.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-paw-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-white/80 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-white/80 hover:text-white transition-colors">
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
    </div>
  )
}
