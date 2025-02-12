
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileUp } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function PDFToExcel() {
  const [file, setFile] = useState<File | null>(null)
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

  const convertToExcel = async () => {
    toast({
      title: "Coming Soon",
      description: "PDF to Excel conversion is under development",
    })
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">PDF to Excel Converter</h1>
          <p className="text-muted-foreground">Convert your PDF files to Excel spreadsheets</p>
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
            <div className="flex justify-end">
              <Button onClick={convertToExcel} disabled={!file}>
                Convert to Excel
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
