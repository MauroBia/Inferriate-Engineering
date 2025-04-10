import Image from "next/image"
import { Mail, Phone, MapPin, Clock, VoicemailIcon as Fax } from "lucide-react"
import SimpleQuoteForm from "./simple-quote-form"

export default function QuoteRequest() {
  return (
    <section id="quote" className="py-16 md:py-24 bg-[#1a3a5a] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <div className="mb-8">
              <h2 className="text-sm uppercase tracking-wider text-[#e86c3a] font-semibold">Scopri i Dettagli</h2>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
                Hai un progetto in mente?
              </h3>
              <p className="mt-4 text-gray-300">Scrivici e richiedi un preventivo o una consulenza</p>
            </div>

            <SimpleQuoteForm />
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Request.jpg-4mvxVJc1gLgR7J9MexBhzbKbDF40kj.jpeg"
              alt="Engineer working on metal components"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[#e86c3a]" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:info@inferriate-engineering.it"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@inferriate-engineering.it
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-[#e86c3a]" />
                <div>
                  <h4 className="font-medium">Cellulare</h4>
                  <a href="tel:+393938155808" className="text-gray-300 hover:text-white transition-colors">
                    +39 393 815 5808
                  </a>
                  <br />
                  <a href="tel:+393518587817" className="text-gray-300 hover:text-white transition-colors">
                    +39 351 858 7817
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-[#e86c3a]" />
                <div>
                  <h4 className="font-medium">Fisso</h4>
                  <a href="tel:+390239465854" className="text-gray-300 hover:text-white transition-colors">
                    +39 02 3946 5854
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Fax className="h-6 w-6 text-[#e86c3a]" />
                <div>
                  <h4 className="font-medium">Fax</h4>
                  <p className="text-gray-300">+39 02 3946 5854</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-[#e86c3a]" />
                <div>
                  <h4 className="font-medium">Indirizzo</h4>
                  <p className="text-gray-300">Via Cassino Scanasio 61, 20089 Rozzano, MI</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-[#e86c3a]" />
                <div>
                  <h4 className="font-medium">Orari</h4>
                  <p className="text-gray-300">Lunedì - Venerdì: 8:30 - 18:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
