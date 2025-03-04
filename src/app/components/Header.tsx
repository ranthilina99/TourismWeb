// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { GlobeIcon as GlobeAlt, Menu, X } from "lucide-react"

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white shadow-md"
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center space-x-2">
//           <GlobeAlt className="h-8 w-8 text-blue-500" />
//           <span className="text-xl font-bold">Wanderlust</span>
//         </Link>
//         <nav className="hidden md:flex space-x-4">
//           <NavLink href="/">Home</NavLink>
//           <NavLink href="/destinations">Destinations</NavLink>
//           <NavLink href="/tours">Tours</NavLink>
//           <NavLink href="/about">About</NavLink>
//           <NavLink href="/contact">Contact</NavLink>
//         </nav>
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>
//       {isOpen && (
//         <motion.nav
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-white shadow-md"
//         >
//           <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
//             <NavLink href="/" onClick={() => setIsOpen(false)}>
//               Home
//             </NavLink>
//             <NavLink href="/destinations" onClick={() => setIsOpen(false)}>
//               Destinations
//             </NavLink>
//             <NavLink href="/tours" onClick={() => setIsOpen(false)}>
//               Tours
//             </NavLink>
//             <NavLink href="/about" onClick={() => setIsOpen(false)}>
//               About
//             </NavLink>
//             <NavLink href="/contact" onClick={() => setIsOpen(false)}>
//               Contact
//             </NavLink>
//           </div>
//         </motion.nav>
//       )}
//     </motion.header>
//   )
// }

// const NavLink = ({ href, children, ...props }) => (
//   <Link href={href} {...props}>
//     <motion.span
//       className="text-gray-600 hover:text-blue-500 transition-colors"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {children}
//     </motion.span>
//   </Link>
// )

// export default Header

