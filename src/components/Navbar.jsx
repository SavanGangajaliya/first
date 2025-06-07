"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="border-b bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500"
          >
            ShadeCommerce
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-gray-800 dark:text-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-8"
          >
            <Link
              href="/products"
              className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link
              href="/account"
              className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <User className="w-6 h-6" />
            </Link>
            <ThemeToggle />
          </motion.div>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-full"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-64"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 mt-8"
              >
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="/account"
                  className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Account
                </Link>
                <ThemeToggle />
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}