import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebTools - Free Online Utilities & Converters",
  description: "Access free online tools for file conversion, PDF manipulation, image editing, and more. Simple, fast, and secure web-based utilities for everyone.",
  keywords: "online tools, pdf converter, password generator, qr code generator, web utilities, free tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolkit.example.com",
    title: "ToolKit - Ultimate Online Tools Collection | Free Web Utilities",
    description: "Transform your workflow with ToolKit's comprehensive suite of free online tools. PDF converter, password generator, QR code maker, and more professional utilities.",
    siteName: "ToolKit",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolKit - Ultimate Online Tools Collection",
    description: "Transform your workflow with ToolKit's comprehensive suite of free online tools.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
  canonical: "https://toolkit.example.com",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

