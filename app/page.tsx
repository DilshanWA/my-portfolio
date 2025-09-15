import { NetworkBackground } from "@/components/network-background"
import { TopNavigation } from "@/components/top-navigation"
import { VerticalNavigation } from "@/components/vertical-navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated Network Background */}
      <NetworkBackground />

      <TopNavigation />

      {/* Vertical Navigation */}
      <VerticalNavigation />

      {/* Page Sections */}
      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>

      <footer className="relative z-10 py-8 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2024 Dilshan Thathsara Madusanka. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
