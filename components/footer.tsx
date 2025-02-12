
import { SocialIcon } from "@/components/ui/social-icon"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Tools</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/tools/pdf" className="text-sm text-muted-foreground hover:text-foreground">
                  PDF Tools
                </Link>
              </li>
              <li>
                <Link href="/tools/image" className="text-sm text-muted-foreground hover:text-foreground">
                  Image Tools
                </Link>
              </li>
              <li>
                <Link href="/tools/dev" className="text-sm text-muted-foreground hover:text-foreground">
                  Developer Tools
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Social</h3>
            <div className="flex space-x-3">
              <SocialIcon url="https://twitter.com/webtools" />
              <SocialIcon url="https://github.com/webtools" />
              <SocialIcon url="https://linkedin.com/company/webtools" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} WebTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
