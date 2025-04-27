"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Internships from "@/components/Internships"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ThemeProvider from "@/components/ThemeProvider"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  const handleScroll = () => {
    const sections = ["hero", "about", "skills", "projects", "internships", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <About />
            <Skills />
            <Projects />
            <Internships />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
