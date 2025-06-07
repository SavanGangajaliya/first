// app/page.jsx
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Hero from "@/components/Hero"
import Features from "@/components/Features"

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      {/* Optional: Add Newsletter, Popular Products, etc. */}
    </div>
  )
}
