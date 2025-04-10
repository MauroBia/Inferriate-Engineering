import { Ruler, Wrench, Hammer, PenToolIcon as Tool, HeartHandshake, SirenIcon as Saw } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Ruler className="h-8 w-8 text-[#1a3a5a]" />,
      title: "Studio",
      description:
        "Sopralluogo eseguito da personale tecnico specializzato per valutare al meglio le necessità del cliente.",
    },
    {
      icon: <Tool className="h-8 w-8 text-[#1a3a5a]" />,
      title: "Progettazione",
      description:
        "Ideazione e studio del progetto basato sui rilievi effettuati, con sviluppo preciso delle misure e delle specifiche tecniche.",
    },
    {
      icon: <Saw className="h-8 w-8 text-[#1a3a5a]" />,
      title: "Costruzione",
      description:
        "Taglio e realizzazione delle strutture con materiali di alta qualità per garantire resistenza e durata nel tempo.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#1a3a5a]" />,
      title: "Lavorazione",
      description: "Modellazione e finitura del prodotto con attenzione ai dettagli e personalizzazione estetica.",
    },
    {
      icon: <Hammer className="h-8 w-8 text-[#1a3a5a]" />,
      title: "Montaggio",
      description:
        "Installazione in loco effettuata da tecnici esperti per assicurare un'installazione sicura e perfettamente integrata.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-[#1a3a5a]" />,
      title: "Assistenza",
      description:
        "Supporto post-installazione e manutenzione nel tempo per garantire il perfetto funzionamento dei prodotti.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services.jpg-cZlM7rvuyeu985y1PnScU8UzJcSLWm.jpeg"
          alt="Engineering workshop"
          fill
          className="object-cover brightness-25"
          loading="lazy"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-[#1a3a5a]/90"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-[#e86c3a] font-semibold">Cosa Facciamo</h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">I nostri Servizi</h3>
        </div>

        <div className="grid gap-4 sm:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 sm:p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center sm:text-left"
            >
              <div className="mb-2 sm:mb-4 flex justify-center sm:justify-start">{service.icon}</div>
              <h4 className="text-base sm:text-xl font-bold text-[#1a3a5a] mb-1 sm:mb-2">{service.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
