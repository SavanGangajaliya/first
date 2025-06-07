// app/checkout/page.jsx
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"

const CheckoutPage = () => {
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const handleCheckout = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            toast({
                title: "Order Placed",
                description: "Your order has been successfully submitted!",
            })
        }, 1500)
    }

    return (
        <div className="grid md:grid-cols-2 gap-10">
            {/* Shipping Form */}
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">Checkout</h1>

                <div className="grid gap-4">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email Address" />
                    <Input placeholder="Phone Number" />
                    <Textarea placeholder="Shipping Address" />
                </div>

                <div className="space-y-2">
                    <p className="font-medium">Select Shipping Method</p>
                    <RadioGroup defaultValue="standard" className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="standard" id="standard" />
                            <label htmlFor="standard">Standard (Free)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="express" id="express" />
                            <label htmlFor="express">Express (+$9.99)</label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-2">
                    <p className="font-medium">Payment Method</p>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cod">Cash on Delivery</SelectItem>
                            <SelectItem value="card">Credit/Debit Card</SelectItem>
                            <SelectItem value="upi">UPI</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Order Summary */}
            <Card className="sticky top-10 h-fit">
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Order Summary</h2>

                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹319.97</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>₹9.99</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹329.96</span>
                    </div>

                    <Button onClick={handleCheckout} disabled={loading} className="w-full mt-4">
                        {loading ? "Placing Order..." : "Place Order"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default CheckoutPage
