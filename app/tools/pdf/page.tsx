
import { PDFConversionOptions } from "@/components/pdf/pdf-conversion-options"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { 
  FileText, FileType, Image, Lock, Unlock, RotateCw, Scissors, 
  Plus, Search, Stamp, Hash, Globe, Camera, ArrowRight, 
  FileOutput, Heading, Minus, Settings, Wrench, Eraser, 
  FileImage, Download, Upload
} from "lucide-react"

const pdfTools = [
  {
    title: "Frequently Used",
    tools: [
      { title: "Merge PDF", icon: Plus, href: "/tools/pdf/merge" },
      { title: "Split PDF", icon: Scissors, href: "/tools/pdf/split" },
      { title: "Compress PDF", icon: FileText, href: "/tools/pdf/compress" },
      { title: "Protect PDF", icon: Lock, href: "/tools/pdf/protect" },
      { title: "Unlock PDF", icon: Unlock, href: "/tools/pdf/unlock" },
      { title: "OCR PDF", icon: Search, href: "/tools/pdf/ocr" },
    ]
  },
  {
    title: "Convert to PDF",
    tools: [
      { title: "Word to PDF", icon: FileType, href: "/tools/pdf/word-to-pdf" },
      { title: "PowerPoint to PDF", icon: FileType, href: "/tools/pdf/powerpoint-to-pdf" },
      { title: "Excel to PDF", icon: FileType, href: "/tools/pdf/excel-to-pdf" },
      { title: "Images to PDF", icon: Image, href: "/tools/pdf/images-to-pdf" },
      { title: "Text to PDF", icon: FileText, href: "/tools/pdf/text-to-pdf" },
      { title: "Webpage to PDF", icon: Globe, href: "/tools/pdf/webpage-to-pdf" },
      { title: "SVG to PDF", icon: FileImage, href: "/tools/pdf/svg-to-pdf" },
    ]
  },
  {
    title: "Convert from PDF",
    tools: [
      { title: "PDF to Word", icon: FileType, href: "/tools/pdf/to-word" },
      { title: "PDF to PowerPoint", icon: FileType, href: "/tools/pdf/to-powerpoint" },
      { title: "PDF to Excel", icon: FileType, href: "/tools/pdf/to-excel" },
      { title: "PDF to Images", icon: Image, href: "/tools/pdf/to-images" },
      { title: "PDF to Text", icon: FileText, href: "/tools/pdf/to-text" },
      { title: "PDF to HTML", icon: Globe, href: "/tools/pdf/to-html" },
      { title: "Extract Images", icon: FileOutput, href: "/tools/pdf/extract-images" },
    ]
  },
  {
    title: "Modify PDF",
    tools: [
      { title: "Add Watermark", icon: Stamp, href: "/tools/pdf/watermark" },
      { title: "Add Page Numbers", icon: Hash, href: "/tools/pdf/page-numbers" },
      { title: "Add Headers", icon: Heading, href: "/tools/pdf/headers" },
      { title: "Add Footers", icon: Minus, href: "/tools/pdf/footers" },
      { title: "Rotate Pages", icon: RotateCw, href: "/tools/pdf/rotate" },
      { title: "Remove Pages", icon: Scissors, href: "/tools/pdf/remove-pages" },
      { title: "Rearrange Pages", icon: FileOutput, href: "/tools/pdf/rearrange" },
    ]
  },
  {
    title: "Enhance PDF",
    tools: [
      { title: "Optimize PDF", icon: Settings, href: "/tools/pdf/optimize" },
      { title: "Repair PDF", icon: Wrench, href: "/tools/pdf/repair" },
      { title: "Remove Background", icon: Eraser, href: "/tools/pdf/remove-background" },
      { title: "Flatten PDF", icon: Minus, href: "/tools/pdf/flatten" },
      { title: "Add Annotations", icon: FileText, href: "/tools/pdf/annotate" },
      { title: "Redact PDF", icon: Lock, href: "/tools/pdf/redact" },
    ]
  }
]

export default function PDFTools() {
  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">PDF Tools</h1>
        <p className="text-muted-foreground">Free online tools for working with PDF files</p>
      </div>
      <div className="space-y-8">
        {pdfTools.map((category) => (
          <div key={category.title} className="space-y-4">
            <h2 className="text-2xl font-bold">{category.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.tools.map((tool) => (
                <Link key={tool.href} href={tool.href}>
                  <Card className="p-4 hover:bg-accent transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <tool.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{tool.title}</span>
                      <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
