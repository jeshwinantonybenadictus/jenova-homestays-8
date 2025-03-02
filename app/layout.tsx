import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jenova Homestays Vattakanal | Cottages in Kodaikanal",
  description:
    "Experience luxury homestays and cottages in Vattakanal, Kodaikanal. Enjoy stunning views, cozy rooms, and warm hospitality at Jenova Homestays.",
  keywords:
    "vattakanal, vattakanal cottages, rooms in vattakanal, stays with good view in vattakanal, homestays in vattakanal, kodaikanal",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-blue-50 font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script id="schema-structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Jenova Homestays Vattakanal",
              "description": "Experience luxury homestays and cottages in Vattakanal, Kodaikanal. Enjoy stunning views, cozy rooms, and warm hospitality at Jenova Homestays.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vattakanal",
                "addressRegion": "Kodaikanal",
                "addressCountry": "India"
              },
              "telephone": "+919865153573",
              "url": "https://jenovahomestays.com",
              "priceRange": "$$",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Mountain View"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Indoor Bonfire"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Trekking"
                }
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'