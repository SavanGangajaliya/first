"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Package, Search, ShoppingBag } from "lucide-react"

export default function NotFound() {
  // Animation variants for floating characters
  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      },
    },
  }

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Characters */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 left-10 sm:left-20 text-indigo-600 dark:text-indigo-400 opacity-20"
      >
        <Package className="w-16 h-16" />
      </motion.div>
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-20 right-10 sm:right-20 text-purple-600 dark:text-purple-400 opacity-20"
        transition={{ delay: 0.5 }}
      >
        <ShoppingBag className="w-20 h-20" />
      </motion.div>
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-1/3 left-1/4 text-indigo-500 dark:text-indigo-300 opacity-20"
        transition={{ delay: 1 }}
      >
        <Search className="w-14 h-14" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg w-full mx-auto text-center space-y-8 bg-white dark:bg-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Oops! Page Not Found
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          It looks like the page you're looking for doesn't exist or has been moved. Let's get you back to shopping!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full py-3 text-sm sm:text-base transition-transform duration-200 hover:scale-105"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900 rounded-full py-3 text-sm sm:text-base transition-transform duration-200 hover:scale-105"
          >
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}