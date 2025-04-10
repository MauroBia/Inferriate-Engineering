import AboutUs from "@/components/about-us"
import Hero from "@/components/hero"
import Products from "@/components/products"
import QuoteRequest from "@/components/quote-request"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      <QuoteRequest />
      <Testimonials />
    </main>
  )
}
