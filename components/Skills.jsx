"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
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

  // Remove the skillCategories array and replace with:
  const skills = [
    // Operating Systems
    { name: "Linux", icon: <Terminal className="w-6 h-6" /> },
    { name: "Windows", icon: <Monitor className="w-6 h-6" /> },
    { name: "Unix", icon: <Terminal className="w-6 h-6" /> },
    { name: "macOS", icon: <Monitor className="w-6 h-6" /> },
    { name: "Shell Scripting", icon: <Terminal className="w-6 h-6" /> },

    // Computer Networks
    { name: "TCP/IP", icon: <Network className="w-6 h-6" /> },
    { name: "DNS", icon: <Globe className="w-6 h-6" /> },
    { name: "HTTP/HTTPS", icon: <Lock className="w-6 h-6" /> },
    { name: "Routing", icon: <Wifi className="w-6 h-6" /> },
    { name: "Network Security", icon: <Shield className="w-6 h-6" /> },
    { name: "Firewalls", icon: <Shield className="w-6 h-6" /> },

    // Cloud & Virtualization
    { name: "AWS", icon: <Cloud className="w-6 h-6" /> },
    { name: "Azure", icon: <Cloud className="w-6 h-6" /> },
    { name: "Docker", icon: <Layers className="w-6 h-6" /> },
    { name: "Kubernetes", icon: <Layers className="w-6 h-6" /> },
    { name: "VMware", icon: <Server className="w-6 h-6" /> },
    { name: "Terraform", icon: <Settings className="w-6 h-6" /> },

    // Web Development
    { name: "HTML5", icon: <Code className="w-6 h-6" /> },
    { name: "CSS3", icon: <Code className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "Express", icon: <Server className="w-6 h-6" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
    { name: "RESTful APIs", icon: <Workflow className="w-6 h-6" /> },

    // Software Development
    { name: "Java", icon: <Cpu className="w-6 h-6" /> },
    { name: "Python", icon: <Terminal className="w-6 h-6" /> },
    { name: "C/C++", icon: <Terminal className="w-6 h-6" /> },
    { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
    { name: "Agile", icon: <Workflow className="w-6 h-6" /> },
    { name: "OOP", icon: <Layers className="w-6 h-6" /> },
    { name: "Data Structures", icon: <Database className="w-6 h-6" /> },
    { name: "Algorithms", icon: <Workflow className="w-6 h-6" /> },

    // Mobile Development
    { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Flutter", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Android", icon: <Smartphone className="w-6 h-6" /> },
    { name: "iOS", icon: <Smartphone className="w-6 h-6" /> },
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

        {/* Hexagon Skill Grid */}
        <motion.div variants={containerVariants} className="hexagon-container">
          {skills.map((skill, index) => (
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

        {/* Skill Level Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 italic">
            "Always learning and expanding my skillset to stay at the forefront of technology."
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
