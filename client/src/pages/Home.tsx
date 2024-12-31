import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Users, Zap, MessageSquare, PenTool, Bell } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description, index, gradientColors }: { icon: React.ElementType, title: string, description: string, index: number, gradientColors: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
    className={`p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90 ${gradientColors}`}
  >
    <Icon className="w-12 h-12 text-white mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-100">{description}</p>
  </motion.div>
)

const Home = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100"
        >
          {/* Hero Section */}
          <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md fixed w-full z-10">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-blue-600"
              >
                CodeTogether
              </motion.h1>
              <nav>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out transform hover:scale-105">Login</Link>
                </motion.div>
              </nav>
            </div>
          </header>

          <main className="container mx-auto px-4 py-24">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Welcome to CodeTogether</h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Experience the future of collaborative coding with our powerful, real-time platform.
              </p>
              <div className="flex justify-center space-x-6">
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg transition duration-300 ease-in-out transform hover:bg-blue-700"
                  >
                    Log In
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg transition duration-300 ease-in-out transform hover:bg-purple-600"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            </motion.section>

            {/* Features Section */}
            <section className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Discover Our Powerful Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={Code}
                  title="Real-time Collaboration"
                  description="Edit code together in real-time, seeing changes instantly across all connected users."
                  index={0}
                  gradientColors="bg-gradient-to-br from-blue-500 to-blue-700"
                />
                <FeatureCard
                  icon={Zap}
                  title="Live Code Execution"
                  description="Run your code directly in the browser and see results immediately."
                  index={1}
                  gradientColors="bg-gradient-to-br from-purple-500 to-purple-700"
                />
                <FeatureCard
                  icon={Users}
                  title="Team-based Projects"
                  description="Organize your work into projects and collaborate seamlessly with your team."
                  index={2}
                  gradientColors="bg-gradient-to-br from-green-500 to-green-700"
                />
                <FeatureCard
                  icon={MessageSquare}
                  title="Integrated Chat"
                  description="Communicate with your team members without leaving the coding environment."
                  index={3}
                  gradientColors="bg-gradient-to-br from-yellow-500 to-yellow-700"
                />
                <FeatureCard
                  icon={PenTool}
                  title="Collaborative Drawing"
                  description="Sketch out ideas and diagrams together in real-time."
                  index={4}
                  gradientColors="bg-gradient-to-br from-red-500 to-red-700"
                />
                <FeatureCard
                  icon={Bell}
                  title="Smart Notifications"
                  description="Stay updated with important changes and messages from your team."
                  index={5}
                  gradientColors="bg-gradient-to-br from-indigo-500 to-indigo-700"
                />
              </div>
            </section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Ready to Revolutionize Your Coding Experience?</h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Join CodeTogether today and unlock the full potential of collaborative development.
              </p>
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-full font-bold text-xl transition duration-300 ease-in-out transform"
                >
                  Get Started Now
                </motion.button>
              </Link>
            </motion.section>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home

