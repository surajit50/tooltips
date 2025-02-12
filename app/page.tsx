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
} from "lucide-react"
import Link from "next/link"

const tools = [
  {
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs",
    icon: FileText,
    href: "/tools/word-counter",
  },
  {
    title: "PDF Tools",
    description: "Convert, compress, and manipulate PDF files",
    icon: FileImage,
    href: "/tools/pdf",
  },
  {
    title: "Password Generator",
    description: "Create strong, secure passwords",
    icon: Key,
    href: "/tools/password-generator",
  },
  {
    title: "Text Case Converter",
    description: "Convert text between different letter cases",
    icon: FileType,
    href: "/tools/case-converter",
  },
  {
    title: "Image Compressor",
    description: "Optimize and reduce image file sizes",
    icon: Image,
    href: "/tools/image-compressor",
  },
  {
    title: "QR Code Generator",
    description: "Create QR codes for URLs or text",
    icon: QrCode,
    href: "/tools/qr-generator",
  },
  {
    title: "Base64 Encoder/Decoder",
    description: "Encode and decode text using Base64",
    icon: Cpu,
    href: "/tools/base64",
  },
  {
    title: "JSON Formatter",
    description: "Beautify and validate JSON data",
    icon: FileJson,
    href: "/tools/json-formatter",
  },
  {
    title: "Text to Speech",
    description: "Convert text to spoken words",
    icon: VolumeIcon,
    href: "/tools/text-to-speech",
  },
  {
    title: "IP Lookup",
    description: "Find geolocation data for IP addresses",
    icon: Globe,
    href: "/tools/ip-lookup",
  },
  {
    title: "Unit Converter",
    description: "Convert between various units of measurement",
    icon: Calculator,
    href: "/tools/unit-converter",
  },
  {
    title: "Date Calculator",
    description: "Calculate days between dates or add/subtract days",
    icon: Calendar,
    href: "/tools/date-calculator",
  },
  {
    title: "Pomodoro Timer",
    description: "Boost productivity with timed work sessions",
    icon: Clock,
    href: "/tools/pomodoro-timer",
  },
  {
    title: "Color Picker",
    description: "Select and convert between color formats",
    icon: Palette,
    href: "/tools/color-picker",
  },
  {
    title: "Markdown Preview",
    description: "Live preview of Markdown formatting",
    icon: FileText,
    href: "/tools/markdown-preview",
  },
  {
    title: "CSV to JSON Converter",
    description: "Convert CSV data to JSON format",
    icon: FileJson,
    href: "/tools/csv-to-json",
  },
  {
    title: "Audio Converter",
    description: "Convert audio files between formats",
    icon: FileAudio,
    href: "/tools/audio-converter",
  },
  {
    title: "Image Cropper",
    description: "Crop and resize images online",
    icon: Scissors,
    href: "/tools/image-cropper",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                ToolKit: Your Swiss Army Knife for the Web
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Powerful, free, and easy-to-use online tools to boost your productivity. No registration required.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="#tools">Explore Tools</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="tools" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Our Tools</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool) => (
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
      </section>
    </div>
  )
}

