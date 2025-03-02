import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TwoBHKPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">2 BHK Unit</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Image src="\images\2bhkoutdoor.jpg" alt="2 BHK Living Room" width={600} height={400} className="rounded-lg" />
        <Image src="\images\2bhkoutdoor2.jpg" alt="2 BHK Bedroom" width={600} height={400} className="rounded-lg" />
        <Image src="\images\2bhkhall.jpg" alt="2 BHK Kitchen" width={600} height={400} className="rounded-lg" />
        <Image src="\images\2bhkroom1.jpg" alt="2 BHK Bathroom" width={600} height={400} className="rounded-lg" />
      </div>
      <p className="text-lg mb-4 text-black">
        Our cozy 2 BHK unit is ideal for small families or groups. With two comfortable bedrooms, a well-equipped
        kitchen, and a pleasant living space, this unit offers a perfect blend of comfort and convenience.
      </p>
      <Link href="/">
        <Button variant="outline" className="text-black">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

