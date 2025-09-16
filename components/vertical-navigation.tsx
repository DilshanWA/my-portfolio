"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Youtube, Instagram, GraduationCap } from "lucide-react"

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "contact", icon: Mail, label: "Contact" },
]

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function VerticalNavigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* Main Navigation */}
      <div className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 rounded-full transition-all duration-300 group relative ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card/50 backdrop-blur-sm text-muted-foreground hover:bg-primary/20 hover:text-primary"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute right-full mr-3 px-2 py-1 bg-card text-card-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </Button>
          )
        })}
      </div>

      {/*<div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
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
      </div> */}
      
    </nav>
  )
}
