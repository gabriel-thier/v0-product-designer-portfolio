"use client"

import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark

    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")

    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-lg font-light tracking-tight">
          Designer
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          <Link href="/" className="text-sm hover:text-muted-foreground transition-colors">
            Casos
          </Link>
          <a href="#about" className="text-sm hover:text-muted-foreground transition-colors">
            Sobre
          </a>
          <a href="mailto:gabriel.thier@gmail.com" className="text-sm hover:text-muted-foreground transition-colors">
            Contato
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded transition-colors"
            aria-label="Trocar tema"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded transition-colors"
            aria-label="Trocar tema"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm hover:text-muted-foreground transition-colors">
                Casos
              </Link>
              <a href="#about" className="text-sm hover:text-muted-foreground transition-colors">
                Sobre
              </a>
              <a
                href="mailto:gabriel.thier@gmail.com"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
