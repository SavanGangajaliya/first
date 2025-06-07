"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden bg-white dark:bg-gray-900 border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl group">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            {product.discount && (
              <Badge className="absolute top-3 right-3 bg-indigo-600 hover:bg-indigo-600 text-white text-xs font-semibold">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
        </Link>

        <CardContent className="p-4 sm:p-5 space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
            {product.category}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            {product.stock > 0 ? (
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs font-medium">
                In Stock
              </Badge>
            ) : (
              <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 text-xs font-medium">
                Out of Stock
              </Badge>
            )}
          </div>
          <Button
            className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full py-2 text-sm sm:text-base transition-transform duration-200 hover:scale-105"
            disabled={product.stock === 0}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
