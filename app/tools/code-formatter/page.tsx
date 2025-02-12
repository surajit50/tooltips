
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function CodeFormatter() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [formatted, setFormatted] = useState("")

  const formatCode = () => {
    // Basic indentation formatting
    try {
      if (language === "javascript" || language === "json") {
        const parsed = JSON.parse(code)
        setFormatted(JSON.stringify(parsed, null, 2))
      } else {
        // Basic indentation for other languages
        const lines = code.split('\n')
        let indent = 0
        const formatted = lines.map(line => {
          let spaces = '  '.repeat(indent)
          if (line.includes('}') || line.includes(')')) indent--
          spaces = '  '.repeat(Math.max(0, indent))
          if (line.includes('{') || line.includes('(')) indent++
          return spaces + line.trim()
        }).join('\n')
        setFormatted(formatted)
      }
    } catch (e) {
      setFormatted("Error formatting code: " + e.message)
    }
  }

  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Code Formatter</h1>
        <p className="text-muted-foreground">Format and beautify your code</p>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={formatCode}>Format Code</Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Input</CardTitle>
                <CardDescription>Paste your code here</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="min-h-[300px] font-mono"
                  placeholder="Paste code here..."
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Formatted Output</CardTitle>
                <CardDescription>Formatted code will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  value={formatted}
                  readOnly
                  className="min-h-[300px] font-mono"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
