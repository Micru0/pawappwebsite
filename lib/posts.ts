import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import gfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "posts")

export async function getSortedPostsData() {
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, "utf8")
      const matterResult = matter(fileContents)

      return {
        slug,
        ...(matterResult.data as { date: string; title: string; coverImage?: string }),
      }
    }),
  )

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = await fs.readFile(fullPath, "utf8")
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).use(gfm).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; description: string; schema: object; author?: string; coverImage?: string }),
  }
}

export async function getAllPostSlugs() {
  const fileNames = await fs.readdir(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    }
  })
}