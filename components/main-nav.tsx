import Link from "next/link"
import { BriefcaseConveyorBelt } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center gap-2">
        <BriefcaseConveyorBelt className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">KLogBook</span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Discover
        </Link>
        <Link
          href="/Fragments" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Fragments
        </Link>
        <Link href="/casestudy" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Casestudy
        </Link>
        <Link href="/learn" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Learn
        </Link>
        <Link href="https://nextra-blog-3t4s.vercel.app/" className="text-sm font-medium text-muted-foreground transition-colors hovor: text-primary">
          Blog
        </Link>
        
      </nav>
    </div>
  )
}
