"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)

    // Assicuriamoci che l'elemento esista prima di scorrere
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Funzione per navigare alla pagina prodotti
  const navigateToProdotti = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push("/prodotti")
  }

  // Funzione per navigare alla pagina servizi aziende
  const navigateToServiziAziende = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push("/servizi-aziende")
  }

  // Funzione per tornare alla home
  const goToHome = (e) => {
    e.preventDefault()
    router.push("/").then(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Funzione per gestire il click sul pulsante "Richiedi Preventivo"
  const handleQuoteClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (pathname === "/") {
      // Se siamo già sulla home page, scorriamo alla sezione quote
      const quoteSection = document.getElementById("quote")
      if (quoteSection) {
        quoteSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      // Se siamo su un'altra pagina, navighiamo alla home e poi alla sezione quote
      router.push("/#quote")
    }
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" onClick={goToHome} className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-kuSY5q8kYZNoAOmZlp6juq37r3befB.png"
            alt="Inferriate Engineering Logo"
            width={40}
            height={40}
            className="w-auto h-10"
          />
          <span
            className={`text-[#1a3a5a] font-semibold text-xl ${isScrolled || pathname !== "/" ? "text-[#1a3a5a]" : "text-white"}`}
          >
            Inferriate Engineering
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Chi Siamo", href: "/#about" },
            { name: "Servizi", href: "/#services" },
            { name: "Prodotti", href: "/prodotti" },
            { name: "Servizi Aziende", href: "/servizi-aziende" },
          ].map((item) => {
            // Se è il link Prodotti, usa la funzione speciale
            if (item.name === "Prodotti") {
              return (
                <button
                  key={item.name}
                  onClick={navigateToProdotti}
                  className={`text-sm font-medium hover:text-[#e86c3a] transition-colors ${
                    isScrolled || pathname !== "/" ? "text-[#1a3a5a]" : "text-white"
                  } ${pathname === item.href ? "text-[#e86c3a]" : ""}`}
                >
                  {item.name}
                </button>
              )
            }

            // Se è il link Servizi Aziende, usa la funzione speciale
            if (item.name === "Servizi Aziende") {
              return (
                <button
                  key={item.name}
                  onClick={navigateToServiziAziende}
                  className={`text-sm font-medium hover:text-[#e86c3a] transition-colors ${
                    isScrolled || pathname !== "/" ? "text-[#1a3a5a]" : "text-white"
                  } ${pathname === item.href ? "text-[#e86c3a]" : ""}`}
                >
                  {item.name}
                </button>
              )
            }

            // Se siamo sulla home page, usiamo scrollToSection per le sezioni interne
            if (pathname === "/" && item.href !== "/prodotti") {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href === "/") {
                      goToHome(new Event("click") as any)
                    } else {
                      const sectionId = item.href.split("#")[1]
                      scrollToSection(sectionId)
                    }
                  }}
                  className={`text-sm font-medium hover:text-[#e86c3a] transition-colors ${
                    isScrolled || pathname !== "/" ? "text-[#1a3a5a]" : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              )
            }
            // Altrimenti usiamo Link normale
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-[#e86c3a] transition-colors ${
                  isScrolled || pathname !== "/" ? "text-[#1a3a5a]" : "text-white"
                } ${pathname === item.href ? "text-[#e86c3a]" : ""}`}
              >
                {item.name}
              </Link>
            )
          })}
          <Button onClick={handleQuoteClick} className="bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white">
            Richiedi Preventivo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled || pathname !== "/" ? "text-[#1a3a5a]" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled || pathname !== "/" ? "text-[#1a3a5a]" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden"
          >
            <nav className="container mx-auto py-4 px-4 flex flex-col gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Chi Siamo", href: "/#about" },
                { name: "Servizi", href: "/#services" },
                { name: "Prodotti", href: "/prodotti" },
                { name: "Servizi Aziende", href: "/servizi-aziende" },
              ].map((item) => {
                // Se è il link Prodotti, usa la funzione speciale
                if (item.name === "Prodotti") {
                  return (
                    <button
                      key={item.name}
                      onClick={navigateToProdotti}
                      className="text-[#1a3a5a] text-sm font-medium hover:text-[#e86c3a] transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  )
                }

                // Se è il link Servizi Aziende, usa la funzione speciale
                if (item.name === "Servizi Aziende") {
                  return (
                    <button
                      key={item.name}
                      onClick={navigateToServiziAziende}
                      className="text-[#1a3a5a] text-sm font-medium hover:text-[#e86c3a] transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  )
                }

                // Se siamo sulla home page, usiamo scrollToSection per le sezioni interne
                if (pathname === "/" && item.href !== "/prodotti") {
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setIsMenuOpen(false)
                        if (item.href === "/") {
                          goToHome(new Event("click") as any)
                        } else {
                          const sectionId = item.href.split("#")[1]
                          scrollToSection(sectionId)
                        }
                      }}
                      className="text-[#1a3a5a] text-sm font-medium hover:text-[#e86c3a] transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  )
                }
                // Altrimenti usiamo Link normale
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[#1a3a5a] text-sm font-medium hover:text-[#e86c3a] transition-colors text-left ${
                      pathname === item.href ? "text-[#e86c3a]" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Button onClick={handleQuoteClick} className="bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white w-full">
                Richiedi Preventivo
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
