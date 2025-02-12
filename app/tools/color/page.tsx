
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ColorTools() {
  const [color, setColor] = useState("#000000")
  const [rgbColor, setRgbColor] = useState({ r: 0, g: 0, b: 0 })

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  const handleColorChange = (hex: string) => {
    setColor(hex)
    const rgb = hexToRgb(hex)
    if (rgb) setRgbColor(rgb)
  }

  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Color Tools</h1>
        <p className="text-muted-foreground">Color conversion and manipulation tools</p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Color Picker</CardTitle>
              <CardDescription>Pick and convert colors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                type="color" 
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="h-32 w-full"
              />
              <div className="space-y-2">
                <div>Hex: {color}</div>
                <div>RGB: rgb({rgbColor.r}, {rgbColor.g}, {rgbColor.b})</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Preview</CardTitle>
              <CardDescription>Preview selected color</CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="w-full h-32 rounded-md border"
                style={{ backgroundColor: color }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
