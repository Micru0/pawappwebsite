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
  Search,
} from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "5 Signs Your Pet Needs Immediate Vet Attention",
      date: "December 15, 2024",
      excerpt:
        "Learn to recognize the warning signs that indicate your pet needs urgent veterinary care. Early detection can save lives and prevent serious complications.",
      image: "/placeholder.svg?height=200&width=400",
      slug: "vet-attention-signs",
    },
    {
      title: "Winter Pet Care Tips for Kuwait's Climate",
      date: "December 12, 2024",
      excerpt:
        "Discover essential winter care tips specifically tailored for pets living in Kuwait's unique climate conditions and seasonal changes.",
      image: "/placeholder.svg?height=200&width=400",
      slug: "winter-pet-care-kuwait",
    },
    {
      title: "The Ultimate Guide to Choosing the Right Pet Food",
      date: "December 10, 2024",
      excerpt:
        "Navigating the world of pet food can be overwhelming. This guide breaks down the essentials to help you make the best choice for your furry friend's health.",
      image: "/placeholder.svg?height=200&width=400",
      slug: "choosing-pet-food",
    },
    {
      title: "How to Socialize Your Puppy: A Step-by-Step Guide",
      date: "December 5, 2024",
      excerpt:
        "Proper socialization is crucial for a well-behaved dog. Follow our step-by-step guide to ensure your puppy grows into a confident and friendly adult.",
      image: "/placeholder.svg?height=200&width=400",
      slug: "puppy-socialization-guide",
    },
  ]

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
            <Link href="/blog" className="text-sm font-medium text-paw-yellow">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-paw-yellow">
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-paw-yellow mb-4">The PawApp Blog</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Your go-to resource for expert pet care tips, inspiring stories, and updates from the PawApp team.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12 max-w-lg mx-auto">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search articles..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="bg-white/5 border border-paw-yellow/20 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-white/60 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-paw-yellow mb-3 flex-grow">{post.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-paw-yellow font-semibold hover:underline mt-auto"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="text-white border-paw-yellow hover:bg-paw-yellow/10">
            Load More Posts
          </Button>
        </div>
      </main>

      {/* Newsletter CTA */}
      <section className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-paw-yellow mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Get the latest pet care tips, special offers, and PawApp news delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button type="submit" className="bg-paw-yellow text-navy-900 font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer from main page could be a shared component, but for simplicity we'll replicate it here */}
      <footer className="bg-navy-900 text-white/80 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {/* About & Logo */}
            <div className="md:col-span-1">
              <Link href="/" className="mb-4 inline-block">
                <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-14 w-auto" />
              </Link>
              <p className="text-sm text-white/60">Kuwait's Trusted Pet Care Companion.</p>
            </div>

            {/* Links & Contact */}
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