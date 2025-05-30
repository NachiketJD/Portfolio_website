"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Internships() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const internships = [
    {
      company: "Compex-25 VCMDWA",
      position: "Technical Consulting Intern",
      period: "Nov 2024 - Jan 2025",
      location: "Nagpur",
      description:
        "Assessed industry-specific challenges in Legal, Finance, Manufacturing, Education, and Pharma, providing AI-driven insights to optimize workflows and decision-making. Consulted with professionals at VCMDWA, analyzing business requirements and recommending tailored AI solutions, reinforcing expertise in AI Consulting and Industry Applications.Presented cutting-edge AI tools and innovations at Comp-Ex 2025, enhancing AI awareness and engaging with IT professionals, AI engineers, and industry leaders on emerging AI trends",
      skills: ["AI", "Consulting", "React", "Git", "Product Management", "Technical Documentation"],
    },
    {
      company: "Vruksh Ecosystem",
      position: "Business Technology Analyst",
      period: "July 2024 - Jan 2025",
      location: "Remote",
      description:
        "Spearheaded the development of AI-driven solutions, integrating Novel.sh and OpenWebUI to streamline presentations, documentation, and spreadsheet management. Engineered a cutting-edge Next.js SaaS dashboard, optimizing user experience and functionality.",
      skills: ["Node.js", "Express", "React", "MongoDB"," Novel.sh"],
    },
    {
      company: "Rainbow Software Solutions",
      position: "Web Development Intern",
      period: "May 2024 - June 2024",
      location: "Nagpur",
      description:
        "Developed a custom CRM using the MERN stack and Material UI, integrating modules for Accounts, Vendors, Staff, and Expenses. Automated Invoices and Deposits via a Node.js backend to streamline cash flow. Integrated Email.js and Twilio for dynamic email templates, enhancing communication efficiency.",
      skills: ["React", "CSS ", "MERN"],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="internships" className="py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative"
      >
        <div className="absolute -top-10 right-0 text-9xl font-bold text-gray-100 dark:text-gray-800 select-none text-right">
          EXPERIENCE
        </div>

        <motion.div variants={itemVariants} className="relative z-10 text-right mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block">
            My <span className="text-teal-600 dark:text-teal-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 rounded-full ml-auto mb-10"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl ml-auto">
            My professional journey and the valuable experience I've gained along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>

          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              variants={itemVariants}
              className={`relative mb-12 md:mb-0 md:pb-12 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "right-0 md:left-auto md:right-0" : "left-0 md:left-0 md:right-auto"
                } md:translate-x-1/2 w-5 h-5 rounded-full bg-teal-600 dark:bg-teal-400 border-4 border-white dark:border-gray-900 z-10`}
              ></div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-4">
                    <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{internship.position}</h3>
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400">{internship.company}</h4>
                  </div>
                </div>

                <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4 mb-2">
                    <Calendar size={16} className="mr-1" />
                    {internship.period}
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    {internship.location}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{internship.description}</p>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
