import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Yuvaraj<span className="text-primary">.M</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              ECE Graduate & Entry-Level Software & Electronics Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:yuvarajj2486@gmail.com"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Yuvaraj M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
