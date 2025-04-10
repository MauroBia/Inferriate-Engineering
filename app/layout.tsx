import type React from "react"
import "./globals.css"
import { Montserrat } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <title>Inferriate Engineering</title>
        <meta name="description" content="Inferriate Engineering - Protezione e Design per la tua Sicurezza" />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
