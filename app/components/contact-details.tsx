"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone } from "lucide-react"

export default function ContactDetails() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto text-black">
          <Phone className="mr-2 h-4 w-4" />
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            You're just a call away from living within the mystical marvels of nature in Vattakanal.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-4">
              Phone:{" "}
              <a href="tel:9865153573" className="text-blue-600 hover:underline">
                9865153573
              </a>
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="col-span-4">
              Email:{" "}
              <a href="mailto:info@jenovahomestays.com" className="text-blue-600 hover:underline">
                info@jenovahomestays.com
              </a>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

