import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/deone23',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vinay-mourya/',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/vin__ay',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:vinaymourya1234@gmail.com',
      icon: Mail,
    },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Vinay Mourya</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Software Developer with 8.5 years of experience creating digital solutions 
              that make a difference. Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect With Me
            </h4>
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
                    className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              © {currentYear} Vinay Mourya. Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />{' '}
              and React.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
