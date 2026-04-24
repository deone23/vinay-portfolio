import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'success' | 'error' | null
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vinaymourya1234@gmail.com',
      href: 'mailto:vinaymourya1234@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote / India',
      href: null,
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/deone23',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vinay-mourya/',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      href: 'https://x.com/vin__ay',
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear form status when user starts typing
    if (formStatus.type) {
      setFormStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For now, just show success message
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      })
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and 
              interesting conversations. Feel free to reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  )

                  return item.href ? (
                    <a key={index} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  )
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:shadow-lg`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send Me a Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Form Status */}
                {formStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      formStatus.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                    }`}
                  >
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <p>{formStatus.message}</p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  whileHover={{ scale: isFormValid && !isSubmitting ? 1.02 : 1 }}
                  whileTap={{ scale: isFormValid && !isSubmitting ? 0.98 : 1 }}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isFormValid && !isSubmitting
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ready to Start a Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm currently available for freelance work and exciting opportunities. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vinaymourya1234@gmail.com?subject=Project Inquiry"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Download CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
