import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
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
      name: 'Email',
      href: 'mailto:vinaymourya1234@gmail.com',
      icon: Mail,
      color: 'hover:text-red-600',
    },
  ]

  const skills = [
    'Java', 'Data Structures', 'Algorithms', 'Scrum Methodology', 'Git',
    'Shell Script', 'Linux', 'System Design', 'Python', 'JavaScript',
    'C++', 'AWS', 'GCP'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-primary-600 dark:text-primary-400 font-medium text-lg"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
                >
                  Vinay
                  <span className="text-gradient block">Mourya</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
                >
                  Software Developer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
                >
                  With 8.5 years of experience crafting digital solutions, I specialize in 
                  building scalable web applications and turning complex problems into 
                  elegant, user-friendly experiences.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/projects"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a
                  href="/resume.pdf"
                  download="Vinay_Mourya_Resume_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center group"
                >
                  <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Download CV (PDF)
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center space-x-6"
              >
                <p className="text-gray-600 dark:text-gray-400 font-medium">Connect with me:</p>
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
                        className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Profile image */}
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-purple-600 rounded-3xl shadow-2xl animate-float p-4">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Vinay Mourya - Software Developer" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center"
                >
                  <span className="text-xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group"
              >
                Learn more about me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
