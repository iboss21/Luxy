'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Image, 
  Type, 
  Palette, 
  Zap, 
  Download,
  Smartphone,
  Globe,
  Shield,
  Clock,
  Users,
  Heart
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Design",
      description: "Let our AI create stunning designs based on your ideas, emotions, or occasions.",
      color: "from-blue-500 to-purple-600",
      delay: 0.1
    },
    {
      icon: Image,
      title: "Upload & Transform",
      description: "Upload your photos and watch our AI transform them into beautiful t-shirt designs.",
      color: "from-purple-500 to-pink-600",
      delay: 0.2
    },
    {
      icon: Type,
      title: "Smart Typography",
      description: "Choose from hundreds of fonts or let AI suggest the perfect typography for your message.",
      color: "from-pink-500 to-red-600",
      delay: 0.3
    },
    {
      icon: Palette,
      title: "Color Magic",
      description: "AI-powered color matching and palette suggestions that make your designs pop.",
      color: "from-red-500 to-orange-600",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Real-time Preview",
      description: "See your design come to life with instant 3D previews on different t-shirt models.",
      color: "from-orange-500 to-yellow-600",
      delay: 0.5
    },
    {
      icon: Download,
      title: "Print-Ready Files",
      description: "Get high-resolution, print-ready files optimized for professional printing.",
      color: "from-yellow-500 to-green-600",
      delay: 0.6
    }
  ]

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Design on any device with our responsive interface"
    },
    {
      icon: Globe,
      title: "Global Shipping",
      description: "We ship your custom t-shirts worldwide"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all orders"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most orders ship within 2-3 business days"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share and collaborate on designs with your team"
    },
    {
      icon: Heart,
      title: "Eco-Friendly",
      description: "Sustainable printing with eco-friendly materials"
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Powerful Features</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything you need to create
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              amazing t-shirts
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with intuitive design tools 
            to help you create professional-quality custom t-shirts in minutes.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group feature-card rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Plus many more features
            </h3>
            <p className="text-gray-600 text-lg">
              Everything you need for a complete t-shirt design and printing experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-5 w-5" />
            <span>Try All Features Free</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}