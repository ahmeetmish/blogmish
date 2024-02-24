import { client } from "@/app/lib/sanity"

import BlogCard from "./BlogCard"

const getBlogs = async() => {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      name,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }
  `

  const blogs = await client.fetch(query)

  return blogs
}

export default async function BlogSection() {
  const blogs = await getBlogs()

  return (
    <div className="my-8">
      <BlogCard blogs={blogs} />
    </div>
  )
}