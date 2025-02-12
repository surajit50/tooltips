
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileUp, Download, Scissors } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function PDFSplit() {
  const [file, setFile] = useState<File | null>(null)
  const [pageRanges, setPageRanges] = useState("")
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

  const splitPDF = async () => {
    // Split logic will be implemented here
    toast({
      title: "Coming Soon",
      description: "PDF splitting feature is under development",
    })
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Split PDF</h1>
          <p className="text-muted-foreground">Split your PDF into multiple files by page ranges</p>
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
              <label className="text-sm font-medium">Page Ranges</label>
              <Input 
                placeholder="e.g., 1-3, 4-6, 7-9"
                value={pageRanges}
                onChange={(e) => setPageRanges(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Enter page ranges separated by commas (e.g., 1-3, 4-6, 7-9)
              </p>
            </div>
            <div className="flex justify-end">
              <Button onClick={splitPDF} disabled={!file || !pageRanges}>
                <Scissors className="mr-2 h-4 w-4" />
                Split PDF
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
