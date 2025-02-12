
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    title: "How to Optimize PDF Files",
    description: "Learn the best practices for reducing PDF file sizes without losing quality",
    date: "2024-03-15",
    readTime: "5 min read",
    slug: "optimize-pdf-files"
  },
  {
    title: "Understanding QR Codes",
    description: "A comprehensive guide to QR codes and their various applications",
    date: "2024-03-10",
    readTime: "4 min read",
    slug: "understanding-qr-codes"
  },
  {
    title: "Top 10 Online Tools for Productivity",
    description: "Discover the essential online tools that can boost your productivity",
    date: "2024-03-05",
    readTime: "6 min read",
    slug: "top-online-tools"
  }
]

export default function BlogPage() {
  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">Latest articles and tutorials</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="transition-all hover:shadow-lg">
              <Link href={`/blog/${post.slug}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
