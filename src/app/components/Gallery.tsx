"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1606240724602-5b21f896eae8?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Beautiful landscape" },
  { id: 2, src: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D", alt: "City skyline" },
  { id: 3, src: "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D", alt: "Beach sunset" },
  { id: 4, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW91bnRhaW4lMjB2aWV3fGVufDB8fDB8fHww", alt: "Mountain view" },
  { id: 5, src: "https://images.unsplash.com/photo-1592859600972-1b0834d83747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmF0dXJlJTIwdHJhaWx8ZW58MHx8MHx8fDA%3D", alt: "Nature trail" },
  { id: 6, src: "https://plus.unsplash.com/premium_photo-1673697239936-c2599b0b0498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFrZSUyMHJlZmxlY3Rpb258ZW58MHx8MHx8fDA%3D", alt: "Lake reflection" },
  { id: 7, src: "https://images.unsplash.com/photo-1566033448513-774c4a890161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFVyYmFuJTIwc3RyZWV0c3xlbnwwfHwwfHx8MA%3D%3D", alt: "Urban streets" },
  { id: 8, src: "https://images.unsplash.com/photo-1613109526778-27605f1f27d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVzZXJ0JTIwbGFuZHNjYXBlfGVufDB8fDB8fHww", alt: "Desert landscape" },
]

const Gallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selectedImage = images.find((img) => img.id === selectedId)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Travel Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              onClick={() => setSelectedId(image.id)}
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId !== null && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`image-${selectedId}`}
                className="bg-white p-4 rounded-lg relative shadow-lg max-w-4xl mx-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                <button
                  className="absolute top-2 right-2 bg-gray-200 p-1 rounded-full hover:bg-gray-300"
                  onClick={() => setSelectedId(null)}
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery
