import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT. Konstruksi Jaya",
    role: "Project Manager",
    content:
      "Pelayanan sangat profesional dan cepat. Operator sangat berpengalaman dan alat berat dalam kondisi prima. Sangat membantu kelancaran proyek kami.",
    rating: 5,
  },
  {
    name: "Andi Wijaya",
    company: "CV. Mandiri Sejahtera",
    role: "Site Manager",
    content:
      "Harga kompetitif dengan kualitas layanan terbaik. Respon cepat dan tim yang sangat membantu. Akan terus menggunakan jasa PERMATA CRANE untuk proyek-proyek selanjutnya.",
    rating: 5,
  },
  {
    name: "Siti Rahayu",
    company: "PT. Maju Bersama",
    role: "Procurement Manager",
    content:
      "Proses pemesanan mudah dan transparan. Unit yang disewakan selalu dalam kondisi baik dan operator yang disediakan sangat profesional. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimoni
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Apa Kata <span className="text-primary">Klien Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic text-pretty leading-relaxed">{testimonial.content}</p>

              <div className="border-t pt-6">
                <div className="font-bold text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary font-semibold">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
