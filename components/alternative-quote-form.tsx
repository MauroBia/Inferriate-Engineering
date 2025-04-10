"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"

export default function AlternativeQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone") || "Non fornito",
        message: formData.get("message"),
      }

      // Usa un servizio alternativo - Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "0b1e7e0d-2b5f-4b5c-9b0d-5b0d4b5c9b0d", // Sostituisci con la tua chiave
          subject: `Richiesta preventivo da ${data.name}`,
          from_name: "Inferriate Engineering Website",
          ...data,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset del form
        if (e.target) {
          ;(e.target as HTMLFormElement).reset()
        }
      } else {
        throw new Error(result.message || "Errore nell'invio del form")
      }
    } catch (err: any) {
      console.error("Errore:", err)
      setError("Si è verificato un errore nell'invio del messaggio. Riprova più tardi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSubmitted ? (
        <div className="bg-green-600/20 border border-green-600 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-400" />
          </div>
          <h4 className="font-medium text-white text-xl mb-2">Grazie per la tua richiesta!</h4>
          <p className="text-gray-200">Abbiamo ricevuto le tue informazioni e ti contatteremo presto.</p>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-lg">
          {error && (
            <div className="bg-red-600/20 border border-red-600 rounded-lg p-4 flex items-start gap-3 mb-6">
              <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-200 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
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
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Invio in corso...
                </span>
              ) : (
                "Manda Richiesta"
              )}
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
