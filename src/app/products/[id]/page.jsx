// app/products/[id]/page.jsx
"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ZoomIn } from "lucide-react"

const dummyProduct = {
  id: "1",
  name: "Classic Leather Jacket",
  image: "/products/jacket.jpg",
  price: 129.99,
  category: "Fashion",
  stock: 8,
  description: "A timeless leather jacket with durable stitching and a soft lining.",
  specs: "Material: 100% Leather. Fit: Slim. Color: Black.",
  returns: "30-day return policy. Must be unworn and in original condition.",
  sizes: ["S", "M", "L", "XL"],
}

export default function ProductDetailPage({ params }) {
  const product = dummyProduct // Simulate fetched product by ID

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="relative w-full h-full">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative cursor-zoom-in group overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 text-white rounded-full p-1">
                <ZoomIn size={16} />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <Image src={product.image} alt={product.name} width={800} height={800} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Info Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground">{product.category}</p>
        <p className="text-xl font-semibold">₹{product.price}</p>

        {/* Size selection */}
        <div className="space-y-2">
          <p className="font-medium">Select Size</p>
          <RadioGroup defaultValue={product.sizes[0]} className="flex gap-4">
            {product.sizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <RadioGroupItem value={size} id={size} />
                <label htmlFor={size} className="text-sm">{size}</label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Add to Cart */}
        <Button size="lg" className="w-full">Add to Cart</Button>

        {/* Tabs for Info */}
        <Tabs defaultValue="details" className="w-full mt-6">
          <TabsList className="w-full">
            <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="desc">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="specs">
                <AccordionTrigger>Specifications</AccordionTrigger>
                <AccordionContent>{product.specs}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger>Returns</AccordionTrigger>
                <AccordionContent>{product.returns}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="reviews">
            <p className="text-muted-foreground mt-4">No reviews yet.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
