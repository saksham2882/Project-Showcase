import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/10 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link href="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-all">
            <span className="text-cyan-400">{"< "}</span>
            Projects
            <span className="text-cyan-400">{" />"}</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="https://github.com/saksham2882"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/saksham-agrahari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>

            <Link
              href="mailto:agrahari0899@gmail.com"
              className="text-gray-400 hover:text-orange-400 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </Link>

          </nav>
        </div>
      </div>
    </header>
  )
}
