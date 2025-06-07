"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function NewsletterModal() {
  const [email, setEmail] = useState("")
  const [promotions, setPromotions] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter a valid email.",
        variant: "destructive",
      })
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Subscribed!",
        description: `Thanks for subscribing, ${email}.`,
      })
      setEmail("")
    }, 1500)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Subscribe to Newsletter</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to our Newsletter</DialogTitle>
          <DialogDescription>
            Get the latest updates and offers right in your inbox.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center space-x-2">
            <Switch
              id="promotions"
              checked={promotions}
              onCheckedChange={setPromotions}
            />
            <Label htmlFor="promotions">Receive promotional emails</Label>
          </div>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
