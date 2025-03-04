"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../components/ui/button"
import { Youtube } from "lucide-react"

const railayPhotos = [
    {
        src: "https://plus.unsplash.com/premium_photo-1736338572189-a9f5438ceb48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFpbGF5JTIwQmVhY2glMjBTdW5zZXR8ZW58MHx8MHx8fDA%3D", // Example image URL
        alt: "Railay Beach Sunset"
    },
    {
        src: "https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFpbGF5JTIwQmVhY2glMjBMb25ndGFpbCUyMEJvYXRzfGVufDB8fDB8fHww", // Example image URL
        alt: "Railay Beach Longtail Boats"
    },

    {
        src: "https://plus.unsplash.com/premium_photo-1676587140469-d395aad5f652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFpbGF5JTIwQmVhY2glMjBDYXZlfGVufDB8fDB8fHww", // Example image URL
        alt: "Railay Beach Cave"
    },
    {
        src: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhaWxheSUyMEJlYWNoJTIwQWVyaWFsJTIwVmlld3xlbnwwfHwwfHx8MA%3D%3D", // Example image URL
        alt: "Railay Beach Aerial View"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661962721147-030a882165dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJhaWxheSUyMEJlYWNoJTIwUm9jayUyMENsaW1iaW5nfGVufDB8fDB8fHww", // Example image URL
        alt: "Railay Beach Rock Climbing"
    }, 
]


export default function Hero() {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(2) // Default to 3rd image

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % railayPhotos.length)
        }, 5000) // Auto slide every 3 seconds

        return () => clearInterval(interval) // Cleanup on unmount
    }, [])

    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={railayPhotos[currentPhotoIndex].src} // Match background with active slide
                    alt="Thailand Aerial View"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl font-bold text-white mb-6"
                    >
                        Explore
                        <br />
                        Thailand
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-white/90 mb-8"
                    >
                        Discover the land of smiles, from pristine beaches to ancient temples. Experience the perfect blend of
                        tradition and modernity.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                            Book Now
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
                            <Youtube className="mr-2 h-5 w-5" />
                            Watch Videos
                        </Button>
                    </motion.div>
                </div>

                {/* Railay Beach Card */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2"
                >
                    <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentPhotoIndex}
                                src={railayPhotos[currentPhotoIndex].src}
                                alt={railayPhotos[currentPhotoIndex].alt}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xl font-semibold">Railay Beach</p>
                            <p className="text-white/80 text-sm">{railayPhotos[currentPhotoIndex].alt}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
