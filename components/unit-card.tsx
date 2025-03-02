import Image from "next/image"
import Link from "next/link"

interface UnitCardProps {
  title: string
  description: string
  image: string
  link: string
  alt: string
  price: string
}

export default function UnitCard({ title, description, image, link, alt, price }: UnitCardProps) {
  return (
    <Link
      href={link}
      className="block overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative aspect-video">
        <Image src={image || "/placeholder.svg"} alt={alt} layout="fill" objectFit="scale-down" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2 text-black">{title}</h3>
        <p className="text-sm text-black mb-2">{description}</p>
        <p className="text-lg font-bold text-blue-600">{price} per night</p>
      </div>
    </Link>
  )
}

