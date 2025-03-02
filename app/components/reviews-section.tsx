"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Review {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    // In a real-world scenario, you would fetch this data from your backend
    // which would handle the API call to Google Maps
    const mockReviews: Review[] = [
      {
        author_name: "John Doe",
        rating: 5,
        text: "Amazing stay at Jenova Homestays! The views of Vattakanal are breathtaking, and the hospitality was top-notch.",
        relative_time_description: "2 weeks ago",
      },
      {
        author_name: "Jane Smith",
        rating: 4,
        text: "Cozy cottages with a perfect blend of comfort and nature. Loved our time in Vattakanal!",
        relative_time_description: "1 month ago",
      },
      {
        author_name: "Mike Johnson",
        rating: 5,
        text: "The best homestay in Vattakanal! Stunning views, great food, and excellent service. Will definitely come back!",
        relative_time_description: "2 months ago",
      },
    ]

    setReviews(mockReviews)
  }, [])

  return (
    <section id="reviews" className="py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-12 text-center">
          What Our Guests Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{review.rating}/5</span>
                </div>
                <p className="text-gray-700 mb-4">&quot;{review.text}&quot;</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{review.author_name}</span>
                  <span className="text-sm text-gray-600">{review.relative_time_description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

