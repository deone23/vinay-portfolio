import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Github, Linkedin, Mail, Star, Award, Users, Code } from 'lucide-react'
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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Truus.co inspired */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background with geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl opacity-60"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-2xl opacity-40"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full blur-lg opacity-50"></div>
          </div>
        </div>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 text-center max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for new opportunities</span>
            </div>
            <div className="w-28 h-28 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">VM</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            I'm Vinay Mourya, a passionate software developer with{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">8.5 years</span>{' '}
            of experience building scalable applications and leading development teams.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/projects"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View My Work
            </Link>
            <Link
              to="/contact"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4"
          >
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
                  className="p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Truus.co style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl opacity-60"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-2xl opacity-40"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Delivering Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proven track record of building high-performance applications and leading successful projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 border border-blue-100 dark:border-gray-600"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8.5+</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 border border-green-100 dark:border-gray-600"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-500 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 border border-purple-100 dark:border-gray-600"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Team Members Led</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 border border-orange-100 dark:border-gray-600"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-500 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99%</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home