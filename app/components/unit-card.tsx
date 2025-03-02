import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface UnitCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function UnitCard({ title, description, image, link }: UnitCardProps) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-video">
          <Image
            src={image || "C:\Users\jeshw\Downloads\jenova-homestays 8\src\assets\images\adventure.jpg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4 bg-white">
          <h3 className="font-semibold text-xl mb-2 text-black">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

