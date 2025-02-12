"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Download, Loader2 } from "lucide-react"
import QRCode from "qrcode"

export default function QRCodeGenerator() {
  const [text, setText] = useState("")
  const [qrCode, setQRCode] = useState("")
  const [loading, setLoading] = useState(false)

  const generateQRCode = async () => {
    if (!text) return

    setLoading(true)
    try {
      const url = await QRCode.toDataURL(text)
      setQRCode(url)
    } catch (err) {
      console.error("Error generating QR code:", err)
    } finally {
      setLoading(false)
    }
  }

  const downloadQRCode = () => {
    const link = document.createElement("a")
    link.href = qrCode
    link.download = "qrcode.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">QR Code Generator</h1>
        <p className="text-muted-foreground">Generate QR codes for URLs, text, or contact information</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Generate QR Code</CardTitle>
          <CardDescription>Enter the text or URL for your QR code</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="qr-text">Text or URL</Label>
            <Input
              id="qr-text"
              placeholder="Enter text or URL"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <Button onClick={generateQRCode} disabled={!text || loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate QR Code"
            )}
          </Button>
          {qrCode && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <img src={qrCode || "/placeholder.svg"} alt="Generated QR Code" className="border rounded-lg" />
              </div>
              <Button onClick={downloadQRCode} variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download QR Code
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

