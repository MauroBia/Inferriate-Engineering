import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutUs() {
  const features = [
    {
      title: "Sicurezza Certificata",
      description: "Tutti i nostri prodotti soddisfano i più alti standard di sicurezza",
    },
    {
      title: "Oltre 25 anni di Esperienza",
      description: "Decenni di esperienza in soluzioni di sicurezza e protezione",
    },
    {
      title: "Design su Misura",
      description: "Soluzioni personalizzate per soddisfare le tue esigenze specifiche",
    },
    {
      title: "Installazione Professionale",
      description: "Installazione esperta da parte dei nostri tecnici qualificati",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-[#e86c3a] font-semibold">Chi Siamo</h2>
          <h3 className="text-3xl font-bold tracking-tight text-[#1a3a5a] sm:text-4xl mt-2">La Nostra Storia</h3>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Image Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AboutUs.jpg-PAJqZty4cQ85mghtDmcTNeRfxodouE.jpeg"
              alt="Engineer working on metal security gate"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              quality={85}
            />
          </div>

          {/* Content Container */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-[#e86c3a] font-semibold">La Nostra Missione</h2>
              <h3 className="text-3xl font-bold tracking-tight text-[#1a3a5a] sm:text-4xl">
                Esperti in Sicurezza e Protezione su Misura
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Soluzioni innovative per inferriate, cancelli e grate di sicurezza. Design moderno e protezione
                garantita per la tua casa e attività.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-2">
                    <CheckCircle className="h-8 w-8 text-[#e86c3a]" />
                    <h4 className="font-medium text-[#1a3a5a] text-lg">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
