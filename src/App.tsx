import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

// Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// Context
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
