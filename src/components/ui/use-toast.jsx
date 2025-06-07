"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { CheckCircle2, XCircle } from "lucide-react"

const ToastContext = React.createContext()

export function ToastProvider({ children }) {
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState({ title: "", description: "", variant: "default" })

  const toast = React.useCallback(({ title, description, variant }) => {
    setMessage({ title, description, variant })
    setOpen(true)
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastPrimitive.Provider swipeDirection="right">
        <ToastPrimitive.Root
          open={open}
          onOpenChange={setOpen}
          className={`border p-4 rounded-md shadow-md flex items-center gap-4
            ${message.variant === "destructive" ? "bg-red-100 border-red-600 text-red-900" : "bg-white border-gray-300 text-black"}
          `}
        >
          {message.variant === "destructive" ? <XCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
          <div className="flex flex-col">
            <ToastPrimitive.Title className="font-semibold">{message.title}</ToastPrimitive.Title>
            {message.description && <ToastPrimitive.Description>{message.description}</ToastPrimitive.Description>}
          </div>
          <ToastPrimitive.Close className="ml-auto cursor-pointer">✕</ToastPrimitive.Close>
        </ToastPrimitive.Root>
        <ToastPrimitive.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 w-[320px] z-50" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context.toast
}
