import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { 
  Cpu, 
  FileText, 
  Palette, 
  QrCode, 
  Volume2, 
  FileJson, 
  Type 
} from "lucide-react"

const tools = [
  {
    title: "Code Formatter",
    description: "Format and beautify code in various languages",
    icon: Cpu,
    href: "/tools/code-formatter",
  },
  {
    title: "PDF Tools",
    description: "Convert and edit PDF files",
    icon: FileText,
    href: "/tools/pdf",
  },
  {
    title: "Color Tools",
    description: "Color picker, converter and palettes",
    icon: Palette,
    href: "/tools/color",
  },
  {
    title: "QR Generator",
    description: "Generate QR codes for text and URLs",
    icon: QrCode,
    href: "/tools/qr-generator",
  },
  {
    title: "Audio Tools",
    description: "Convert and edit audio files",
    icon: Volume2,
    href: "/tools/audio",
  },
  {
    title: "JSON Tools",
    description: "Format, validate and convert JSON",
    icon: FileJson,
    href: "/tools/json",
  },
  {
    title: "Text Tools",
    description: "Text manipulation and conversion utilities",
    icon: Type,
    href: "/tools/text",
  }
]

export default function Tools() {
  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tools</h1>
        <p className="text-muted-foreground">A collection of useful online tools</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.href} className="transition-all hover:shadow-lg hover:scale-[1.02]">
            <Link href={tool.href}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <tool.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{tool.title}</h2>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}