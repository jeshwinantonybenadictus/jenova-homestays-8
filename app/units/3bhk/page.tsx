import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThreeBHKPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">3 BHK Unit</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Image src="\images\3bhkfireplace.jpg" alt="3 BHK Living Room" width={600} height={400} className="rounded-lg" />
        <Image src="\images\3bhkoutdoor.jpg" alt="3 BHK Bedroom" width={600} height={400} className="rounded-lg" />
        <Image src="\images\3bhkroom1.jpg" alt="3 BHK Kitchen" width={600} height={400} className="rounded-lg" />
        <Image src="\images\3bhkroom2.jpg" alt="3 BHK Bathroom" width={600} height={400} className="rounded-lg" />
      </div>
      <p className="text-lg mb-4 text-black">
        Our spacious 3 BHK unit is perfect for families or groups looking for a comfortable and luxurious stay.
        Featuring three bedrooms, a fully equipped kitchen, and a cozy living area, this unit provides all the comforts
        of home.
      </p>
      <Link href="/">
        <Button variant="outline" className="text-black">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

