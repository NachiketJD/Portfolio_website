"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a
              href="#"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-500 dark:from-teal-400 dark:to-amber-400"
            >
              Portfolio
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Creating beautiful digital experiences with clean code and creative solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Internships", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-end justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-teal-600 to-amber-500 text-white rounded-full mb-4 hover:from-teal-700 hover:to-amber-600 transition-colors duration-300 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
            <div className="text-right">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Nachiket Jayant Deshpande. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Happy to see U here</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
