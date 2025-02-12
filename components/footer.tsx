import { SocialIcon } from "@/components/ui/social-icon"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-sm text-muted-foreground hover:text-foreground">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-3">
              <SocialIcon url="https://twitter.com/toolkit" />
              <SocialIcon url="https://github.com/toolkit" />
              <SocialIcon url="https://linkedin.com/company/toolkit" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ToolKit. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Made with ❤️ by the ToolKit team</p>
        </div>
      </div>
    </footer>
  )
}

