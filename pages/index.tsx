import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import UnitCard from "../components/unit-card"
import MenuDrawer from "../components/menu-drawer"
import AnimatedSection from "../components/animated-section"
import ContactDetails from "../components/contact-details"
import ReviewsSection from "../components/reviews-section"
import Script from "next/script"

export default function Home() {
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews")
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <Head>
        <title>Jenova Homestays Vattakanal | Luxury Cottages in Kodaikanal</title>
        <meta
          name="description"
          content="Experience luxury homestays and cottages in Vattakanal, Kodaikanal. Enjoy stunning mountain views, cozy rooms, and warm hospitality at Jenova Homestays."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Vattakanal, Kodaikanal, homestay, cottages, mountain view, luxury accommodation"
        />
        <link rel="canonical" href="https://jenovahomestays.com" />
        <meta property="og:title" content="Jenova Homestays Vattakanal | Luxury Cottages in Kodaikanal" />
        <meta
          property="og:description"
          content="Experience luxury homestays and cottages in Vattakanal, Kodaikanal. Enjoy stunning mountain views, cozy rooms, and warm hospitality at Jenova Homestays."
        />
        <meta property="og:image" content="C:\Users\jeshw\Downloads\jenova-homestays 8\src\assets\images\cover.jpg" />
        <meta property="og:url" content="https://jenovahomestays.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jenova Homestays Vattakanal | Luxury Cottages in Kodaikanal" />
        <meta
          name="twitter:description"
          content="Experience luxury homestays and cottages in Vattakanal, Kodaikanal. Enjoy stunning mountain views, cozy rooms, and warm hospitality at Jenova Homestays."
        />
        <meta name="twitter:image" content="https://jenovahomestays.com/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 w-full border-b bg-blue-100/95 backdrop-blur supports-[backdrop-filter]:bg-blue-100/60">
        <div className="container flex h-14 items-center">
          <MenuDrawer />
          <div className="mr-4 hidden md:flex">
            <Link href="/">
              <span className="mr-6 flex items-center space-x-2 cursor-pointer">
                <span className="hidden font-bold text-black sm:inline-block">Jenova Homestays Vattakanal</span>
              </span>
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <button
              onClick={scrollToReviews}
              className="text-black px-4 py-2 rounded hover:bg-blue-200 transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <ContactDetails />
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section className="py-12 md:py-24 lg:py-32 relative">
          <Image
            src="/images/cover.jpg"
            alt="Scenic view of Vattakanal cottages surrounded by misty mountains"
            fill
            priority
            className="object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Jenova Homestays Vattakanal
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Experience unparalleled hospitality in the heart of Vattakanal, Kodaikanal
              </p>
            </div>
          </div>
        </section>

        <AnimatedSection>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-12 text-center">
                Our Cozy Cottages in Vattakanal
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <UnitCard
                  title="3 BHK Cottage"
                  description="Spacious 3 bedroom cottage perfect for families, with stunning views of Vattakanal"
                  image="/images/cottageoutdoor2.jpg"
                  link="/units/3bhk"
                  alt="3 BHK cottage in Vattakanal with panoramic mountain views"
                  price="₹3000"
                />
                <UnitCard
                  title="2 BHK Cottage"
                  description="Comfortable 2 bedroom cottage for small families or groups, nestled in Vattakanal's lush greenery"
                  image="\images\cozylights.jpg"
                  link="/units/2bhk"
                  alt="Cozy 2 BHK cottage surrounded by Vattakanal's misty forests"
                  price="₹2500"
                />
                <UnitCard
                  title="Suite Rooms"
                  description="Luxurious suite rooms for a cozy stay, offering the best views in Vattakanal"
                  image="\images\suite1.jpg"
                  link="/units/suites"
                  alt="Luxurious suite room with panoramic views of Vattakanal's landscape"
                  price="₹1800"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-4">
                    Just Sit and Stare Forever
                  </h2>
                  <p className="text-lg text-black mb-4">
                    One who sits to see the view of Vattakanal would be mesmerized and never have the heart to get up.
                    The breathtaking panoramas of misty mountains, lush valleys, and endless skies create a scene so
                    captivating that time seems to stand still.
                  </p>
                  <p className="text-lg text-black">
                    As you gaze upon the ever-changing canvas of nature, you'll find yourself lost in the beauty of
                    Vattakanal, with each moment offering a new perspective on the magnificent landscape before you.
                  </p>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="\images\sit.jpg"
                    alt="Mesmerizing view of Vattakanal's landscape"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-12 md:py-24 lg:py-32 bg-blue-100">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative h-[400px]">
                    <Image
                      src="\images\adventure.jpg"
                      alt="Cozy mountain living at Jenova Homestays"
                      layout="fill"
                      objectFit="scale-down"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-4">
                    Live in the Mountains 
                  </h2>
                  <p className="text-lg text-black mb-4">
                    Experience the tranquility and beauty of mountain living at Jenova Homestays. Nestled in the heart
                    of Vattakanal, our cottages offer you the chance to immerse yourself in the serene lifestyle of the
                    hills.
                  </p>
                  <p className="text-lg text-black">
                    Wake up to misty mornings, breathe in the crisp mountain air, and let the peaceful surroundings
                    rejuvenate your spirit. Here, you don't just visit the mountains – you live in them, embracing a
                    lifestyle that's in harmony with nature.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-4">
                    Homestays in Vattakanal, Kodaikanal
                  </h2>
                  <p className="text-lg text-black mb-4">
                    Jenova Homestays offers a unique and authentic experience in the heart of Vattakanal, Kodaikanal.
                    Our cozy cottages are nestled in the lush green landscapes of the Western Ghats, providing a perfect
                    blend of comfort, hospitality, and natural beauty.
                  </p>
                  <p className="text-lg text-black mb-4">
                    Whether you're seeking a peaceful retreat or a base for exploring the wonders of Vattakanal and
                    Kodaikanal, our homestay provides the ideal setting. Enjoy breathtaking views, crisp mountain air,
                    and the warm hospitality that Vattakanal is known for.
                  </p>
                  <p className="text-lg text-black">
                    Experience the local culture, savor home-cooked meals, and create lasting memories in our
                    thoughtfully designed accommodations. Jenova Homestays is your home away from home in the enchanting
                    hills of Vattakanal, Kodaikanal.
                  </p>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="\images\view1.jpg"
                    alt="Scenic view of Jenova Homestays cottages in Vattakanal, surrounded by misty mountains"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-12 md:py-24 lg:py-32 bg-blue-100">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="/images/cherrynlossom.jpg"
                      alt="Vattakanal's lush green forests and misty mountains"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <Image
                      src="\images\mountainview.jpg"
                      alt="Trekking trails near Jenova Homestays in Vattakanal"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <Image
                      src="\images\lakeview2.jpg"
                      alt="Serene view from Jenova Homestays cottages in Vattakanal"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <Image
                      src="\images\cottageoutdoors.jpg"
                      alt="Cozy interior of Jenova Homestays cottages in Vattakanal"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-4">
                    Discover Vattakanal, Kodaikanal
                  </h2>
                  <p className="text-lg text-black mb-4">
                    Immerse yourself in the natural beauty and tranquility of Vattakanal, a hidden gem in Kodaikanal.
                    Our cottages offer the perfect base for exploring this enchanting region.
                  </p>
                  <p className="text-lg text-black mb-4">
                    Experience the touch of nature as you walk through misty forests, breathe in the crisp mountain air,
                    and witness stunning sunrises over the rolling hills of Vattakanal. The nearby Dolphin's Nose
                    viewpoint provides breathtaking panoramas of the valley.
                  </p>
                  <p className="text-lg text-black">
                    For the adventure enthusiasts, Vattakanal offers exciting trekking trails, opportunities for
                    birdwatching, and serene spots for meditation and yoga. At Jenova Homestays, you're perfectly
                    positioned to experience all that Vattakanal and Kodaikanal have to offer, with our warm hospitality
                    enhancing your stay.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <ReviewsSection />
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl mb-8 text-center">
                Our Location in Vattakanal
              </h2>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.571802717273!2d77.48417309999999!3d10.215385399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076613da61a247%3A0x259c3c3d450c1e9d!2sJenova%20cottages%20vattakanal!5e0!3m2!1sen!2sin!4v1739439701232!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="border-t bg-blue-100">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-black">© 2024 Jenova Homestays Vattakanal. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="/terms">
              <span className="text-xs text-black hover:underline underline-offset-4 cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="/privacy">
              <span className="text-xs text-black hover:underline underline-offset-4 cursor-pointer">Privacy</span>
            </Link>
          </nav>
        </div>
      </footer>

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Jenova Homestays Vattakanal",
            description:
              "Experience luxury homestays and cottages in Vattakanal, Kodaikanal. Enjoy stunning views, cozy rooms, and warm hospitality at Jenova Homestays.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vattakanal",
              addressRegion: "Kodaikanal",
              addressCountry: "India",
            },
            telephone: "+919865153573",
            url: "https://jenovahomestays.com",
            priceRange: "₹1800 - ₹3000",
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Mountain View",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Indoor Bonfire",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Trekking",
              },
            ],
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "1800",
                priceCurrency: "INR",
                unitText: "per night",
              },
            },
          }),
        }}
      />
    </div>
  )
}

