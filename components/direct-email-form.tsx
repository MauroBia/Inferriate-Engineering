"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, Loader2, Mail } from "lucide-react"

export default function DirectEmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simula l'invio
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Apri il client email dell'utente con i dati precompilati
      const subject = `Richiesta preventivo da ${formData.name}`
      const body = `
Nome: ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone || "Non fornito"}

Messaggio:
${formData.message}
      `

      window.location.href = `mailto:inferriate.engineering@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }, 1000)
  }

  return (
    <>
      {isSubmitted ? (
        <div className="bg-green-600/20 border border-green-600 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-400" />
          </div>
          <h4 className="font-medium text-white text-xl mb-2">Grazie per la tua richiesta!</h4>
          <p className="text-gray-200">
            Si aprirà il tuo client email con i dati precompilati. Invia l'email per completare la richiesta.
          </p>
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
                  Preparazione email...
                </span>
              ) : (
                <span className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Invia tramite Email
                </span>
              )}
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
