import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  Key,
  Image,
  QrCode,
  FileType,
  Cpu,
  Globe,
  VolumeIcon,
  FileImage,
  FileJson,
  Calculator,
  Calendar,
  Clock,
  Palette,
  FileAudio,
  Scissors,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const popularTools = [
  {
    title: "PDF Tools",
    description: "Convert, compress, and manipulate PDF files",
    icon: FileImage,
    href: "/tools/pdf",
    badge: "Popular",
  },
  {
    title: "QR Generator",
    description: "Create QR codes for URLs or text",
    icon: QrCode,
    href: "/tools/qr-generator",
  },
  {
    title: "Image Tools",
    description: "Optimize and edit images online",
    icon: Image,
    href: "/tools/image",
  },
]

const allTools = [
  {
    title: "Text Tools",
    description: "Text manipulation and formatting tools",
    icon: FileText,
    href: "/tools/text",
  },
  {
    title: "Developer Tools",
    description: "JSON formatter, Base64, and more",
    icon: Cpu,
    href: "/tools/dev",
  },
  {
    title: "Media Tools",
    description: "Audio and video conversion tools",
    icon: FileAudio,
    href: "/tools/media",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background/80 to-background/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Online Tools for Everyone
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Free online tools to help you with everyday tasks. No registration required.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/tools">Explore Tools</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Popular Tools</h2>
              <p className="text-muted-foreground">Our most used tools and utilities</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {popularTools.map((tool) => (
                <Card key={tool.href} className="transition-all hover:shadow-lg">
                  <Link href={tool.href}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <tool.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">All Categories</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {allTools.map((tool) => (
                  <Card key={tool.href} className="transition-all hover:shadow-lg">
                    <Link href={tool.href}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <tool.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle>{tool.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}