"use client"

import { Github, Mail } from "lucide-react"
import { personalInfo } from "@/lib/data/personal"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kim Yoon-gi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
