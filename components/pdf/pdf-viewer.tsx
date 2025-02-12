"use client"

import { PDFDocument } from "pdf-lib"
import { useEffect, useState } from "react"

interface PDFViewerProps {
  file: File | null
}

export const PDFViewer = ({ file }: PDFViewerProps) => {
  const [pdf, setPdf] = useState<PDFDocument | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadPdf = async () => {
      if (file) {
        setLoading(true)
        try {
          const fileBuffer = await file.arrayBuffer()
          const loadedPdf = await PDFDocument.load(fileBuffer)
          setPdf(loadedPdf)
        } catch (error) {
          console.error("Error loading PDF:", error)
        } finally {
          setLoading(false)
        }
      }
    }
    loadPdf()
  }, [file])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!pdf) {
    return <div>No PDF selected</div>
  }

  return (
    <div>
      {/* Render PDF here.  Implementation depends on chosen library.  This is a placeholder */}
      <p>PDF Viewer Placeholder</p>
    </div>
  )
}

