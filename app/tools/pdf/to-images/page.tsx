"use client"

import { useState } from "react"
import { PDFDocument } from "pdf-lib"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PDFViewer } from "@/components/pdf/pdf-viewer"
import { FileUp, Loader2, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import JSZip from "jszip"

export default function PDFToImages() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [convertedImages, setConvertedImages] = useState<string[]>([])
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile)
      setConvertedImages([])
    }
  }

  const convertPDFToImages = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file to convert",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)
      const fileBuffer = await file.arrayBuffer()
      const pdf = await PDFDocument.load(fileBuffer)
      const totalPages = pdf.getPageCount()

      const images: string[] = []

      for (let i = 0; i < totalPages; i++) {
        const page = pdf.getPages()[i]
        const pngImage = await page.exportAsImage({ scale: 2 })
        const pngBytes = await pngImage.arrayBuffer()
        const base64String = btoa(String.fromCharCode(...new Uint8Array(pngBytes)))
        images.push(`data:image/png;base64,${base64String}`)
      }

      setConvertedImages(images)

      toast({
        title: "Success",
        description: `Converted ${totalPages} pages to images`,
      })
    } catch (error) {
      console.error("Error converting PDF to images:", error)
      toast({
        title: "Error",
        description: "Failed to convert PDF to images. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const downloadImages = async () => {
    const zip = new JSZip()

    convertedImages.forEach((image, index) => {
      const base64Data = image.replace(/^data:image\/png;base64,/, "")
      zip.file(`page-${index + 1}.png`, base64Data, { base64: true })
    })

    const content = await zip.generateAsync({ type: "blob" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(content)
    link.download = "pdf-images.zip"
    link.click()
  }

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">PDF to Images</h1>
        <p className="text-muted-foreground">Convert PDF pages to high-quality PNG images</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Upload PDF File</CardTitle>
            <CardDescription>Select a PDF file to convert its pages to images</CardDescription>
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
              <Button className="w-full" onClick={convertPDFToImages} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Converting...
                  </>
                ) : (
                  "Convert to Images"
                )}
              </Button>
            )}
            {convertedImages.length > 0 && (
              <Button className="w-full" onClick={downloadImages} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Images
              </Button>
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
          {convertedImages.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Converted Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {convertedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Page ${index + 1}`}
                    className="w-full h-auto border rounded"
                  />
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

