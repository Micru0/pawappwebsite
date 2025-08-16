"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import Link from "next/link"

export function BlogIndex({ posts }) {
  return (
    <div className="bg-navy-800 text-white">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-paw-yellow mb-4">The PawApp Blog</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Your go-to resource for expert pet care tips, inspiring stories, and updates from the PawApp team.
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="bg-white/5 border border-paw-yellow/20 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-white/60 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-paw-yellow mb-3 flex-grow">{post.title}</h3>
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

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="text-white border-paw-yellow hover:bg-paw-yellow/10">
            Load More Posts
          </Button>
        </div>
      </main>
    </div>
  )
}