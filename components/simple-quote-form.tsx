"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"

export default function SimpleQuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    // FormSubmit.co gestirà l'invio del modulo
    // Questo è solo per mostrare il messaggio di conferma lato client
    if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true")
    }
  }

  // Controlla se il modulo è stato inviato quando il componente viene montato
  useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("formSubmitted") === "true") {
      setIsSubmitted(true)
      // Pulisci lo stato dopo averlo letto
      setTimeout(() => {
        localStorage.removeItem("formSubmitted")
      }, 1000)
    }
  })

  return (
    <>
      {isSubmitted ? (
        <div className="bg-green-600/20 border border-green-600 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-400" />
          </div>
          <h4 className="font-medium text-white text-xl mb-2">Grazie per la tua richiesta!</h4>
          <p className="text-gray-200">Abbiamo ricevuto le tue informazioni e ti contatteremo presto.</p>
          <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-white/20 hover:bg-white/30 text-white">
            Invia un'altra richiesta
          </Button>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-lg">
          <form
            action="https://formsubmit.co/info@inferriate-engineering.it"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Configurazione FormSubmit.co */}
            <input type="hidden" name="_subject" value="Richiesta preventivo da Sito Web" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://inferriate-engineering.it/?submitted=true" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                Nome <span className="text-[#e86c3a]">*</span>
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Il tuo nome"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                Email <span className="text-[#e86c3a]">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="La tua email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-200">
                Numero di telefono (opzionale)
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Il tuo numero di telefono"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                Cosa avevi in mente? <span className="text-[#e86c3a]">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Spiegaci nel dettaglio di cosa avevi bisogno, ti risponderemo con le specifiche e i dettagli"
                className="min-h-[140px] bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#e86c3a] hover:bg-[#e86c3a]/90 text-white h-12 text-base font-medium"
            >
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                Invia Richiesta
              </span>
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
