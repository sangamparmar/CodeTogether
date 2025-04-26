"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  FileCode,
  Users,
  Download,
  Globe,
  Zap,
  Clock,
  Bell,
  MessageSquare,
  Lightbulb,
  Lock,
  Bot,
  Crown,
  Palette,
  PenTool,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import HeroAnimation from "../components/hero-animation"
import FeatureCard from "../components/feature-card"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { ThemeProvider } from "../components/theme-provider"
import React from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)

  // Primary features for the hero section
  const primaryFeatures = [
    {
      icon: <FileCode className="h-10 w-10 text-primary" />,
      title: "Complete File Management",
      description: "Create, edit, save, and organize files and folders with ease.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Real-time Collaboration",
      description: "Code together with unique room IDs and instant synchronization.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Code Execution",
      description: "Execute code directly within the environment for instant feedback.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI Assistant",
      description: "Get help from our integrated AI to assist with coding tasks.",
    },
  ]

  // All features for the features grid
  const allFeatures = [
    {
      icon: <FileCode />,
      title: "File Management",
      description: "Create, open, edit, save, delete, and organize files and folders with ease.",
    },
    {
      icon: <Download />,
      title: "Download Codebase",
      description: "Download your entire codebase as a zip file with one click.",
    },
    {
      icon: <Users />,
      title: "Collaboration Rooms",
      description: "Generate unique room IDs for seamless team collaboration.",
    },
    {
      icon: <Globe />,
      title: "Language Support",
      description: "Comprehensive support for a wide variety of programming languages.",
    },
    {
      icon: <Code />,
      title: "Syntax Highlighting",
      description: "Beautiful syntax highlighting with auto-language detection.",
    },
    {
      icon: <Zap />,
      title: "Code Execution",
      description: "Execute code directly within the collaboration environment.",
    },
    {
      icon: <Clock />,
      title: "Instant Updates",
      description: "Real-time synchronization of code changes across all files.",
    },
    {
      icon: <Bell />,
      title: "User Notifications",
      description: "Get notified when users join or leave your collaboration session.",
    },
    {
      icon: <Users />,
      title: "User Presence",
      description: "See who's currently online in your collaboration session.",
    },
    {
      icon: <MessageSquare />,
      title: "Group Chat",
      description: "Communicate in real-time while working on your code.",
    },
    {
      icon: <Lightbulb />,
      title: "Smart Suggestions",
      description: "Get intelligent code suggestions based on your programming language.",
    },
    {
      icon: <Palette />,
      title: "Customization",
      description: "Change font size, family, and choose from multiple themes.",
    },
    {
      icon: <PenTool />,
      title: "Collaborative Drawing",
      description: "Draw and sketch together in real-time for enhanced interaction.",
    },
    {
      icon: <Lock />,
      title: "Secure Authentication",
      description: "Email-based OTP verification for enhanced security.",
    },
    {
      icon: <Bot />,
      title: "AI Assistant",
      description: "Get help from our integrated AI with coding tasks and questions.",
    },
    {
      icon: <Crown />,
      title: "Admin Controls",
      description: "Room creators have special privileges to manage user access.",
    },
  ]

  // Rotate through primary features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % primaryFeatures.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [primaryFeatures.length])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <Navbar />

        {/* Hero Section */}
        <section className="container px-4 pt-24 pb-12 md:pt-32 md:pb-24">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Code Together, <br className="md:hidden" />
                Build Together
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xl text-muted-foreground max-w-[800px] mb-8">
                The ultimate real-time collaborative coding platform with powerful features for teams and developers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/login">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="order-2 lg:order-1"
            >
              <HeroAnimation />
            </motion.div>

            {/* Feature Highlight */}
            <div className="order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeatureIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-[300px] flex flex-col items-center justify-center"
                >
                  <Card className="w-full max-w-md p-8 backdrop-blur-sm bg-background/80 border-primary/20">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="mb-6 flex justify-center"
                    >
                      <div className="p-4 rounded-full bg-primary/10">{primaryFeatures[activeFeatureIndex].icon}</div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center mb-3">{primaryFeatures[activeFeatureIndex].title}</h3>
                    <p className="text-muted-foreground text-center">
                      {primaryFeatures[activeFeatureIndex].description}
                    </p>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container px-4 py-16 md:py-24" id="features">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Everything you need for seamless collaborative coding
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-primary/80 to-purple-600/80 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Code Together?</h2>
                <p className="text-white/80 text-lg mb-6">
                  Join thousands of developers who are already collaborating in real-time.
                </p>
                <Link to="/login">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Start Coding Now
                  </Button>
                </Link>
              </div>
              <div className="w-full max-w-sm">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <div className="flex-1 text-right text-white/70 text-sm">collaborative-room.js</div>
                    </div>
                    <div className="space-y-2 font-mono text-sm text-white/90">
                      <div>
                        <span className="text-blue-300">function</span>{" "}
                        <span className="text-green-300">createRoom</span>() {"{"}
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-300">const</span> roomId ={" "}
                        <span className="text-yellow-300">generateUniqueId</span>();
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-300">return</span> {"{"} id: roomId, users: [] {"}"}
                      </div>
                      <div>{"}"}</div>
                      <div className="mt-4">
                        <span className="text-green-300">// Users collaborating:</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>Alice is typing...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>Bob is online</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
