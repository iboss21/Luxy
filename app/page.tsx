'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import TShirtPreview from './components/TShirtPreview'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none" />
      
      {/* Floating Elements */}
      <motion.div
        className="fixed top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-10 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Header />
      
      <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Features />
        <Gallery />
        <TShirtPreview />
        <Testimonials />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  )
}