"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { profile } from "@/lib/data"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Focus", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="#home" className="text-lg sm:text-xl font-bold gradient-text">
              {profile.name}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="neumorphism-small px-4 py-2 text-sm font-medium text-gray-700 hover-lift hover-press transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="neumorphism" size="sm" asChild>
              <a href={profile.resume} download>
                <Download className="w-4 h-4 mr-2" />
                CV
              </a>
            </Button>
            <Button variant="neumorphism-primary" size="sm" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 rounded-lg transition-all duration-300 hover:bg-white/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-800" strokeWidth={2} />
              ) : (
                <Menu size={24} className="text-gray-800" strokeWidth={2} />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-2 mx-2 sm:mx-3 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="neumorphism p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="neumorphism-small block px-4 py-3 text-base font-medium text-gray-700 hover-lift hover-press transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2 border-t border-gray-200 mt-3">
                <Button variant="neumorphism" size="sm" className="w-full" asChild>
                  <a href={profile.resume} download onClick={() => setIsMobileMenuOpen(false)}>
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
                <Button variant="neumorphism-primary" size="sm" className="w-full" asChild>
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
