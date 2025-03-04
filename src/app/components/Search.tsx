"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SearchIcon } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold italic text-center mb-8 text-teal-600 font-serif">
            Find Your Perfect Trip
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input with expanding effect */}
            <motion.div
              className="flex-grow"
              animate={{ width: isExpanded ? "100%" : "70%" }}
              transition={{ duration: 0.5 }}
            >
              <Input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 focus:border-teal-600 focus:outline-none transition-all duration-300 font-serif"
                onFocus={() => setIsExpanded(true)}
                onBlur={() => setIsExpanded(false)}
              />
            </motion.div>
            {/* Date Picker Input */}
            <motion.div
              animate={{
                width: isExpanded ? 0 : "30%",
                opacity: isExpanded ? 0 : 1,
              }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Input
                type="date"
                className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 focus:border-teal-600 focus:outline-none transition-all duration-300 font-serif"
              />
            </motion.div>
            {/* Search Button */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="w-full md:w-auto py-3 px-6 rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300">
                <SearchIcon className="mr-2 h-5 w-5" /> Search
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Search
