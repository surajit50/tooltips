"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileUp, Type, Image as ImageIcon } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function PDFWatermark() {
  const [file, setFile] = useState<File | null>(null)
  const [watermarkText, setWatermarkText] = useState("")
  const [watermarkImage, setWatermarkImage] = useState<File | null>(null)
  const [watermarkType, setWatermarkType] = useState<"text" | "image">("text")
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "pdf" | "image") => {
    const selectedFile = e.target.files?.[0]
    if (type === "pdf" && selectedFile?.type === "application/pdf") {
      setFile(selectedFile)
    } else if (type === "image" && selectedFile?.type.startsWith("image/")) {
      setWatermarkImage(selectedFile)
    } else {
      toast({
        title: "Error",
        description: `Please select a valid ${type === "pdf" ? "PDF" : "image"} file`,
        variant: "destructive",
      })
    }
  }

  const addWatermark = async () => {
    toast({
      title: "Coming Soon",
      description: "Watermark feature is under development",
    })
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Add Watermark to PDF</h1>
          <p className="text-muted-foreground">Add text or image watermark to your PDF</p>
        </div>

        <Card className="p-6 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">PDF File</label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, "pdf")}
                className="w-full mt-1"
              />
            </div>
            {file && (
              <div className="flex items-center gap-2 p-2 border rounded">
                <FileUp className="h-4 w-4" />
                <span>{file.name}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium">Watermark Type</label>
              <div className="flex gap-4">
                <Button 
                  variant={watermarkType === "text" ? "default" : "outline"}
                  onClick={() => setWatermarkType("text")}
                >
                  <Type className="mr-2 h-4 w-4" />
                  Text
                </Button>
                <Button 
                  variant={watermarkType === "image" ? "default" : "outline"}
                  onClick={() => setWatermarkType("image")}
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Image
                </Button>
              </div>
            </div>

            {watermarkType === "text" ? (
              <div className="space-y-2">
                <label className="text-sm font-medium">Watermark Text</label>
                <Input 
                  value={watermarkText}
                  onChange={(e) => setWatermarkText(e.target.value)}
                  placeholder="Enter watermark text"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-medium">Watermark Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "image")}
                  className="w-full"
                />
              </div>
            )}

            <div className="flex justify-end">
              <Button onClick={addWatermark} disabled={!file || (!watermarkText && !watermarkImage)}>
                Add Watermark
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}