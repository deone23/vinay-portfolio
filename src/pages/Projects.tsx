import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['All', 'Web App', 'Mobile', 'API', 'Open Source']

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI and robust backend',
      longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration, order management, and admin dashboard. Implemented with responsive design and optimized for performance.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'Web App',
      image: '/api/placeholder/600/400',
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/deone23/ecommerce-platform',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management API',
      description: 'RESTful API for task management with real-time updates',
      longDescription: 'A scalable REST API built with Express.js and MongoDB for task management. Features include user authentication, CRUD operations, real-time notifications, file uploads, and comprehensive API documentation. Deployed using Docker and AWS ECS.',
      technologies: ['Express.js', 'MongoDB', 'Socket.io', 'Docker', 'AWS'],
      category: 'API',
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com/deone23/task-api',
      featured: true,
    },
    {
      id: 3,
      title: 'React Component Library',
      description: 'Reusable component library with TypeScript and Storybook',
      longDescription: 'A comprehensive React component library built with TypeScript, featuring 50+ reusable components. Includes comprehensive documentation with Storybook, automated testing with Jest, and published to NPM. Used across multiple projects to maintain design consistency.',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'NPM'],
      category: 'Open Source',
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com/deone23/react-components',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with social features',
      longDescription: 'A React Native fitness application with workout tracking, progress analytics, social features, and integration with health APIs. Features include custom workout plans, progress photos, social sharing, and offline capability.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Health APIs'],
      category: 'Mobile',
      image: '/api/placeholder/600/400',
      demoUrl: 'https://fitness-app.example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts',
      longDescription: 'A comprehensive analytics dashboard built with Next.js and D3.js. Features real-time data visualization, interactive charts, customizable widgets, and export functionality. Integrated with multiple data sources and optimized for performance.',
      technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis', 'Vercel'],
      category: 'Web App',
      image: '/api/placeholder/600/400',
      demoUrl: 'https://analytics.example.com',
      githubUrl: 'https://github.com/deone23/analytics-dashboard',
      featured: true,
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'Scalable microservices setup with Docker and Kubernetes',
      longDescription: 'A complete microservices architecture implementation using Docker, Kubernetes, and AWS. Features include service discovery, load balancing, monitoring, logging, and CI/CD pipelines. Demonstrates best practices for scalable system design.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'MongoDB', 'Redis'],
      category: 'API',
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com/deone23/microservices-demo',
      featured: false,
    },
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

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
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A showcase of my work spanning web applications, mobile apps, APIs, 
              and open source contributions. Each project represents a unique 
              challenge and learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Highlighting some of my most impactful and technically challenging projects.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-400 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-90">Click to view details</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
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
                All Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore my complete portfolio of projects across different categories.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2 inline" />
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-400 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <h3 className="text-lg font-bold text-center px-4">{project.title}</h3>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Project Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Projects
