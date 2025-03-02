import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuitesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Suite Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Image src="\images\bluesuite.jpg" alt="Suite Room 1" width={600} height={400} className="rounded-lg" />
        <Image src="\images\ivysuite.jpg" alt="Suite Bathroom" width={600} height={400} className="rounded-lg" />
        <Image src="\images\bluesuite2.jpg" alt="Suite Room 2" width={600} height={400} className="rounded-lg" />
        <Image src="\images\washroom.jpg" alt="Suite Amenities" width={600} height={400} className="rounded-lg" />
      </div>
      <p className="text-lg mb-4 text-black">
        Our luxurious suite rooms offer the ultimate in comfort and style. Each suite features a spacious bedroom, a
        private bathroom, and high-end amenities to ensure a memorable and relaxing stay.
      </p>
      <Link href="/">
        <Button variant="outline" className="text-black">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

