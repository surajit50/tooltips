
"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FileText, Image, FileType, Lock, Unlock, RotateCw, Scissors, Plus, Camera, Search, Stamp, Hash } from "lucide-react"

const conversionGroups = {
  "Frequently Used": [
    { title: "Merge PDF", icon: Plus, href: "/tools/pdf/merge" },
    { title: "Split PDF", icon: Scissors, href: "/tools/pdf/split" },
    { title: "Compress PDF", icon: FileText, href: "/tools/pdf/compress" },
    { title: "Edit PDF", icon: FileText, href: "/tools/pdf/edit" },
    { title: "Sign PDF", icon: FileText, href: "/tools/pdf/sign" },
    { title: "Protect PDF", icon: Lock, href: "/tools/pdf/protect" },
    { title: "Unlock PDF", icon: Unlock, href: "/tools/pdf/unlock" },
    { title: "Extract Pages", icon: FileOutput, href: "/tools/pdf/extract" },
    { title: "Rotate PDF", icon: RotateCw, href: "/tools/pdf/rotate" },
  ],
  "Convert to PDF": [
    { title: "Word to PDF", icon: FileType, href: "/tools/pdf/word-to-pdf" },
    { title: "PowerPoint to PDF", icon: FileType, href: "/tools/pdf/powerpoint-to-pdf" },
    { title: "Excel to PDF", icon: FileType, href: "/tools/pdf/excel-to-pdf" },
    { title: "Images to PDF", icon: Image, href: "/tools/pdf/images-to-pdf" },
    { title: "Text to PDF", icon: FileText, href: "/tools/pdf/text-to-pdf" },
    { title: "Webpage to PDF", icon: Globe, href: "/tools/pdf/webpage-to-pdf" },
    { title: "Markdown to PDF", icon: FileType, href: "/tools/pdf/markdown-to-pdf" },
    { title: "SVG to PDF", icon: FileImage, href: "/tools/pdf/svg-to-pdf" },
  ],
  "Convert from PDF": [
    { title: "PDF to Word", icon: FileType, href: "/tools/pdf/to-word" },
    { title: "PDF to PowerPoint", icon: FileType, href: "/tools/pdf/to-powerpoint" },
    { title: "PDF to Excel", icon: FileType, href: "/tools/pdf/to-excel" },
    { title: "PDF to Text", icon: FileType, href: "/tools/pdf/to-text" },
    { title: "PDF to Images", icon: Image, href: "/tools/pdf/to-images" },
    { title: "PDF to HTML", icon: FileType, href: "/tools/pdf/to-html" },
  ],
  "Enhance PDF": [
    { title: "Add Watermark", icon: Stamp, href: "/tools/pdf/watermark" },
    { title: "Add Page Numbers", icon: Hash, href: "/tools/pdf/page-numbers" },
    { title: "Add Headers", icon: Heading, href: "/tools/pdf/headers" },
    { title: "Add Footers", icon: Minus, href: "/tools/pdf/footers" },
    { title: "OCR PDF", icon: Search, href: "/tools/pdf/ocr" },
    { title: "Optimize PDF", icon: Settings, href: "/tools/pdf/optimize" },
    { title: "Repair PDF", icon: Wrench, href: "/tools/pdf/repair" },
    { title: "Remove Background", icon: Eraser, href: "/tools/pdf/remove-background" },
  ],
    { title: "OCR PDF", icon: Search, href: "/tools/pdf/ocr" },
    { title: "Add Watermark", icon: Stamp, href: "/tools/pdf/watermark" },
    { title: "Add Page Numbers", icon: Hash, href: "/tools/pdf/page-numbers" },
  ]
}

export function PDFConversionOptions() {
  return (
    <div className="space-y-8">
      {Object.entries(conversionGroups).map(([group, tools]) => (
        <div key={group} className="space-y-4">
          <h2 className="text-2xl font-bold">{group}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Card className="p-4 hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{tool.title}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
