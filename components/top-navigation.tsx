"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Github, Linkedin, Youtube, Instagram } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "https://github.com/DilshanWA", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dilshan-madusanka", label: "LinkedIn" },
]

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-foreground">Dilshan</h1>
            <span className="text-xl font-light text-muted-foreground">Thathsara</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex  gap-2 ">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        asChild
                        className="w-10 h-10 rounded-full bg-card/30 backdrop-blur-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="w-4 h-4" />
                        </a>
                      </Button>
                    )
                  })}
                </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-card/90 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
