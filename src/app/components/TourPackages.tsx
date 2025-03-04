"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"

const packages = [
  {
    id: 1,
    name: "European Adventure",
    duration: "14 days",
    price: "$3,999",
    imageUrl: "/images/european-adventure.jpg", // Add relevant image path
  },
  {
    id: 2,
    name: "Asian Explorer",
    duration: "12 days",
    price: "$3,499",
    imageUrl: "/images/asian-explorer.jpg", // Add relevant image path
  },
  {
    id: 3,
    name: "African Safari",
    duration: "10 days",
    price: "$4,299",
    imageUrl: "/images/african-safari.jpg", // Add relevant image path
  },
]

const TourPackages = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden relative shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.imageUrl})`, height: "200px" }}
                ></div>
                <CardHeader className="relative z-10">
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.duration}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <span className="text-white font-bold">{pkg.price}</span>
                  </motion.div>
                  <p className="text-center">Experience the journey of a lifetime</p>
                </CardContent>
                <CardFooter className="relative z-10 flex justify-center">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Book Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourPackages
