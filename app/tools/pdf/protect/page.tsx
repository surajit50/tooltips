
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileUp, Lock } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function PDFProtect() {
  const [file, setFile] = useState<File | null>(null)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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

  const protectPDF = async () => {
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    // Protection logic will be implemented here
    toast({
      title: "Coming Soon",
      description: "PDF protection feature is under development",
    })
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Protect PDF</h1>
          <p className="text-muted-foreground">Add password protection to your PDF file</p>
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
              <label className="text-sm font-medium">Password</label>
              <Input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <Input 
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={protectPDF} disabled={!file || !password || !confirmPassword}>
                <Lock className="mr-2 h-4 w-4" />
                Protect PDF
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
