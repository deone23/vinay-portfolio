import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Coffee, Trophy, Target } from 'lucide-react'

const About: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Associate Technology | Java Microservices',
      company: 'Publicis Sapient',
      period: '06/2025 - Present',
      description: 'Developed scalable, resilient Spring Boot microservices using REST APIs and implemented best practices like circuit breaker, centralized config, and fault tolerance. Integrated Kafka-based messaging for asynchronous microservice communication, handling high-throughput data streams with schema registry and retry logic.',
    },
    {
      title: 'Enterprise Application Engineer',
      company: 'Baker Hughes',
      period: '11/2021 - 12/2024',
      description: 'Developed and maintained Spring Boot microservices with robust transaction management, idempotency, and caching mechanisms. Designed and optimized Kafka-based event-driven architectures for high-throughput processing. Implemented RESTful APIs following OpenAPI standards and security best practices.',
    },
    {
      title: 'Software Engineer',
      company: 'Tata Consultancy Services',
      period: '08/2017 - 10/2021',
      description: 'Implemented error handling and logging mechanisms across the API landscape. Developed a Batch processing using spring-batch to transfer 500k rows(13GB) on a daily basis. Worked on multi-threaded applications, optimizing concurrency and reducing response time. Contributed to database query optimization and SQL performance tuning.',
    },
  ]

  const skills = {
    'Frameworks': ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Spring Batch', 'Collection Framework'],
    'Microservices': ['RESTful APIs', 'gRPC', 'Circuit Breaker', 'Event-Driven Architecture'],
    'Database Technologies': ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB'],
    'Design Patterns': ['Creational', 'Structural', 'Behavioral'],
    'Testing': ['JUnit', 'Mockito'],
    'Other Tools': ['Hibernate', 'JPA', 'Kafka', 'Swagger', 'Postman', 'Docker', 'Kubernetes'],
  }

  const skillLevels = {
    'Java': 'Expert',
    'Data Structures': 'Expert',
    'Algorithms': 'Advanced',
    'Scrum Methodology': 'Advanced',
    'Git': 'Advanced',
    'Shell Script': 'Advanced',
    'Linux': 'Advanced',
    'System Design': 'Intermediate',
    'Python': 'Intermediate',
    'JavaScript': 'Intermediate',
    'C++': 'Intermediate',
    'AWS': 'Intermediate',
    'GCP': 'Intermediate',
  }

  const achievements = [
    {
      icon: Trophy,
      title: 'Android App Building Competition Winner',
      description: 'Won android app building competition during university',
    },
    {
      icon: Award,
      title: 'CodeVita Rank 136',
      description: 'Secured 136 rank in TCS CodeVita programming competition',
    },
    {
      icon: Target,
      title: 'Chess Competition - 2nd Place',
      description: 'Secured 2nd place in chess competition at Baker Hughes',
    },
  ]

  const interests = [
    'Competitive Coding', 'Chess', 'Movies', 'Swimming', 'Cricket', 
    'Cycling', 'Carrom', 'Running', 'Psychology'
  ]

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
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <img 
                src="/images/profile.jpg" 
                alt="Vinay Mourya - Software Developer" 
                className="w-32 h-32 rounded-full object-cover object-center ring-4 ring-primary-100 dark:ring-primary-900 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 shadow-xl"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Software Developer with 8 years of experience in Java, Spring Boot, and Microservices. 
              Proficient in designing and developing scalable, high-performance distributed systems. 
              Strong expertise in RESTful APIs, Kafka, RDBMS, and Cloud deployment. Skilled in problem-solving, 
              data structures, and algorithms, with hands-on experience in Docker and Kubernetes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>8 Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Remote / India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-5 h-5" />
                <span>Coffee Enthusiast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Professional Experience
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                My journey through various roles and companies, building expertise 
                in software development and team leadership.
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Levels Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Skill Proficiency Levels
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(skillLevels).map(([skill, level]) => {
                  const levelColor = level === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                   level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                                   'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  
                  return (
                    <div key={skill} className="card p-4 text-center">
                      <div className="font-medium text-gray-900 dark:text-white mb-2">{skill}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColor}`}>
                        {level}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Achievements & Certifications
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Recognition and milestones in my professional journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card p-6 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            
            <div className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    Bachelor of Engineering - Computer Science
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    University Institute of Technology, RGPV
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  07/2013 - 06/2017
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests & Hobbies Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Interests & Hobbies
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
