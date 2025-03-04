"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const destinations = [
  {
    id: 1,
    name: "Bangkok",
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFuZ2tva3xlbnwwfHwwfHx8MA%3D%3D",
    description: "The vibrant capital city with temples, street food, and bustling markets.",
  },
  {
    id: 2,
    name: "Phuket",
    image: "https://plus.unsplash.com/premium_photo-1671148818436-17f409c5ca38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBodWtldHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Beautiful beaches, crystal-clear waters, and thrilling island adventures.",
  },
  {
    id: 3,
    name: "Chiang Mai",
    image: "https://images.unsplash.com/photo-1578157695179-d7b7ddeb2f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpYW5nJTIwTWFpfGVufDB8fDB8fHww",
    description: "Cultural heritage, ancient temples, and stunning mountain scenery.",
  },
  {
    id: 4,
    name: "Tokyo",
    image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9reW98ZW58MHx8MHx8fDA%3D",
    description: "A dazzling city where tradition meets futuristic architecture and neon lights.",
  },
  {
    id: 5,
    name: "Bali",
    image: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFsaXxlbnwwfHwwfHx8MA%3D%3D",
    description: "A tropical paradise with serene beaches, lush rice terraces, and vibrant culture.",
  },
  {
    id: 6,
    name: "Seoul",
    image: "https://plus.unsplash.com/premium_photo-1661886333708-877148b43ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VvdWx8ZW58MHx8MHx8fDA%3D",
    description: "Modern skyscrapers, traditional palaces, and a rich history of Korean culture.",
  },
]


export default function Destinations() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-indigo-600"
        >
          Popular Destinations
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg rounded-lg transition-all hover:scale-105 hover:shadow-2xl transform duration-300 ease-in-out">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <CardHeader className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <CardTitle className="text-xl font-semibold">{destination.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 bg-white">
                  <p className="text-gray-700 text-sm">{destination.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
