"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      alert("Please enter a valid email address.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Thank you for subscribing to our newsletter!")
      setEmail("")
    }, 1000)
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link
              href="/"
              className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500"
            >
              ShadeCommerce
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Elevate your style with premium fashion and accessories for the modern world.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/products" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /><span>support@shadecommerce.com</span></li>
              <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /><span>+1 (555) 123-4567</span></li>
              <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /><span>123 Style St, Fashion City, USA</span></li>
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subscribe to get the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg text-gray-900 dark:text-gray-100"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full py-2 text-sm transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} ShadeCommerce. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
