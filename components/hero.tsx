"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Header.jpg-TzMT19TqsvEmVjfyDkJ1fAyFtvK4av.jpeg"
          alt="Security gate with dog"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 mb-0 md:mb-2">
              <Shield className="h-10 w-10 md:h-16 md:w-16 text-white" />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white leading-tight">
                Protezione e Design per la Sicurezza
              </h1>
              <div className="h-1 w-16 bg-[#e86c3a]"></div>
              <p className="text-lg md:text-xl text-gray-200 max-w-[600px]">
                Inferriate & Engineering offre soluzioni sicure e personalizzate per la protezione della tua casa e
                azienda.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <Link href="/prodotti" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white font-medium px-6 py-6 text-base"
                >
                  Scopri i nostri Prodotti
                </Button>
              </Link>
              <Link href="/servizi-aziende" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white font-medium px-6 py-6 text-base"
                >
                  Servizi per le Aziende
                </Button>
              </Link>
              <Link href="#quote" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1a3a5a] transition-all duration-300 px-6 py-6 text-base"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Richiedi Preventivo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
