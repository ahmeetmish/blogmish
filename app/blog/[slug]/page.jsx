import Image from "next/image"

import { client, urlFor } from "@/app/lib/sanity"
import { PortableText } from "@portabletext/react"

const getBlog = async(slug) => {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
      "currentSlug": slug.current,
        name,
        content,
        titleImage
    }[0]
  `

  const blog = await client.fetch(query)

  return blog
}

export default async function BlogDetail({ params: {slug} }) {
  const blog = await getBlog(slug)

  return (
    <div className="my-8 mx-56">
      <div className="gap-8 flex flex-col">
        <h2 className="gap-2 flex flex-col">
          <span className="text-center font-semibold text-primary tracking-wide uppercase">Ahmeetmish - Blog</span>
          <span className="text-3xl sm:text-4xl text-center font-bold tracking-tight">{blog.name}</span>
        </h2>
        <Image src={urlFor(blog.titleImage).url()} className="w-full max-h-[470px] rounded-sm overflow-hidden" alt={blog.name} width={500} height={500} priority={false} />
        <div className="prose prose-xl prose-headings:text-2xl prose-headings:underline prose-violet dark:prose-invert">
          <PortableText value={blog.content} />
        </div>
      </div>
    </div>
  )
}