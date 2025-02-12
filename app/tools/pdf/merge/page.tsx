
"use client"

import { useState } from "react"
import { PDFDocument } from "pdf-lib"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { FileUp, Plus, Download } from "lucide-react"

export default function MergePDFs() {
  const [files, setFiles] = useState<File[]>([])
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    if (selectedFiles.every(file => file.type === "application/pdf")) {
      setFiles(prev => [...prev, ...selectedFiles])
    } else {
      toast({
        title: "Error",
        description: "Please select only PDF files",
        variant: "destructive",
      })
    }
  }

  const mergePDFs = async () => {
    if (files.length < 2) {
      toast({
        title: "Error",
        description: "Please select at least 2 PDF files to merge",
        variant: "destructive",
      })
      return
    }

    try {
      const mergedPdf = await PDFDocument.create()
      
      for (const file of files) {
        const fileBuffer = await file.arrayBuffer()
        const pdf = await PDFDocument.load(fileBuffer)
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
        pages.forEach(page => mergedPdf.addPage(page))
      }

      const mergedBytes = await mergedPdf.save()
      const blob = new Blob([mergedBytes], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "merged.pdf"
      link.click()
      URL.revokeObjectURL(url)

      toast({
        title: "Success",
        description: "PDFs merged successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to merge PDFs. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Merge PDFs</h1>
          <p className="text-muted-foreground">Combine multiple PDF files into one document</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-4">
              <Input
                type="file"
                accept=".pdf"
                multiple
                onChange={handleFileChange}
                className="flex-1"
              />
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 border rounded">
                    <FileUp className="h-4 w-4" />
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <Button onClick={mergePDFs} disabled={files.length < 2}>
                  <Download className="mr-2 h-4 w-4" />
                  Merge PDFs
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
