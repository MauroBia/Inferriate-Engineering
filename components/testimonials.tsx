import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Inferriate Engineering ha trasformato la sicurezza della nostra casa. Le loro soluzioni sono eleganti e robuste.",
      author: "Zanella Maurizio",
      role: "Proprietario di casa, Milano",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/friendly-mature-manager-talking-to-camera-and-gest-2024-07-04-03-07-37-utc.jpg-ufNiAT1YB8eDmp5jsABbik33CQ2Vx3.jpeg",
    },
    {
      quote: "Il servizio clienti è eccezionale. Sono sempre disponibili per qualsiasi problema o consulenza.",
      author: "Ferazzi Barbara",
      role: "Titolare negozio, Rozzano",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/young-happy-mixed-race-businesswoman-standing-with-2024-10-22-16-49-57-utc.jpg-LmT7ToBtR2fnzXOsltNME8t9hNVt1t.jpeg",
    },
    {
      quote: "La qualità dei materiali e la precisione nell'installazione sono impeccabili. Consiglio vivamente.",
      author: "Lonati Mauro",
      role: "Amministratore condominio, Pavia",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/confident-in-his-team-leading-abilities-portrait-2023-11-27-05-20-37-utc.jpg-6vydPZdsmW42XHICxBzWRV9o1civif.jpeg",
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Non crederci sulla parola. Ecco cosa dicono i nostri clienti.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
