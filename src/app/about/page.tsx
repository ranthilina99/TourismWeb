'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../components/ui/card'

const aboutSections = [
  {
    title: 'Our Story',
    content: 'Travel Trader was founded in 2010 with a passion for showcasing the beauty of Thailand to the world. Our team of local experts and travel enthusiasts work tirelessly to create unforgettable experiences that combine adventure, culture, and comfort.',
  },
  {
    title: 'Our Mission',
    content: 'We strive to provide authentic, sustainable, and memorable travel experiences that benefit both our visitors and the local communities. Our goal is to foster cultural understanding and promote responsible tourism practices.',
  },
  {
    title: 'Why Choose Us',
    content: 'With our deep local knowledge, personalized service, and commitment to quality, we ensure that every journey with Travel Trader is unique and enriching. From hidden gems to must-see destinations',
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">About Travel Trader</h1>
          <Card>
            <CardContent className="p-6">
              <div className="relative h-64 mb-6">
                <motion.img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRyYXZlbCUyMFRyYWRlciUyMHBsYW5lfGVufDB8fDB8fHww"
                  alt="About Travel Trader"
                  className="w-full h-full object-cover rounded-lg"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {aboutSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 last:mb-0"
                >
                  <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                  <p className="text-gray-600">{section.content}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
