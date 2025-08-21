"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type PostData = {
  slug: string
  date: string
  title: string
  coverImage?: string
}

export function BlogIndex({ posts }: { posts: PostData[] }) {
  return (
    <div className="bg-white text-navy-900">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-4">The PawApp Blog</h1>
          <p className="text-lg text-navy-900/80 max-w-2xl mx-auto">
            Your go-to resource for expert pet care tips, inspiring stories, and updates from the PawApp team.
          </p>
        </div>

        <div className="mb-12 max-w-lg mx-auto">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search articles..."
              className="bg-black/5 border-black/10 text-navy-900 placeholder:text-navy-900/50 w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-900/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="bg-white border border-black/10 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full h-48 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-navy-900/60 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-navy-900 mb-3 flex-grow">{post.title}</h3>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-navy-900 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="text-navy-900 border-black/10 hover:bg-black/5">
            Load More Posts
          </Button>
        </div>
      </main>
    </div>
  )
}