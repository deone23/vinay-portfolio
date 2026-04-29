import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Code2, Zap, Target } from 'lucide-react'

const About: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading development teams and architecting scalable solutions for enterprise clients.",
      achievements: [
        "Led a team of 8 developers",
        "Reduced system latency by 40%",
        "Implemented microservices architecture"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2018 - 2020",
      description: "Developed end-to-end web applications using modern technologies.",
      achievements: [
        "Built 15+ production applications",
        "Improved code coverage to 95%",
        "Mentored junior developers"
      ]
    },
    {
      title: "Software Engineer",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description: "Contributed to product development in fast-paced startup environment.",
      achievements: [
        "Delivered features 30% faster",
        "Optimized database queries",
        "Implemented CI/CD pipelines"
      ]
    }
  ]

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication to achieve exceptional results."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to solve complex problems."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for perfection in every project and continuously improving my craft."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-2xl opacity-40"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital solutions that make a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With over 8.5 years in software development, I've had the privilege of working 
                  on diverse projects ranging from enterprise applications to innovative startups. 
                  My journey has been driven by a passion for solving complex problems through 
                  elegant code and thoughtful design.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in full-stack development with expertise in modern frameworks 
                  and cloud technologies. My approach combines technical excellence with 
                  user-centered design, ensuring that every solution not only works flawlessly 
                  but also provides an exceptional user experience.
                </p>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">8.5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl p-1 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
                  <img 
                    src="/images/about-profile.jpg" 
                    alt="Vinay Mourya - About" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide my work and drive my passion for development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of my career growth and key achievements
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {exp.period}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`text-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About