import { Card } from "@/components/ui/card"
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Brain,
  Cloud,
  Shield,
  Zap,
  Cpu,
  Monitor,
  Layers,
  Settings,
  Rocket,
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend & Design",
    technologies: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Layers },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind", icon: Palette },
      { name: "HTML/CSS", icon: Globe },
      { name: "Figma", icon: Monitor },
    ],
  },
  {
    title: "Backend & Cloud",
    technologies: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Cpu },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Rocket },
    ],
  },
  {
    title: "AI & Automation",
    technologies: [
      { name: "Machine Learning", icon: Brain },
      { name: "APIs", icon: Zap },
      { name: "DevOps", icon: Settings },
      { name: "Git", icon: GitBranch },
      { name: "Mobile Dev", icon: Smartphone },
      { name: "Security", icon: Shield },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technologies I work with to build innovative solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Technology Icons */}
                <div className="flex items-center gap-3 ml-8">
                  {category.technologies.map((tech, techIndex) => {
                    const Icon = tech.icon
                    return (
                      <div key={techIndex} className="relative group/icon" title={tech.name}>
                        <div className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <Icon className="w-5 h-5 text-primary group-hover/icon:text-primary/80" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-border/50">
                          {tech.name}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
