// components/Features.jsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Truck, Lock } from "lucide-react"

const features = [
  {
    icon: <BadgeCheck className="text-primary w-6 h-6" />,
    title: "Top Quality",
    desc: "We offer only high-end, verified products.",
  },
  {
    icon: <Truck className="text-primary w-6 h-6" />,
    title: "Fast Delivery",
    desc: "Your order arrives within 2-5 business days.",
  },
  {
    icon: <Lock className="text-primary w-6 h-6" />,
    title: "Secure Checkout",
    desc: "256-bit SSL encryption with trusted gateways.",
  },
]

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {features.map((item, i) => (
        <Card key={i} className="text-center p-6 space-y-4">
          <div className="flex justify-center">{item.icon}</div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <CardContent className="text-sm text-muted-foreground">
            {item.desc}
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
