'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Crown, Zap } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for trying out our AI design tools',
      icon: Sparkles,
      color: 'from-blue-500 to-purple-600',
      features: [
        '3 AI-generated designs per month',
        'Basic text and image upload',
        'Standard t-shirt templates',
        'Low-resolution downloads',
        'Community support',
        'Basic color options'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Creator',
      price: '$19',
      period: 'per month',
      description: 'For serious designers and small businesses',
      icon: Crown,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Unlimited AI-generated designs',
        'Advanced editing tools',
        'Premium t-shirt templates',
        'High-resolution downloads',
        'Priority support',
        'Custom color palettes',
        'Batch design creation',
        'Commercial usage rights',
        'Brand kit integration'
      ],
      cta: 'Start Creating',
      popular: true
    },
    {
      name: 'Business',
      price: '$49',
      period: 'per month',
      description: 'For teams and growing businesses',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      features: [
        'Everything in Creator',
        'Team collaboration tools',
        'White-label solutions',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics',
        'Bulk order discounts',
        'Custom branding'
      ],
      cta: 'Scale Your Business',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Crown className="h-4 w-4" />
            <span>Simple Pricing</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Choose your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              creative plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core AI design features 
            with no hidden fees or surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card rounded-3xl p-8 relative ${
                plan.popular 
                  ? 'featured transform scale-105' 
                  : 'bg-white/10 backdrop-blur-sm border-white/20'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-300'}`}>
                  {plan.description}
                </p>
                
                <div className="flex items-baseline justify-center space-x-2">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Free' && (
                    <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-gray-300'}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular 
                          ? 'bg-white/20' 
                          : 'bg-green-500/20'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className={`h-3 w-3 ${plan.popular ? 'text-white' : 'text-green-400'}`} />
                    </motion.div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-300 text-lg">
              Everything you need to know about our pricing and features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "What's included in the free plan?",
                answer: "The free plan includes 3 AI designs per month, basic editing tools, and standard templates."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee on all paid plans. No questions asked."
              },
              {
                question: "Can I use designs commercially?",
                answer: "Creator and Business plans include full commercial usage rights for all your designs."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white/5 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start creating amazing t-shirts?
          </h3>
          <motion.button
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-5 w-5" />
            <span>Start Your Free Trial</span>
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