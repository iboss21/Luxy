'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Star, Eye, Download } from 'lucide-react'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'fathers-day', name: "Father's Day" },
    { id: 'memorial', name: 'Memorial' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'pets', name: 'Pet Love' },
    { id: 'couples', name: 'Couples' },
  ]

  const designs = [
    {
      id: 1,
      title: "Best Dad in Our Eyes",
      category: 'fathers-day',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      likes: 234,
      views: 1200,
      color: 'Navy Blue',
      tags: ['Father\'s Day', 'Family', 'Love']
    },
    {
      id: 2,
      title: "Forever in Our Hearts",
      category: 'memorial',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop',
      likes: 189,
      views: 890,
      color: 'Black',
      tags: ['Memorial', 'Remembrance', 'Love']
    },
    {
      id: 3,
      title: "Legends Born in March",
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
      likes: 156,
      views: 750,
      color: 'Royal Blue',
      tags: ['Birthday', 'March', 'Legend']
    },
    {
      id: 4,
      title: "My Best Friend Has Four Paws",
      category: 'pets',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop',
      likes: 298,
      views: 1450,
      color: 'Forest Green',
      tags: ['Pets', 'Dogs', 'Friendship']
    },
    {
      id: 5,
      title: "His Queen & Her King",
      category: 'couples',
      image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop',
      likes: 267,
      views: 1100,
      color: 'Burgundy',
      tags: ['Couples', 'Love', 'Romance']
    },
    {
      id: 6,
      title: "World's Greatest Grandpa",
      category: 'fathers-day',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=400&fit=crop',
      likes: 178,
      views: 820,
      color: 'Charcoal',
      tags: ['Grandpa', 'Family', 'Love']
    },
    {
      id: 7,
      title: "In Loving Memory",
      category: 'memorial',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      likes: 145,
      views: 680,
      color: 'White',
      tags: ['Memorial', 'Angel', 'Peace']
    },
    {
      id: 8,
      title: "Birthday Squad Goals",
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop',
      likes: 203,
      views: 950,
      color: 'Hot Pink',
      tags: ['Birthday', 'Squad', 'Party']
    },
    {
      id: 9,
      title: "Cat Mom Life",
      category: 'pets',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
      likes: 312,
      views: 1600,
      color: 'Lavender',
      tags: ['Cats', 'Mom', 'Pets']
    }
  ]

  const filteredDesigns = activeCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
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
            className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heart className="h-4 w-4" />
            <span>Design Gallery</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get inspired by our
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              community creations
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover thousands of unique designs created by our community. 
            Find the perfect inspiration for your next custom t-shirt.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Design Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Hover Actions */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <div className="flex space-x-3">
                    <motion.button
                      className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Download className="h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Color Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {design.color}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {design.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{design.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{design.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More Designs</span>
            <motion.div
              className="ml-2"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}