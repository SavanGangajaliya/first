
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Trash, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const initialCart = [
  {
    id: "1",
    name: "Classic Leather Jacket",
    image: "https://hnscraftsmanship.com/wp-content/uploads/2024/05/CLASSIC-LEATHER-JACKET-003-%E2%80%93-BLACK.jpg",
    price: 129.99,
    quantity: 1,
  },
  {
    id: "2",
    name: "Noise Cancelling Headphones",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/ThiXKkp4sA5QGWVKDWyt6g.jpg",
    price: 89.99,
    quantity: 2,
  },
]

export default function CartPage() {
  const [cart, setCart] = useState(initialCart)

  const updateQuantity = (id, qty) => {
    if (qty < 1) return
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    )
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl text-center"
          >
            <Alert className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <ShoppingCart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Your cart is empty
              </AlertTitle>
              <AlertDescription className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">Add some items to start shopping.</p>
                <Button
                  asChild
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full text-sm sm:text-base transition-transform duration-200 hover:scale-105"
                >
                  <Link href="/products">Explore Products</Link>
                </Button>
              </AlertDescription>
            </Alert>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 dark:border-gray-700 py-4 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg object-cover w-20 h-20 sm:w-24 sm:h-24"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ₹{item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-16 sm:w-20 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg text-gray-900 dark:text-gray-100"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 rounded-full"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash className="w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div>
                <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Subtotal:{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Shipping calculated at checkout
                </p>
              </div>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full py-3 text-sm sm:text-base transition-transform duration-200 hover:scale-105"
              >
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
