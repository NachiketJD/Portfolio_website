"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Gen AI smart Assistant",
      description:
        "A full-featured online store with product listings, cart functionality, and secure checkout process.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information app with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Weather API", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative"
      >
        <div className="absolute -top-10 left-0 text-9xl font-bold text-gray-100 dark:text-gray-800 select-none">
          WORK
        </div>

        <motion.div variants={itemVariants} className="relative z-10 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block">
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 rounded-full mb-10"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm hover:bg-white transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1" /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-900/90 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-900 transition-colors"
                    >
                      <Github size={14} className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 font-medium rounded-lg border border-teal-600 dark:border-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow-md"
          >
            View More Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
