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
  title: "ToolKit - Free Online Utilities & Converters",
  description:
    "Free online tools including PDF tools, Word Counter, Password Generator, and more. Simple, fast, and easy to use web utilities.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolkit.example.com",
    title: "ToolKit - Free Online Utilities & Converters",
    description:
      "Free online tools including PDF tools, Word Counter, Password Generator, and more. Simple, fast, and easy to use web utilities.",
    siteName: "ToolKit",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolKit - Free Online Utilities & Converters",
    description:
      "Free online tools including PDF tools, Word Counter, Password Generator, and more. Simple, fast, and easy to use web utilities.",
  },
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

