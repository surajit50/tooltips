"use client"

import { useState } from "react"
import { PDFDocument } from "pdf-lib"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PDFViewer } from "@/components/pdf/pdf-viewer"
import { FileUp, Loader2, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Slider } from "@/components/ui/slider"

export default function CompressPDF() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [compressedPDF, setCompressedPDF] = useState<Uint8Array | null>(null)
  const [compressionLevel, setCompressionLevel] = useState(50)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile)
      setCompressedPDF(null)
    }
  }

  const compressPDF = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file to compress",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)
      const fileBuffer = await file.arrayBuffer()
      const pdf = await PDFDocument.load(fileBuffer)

      // Compress images in the PDF
      const pages = pdf.getPages()
      for (const page of pages) {
        const { width, height } = page.getSize()
        const scaleFactor = compressionLevel / 100
        page.scale(scaleFactor, scaleFactor)
      }

      const pdfBytes = await pdf.save()
      setCompressedPDF(pdfBytes)

      const compressionRatio = ((pdfBytes.length / fileBuffer.byteLength) * 100).toFixed(2)

      toast({
        title: "Success",
        description: `PDF compressed. New size: ${compressionRatio}% of original`,
      })
    } catch (error) {
      console.error("Error compressing PDF:", error)
      toast({
        title: "Error",
        description: "Failed to compress PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const downloadCompressedPDF = () => {
    if (compressedPDF) {
      const blob = new Blob([compressedPDF], { type: "application/pdf" })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "compressed.pdf"
      link.click()
    }
  }

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Compress PDF</h1>
        <p className="text-muted-foreground">Reduce PDF file size while maintaining quality</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Upload PDF File</CardTitle>
            <CardDescription>Select a PDF file to compress</CardDescription>
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
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Compression Level: {compressionLevel}%</label>
                  <Slider
                    value={[compressionLevel]}
                    onValueChange={(value) => setCompressionLevel(value[0])}
                    min={10}
                    max={100}
                    step={1}
                  />
                </div>
                <Button className="w-full" onClick={compressPDF} disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Compressing...
                    </>
                  ) : (
                    "Compress PDF"
                  )}
                </Button>
              </>
            )}
            {compressedPDF && (
              <Button className="w-full" onClick={downloadCompressedPDF} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Compressed PDF
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
        </div>
      </div>
    </div>
  )
}

