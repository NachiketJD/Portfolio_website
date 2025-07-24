"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import emailjs from "emailjs-com"

export default function Contact() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const SERVICE_ID = "service_p0uv6pd" // <-- Replace with yours
  const TEMPLATE_ID_TO_OWNER = "template_vsav56o"
  const TEMPLATE_ID_TO_SENDER = "template_qqz1g0q"
  const PUBLIC_KEY = "RroT2IU_g4UboWnv_"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
  const resultToOwner = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID_TO_OWNER,
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    PUBLIC_KEY
  )
  console.log("Owner Email Result:", resultToOwner)

  const resultToSender = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID_TO_SENDER,
    {
      to_name: formData.name,
      to_email: formData.email,
      from_name: "Nachiket Deshpande",
      original_subject: formData.subject,
    },
    PUBLIC_KEY
  )
  console.log("Sender Email Result:", resultToSender)

  // Only show success if both succeeded
  if (resultToOwner.status === 200 && resultToSender.status === 200) {
    setSubmitStatus({
      success: true,
      message: "Message sent successfully! You'll get a confirmation email shortly.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  } else {
    throw new Error("Unexpected response from EmailJS")
  }
} catch (err) {
  console.error("EmailJS Error:", err)
  setSubmitStatus({
    success: false,
    message: "Something went wrong. Please try again later or email me directly.",
  })
} finally {
  setIsSubmitting(false)
  setTimeout(() => setSubmitStatus(null), 7000)
}

  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md transition-all ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : <><Send className="inline-block mr-2" />Send Message</>}
          </motion.button>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 text-sm rounded-md ${
                submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}
        </form>
      </div>
    </section>
  )
}
