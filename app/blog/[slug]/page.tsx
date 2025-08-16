import { getPostData, getAllPostSlugs } from "@/lib/posts"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const postData = await getPostData(slug)
  return {
    title: postData.title,
    description: postData.description,
  }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postData = await getPostData(slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postData.schema) }}
      />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span>Go Back</span>
          </a>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12">
          <article className="prose prose-invert max-w-none">
            <div className="not-prose mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                {postData.title}
              </h1>
              <p className="text-gray-400 mt-4">
                Published on{" "}
                {new Date(postData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              {postData.author && (
                <p className="text-gray-400 mt-2">
                  Written by {postData.author}
                </p>
              )}
              {postData.coverImage && (
                <img
                  src={postData.coverImage}
                  alt={postData.title}
                  className="w-full rounded-xl my-8"
                />
              )}
            </div>
            <div
              className="[&_table]:w-full [&_table]:table-auto [&_th]:px-4 [&_th]:py-2 [&_th]:font-semibold [&_th]:text-left [&_th]:bg-gray-800/80 [&_td]:px-4 [&_td]:py-2 [&_td]:border-t [&_td]:border-gray-700/80"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
        </div>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const paths = await getAllPostSlugs()
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}
