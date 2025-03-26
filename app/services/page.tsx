import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Indoor Bonfire",
    description: "Enjoy a cozy evening around our indoor bonfire, perfect for relaxation and storytelling.",
    image: "/images/bonfire.jpg",
  },
  {
    title: "Trekking",
    description: "Explore the beautiful surroundings of Kodaikanal with our guided trekking experiences.",
    image: "/images/trekking.jpg",
  },
  {
    title: "Offroading",
    description: "Experience the thrill of offroading in the rugged terrains around our homestay.",
    image: "/images/offroading.jpg",
  },
  {
    title: "Barbecue and Homefood",
    description: "Savor delicious barbecue and authentic homemade local cuisine during your stay.",
    image: "/images/barbecue.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="sticky top-0 z-50 w-full border-b bg-blue-100/95 backdrop-blur supports-[backdrop-filter]:bg-blue-100/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-black">Jenova Homestays</span>
          </Link>
        </div>
      </header>

      <main className="container px-4 py-12 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-12 text-center">
          Our Services
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-black mb-2">{service.title}</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" className="text-black">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <footer className="border-t bg-blue-100 mt-12">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-black">© 2024 Jenova Homestays. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-black hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-black hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

