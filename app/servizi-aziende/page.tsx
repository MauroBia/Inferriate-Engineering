"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Wrench, DoorOpen, Factory, Shield, AppWindowIcon as Window, Home, ChevronRight, Phone } from "lucide-react"
import QuoteRequest from "@/components/quote-request"

export default function ServiziAziende() {
  // Animazione per le icone
  const iconAnimation = {
    rest: { rotate: 0 },
    hover: { rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } },
  }

  // Animazione per i contenitori
  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  // Animazione per gli elementi
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const sections = [
    {
      id: "manutenzione",
      title: "Manutenzione Ordinaria e Straordinaria",
      description:
        "Servizi professionali di manutenzione per garantire l'efficienza e la sicurezza delle strutture aziendali.",
      icon: <Wrench className="h-12 w-12 text-[#e86c3a]" />,
      items: [
        "Interventi di riparazione su strutture metalliche",
        "Manutenzione programmata di porte, cancelli e serramenti",
        "Ripristino e sostituzione di componenti usurati",
        "Adeguamento normativo di strutture esistenti",
        "Servizio di pronto intervento per emergenze",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services.jpg-cZlM7rvuyeu985y1PnScU8UzJcSLWm.jpeg",
      imageAlt: "Tecnico che esegue manutenzione",
    },
    {
      id: "automazioni",
      title: "Automazioni e Accessi",
      description:
        "Soluzioni avanzate per il controllo degli accessi e l'automazione di porte e cancelli per ambienti industriali e commerciali.",
      icon: <DoorOpen className="h-12 w-12 text-[#e86c3a]" />,
      items: [
        "Installazione e manutenzione di porte automatiche",
        "Automazione di cancelli scorrevoli e a battente",
        "Sistemi di controllo accessi con badge o biometrici",
        "Tornelli e barriere per gestione flussi",
        "Dissuasori mobili e fissi per aree riservate",
      ],
      image: "https://i.imgur.com/NwQF6L3.jpeg",
      imageAlt: "Sistema di automazione cancello",
      unoptimized: true,
    },
    {
      id: "industriali",
      title: "Soluzioni Industriali e Logistiche",
      description: "Strutture e sistemi progettati specificamente per ambienti industriali, logistici e produttivi.",
      icon: <Factory className="h-12 w-12 text-[#e86c3a]" />,
      items: [
        "Portoni sezionali e a libro per capannoni",
        "Pedane di carico/scarico regolabili",
        "Serrande industriali ad alta resistenza",
        "Porte REI tagliafuoco certificate",
        "Barriere e protezioni per aree di lavoro",
      ],
      image: "https://i.imgur.com/0RfpCU3.jpeg",
      imageAlt: "Portone industriale",
      unoptimized: true,
    },
    {
      id: "sicurezza",
      title: "Sicurezza e Strutture Metalliche",
      description: "Progettazione e realizzazione di strutture metalliche su misura per esigenze specifiche aziendali.",
      icon: <Shield className="h-12 w-12 text-[#e86c3a]" />,
      items: [
        "Pensiline e tettoie per aree esterne",
        "Scale di sicurezza e vie di fuga",
        "Flap e barriere di protezione",
        "Rivestimenti metallici decorativi e funzionali",
        "Strutture espositive e supporti personalizzati",
      ],
      image: "https://i.imgur.com/4cKAkjp.jpeg",
      imageAlt: "Struttura metallica di sicurezza",
      unoptimized: true,
    },
    {
      id: "serramenti",
      title: "Serramenti e Complementi",
      description: "Soluzioni complete per la sicurezza e il comfort degli ambienti di lavoro.",
      icon: <Window className="h-12 w-12 text-[#e86c3a]" />,
      items: [
        "Inferriate di sicurezza per uffici e negozi",
        "Infissi ad alto isolamento termico e acustico",
        "Zanzariere per ambienti di lavoro",
        "Tende tecniche e schermature solari",
        "Basculanti e serrande per box e magazzini",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serramenti%20-%20Isolazione.jpg-18LdLbCSTrT7IjZkJqeg911ao1OYgp.jpeg",
      imageAlt: "Serramenti per aziende",
    },
  ]

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Header.jpg-TzMT19TqsvEmVjfyDkJ1fAyFtvK4av.jpeg"
            alt="Servizi per le aziende"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center text-sm text-gray-300 mb-4">
                <Link href="/" className="hover:text-white flex items-center">
                  <Home className="h-3.5 w-3.5 mr-1" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="h-3.5 w-3.5 mx-2" />
                <span className="text-white">Servizi per le Aziende</span>
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                  Servizi per le Aziende
                </h1>
                <p className="text-lg text-gray-100 mb-4 drop-shadow-md max-w-2xl">
                  Soluzioni professionali per accessi, automazioni, sicurezza e manutenzione industriale.
                </p>
                <div className="h-1 w-20 bg-[#e86c3a] mt-6"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezioni dei servizi */}
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container px-4 md:px-6">
            <motion.div
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerAnimation}
            >
              {/* Testo */}
              <motion.div variants={itemAnimation}>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="rounded-full bg-[#1a3a5a]/10 p-3"
                    initial="rest"
                    whileHover="hover"
                    variants={iconAnimation}
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5a]">{section.title}</h2>
                </div>

                <p className="text-gray-600 mb-6">{section.description}</p>

                <ul className="space-y-2 mb-6">
                  {section.items.map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-2" variants={itemAnimation}>
                      <div className="h-1.5 w-1.5 rounded-full bg-[#e86c3a] mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  className="bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white"
                  onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Richiedi Informazioni
                </Button>
              </motion.div>

              {/* Immagine */}
              <motion.div
                className={`relative aspect-[4/3] overflow-hidden rounded-lg shadow-md ${index % 2 === 1 ? "md:order-first" : ""}`}
                variants={itemAnimation}
              >
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={80}
                  unoptimized={section.unoptimized}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-[#1a3a5a] text-white">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Richiedi un sopralluogo o una consulenza</h2>
            <p className="text-gray-300 mb-8">
              I nostri tecnici specializzati sono a disposizione per valutare le tue esigenze e proporti le soluzioni
              più adatte alla tua azienda.
            </p>
            <Button
              size="lg"
              className="bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white font-medium px-8 py-6 text-base"
              onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contattaci
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quote Request Section */}
      <QuoteRequest />
    </main>
  )
}
