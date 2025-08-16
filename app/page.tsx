import { getSortedPostsData } from "@/lib/posts"
import { PawappLanding } from "@/components/layout/landing-page"

export default async function Home() {
  const allPostsData = await getSortedPostsData()
  return <PawappLanding posts={allPostsData} />
}