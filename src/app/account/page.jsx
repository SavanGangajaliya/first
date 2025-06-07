// app/account/page.jsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableCell, TableBody, TableHead } from "@/components/ui/table"

export default function AccountPage() {
  const [avatar, setAvatar] = useState("/avatar.png")
  const [userData, setUserData] = useState({
    name: "Savan Gangajaliya",
    email: "savan@example.com",
    phone: "9876543210",
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) setAvatar(URL.createObjectURL(file))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your changes have been saved.",
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">My Account</h1>

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="info">Profile Info</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <Card>
            <CardContent className="py-6 space-y-6">
              {/* Avatar Upload */}
              <div className="flex items-center gap-4">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={80}
                  height={80}
                  className="rounded-full object-cover border"
                />
                <div>
                  <Label htmlFor="avatar" className="cursor-pointer underline">Change Avatar</Label>
                  <Input type="file" id="avatar" accept="image/*" onChange={handleImageChange} className="hidden" />
                </div>
              </div>

              {/* Editable Inputs */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <Button onClick={handleSave} className="w-full text-lg">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardContent className="py-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>#ORD001</TableCell>
                    <TableCell>June 1, 2025</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell className="text-right">₹199.99</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#ORD002</TableCell>
                    <TableCell>May 23, 2025</TableCell>
                    <TableCell>Delivered</TableCell>
                    <TableCell className="text-right">₹89.99</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
