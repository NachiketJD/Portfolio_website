"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" className="py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative"
      >
        <div className="absolute -top-10 left-0 text-9xl font-bold text-gray-100 dark:text-gray-800 select-none">
          ABOUT
        </div>

        <motion.div variants={itemVariants} className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 rounded-full mb-10"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div variants={itemVariants} className="md:col-span-5 relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-xl">
                {/* Placeholder for your photo */}
                <div className="text-gray-500 dark:text-gray-400 text-center p-8">
                  <div className="text-6xl mb-4">📷</div>
                  <p>Your photo will be placed here</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal-600 dark:border-teal-400 rounded-2xl z-0"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-600 dark:bg-teal-400 rounded-xl z-0 opacity-20"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-8 -right-8 md:right-0 px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-20"
            >
              <div className="text-center">
                {/* <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div> */}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Hello! I'm a passionate developer with a strong foundation in web development and a keen eye for creating
              elegant user experiences. My journey in technology began with a curiosity about how digital products are
              built, and has evolved into a professional career where I blend technical expertise with creative
              problem-solving.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I specialize in front-end development with React, but I'm also comfortable working across the full stack.
              I believe in writing clean, maintainable code and creating intuitive interfaces that users love to
              interact with. I am also.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-900 dark:text-white">Name:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-4">Nachiket Jayant Deshpande</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-4">nachiet.j.deshpande@gmail.com</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-900 dark:text-white">Location:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-4">Nagpur</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-900 dark:text-white">Availability:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-4">Happy to freelance/Internship/Exploration</p>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-amber-500 hover:from-teal-700 hover:to-amber-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
