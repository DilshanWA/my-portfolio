import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Open University of Sri Lanka",
    location: "Colombo, Sri Lanka",
    period: "2022 - Present",
    status: "Undergraduate",
    description:
      "Specializing in software development, algorithms, and system design with focus on modern web technologies.",
    gpa: "3.8/4.0",
  },
]

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    skills: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Python Programming",
    issuer: "Coursera",
    date: "2023",
    skills: ["Python", "OOP", "Data Analysis"],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                        <p className="text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground mb-3">{edu.description}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          {edu.gpa && (
                            <Badge variant="secondary" className="bg-primary text-primary-foreground">
                              GPA: {edu.gpa}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary text-primary-foreground text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
