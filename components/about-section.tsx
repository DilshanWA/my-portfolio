import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Lightbulb, Code, Users, Target } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and creative solutions to build better applications.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, efficient code that follows best practices and industry standards.",
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Creating applications that prioritize user experience and solve real-world problems.",
  },
  {
    icon: Target,
    title: "Continuous Learning",
    description: "Always expanding my knowledge and staying current with the latest development trends.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently studying{" "}
              <span className="text-primary font-semibold">BSc Software Engineering (Honours)</span> at
              <span className="text-foreground font-semibold"> Open University of Sri Lanka</span>. I enjoy building web
              apps and learning new technologies. My journey in tech started with a curiosity about how websites work,
              which led me to pursue formal education in ICT.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a web developer, I strive to create clean, efficient, and user-friendly applications. I'm constantly
              expanding my skill set and staying up-to-date with the latest industry trends.
            </p>

            <div className="pt-6">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold bg-transparent"
              >
                <FileText className="mr-2 w-5 h-5" />
                View My Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
