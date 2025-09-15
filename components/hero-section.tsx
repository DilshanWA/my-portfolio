"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground">Hi, I'm</h2>
              <h1 className="text-5xl lg:text-7xl font-black text-balance leading-tight">
                <span className="text-foreground font-[family-name:var(--font-montserrat)]">Dilshan</span>
                <br />
                <span className="text-foreground font-[family-name:var(--font-montserrat)]">Thathsara</span>
                <br />
                <span className="text-primary font-[family-name:var(--font-montserrat)]">Madusanka</span>
              </h1>
              <h3 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">
                <span className="text-muted-foreground">I'm a </span>
                <AnimatedText />
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm currently pursuing my BSE in Software Engineering at the Open University of Sri Lanka. Passionate
              about building innovative web applications and exploring cutting-edge technologies. I enjoy turning
              complex problems into simple, beautiful solutions through clean and efficient code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-card/50 backdrop-blur-sm hover:bg-card text-foreground px-8 py-6 text-lg font-semibold"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Avatar placeholder with futuristic styling */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-float"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-card to-card/50 rounded-full backdrop-blur-sm border border-border"></div>
                <img
                  src="/professional-software-engineering-student-avatar.jpg"
                  alt="Dilshan Thathsara Madusanka - Software Engineering Student"
                  className="absolute inset-8 w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse-glow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/60 rounded-full animate-pulse-glow"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
