"use client"

import React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DoorClosed, Lock, AppWindowIcon as Window, Bug, Shield, Blinds } from "lucide-react"
import QuoteRequest from "@/components/quote-request"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("porte-interne")
  const [currentSlide, setCurrentSlide] = useState(0)
  const categoryRefs = useRef({})

  // Ottimizzazione delle immagini con dimensioni specificate
  const categories = [
    {
      id: "porte-interne",
      title: "Porte Interne",
      icon: <DoorClosed className="h-8 w-8 text-[#e86c3a]" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porte%20interne%203.jpg-V0kGOFBNEc5gGEDr4I5Oj6Ip9gYRZB.jpeg",
      description:
        "Proponiamo soluzioni personalizzate per ogni esigenza abitativa. Oltre al design, curiamo materiali, finiture e funzionalità per garantire qualità e durata nel tempo.",
      features: [
        "A battente",
        "Scorrevoli a scomparsa",
        "Scorrevoli esterno muro",
        "A libro simmetrico",
        "A libro asimmetrico",
        "A filomuro",
      ],
    },
    {
      id: "serramenti",
      title: "Serramenti in PVC",
      icon: <Window className="h-8 w-8 text-[#e86c3a]" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serramenti%20-%20Isolazione.jpg-18LdLbCSTrT7IjZkJqeg911ao1OYgp.jpeg",
      description:
        "Selezioniamo i migliori produttori italiani ed europei per offrire serramenti di alta qualità, dal design raffinato e dalle elevate prestazioni termiche e acustiche.",
      features: [
        "Profili in PVC con 5 camere",
        "Profondità profilo: 70 mm",
        "Armatura in acciaio zincato",
        "Elevata resistenza agli agenti atmosferici",
        "Ampia gamma di colori disponibili",
        "Possibilità di rivestimento in alluminio",
        "Isolamento termico con vetri doppi o tripli",
        "Isolamento acustico fino a 41 dB",
      ],
    },
    {
      id: "zanzariere",
      title: "Zanzariere",
      icon: <Bug className="h-8 w-8 text-[#e86c3a]" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zanzariere.jpg-CdACBBvB97K2EbqSGDVhZn1CmEzVSS.jpeg",
      description:
        "Offriamo zanzariere in alluminio con rete in fibra di vetro termosaldata, disponibili sia manuali che motorizzate. Perfette per finestre e porte.",
      features: ["Verticale", "Laterale", "Scorrevole", "A battente", "Plissè", "Modelli con incasso e antivento"],
    },
    {
      id: "persiane",
      title: "Persiane Blindate",
      icon: <Blinds className="h-8 w-8 text-[#e86c3a]" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Persiane%20Blindate.jpg-Culmg2dJSbI8c5ZcnLUzyJj8nkuIdj.jpeg",
      description:
        "Le nostre persiane blindate in acciaio offrono sicurezza e resistenza senza rinunciare all'estetica. Garantiscono massima protezione.",
      features: [
        "Struttura in acciaio resistente",
        "Serrature a triplice chiusura",
        "Cerniere in acciaio con cuscinetti inox",
        "Sistema antisfilamento delle ovaline",
        "Verniciatura effetto legno o colori RAL",
      ],
    },
    {
      id: "inferriate",
      title: "Inferriate",
      icon: <Shield className="h-8 w-8 text-[#e86c3a]" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Inferriate%20Enginering.jpg-M6xibz5opchRVp49A02C9WSX94CcpQ.jpeg",
      description:
        "Realizziamo inferriate su misura per ogni esigenza di sicurezza e spazio, con diverse varianti per adattarsi a qualsiasi contesto.",
      features: ["Tradizionali ed economiche", "Inferriate per tapparelle", "Inferriate per persiane"],
    },
    {
      id: "bloccaggio",
      title: "Sistemi di Bloccaggio",
      icon: <Lock className="h-8 w-8 text-[#e86c3a]" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tecnico%20cambio%20serratura.jpg-7CL89w9TgkfxYf1qWqa30JcWG8Zfdw.jpeg",
      description:
        "Specializzati nella sostituzione e aggiornamento di serrature per porte blindate con soluzioni antieffrazione moderne.",
      features: [
        "Sostituzione serrature doppia mappa con cilindro europeo",
        "Installazione defender antishock per protezione avanzata",
        "Servizio di sostituzione serratura in giornata",
      ],
    },
  ]

  // Assicurati che la pagina si carichi dall'inizio
  useEffect(() => {
    // Forza lo scroll all'inizio della pagina
    window.scrollTo(0, 0)

    // Controlla se c'è un hash nell'URL
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const category = categories.find((cat) => cat.id === hash)
      if (category) {
        setActiveCategory(hash)
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            // Aumenta l'offset per evitare che il titolo venga tagliato
            const headerOffset = 180
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 500)
      }
    }

    // Inizializza i riferimenti per ogni categoria
    categories.forEach((category) => {
      categoryRefs.current[category.id] = React.createRef()
    })
  }, [])

  // Funzione per scorrere alla categoria selezionata
  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId)
    const element = document.getElementById(categoryId)
    if (element) {
      // Aumenta l'offset per evitare che il titolo venga tagliato
      const headerOffset = 180
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Avvia lo scorrimento automatico
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === categories.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Gestisci lo scroll e aggiorna la categoria attiva
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250 // Aggiungi un offset per migliorare la rilevazione

      // Trova quale sezione è attualmente visibile
      for (const category of categories) {
        const element = document.getElementById(category.id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.pageYOffset
          const elementBottom = bottom + window.pageYOffset

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveCategory(category.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section con Carousel integrato */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Carousel di sfondo */}
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {categories.map((category, index) => (
            <div key={index} className="absolute inset-0 w-full h-full" style={{ left: `${index * 100}%` }}>
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover brightness-50"
                sizes="100vw"
                priority={index === 0}
                quality={80}
              />
            </div>
          ))}
        </div>

        {/* Contenuto Hero sovrapposto */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">I Nostri Prodotti</h1>
                <p className="text-lg text-gray-100 mb-4 drop-shadow-md">
                  Soluzioni di alta qualità per la sicurezza e il comfort della tua casa e della tua attività
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-white drop-shadow-lg">
                  La Nostra Gamma Completa
                </h2>
                <div className="h-1 w-20 bg-[#e86c3a] mx-auto mt-6"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview - Ottimizzato per mobile */}
      <section className="py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full ${
                  activeCategory === category.id ? "ring-2 ring-[#e86c3a]" : ""
                }`}
                onClick={() => scrollToCategory(category.id)}
              >
                <div className="relative h-24 sm:h-28 md:h-40 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    loading="lazy"
                    quality={70}
                  />
                </div>
                <CardContent className="p-2 md:p-4">
                  <div className="flex flex-col items-center gap-1 md:gap-2 text-center">
                    <div className="rounded-full bg-[#1a3a5a]/10 p-1 md:p-2 flex-shrink-0">{category.icon}</div>
                    <h3 className="text-xs md:text-base font-semibold text-[#1a3a5a]">{category.title}</h3>
                    <Button
                      variant="link"
                      className="text-xs md:text-sm text-[#e86c3a] p-0 h-auto"
                      onClick={(e) => {
                        e.stopPropagation()
                        scrollToCategory(category.id)
                      }}
                    >
                      Scopri di più
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-20 z-30 bg-white shadow-md py-3">
        <div className="container px-4 md:px-6">
          <div className="flex overflow-x-auto py-1 scrollbar-hide gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#e86c3a] text-white"
                    : "bg-gray-100 text-[#1a3a5a] hover:bg-gray-200"
                }`}
                onClick={() => scrollToCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Product Sections */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-16">
            {categories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-40 md:scroll-mt-32"
                ref={(el) => (categoryRefs.current[category.id] = el)}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="rounded-full bg-[#1a3a5a]/10 p-2">{category.icon}</div>
                      <h2 className="text-3xl font-bold text-[#1a3a5a]">{category.title}</h2>
                    </div>

                    <p className="text-gray-600 mb-6">{category.description}</p>

                    <h3 className="text-xl font-semibold text-[#1a3a5a] mb-3">
                      {category.id === "persiane" || category.id === "serramenti"
                        ? "Caratteristiche:"
                        : category.id === "inferriate"
                          ? "Varianti:"
                          : category.id === "bloccaggio"
                            ? "Servizi:"
                            : "Tipologie disponibili:"}
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#e86c3a]"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white"
                      onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Richiedi Preventivo
                    </Button>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      quality={80}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <QuoteRequest />
    </main>
  )
}
