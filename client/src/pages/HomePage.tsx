import { useState, useEffect } from 'react'
import './homepage.css';
import { motion, AnimatePresence } from 'framer-motion'
import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"

function HomePage() {
    const [theme, setTheme] = useState('light')
    const [showFeatures, setShowFeatures] = useState(false)
    const [activeFeature, setActiveFeature] = useState(0)

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(prefersDark ? 'dark' : 'light')
    }, [])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    const features = [
        { icon: '🚀', title: 'Instant Sync', description: 'Your code syncs in real-time across all devices.' },
        { icon: '🔒', title: 'Secure Sharing', description: 'Share your code securely with team members.' },
        { icon: '🎨', title: 'Syntax Highlighting', description: 'Beautiful syntax highlighting for over 100 languages.' },
        { icon: '🔍', title: 'Smart Search', description: 'Find what you need quickly with our powerful search.' },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={`flex min-h-screen flex-col items-center justify-center gap-8 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-opacity-80 backdrop-blur-md">
                <motion.h1 
                    className="text-2xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    CodeTogether
                </motion.h1>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setShowFeatures(!showFeatures)}
                        className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    >
                        {showFeatures ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button 
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
                    >
                        {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                </div>
            </nav>
            <div className="mt-20 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <motion.div 
                    className="flex w-full flex-col items-center justify-center sm:w-1/2 sm:pl-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={illustration}
                        alt="Code Sync Illustration"
                        className="mx-auto w-[250px] sm:w-[400px] animate-float"
                    />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mt-4"
                        >
                            <p className="text-4xl mb-2">{features[activeFeature].icon}</p>
                            <h2 className="text-xl font-semibold">{features[activeFeature].title}</h2>
                            <p className="text-sm opacity-80">{features[activeFeature].description}</p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
                <motion.div 
                    className="flex w-full items-center justify-center sm:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FormComponent />
                </motion.div>
            </div>
            <AnimatePresence>
                {showFeatures && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-opacity-50 backdrop-blur-md"
                        style={{
                            backgroundColor: theme === 'dark' ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.5)'
                        }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-4 rounded-lg shadow-md"
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.7)' : 'rgba(255, 255, 255, 0.7)'
                                }}
                            >
                                <p className="text-4xl mb-2">{feature.icon}</p>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="text-sm opacity-80">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <footer className="w-full text-center p-4 mt-8">
                <p>&copy; 2024 CodeTogether. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default HomePage

