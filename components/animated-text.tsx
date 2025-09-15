"use client"

import { useState, useEffect } from "react"

const roles = ["Developer", "Engineer", "Student", "Problem Solver", "Tech Enthusiast"]

export function AnimatedText() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`text-primary font-[family-name:var(--font-montserrat)] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {roles[currentRole]}
    </span>
  )
}
