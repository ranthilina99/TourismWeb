"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"

const tours = [
  {
    id: 1,
    name: "Island Hopping Adventure",
    duration: "5 Days",
    price: "$799",
    image: "https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SXNsYW5kJTIwSG9wcGluZyUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Cultural Heritage Tour",
    duration: "7 Days",
    price: "$999",
    image: "https://images.unsplash.com/photo-1529271230144-e8c648ef570d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEN1bHR1cmFsJTIwSGVyaXRhZ2UlMjBUb3VyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Food & Markets Tour",
    duration: "3 Days",
    price: "$499",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZvb2QlMjAlMjYlMjBNYXJrZXRzJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D",
  },
  // Add more tours...
]

export default function Tours() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Tours
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img src={tour.image || "/placeholder.svg"} alt={tour.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">{tour.price}</div>
                </div>
                <CardHeader>
                  <CardTitle>{tour.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Duration: {tour.duration}</p>
                  <Button variant="gradient" className="w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

