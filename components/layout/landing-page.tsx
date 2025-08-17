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
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import SectionDivider from "@/components/layout/section-divider"

type PostData = {
  slug: string
  date: string
  title: string
  coverImage?: string
}

export function PawappLanding({ posts }: { posts: PostData[] }) {
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
            <Link href="#download-cta">
              <Button
                size="sm"
                className="bg-paw-yellow hover:bg-paw-yellow/90 text-navy-900 font-bold px-3 py-1.5 text-xs transition-all duration-200 hover:shadow-[0_4px_12px_rgba(255,223,102,0.35)]"
              >
                <Download className="mr-1 h-3 w-3" />
                Download
              </Button>
            </Link>
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
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappcat.png"
                      alt="Pawapp Cat"
                      className="w-full h-full object-cover object-[50%_20%]"
                      width={800}
                      height={1200}
                      priority
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="https://apps.apple.com/lv/app/paw-app/id6474899820?platform=iphone" passHref>
                  <Image
                    src="/images/ApplestoreEN.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={53}
                    className="h-14 w-auto"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.paw.app" passHref>
                  <Image
                    src="/images/GooglestoreEN.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={53}
                    className="h-14 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Image Carousel */}
          <div className="hidden lg:block lg:w-1/2 h-full relative">
            <div
              className="w-full h-full absolute inset-0"
              style={{
                maskImage: "linear-gradient(100deg, transparent 15%, black 50%)",
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
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappcat.png"
                      alt="Pawapp Cat"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/pawappbros.png"
                      alt="Pawapp Bros"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      priority
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        <SectionDivider />

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

        <SectionDivider />

        {/* Services */}
        <section id="services" className="relative py-20 overflow-hidden">
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/drpaw/Paw_Drib.png"
                  alt="Dr. Paw comforting a pet"
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
              <div>
                <motion.div
                  className="text-center lg:text-left mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center lg:justify-start items-center gap-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                      PawApp Pet Services
                    </h2>
                    <motion.span
                      className="text-4xl"
                      role="img"
                      aria-label="paw emoji"
                      whileHover={{ rotate: [0, 20, -10, 20, 0], scale: 1.2, transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" } }}
                    >
                      🐾
                    </motion.span>
                  </div>
                  <p className="text-lg text-white/80 max-w-3xl mx-auto lg:mx-0 mt-4">
                    From veterinary needs to grooming and walking, find trusted professionals for every aspect of your pet's well-being.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Stethoscope, title: "Pet Health & Emergency", description: "24/7 instant vet help, in-clinic consultations, and electronic medical records.", ariaLabel: "Veterinary services" },
                    { icon: Scissors, title: "Lifestyle Care", description: "Book grooming, dog walking, and pet sitting with real-time availability.", ariaLabel: "Grooming and lifestyle services" },
                    { icon: Dog, title: "Training & Behaviour", description: "Find professional trainers for basic obedience and behavior modification.", ariaLabel: "Pet training services" },
                    { icon: MessageCircle, title: "Transport & Logistics", description: "Arrange pet taxis for vet visits, grooming, and boarding.", ariaLabel: "Pet transport services" },
                    { icon: ShoppingBag, title: "Commerce", description: "In-app marketplace for food, meds, and accessories with same-day delivery.", ariaLabel: "Pet supplies marketplace" },
                    { icon: Star, title: "Community & Safety", description: "Connect with the community on our Lost & Found board and safety hub.", ariaLabel: "Community and safety features" }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-navy-700/50 border-2 border-paw-yellow/30 rounded-2xl h-full flex flex-col p-6 transition-all duration-300 hover:border-paw-yellow/50 hover:shadow-2xl hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-paw-yellow/10 p-3 rounded-full">
                            <service.icon className="h-7 w-7 text-paw-yellow" aria-label={service.ariaLabel} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-white/70 text-sm">{service.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Key Features */}
        <section id="features" className="relative py-20 overflow-hidden">
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  className="text-center lg:text-left mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4">
                    Powerful Features, Simple Interface
                  </h2>
                  <p className="text-lg text-white/80 max-w-3xl mx-auto lg:mx-0">
                    Everything you need to manage your pet's life, from health records to appointment scheduling, right at your fingertips.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Stethoscope, title: "Unified Pet Profile", description: "Store breed, age, and vaccine records in one place." },
                    { icon: MessageCircle, title: "Instant Vet Triage 24/7", description: "Text or call a licensed vet in seconds for emergencies." },
                    { icon: Calendar, title: "Real-time Slot Booking", description: "See clinic & groomer availability and book instantly." },
                    { icon: Globe, title: "Multi-language UI", description: "Seamlessly switch between Arabic and English." },
                    { icon: MapPin, title: "Geo-based Clinic Finder", description: "Find the nearest open clinic, surfaced first." },
                    { icon: ShoppingBag, title: "Product Marketplace", description: "Same-day delivery of pet food, meds, and essentials." },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-navy-700/50 border-2 border-paw-yellow/30 rounded-2xl h-full flex flex-col p-6 transition-all duration-300 hover:border-paw-yellow/50 hover:shadow-2xl hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="bg-paw-yellow/10 p-3 rounded-full">
                            <feature.icon className="h-7 w-7 text-paw-yellow" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/70 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div 
                className="hidden lg:block mt-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src="/images/drpaw/Point.png" 
                  alt="Dr. Paw pointing at features" 
                  width={500} 
                  height={500} 
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
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
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { name: "VETZOO Clinic", location: "Al-Rai", description: "Full-service veterinary care", image: "/images/vets/vetzoo.jpeg", featured: true, workingHours: "Sun - Thu: 9 AM - 10 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Safari Veterinary Clinic", location: "Salmiya", description: "24/7 emergency services", image: "/images/vets/safarivet.png", workingHours: "24/7", locationUrl: "#", phoneNumber: "#" },
                  { name: "Q8.VET", location: "Shuwaikh", description: "Modern diagnostic equipment", image: "/images/vets/q8vet.png", workingHours: "Sat - Thu: 10 AM - 8 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Pets Clinic", location: "Farwaniya", description: "Specialized pet care", image: "/images/vets/petsclinic.png", workingHours: "Sun - Thu: 9 AM - 9 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Allvet Clinic", location: "Abu Halifa", description: "Comprehensive veterinary services", image: "/images/vets/allvet.jpeg", workingHours: "Sun - Thu: 10 AM - 7 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Beeka & Moe Animal Center", location: "Hawalli", description: "Animal wellness center", image: "/images/vets/beekaandmoe.png", workingHours: "Sat - Thu: 11 AM - 8 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Universal Animal Hospital", location: "Sabah Al-Salem", description: "Advanced medical treatments", image: "/images/vets/universalveterinaryhospital.png", workingHours: "24/7", locationUrl: "#", phoneNumber: "#" },
                  { name: "Royal Animal Hospital", location: "Mangaf", description: "Premium pet healthcare", image: "/images/vets/royalanimalhospital.png", workingHours: "Sun - Thu: 9 AM - 10 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Pet Sky Clinic", location: "Fintas", description: "Modern veterinary facility", image: "/images/vets/petsky.png", workingHours: "Sat - Thu: 10 AM - 8 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Animal House", location: "Kuwait City", description: "Your pet's second home", image: "/images/vets/animalhouse.jpg", workingHours: "Sun - Thu: 9 AM - 9 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Elite Veterinary Clinic", location: "Kuwait City", description: "Top-tier veterinary services", image: "/images/vets/elite.jpeg", workingHours: "Sun - Thu: 10 AM - 7 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Gulf Pets Clinic", location: "Kuwait City", description: "Caring for your beloved pets", image: "/images/vets/gulfpetsclinic.png", workingHours: "Sat - Thu: 11 AM - 8 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Offleash", location: "Kuwait City", description: "Pet supplies and more", image: "/images/vets/offleash.jpeg", workingHours: "Sun - Thu: 9 AM - 10 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Pawpups", location: "Kuwait City", description: "For the happiest puppies", image: "/images/vets/pawpups.jpeg", workingHours: "Sat - Thu: 10 AM - 8 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Petco", location: "Kuwait City", description: "The pet store for every need", image: "/images/vets/petco.jpeg", workingHours: "Sun - Thu: 9 AM - 9 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Pet Planet", location: "Kuwait City", description: "A world of pet care", image: "/images/vets/pet_planet.jpeg", workingHours: "Sun - Thu: 10 AM - 7 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Pet Point", location: "Kuwait City", description: "Your one-stop pet shop", image: "/images/vets/petpoint.jpeg", workingHours: "Sat - Thu: 11 AM - 8 PM", locationUrl: "#", phoneNumber: "#" },
                  { name: "Pet Store", location: "Kuwait City", description: "All your pet needs in one place", image: "/images/vets/pet_store.jpeg", workingHours: "Sun - Thu: 9 AM - 10 PM", locationUrl: "#", phoneNumber: "#" },
                ].map((clinic, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-2 h-full">
                      <Card className="bg-white/10 backdrop-blur-md border border-paw-yellow/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col p-3 rounded-2xl hover:-translate-y-1 hover:scale-[1.02]">
                        <div className="relative h-32 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-xl mb-2 p-2">
                          <Image
                            src={clinic.image}
                            alt={clinic.name}
                            className="max-h-full max-w-full object-contain rounded-md"
                            width={150}
                            height={90}
                          />
                          {clinic.featured && <span className="absolute top-1 right-1 bg-paw-yellow text-navy-900 px-1.5 py-0.5 rounded-full text-[10px] font-semibold">Featured</span>}
                        </div>
                        <div className="flex flex-col flex-grow text-center space-y-2 py-2">
                          <h3 className="font-bold text-base text-white truncate">{clinic.name}</h3>
                          <p className="text-xs text-gray-300">{clinic.workingHours}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-auto">
                          <Button variant="outline" size="sm" className="bg-white/10 border border-paw-yellow/30 text-white rounded-lg shadow-sm hover:bg-white/20 hover:border-paw-yellow/40 transition-colors">
                            <MapPin className="h-4 w-4 mr-1.5" />
                            Location
                          </Button>
                          <Button variant="outline" size="sm" className="bg-white/10 border border-paw-yellow/30 text-white rounded-lg shadow-sm hover:bg-white/20 hover:border-paw-yellow/40 transition-colors">
                            <Phone className="h-4 w-4 mr-1.5" />
                            Call
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 fill-black hidden md:flex" />
              <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 fill-black hidden md:flex" />
            </Carousel>

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
              {posts.slice(0, 2).map((post: PostData) => (
                <Card
                  key={post.slug}
                  className="bg-white/10 border border-paw-yellow/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250 overflow-hidden flex flex-col"
                >
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={1200}
                      height={630}
                      className="w-full h-48 object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-300 mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-3 text-paw-yellow flex-grow">{post.title}</h3>
                    <Link href={`/blog/${post.slug}`} className="text-white font-medium hover:underline mt-auto">
                      Read more →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download-cta" className="relative py-16 overflow-hidden scroll-mt-20">
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-paw-yellow">Download PawApp</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="https://apps.apple.com/lv/app/paw-app/id6474899820?platform=iphone" passHref>
                <Image
                  src="/images/ApplestoreEN.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                  className="h-14 w-auto"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.paw.app" passHref>
                <Image
                  src="/images/GooglestoreEN.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            <p className="text-xl text-white opacity-80 mb-8 max-w-2xl mx-auto">
              Join thousands of pet owners across Kuwait who trust Pawapp for their pet care needs.
            </p>
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

      <Footer />
    </div>
  )
}