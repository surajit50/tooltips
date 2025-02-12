
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { FileText, Plus, Scissors, Lock, Unlock, Search, Stamp, Hash, Globe, Camera, FileType, Image, Settings, Wrench } from "lucide-react"

const pdfTools = [
  {
    title: "Frequently Used",
    items: [
      { title: "Merge PDF", icon: Plus, href: "/tools/pdf/merge" },
      { title: "Split PDF", icon: Scissors, href: "/tools/pdf/split" },
      { title: "Compress PDF", icon: FileText, href: "/tools/pdf/compress" },
      { title: "Protect PDF", icon: Lock, href: "/tools/pdf/protect" },
      { title: "OCR PDF", icon: Search, href: "/tools/pdf/ocr" },
    ]
  },
  {
    title: "Convert to PDF",
    items: [
      { title: "Word to PDF", icon: FileType, href: "/tools/pdf/word-to-pdf" },
      { title: "Images to PDF", icon: Image, href: "/tools/pdf/images-to-pdf" },
    ]
  },
  {
    title: "Convert from PDF",
    items: [
      { title: "PDF to Text", icon: FileText, href: "/tools/pdf/to-text" },
      { title: "PDF to Images", icon: Image, href: "/tools/pdf/to-images" },
      { title: "PDF to HTML", icon: Globe, href: "/tools/pdf/to-html" },
      { title: "PDF to Excel", icon: FileType, href: "/tools/pdf/to-excel" },
    ]
  }
]

export default function PDFToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container py-8 flex gap-8">
      <aside className="w-64 shrink-0 space-y-6">
        {pdfTools.map((section) => (
          <div key={section.title} className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent",
                    pathname === item.href && "bg-accent"
                  )}>
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
