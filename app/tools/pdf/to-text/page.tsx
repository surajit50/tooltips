"use client"

import { useState } from "react"
import * as pdfjsLib from "pdfjs-dist"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PDFViewer } from "@/components/pdf/pdf-viewer"
import { FileUp, Loader2, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

export default function PDFToText() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [extractedText, setExtractedText] = useState("")
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile)
      setExtractedText("")
    }
  }

  const extractText = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file to extract text from",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)
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
        description: "Text extracted successfully from PDF",
      })
    } catch (error) {
      console.error("Error extracting text from PDF:", error)
      toast({
        title: "Error",
        description: "Failed to extract text from PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const downloadExtractedText = () => {
    if (extractedText) {
      const blob = new Blob([extractedText], { type: "text/plain" })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "extracted_text.txt"
      link.click()
    }
  }

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">PDF to Text</h1>
        <p className="text-muted-foreground">Extract text content from PDF documents</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Upload PDF File</CardTitle>
            <CardDescription>Select a PDF file to extract text from</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid place-items-center border-2 border-dashed rounded-lg p-8">
              <label className="flex flex-col items-center space-y-2 cursor-pointer">
                <FileUp className="h-8 w-8" />
                <span className="text-sm font-medium">Drop PDF file here or click to upload</span>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
            {file && (
              <Button className="w-full" onClick={extractText} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Extracting Text...
                  </>
                ) : (
                  "Extract Text"
                )}
              </Button>
            )}
            {extractedText && (
              <>
                <Textarea value={extractedText} readOnly className="min-h-[200px]" />
                <Button className="w-full" onClick={downloadExtractedText} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Extracted Text
                </Button>
              </>
            )}
          </CardContent>
        </Card>
        <div className="space-y-4">
          {file && (
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <PDFViewer file={file} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

