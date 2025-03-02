"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function MenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="text-black">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Jenova Homestays Vattakanal</DrawerTitle>
            <DrawerDescription>Menu</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-black hover:underline">
                About Us
              </Link>
              <Link href="/contact" className="text-black hover:underline">
                Contact
              </Link>
              <a
                href="https://maps.app.goo.gl/fNvodSN483QoSxUs7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                Location
              </a>
              <a href="tel:9865153573" className="text-black hover:underline">
                Phone: 9865153573
              </a>
              <Link href="/services" className="text-black hover:underline">
                Services
              </Link>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

