
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileUp, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function WordToPDF() {
  const [file, setFile] = useState<File | null>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile?.type === "application/msword" || 
        selectedFile?.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      setFile(selectedFile)
    } else {
      toast({
        title: "Error",
        description: "Please select a valid Word document (.doc or .docx)",
        variant: "destructive",
      })
    }
  }

  const convertToPDF = async () => {
    // Conversion logic will be implemented here
    toast({
      title: "Coming Soon",
      description: "This feature is under development",
    })
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Word to PDF</h1>
          <p className="text-muted-foreground">Convert Word documents to PDF format</p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <input
              type="file"
              accept=".doc,.docx"
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
              <Button onClick={convertToPDF} disabled={!file}>
                <Download className="mr-2 h-4 w-4" />
                Convert to PDF
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
