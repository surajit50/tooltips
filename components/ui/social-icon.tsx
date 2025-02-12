import { Github, Twitter } from "lucide-react"
import Link from "next/link"

interface SocialIconProps {
  url: string
}

export function SocialIcon({ url }: SocialIconProps) {
  const icon = url.includes("github.com") ? <Github className="h-5 w-5" /> : <Twitter className="h-5 w-5" />

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
      {icon}
    </Link>
  )
}

