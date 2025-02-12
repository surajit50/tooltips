"use client"

import { useState } from "react"
import * as pdfjsLib from "pdfjs-dist"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileText, Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"


pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

export default function PDFToText() {
  const [file, setFile] = useState<File | null>(null)
  const [extractedText, setExtractedText] = useState("")
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setExtractedText("")
    }
  }

  const handleExtract = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file.",
        variant: "destructive",
      })
      return
    }

    try {
      const fileBuffer = await file.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: fileBuffer }).promise
      let fullText = ""

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()
        const pageText = content.items.map((item: any) => item.str).join(" ")
        fullText += pageText + "\n\n"
      }

      setExtractedText(fullText.trim())
      toast({
        title: "Success",
        description: "Text extracted successfully!",
      })
    } catch (error) {
      console.error("Error extracting text:", error)
      toast({
        title: "Error",
        description: "Failed to extract text. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">PDF to Text Converter</h1>
          <p className="text-muted-foreground">Extract text content from your PDF files</p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="flex-1"
              />
              <Button onClick={handleExtract} disabled={!file}>
                <FileText className="mr-2 h-4 w-4" />
                Extract Text
              </Button>
            </div>

            {extractedText && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Extracted Text:</h3>
                <div className="p-4 bg-muted rounded-lg whitespace-pre-wrap">
                  {extractedText}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}