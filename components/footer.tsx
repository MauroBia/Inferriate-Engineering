"use client"

import { Shield, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    // Se siamo sulla pagina prodotti, naviga alla home e poi alla sezione
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    // Se siamo già sulla home, scorri alla sezione
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const goToHome = () => {
    window.location.href = "/"
  }

  const goToProdotti = () => {
    window.location.href = "/prodotti"
  }

  return (
    <footer className="bg-[#0d1f2d] text-white">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <h3 className="text-lg font-medium">Inferriate Engineering</h3>
            </div>
            <p className="text-sm text-gray-400">
              Esperienza, innovazione e sicurezza. Da anni proteggiamo abitazioni e aziende con soluzioni su misura e
              materiali di alta qualità.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Link Rapidi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={goToHome} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button onClick={goToProdotti} className="text-gray-400 hover:text-white transition-colors">
                  Prodotti
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quote")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Richiedi Preventivo
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contatti</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+393938155808" className="text-gray-400 hover:text-white transition-colors">
                  +39 393 815 5808
                </a>
              </li>
              <li>
                <a href="tel:+393518587817" className="text-gray-400 hover:text-white transition-colors">
                  +39 351 858 7817
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@inferriate-engineering.it"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@inferriate-engineering.it
                </a>
              </li>
              <li className="text-gray-400">Lunedì - Venerdì: 8:30 - 18:30</li>
              <li className="text-gray-400">Via Cassino Scanasio 61, 20089 Rozzano, MI</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/inferiatengineering?igsh=emJlZ3Uyamg5c3dj&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Inferriate Engineering. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
