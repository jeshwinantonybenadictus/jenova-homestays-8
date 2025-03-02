"use client"

import { useState, useEffect } from "react"

interface Review {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  link: string
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    // In a real-world scenario, you would fetch this data from your backend
    // which would handle the API call to Google Maps
    const mockReviews: Review[] = [
      {
        author_name: "Sathish Kumar",
        rating: 5,
        text: "Excellent place to stay. Awesome view and hospitality. Highly recommended.",
        relative_time_description: "2 months ago",
        link: "https://maps.app.goo.gl/BDeEkGcPxG7VbGRAA",
      },
      {
        author_name: "Sathish Babu",
        rating: 5,
        text: "Excellent place to stay. Awesome view and hospitality.",
        relative_time_description: "2 months ago",
        link: "https://maps.app.goo.gl/BDeEkGcPxG7VbGRAA",
      },
      {
        author_name: "Sathish Kumar",
        rating: 5,
        text: "Nice place to stay",
        relative_time_description: "3 months ago",
        link: "https://maps.app.goo.gl/BDeEkGcPxG7VbGRAA",
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
            <a
              key={index}
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-black">{review.rating}/5</span>
              </div>
              <p className="text-black mb-4">&quot;{review.text}&quot;</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{review.author_name}</span>
                <span className="text-sm text-black">{review.relative_time_description}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/BDeEkGcPxG7VbGRAA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Read More Experiences
          </a>
        </div>
      </div>
    </section>
  )
}

