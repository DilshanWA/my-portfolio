"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectModal } from "./project-modal"

const projects = [
  {
    title: "E-Commerce Web Application",
    description:
      "A modern e-commerce platform built with Next.js featuring user authentication, shopping cart, and payment integration.",
    fullDescription:
      "A comprehensive e-commerce solution that provides a seamless shopping experience. Built with modern web technologies, this platform includes advanced features like real-time inventory management, secure payment processing, and responsive design that works across all devices.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    features: [
      "User authentication and authorization",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Product search and filtering",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
    fullDescription:
      "A powerful project management tool designed for teams to collaborate effectively. Features real-time updates, drag-and-drop task organization, and comprehensive project analytics to help teams stay productive and organized.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT"],
    features: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task organization",
      "Team member assignment and notifications",
      "Project timeline and milestone tracking",
      "File attachments and comments",
      "Analytics and productivity reports",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application that provides detailed forecasts, weather maps, and location-based weather alerts.",
    fullDescription:
      "An intuitive weather application that delivers accurate forecasts and weather information. Features interactive maps, severe weather alerts, and detailed meteorological data to help users plan their activities effectively.",
    image: "/weather-forecast-app.png",
    technologies: ["JavaScript", "API Integration", "CSS3", "HTML5", "Chart.js"],
    features: [
      "Current weather conditions and forecasts",
      "Interactive weather maps",
      "Location-based weather alerts",
      "Historical weather data",
      "Weather charts and visualizations",
      "Offline functionality with cached data",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
    fullDescription:
      "A stunning personal portfolio that showcases professional work and skills. Built with performance and user experience in mind, featuring smooth animations, responsive design, and optimized loading times.",
    image: "/portfolio-website-design.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "SEO optimized for better visibility",
      "Contact form with email integration",
      "Project showcase with filtering",
      "Performance optimized with Next.js",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with content management, user comments, and SEO optimization for better visibility.",
    fullDescription:
      "A comprehensive blogging platform that empowers content creators. Features a rich text editor, comment system, and advanced SEO tools to help bloggers reach their audience and grow their online presence.",
    image: "/blog-platform-interface.jpg",
    technologies: ["React", "Express.js", "PostgreSQL", "JWT", "Redis", "AWS S3"],
    features: [
      "Rich text editor with markdown support",
      "User authentication and profiles",
      "Comment system with moderation",
      "SEO optimization tools",
      "Image upload and management",
      "Analytics and engagement tracking",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projectsPerSlide = 3
  const totalSlides = Math.ceil(projects.length / projectsPerSlide)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing my journey in software development through various projects and learning experiences
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card text-foreground"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card text-foreground"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Project Cards Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
                >
                  {projects
                    .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                    .map((project, projectIndex) => (
                      <Card
                        key={slideIndex * projectsPerSlide + projectIndex}
                        className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 group overflow-hidden cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                              Click to view details
                            </div>
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                            {project.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 text-xs"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.liveUrl, "_blank")
                              }}
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-border bg-card/50 hover:bg-card text-foreground"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubUrl, "_blank")
                              }}
                            >
                              <Github className="w-3 h-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div
                className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-muted-foreground/50"}`}
              ></div>
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
