import { getSortedPostsData } from "@/lib/posts"
import { BlogIndex } from "@/components/layout/blog-index"

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData()
  return <BlogIndex posts={allPostsData} />
} 