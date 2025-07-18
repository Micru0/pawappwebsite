"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

export default function ContactPage() {
  return (
    <div className="bg-navy-800 text-white">
      {/* Header */}
      <header className="bg-navy-900 py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-paw-yellow">
              Home
            </Link>
            <Link href="/#features" className="text-sm font-medium hover:text-paw-yellow">
              Features
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-paw-yellow">
              Services
            </Link>
            <Link href="/#clinics" className="text-sm font-medium hover:text-paw-yellow">
              Clinics
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-paw-yellow">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-paw-yellow">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-paw-yellow mb-4">Get in Touch</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We're here to help with any questions, feedback, or support needs. Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/5 border border-paw-yellow/20 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-paw-yellow mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Full Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" className="bg-white/10" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="you@example.com" className="bg-white/10" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="bg-white/10"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full bg-paw-yellow text-navy-900 font-semibold">
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-paw-yellow mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-white">Call Us</h3>
                  <p className="text-white/80">+965 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageCircle className="w-6 h-6 text-paw-yellow mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                  <a href="mailto:info@pawapp.co" className="text-white/80 hover:text-paw-yellow">
                    info@pawapp.co
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-paw-yellow mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-white">Our Location</h3>
                  <p className="text-white/80">Shuwaikh Industrial, Kuwait</p>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border-2 border-paw-yellow/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222639.4398579761!2d47.76932464195156!3d29.37606443491793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0x334bfb2b135756a1!2sKuwait%20City!5e0!3m2!1sen!2skw!4v1672526789123!5m2!1sen!2skw"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white/80 pt-16 pb-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="mb-4 inline-block">
                <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-14 w-auto" />
              </Link>
              <p className="text-sm text-white/60">Kuwait's Trusted Pet Care Companion.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="/#features" className="hover:text-paw-yellow transition-colors">
                    Features
                  </Link>
                  <Link href="/#services" className="hover:text-paw-yellow transition-colors">
                    Services
                  </Link>
                  <Link href="/#clinics" className="hover:text-paw-yellow transition-colors">
                    Clinics
                  </Link>
                  <Link href="/blog" className="hover:text-paw-yellow transition-colors">
                    Blog
                  </Link>
                </nav>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Contact</h4>
                <div className="flex flex-col space-y-2">
                  <a href="mailto:info@pawapp.co" className="flex items-center hover:text-paw-yellow transition-colors">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    info@pawapp.co
                  </a>
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Kuwait City, Kuwait
                  </p>
                  <div className="flex space-x-4 pt-2">
                    <Link href="#" className="hover:text-paw-yellow transition-colors">
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="hover:text-paw-yellow transition-colors">
                      <Twitter className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} PawApp. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 