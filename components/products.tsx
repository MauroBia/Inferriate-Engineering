"use client"

import { Shield, Lock, AppWindowIcon as Window, DoorClosed, Bug, Blinds } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Products() {
  const products = [
    {
      icon: <DoorClosed className="h-12 w-12 text-[#e86c3a]" />,
      title: "Porte Interne",
      description: "Soluzioni personalizzate per ogni esigenza abitativa con design e materiali di alta qualità.",
      id: "porte-interne",
    },
    {
      icon: <Window className="h-12 w-12 text-[#e86c3a]" />,
      title: "Serramenti in PVC",
      description: "Finestre e serramenti in PVC ad altissimo isolamento termico/acustico.",
      id: "serramenti",
    },
    {
      icon: <Bug className="h-12 w-12 text-[#e86c3a]" />,
      title: "Zanzariere",
      description: "Zanzariere personalizzate per finestre e porte.",
      id: "zanzariere",
    },
    {
      icon: <Blinds className="h-12 w-12 text-[#e86c3a]" />,
      title: "Persiane Blindate",
      description: "Persiane blindate in acciaio che offrono sicurezza e resistenza senza rinunciare all'estetica.",
      id: "persiane",
    },
    {
      icon: <Shield className="h-12 w-12 text-[#e86c3a]" />,
      title: "Inferriate",
      description: "Inferriate su misura per ogni esigenza di sicurezza e spazio.",
      id: "inferriate",
    },
    {
      icon: <Lock className="h-12 w-12 text-[#e86c3a]" />,
      title: "Sistemi di Bloccaggio",
      description: "Serrature di sicurezza e accessori per la protezione degli accessi.",
      id: "bloccaggio",
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-[#e86c3a] font-semibold">I Nostri Prodotti</h2>
          <h3 className="text-3xl font-bold tracking-tight text-[#1a3a5a] sm:text-4xl mt-2">La Nostra Gamma</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Scopri la nostra gamma di prodotti di alta qualità per la sicurezza e la protezione, progettati per
            mantenere al sicuro la tua proprietà.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
            >
              <motion.div className="mb-3" whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                {product.icon}
              </motion.div>
              <h4 className="text-[#1a3a5a] text-base font-semibold mb-2">{product.title}</h4>
              <p className="text-xs text-gray-600 mb-3">{product.description}</p>
              <Link href={`/prodotti#${product.id}`}>
                <Button variant="link" className="text-xs text-[#e86c3a] p-0 h-auto">
                  Scopri di più
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
