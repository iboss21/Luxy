'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Palette, Type, Image, RotateCcw, Download, Share2 } from 'lucide-react'

export default function TShirtPreview() {
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedView, setSelectedView] = useState('front')
  const [selectedText, setSelectedText] = useState('Best Dad Ever')

  const colors = [
    { name: 'black', value: '#000000', label: 'Black' },
    { name: 'white', value: '#FFFFFF', label: 'White' },
    { name: 'navy', value: '#1e3a8a', label: 'Navy' },
    { name: 'red', value: '#dc2626', label: 'Red' },
    { name: 'green', value: '#16a34a', label: 'Green' },
    { name: 'purple', value: '#9333ea', label: 'Purple' },
  ]

  const textOptions = [
    'Best Dad Ever',
    'Forever in Our Hearts',
    'Legends Born in March',
    'My Best Friend Has Four Paws',
    'His Queen & Her King'
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Palette className="h-4 w-4" />
            <span>Live Preview</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            See your design
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              come to life
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience real-time 3D preview of your custom t-shirt design. 
            Change colors, text, and view from different angles instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Design Controls */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Text Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Type className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Choose Your Text</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {textOptions.map((text) => (
                  <motion.button
                    key={text}
                    className={`p-3 rounded-lg text-left transition-all duration-200 ${
                      selectedText === text
                        ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                    onClick={() => setSelectedText(text)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {text}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">T-Shirt Color</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {colors.map((color) => (
                  <motion.button
                    key={color.name}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedColor === color.name
                        ? 'border-blue-500 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="w-full h-12 rounded-lg mb-2"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {color.label}
                    </span>
                    {selectedColor === color.name && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <RotateCcw className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">View Angle</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['front', 'back'].map((view) => (
                  <motion.button
                    key={view}
                    className={`p-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedView === view
                        ? 'bg-green-100 text-green-800 border-2 border-green-300'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                    onClick={() => setSelectedView(view)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {view.charAt(0).toUpperCase() + view.slice(1)} View
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.button
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-5 w-5" />
                <span>Download</span>
              </motion.button>
              
              <motion.button
                className="flex-1 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </motion.button>
            </div>
          </motion.div>

          {/* T-Shirt Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-md">
              <motion.div
                className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.value }}
                animate={{ 
                  rotateY: selectedView === 'back' ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                {/* T-Shirt SVG */}
                <motion.svg
                  viewBox="0 0 200 240"
                  className="w-48 h-56"
                  fill={selectedColor === 'white' ? '#f3f4f6' : '#ffffff'}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <path d="M50 60 L50 40 Q50 30 60 30 L80 30 Q90 20 110 20 L110 20 Q130 20 140 30 L160 30 Q170 30 170 40 L170 60 L190 80 L190 100 L170 90 L170 220 Q170 230 160 230 L60 230 Q50 230 50 220 L50 90 L30 100 L30 80 Z" />
                </motion.svg>
                
                {/* Text Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  key={selectedText + selectedColor}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center px-4 max-w-[180px]">
                    <div 
                      className={`font-bold text-sm leading-tight ${
                        selectedColor === 'white' || selectedColor === 'yellow' 
                          ? 'text-gray-800' 
                          : 'text-white'
                      }`}
                      style={{
                        textShadow: selectedColor === 'white' ? 'none' : '1px 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {selectedText}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Image className="h-5 w-5" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                }}
              >
                <Type className="h-5 w-5" />
              </motion.div>
            </div>

            {/* Preview Info */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-2">
                {colors.find(c => c.name === selectedColor)?.label} T-Shirt - {selectedView.charAt(0).toUpperCase() + selectedView.slice(1)} View
              </p>
              <p className="text-sm text-gray-500">
                Real-time preview • High-quality print ready
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}