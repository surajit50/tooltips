
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">About ToolKit</h1>
          <p className="text-muted-foreground">Your all-in-one solution for online utilities</p>
        </div>
        <div className="prose dark:prose-invert">
          <p>ToolKit is a comprehensive collection of free online tools designed to make your digital tasks easier. Our mission is to provide reliable, fast, and user-friendly web utilities that help boost your productivity.</p>
          
          <h2>Why Choose ToolKit?</h2>
          <ul>
            <li>Free to use - no hidden costs</li>
            <li>No registration required</li>
            <li>Privacy-focused - we don't store your data</li>
            <li>Regular updates and new tools</li>
            <li>Simple and intuitive interface</li>
          </ul>
          
          <div className="mt-6">
            <Button asChild>
              <Link href="/tools">Explore Our Tools</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
