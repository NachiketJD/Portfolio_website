"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useState, useRef } from "react"
import {
  Server,
  Globe,
  Cloud,
  Code,
  Terminal,
  Database,
  Shield,
  Cpu,
  Layers,
  Smartphone,
  Workflow,
  GitBranch,
  Monitor,
  Network,
  Wifi,
  Lock,
  Settings,
} from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState("all")

  // Define categories for the tabs
  const categories = [
    { id: "all", name: "All Skills", icon: <Code className="w-6 h-6" /> },
    { id: "web", name: "Web Development", icon: <Code className="w-6 h-6" /> },
    { id: "os", name: "Operating Systems", icon: <Server className="w-6 h-6" /> },
    { id: "networks", name: "Computer Networks", icon: <Globe className="w-6 h-6" /> },
    { id: "cloud", name: "Cloud & Virtualization", icon: <Cloud className="w-6 h-6" /> },
    { id: "sde", name: "Software Development", icon: <Terminal className="w-6 h-6" /> },
    // { id: "mobile", name: "Mobile Development", icon: <Smartphone className="w-6 h-6" /> },
  ]

  // Explicitly list all skills with their categories
  const skills = [
    
    // Web Development
     { name: "HTML5", icon: <Code className="w-6 h-6" />, category: "web" },
    { name: "CSS3", icon: <Code className="w-6 h-6" />, category: "web" },
    { name: "JavaScript", icon: <Code className="w-6 h-6" />, category: "web" },
    { name: "React", icon: <Code className="w-6 h-6" />, category: "web" },
    { name: "Node.js", icon: <Server className="w-6 h-6" />, category: "web" },
    { name: "Express", icon: <Server className="w-6 h-6" />, category: "web" },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, category: "web" },

    // Operating Systems
    { name: "Linux", icon: <Terminal className="w-6 h-6" />, category: "os" },
    { name: "Windows", icon: <Monitor className="w-6 h-6" />, category: "os" },
    { name: "Unix", icon: <Terminal className="w-6 h-6" />, category: "os" },
    // { name: "macOS", icon: <Monitor className="w-6 h-6" />, category: "os" },
    { name: "Shell Scripting", icon: <Terminal className="w-6 h-6" />, category: "os" },

    // Computer Networks
    { name: "TCP/IP", icon: <Network className="w-6 h-6" />, category: "networks" },
    { name: "DNS", icon: <Globe className="w-6 h-6" />, category: "networks" },
    { name: "HTTP/HTTPS", icon: <Lock className="w-6 h-6" />, category: "networks" },
    { name: "Routing", icon: <Wifi className="w-6 h-6" />, category: "networks" },
    { name: "Network Security", icon: <Shield className="w-6 h-6" />, category: "networks" },
    // { name: "Firewalls", icon: <Shield className="w-6 h-6" />, category: "networks" },

    // Cloud & Virtualization
    { name: "AWS", icon: <Cloud className="w-6 h-6" />, category: "cloud" },
    // { name: "Azure", icon: <Cloud className="w-6 h-6" />, category: "cloud" },
    { name: "Docker", icon: <Layers className="w-6 h-6" />, category: "cloud" },
    // { name: "Kubernetes", icon: <Layers className="w-6 h-6" />, category: "cloud" },
    { name: "VMware", icon: <Server className="w-6 h-6" />, category: "cloud" },
    // { name: "Terraform", icon: <Settings className="w-6 h-6" />, category: "cloud" },

   
    // { name: "RESTful APIs", icon: <Workflow className="w-6 h-6" />, category: "web" },

    // Software Development
     { name: "C/C++", icon: <Terminal className="w-6 h-6" />, category: "sde" },
    { name: "Golang", icon: <Cpu className="w-6 h-6" />, category: "sde" },
    { name: "Python", icon: <Terminal className="w-6 h-6" />, category: "sde" },
   { name: "Java", icon: <Cpu className="w-6 h-6" />, category: "sde" },
    { name: "Git", icon: <GitBranch className="w-6 h-6" />, category: "sde" },
    { name: "Agile", icon: <Workflow className="w-6 h-6" />, category: "sde" },
    { name: "OOP", icon: <Layers className="w-6 h-6" />, category: "sde" },
    { name: "Data Structures", icon: <Database className="w-6 h-6" />, category: "sde" },
    { name: "Algorithms", icon: <Workflow className="w-6 h-6" />, category: "sde" },

    // // Mobile Development
    // { name: "React Native", icon: <Smartphone className="w-6 h-6" />, category: "mobile" },
    // { name: "Flutter", icon: <Smartphone className="w-6 h-6" />, category: "mobile" },
    // { name: "Android", icon: <Smartphone className="w-6 h-6" />, category: "mobile" },
    // { name: "iOS", icon: <Smartphone className="w-6 h-6" />, category: "mobile" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative"
      >
        <div className="absolute -top-10 right-0 text-9xl font-bold text-gray-100 dark:text-gray-800 select-none text-right">
          SKILLS
        </div>

        <motion.div variants={itemVariants} className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block">
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 rounded-full mx-auto mb-10"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are all the technologies and tools I work with across different domains
          </p>
        </motion.div>

        {/* Skill Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-teal-600 to-amber-500 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Category Description */}
        {activeCategory !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              {categories.find((cat) => cat.id === activeCategory)?.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {activeCategory === "os" && "Experience with various operating systems and system administration."}
              {activeCategory === "networks" && "Knowledge of network protocols, architecture, and security."}
              {activeCategory === "cloud" &&
                "Expertise in cloud platforms, containerization, and infrastructure as code."}
              {activeCategory === "web" && "Full-stack web development skills from frontend to backend."}
              {activeCategory === "sde" && "Core software development skills, languages, and best practices."}
              {activeCategory === "mobile" && "Mobile application development for different platforms."}
            </p>
          </motion.div>
        )}

        {/* Hexagon Skill Grid */}
        <motion.div
          key={activeCategory} // Add key to trigger re-animation when category changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hexagon-container"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="hexagon-item"
            >
              <div className="hexagon-inner bg-gradient-to-br from-teal-500 to-amber-400 dark:from-teal-600 dark:to-amber-500">
                <div className="hexagon-content text-white">
                  <div className="skill-icon mb-3">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
            Showing <span className="font-bold text-teal-600 dark:text-teal-400">{filteredSkills.length}</span> skills
            {activeCategory !== "all" && (
              <span>
                {" "}
                in <span className="font-bold">{categories.find((cat) => cat.id === activeCategory)?.name}</span>
              </span>
            )}
          </div>
        </motion.div>

        {/* Skill Level Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 italic">
            "Always learning and expanding my skillset to stay at the forefront of technology."
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
