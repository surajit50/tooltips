"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileUp, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function PDFOCR() {
  const [file, setFile] = useState<File | null>(null)
  const [language, setLanguage] = useState("eng")
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile)
    } else {
      toast({
        title: "Error",
        description: "Please select a valid PDF file",
        variant: "destructive",
      })
    }
  }

  const performOCR = async () => {
    toast({
      title: "Coming Soon",
      description: "OCR feature is under development",
    })
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">PDF OCR</h1>
          <p className="text-muted-foreground">Extract text from scanned PDF documents</p>
        </div>

        <Card className="p-6 space-y-4">
          <div className="space-y-4">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full"
            />
            {file && (
              <div className="flex items-center gap-2 p-2 border rounded">
                <FileUp className="h-4 w-4" />
                <span>{file.name}</span>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium">Language</label>
              <select 
                className="w-full p-2 border rounded"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="eng">English</option>
                <option value="fra">French</option>
                <option value="deu">German</option>
                <option value="spa">Spanish</option>
              </select>
            </div>
            <div className="flex justify-end">
              <Button onClick={performOCR} disabled={!file}>
                <Search className="mr-2 h-4 w-4" />
                Perform OCR
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}