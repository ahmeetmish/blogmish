import Image from "next/image"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { urlFor } from "@/app/lib/sanity"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogCard({ blogs }) {  
  return (
    <div className="gap-4 flex flex-wrap">
      {blogs.map((blog, index) => (
        <Card className="max-w-[340px]" key={index}>
          <Image src={urlFor(blog.titleImage).url()} className="h-[250px] rounded-sm object-cover overflow-hidden" alt={blog.name} width={500} height={500} priority={false} />
          <CardContent className="gap-3 flex flex-col p-2">
            <CardTitle className="line-clamp-2">{blog.name}</CardTitle>
            <CardDescription className="line-clamp-4">{blog.smallDescription}</CardDescription>
            <Button asChild>
              <Link href={`/blog/${blog.currentSlug}`} className="font-semibold">Devamını oku..</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}