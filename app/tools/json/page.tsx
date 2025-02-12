
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function JSONTools() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError("")
    } catch (e) {
      setError("Invalid JSON")
    }
  }

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError("")
    } catch (e) {
      setError("Invalid JSON")
    }
  }

  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">JSON Tools</h1>
        <p className="text-muted-foreground">Format, validate and minify JSON data</p>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input JSON</CardTitle>
              <CardDescription>Paste your JSON here</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[300px] font-mono"
                placeholder="Paste JSON here..."
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Output</CardTitle>
              <CardDescription>Formatted or minified JSON will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                value={error || output}
                readOnly
                className="min-h-[300px] font-mono"
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button onClick={formatJSON}>Format JSON</Button>
          <Button onClick={minifyJSON} variant="outline">Minify JSON</Button>
        </div>
      </div>
    </div>
  )
}
