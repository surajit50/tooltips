"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", href: "/" },
  { name: "All Tools", href: "/tools" },
  { name: "PDF Tools", href: "/tools/pdf" },
  { name: "About", href: "/about" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <span className="text-xl font-bold">ToolKit</span>
        </Link>
        <nav className="hidden md:flex space-x-4 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tools..." className="pl-8 w-64" />
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

