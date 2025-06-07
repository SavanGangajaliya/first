"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/ProductCard"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"

const dummyProducts = [
  {
    id: "1",
    name: "https://rjackets.com/wp-content/uploads/2023/12/Men-Black-Leather-Jacket.webp",
    image: "/products/jacket.jpg",
    price: 129.99,
    originalPrice: 1559.99,
    discount: 20,
    category: "Fashion",
    stock: 10,
  },
  {
    id: "2",
    name: "Noise Cancelling Headphones",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/ThiXKkp4sA5QGWVKDWyt6g.jpg",
    price: 89.99,
    originalPrice: 1109.99,
    discount: 18,
    category: "Electronics",
    stock: 5,
  },
  {
    id: "3",
    name: "Smartwatch Pro",
    image: "https://www.corseca.in/cdn/shop/products/3.1.jpg?v=1678684419",
    price: 149.99,
    category: "Gadgets",
    stock: 0,
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Simulate fetching products
  useEffect(() => {
    setTimeout(() => {
      setProducts(dummyProducts)
      setIsLoading(false)
    }, 2000) // Mock 2-second delay
  }, [])

  // Filter products by search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get unique categories
  const categories = [
    "All",
    ...new Set(dummyProducts.map((product) => product.category)),
  ]

  if (isLoading) {
    return (
      <div className="min-h-[80vh] bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-12 h-12 border-4 border-t-indigo-600 dark:border-t-indigo-400 border-gray-200 dark:border-gray-700 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Loading...
          </motion.span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 text-center">
          Explore Our Products
        </h1>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Filter className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm ${
                  selectedCategory === category
                    ? "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white"
                    : "text-indigo-600 border-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900"
                } rounded-full px-4 py-1 transition-transform duration-200 hover:scale-105`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl text-center"
          >
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              No products found
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              asChild
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full text-sm sm:text-base transition-transform duration-200 hover:scale-105"
            >
              <Link href="/products">Clear Filters</Link>
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}