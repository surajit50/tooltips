
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function TextTools() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const base64Encode = () => {
    try {
      setOutput(btoa(input))
    } catch (e) {
      setOutput("Error encoding text")
    }
  }

  const base64Decode = () => {
    try {
      setOutput(atob(input))
    } catch (e) {
      setOutput("Error decoding Base64")
    }
  }

  const urlEncode = () => {
    setOutput(encodeURIComponent(input))
  }

  const urlDecode = () => {
    try {
      setOutput(decodeURIComponent(input))
    } catch (e) {
      setOutput("Error decoding URL")
    }
  }

  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Text Tools</h1>
        <p className="text-muted-foreground">Encode, decode and transform text</p>

        <Tabs defaultValue="base64" className="space-y-4">
          <TabsList>
            <TabsTrigger value="base64">Base64</TabsTrigger>
            <TabsTrigger value="url">URL Encoding</TabsTrigger>
          </TabsList>

          <TabsContent value="base64" className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Text</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[200px]"
                    placeholder="Enter text to encode/decode..."
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Output</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    value={output}
                    readOnly
                    className="min-h-[200px]"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-4">
              <Button onClick={base64Encode}>Encode to Base64</Button>
              <Button onClick={base64Decode} variant="outline">Decode from Base64</Button>
            </div>
          </TabsContent>

          <TabsContent value="url" className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Text</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[200px]"
                    placeholder="Enter text to encode/decode..."
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Output</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    value={output}
                    readOnly
                    className="min-h-[200px]"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-4">
              <Button onClick={urlEncode}>URL Encode</Button>
              <Button onClick={urlDecode} variant="outline">URL Decode</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
