import { useState, useEffect } from 'react'
import './homepage.css';
import { motion, AnimatePresence } from 'framer-motion'
import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"
import React from 'react';

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
        <div className={`flex min-h-screen flex-col items-center justify-center transition-colors duration-500 ${
            theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white' 
                : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 text-gray-800'
        }`}>
            {/* Glass morphism navbar */}
            <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 z-50 backdrop-blur-lg bg-opacity-70 border-b border-opacity-20 shadow-lg" 
                style={{ 
                    backgroundColor: theme === 'dark' ? 'rgba(30, 30, 40, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                }}>
                <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold">C</span>
                    </div>
                    <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} tracking-tight`}>
                        CodeTogether
                    </h1>
                </motion.div>
                <div className="flex items-center gap-4">
                    <motion.button 
                        onClick={() => setShowFeatures(!showFeatures)}
                        className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                            theme === 'dark'
                                ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {showFeatures ? 'Hide Features' : 'Show Features'}
                    </motion.button>
                    <motion.button 
                        onClick={toggleTheme}
                        className={`p-3 rounded-full transition-colors duration-300 ${
                            theme === 'dark' 
                                ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30' 
                                : 'bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg shadow-gray-800/30'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {theme === 'dark' ? '🌞' : '🌙'}
                    </motion.button>
                </div>
            </nav>

            {/* Main content */}
            <div className="mt-28 mb-8 container mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-12 px-4">
                <motion.div 
                    className="flex flex-col items-center justify-center lg:w-1/2 max-w-xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src={illustration}
                            alt="Code Sync Illustration"
                            className="w-[300px] sm:w-[450px] drop-shadow-2xl"
                        />
                    </motion.div>
                    
                    <div className={`mt-8 p-6 rounded-2xl backdrop-blur-md w-full max-w-md ${
                        theme === 'dark' 
                            ? 'bg-white/10 shadow-xl' 
                            : 'bg-white/50 shadow-lg'
                    }`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <motion.p 
                                    className="text-5xl mb-4"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 5, 0, -5, 0] 
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {features[activeFeature].icon}
                                </motion.p>
                                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                                    {features[activeFeature].title}
                                </h2>
                                <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {features[activeFeature].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.div 
                    className="lg:w-1/2 max-w-md w-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className={`rounded-2xl overflow-hidden shadow-2xl ${
                        theme === 'dark' 
                            ? 'bg-gray-800/50 backdrop-blur-lg border border-gray-700' 
                            : 'bg-white/80 backdrop-blur-lg border border-gray-200'
                    }`}>
                        <FormComponent />
                    </div>
                </motion.div>
            </div>

            {/* Features section */}
            <AnimatePresence>
                {showFeatures && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="container mx-auto px-4 pb-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-6 rounded-xl backdrop-blur-md shadow-xl ${
                                        theme === 'dark' 
                                            ? 'bg-gradient-to-br from-gray-800/70 to-purple-900/70 border border-gray-700/50' 
                                            : 'bg-gradient-to-br from-white/70 to-blue-100/70 border border-gray-200/50'
                                    }`}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        boxShadow: theme === 'dark' 
                                            ? '0 20px 25px -5px rgba(124, 58, 237, 0.2)' 
                                            : '0 20px 25px -5px rgba(59, 130, 246, 0.2)'
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center ${
                                        theme === 'dark'
                                            ? 'bg-purple-800/50'
                                            : 'bg-blue-500/20'
                                    }`}>
                                        <p className="text-3xl">{feature.icon}</p>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 ${
                                        theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-800'
                                    }`}>{feature.title}</h3>
                                    <p className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modern gradient footer */}
            <footer className={`w-full py-6 px-4 mt-auto text-center ${
                theme === 'dark' 
                    ? 'bg-gradient-to-r from-gray-900 to-purple-900 text-gray-300' 
                    : 'bg-gradient-to-r from-blue-50 to-purple-100 text-gray-700'
            }`}>
                <div className="container mx-auto">
                    <p className="font-medium">&copy; {new Date().getFullYear()} CodeTogether. All rights reserved.</p>
                    <div className="flex justify-center gap-4 mt-3">
                        <div className={`h-1 w-1 rounded-full ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                        <div className={`h-1 w-1 rounded-full ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                        <div className={`h-1 w-1 rounded-full ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage

