import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const services = [
  {
    title: "Mobile Crane",
    capacity: "25 - 100 Ton",
    description:
      "Mobile crane untuk berbagai kebutuhan lifting berat seperti konstruksi gedung, pabrik, dan proyek infrastruktur",
    features: [
      "Berbagai kapasitas tersedia",
      "Operator bersertifikat",
      "Mobilitas tinggi",
      "Cocok untuk berbagai medan",
    ],
    image:
      "https://placehold.co/600x400?text=Professional+mobile+crane+truck+with+extended+boom+on+construction+site+under+blue+sky",
  },
  {
    title: "Hiab Crane",
    capacity: "5 - 20 Ton",
    description: "Crane yang terpasang pada truk untuk loading dan unloading material dengan fleksibilitas tinggi",
    features: ["Efisien dan ekonomis", "Akses area terbatas", "Loading/unloading cepat", "Ideal untuk distribusi"],
    image:
      "https://placehold.co/600x400?text=Hiab+crane+mounted+on+truck+loading+construction+materials+with+hydraulic+arm",
  },
  {
    title: "Forklift",
    capacity: "2.5 - 10 Ton",
    description: "Forklift untuk kebutuhan warehouse, loading/unloading, dan perpindahan material di area terbatas",
    features: ["Indoor & outdoor", "Manuver mudah", "Efisiensi tinggi", "Berbagai attachment"],
    image: "https://placehold.co/600x400?text=Industrial+forklift+truck+lifting+pallet+in+modern+warehouse+facility",
  },
  {
    title: "Skylift",
    capacity: "12 - 30 Meter",
    description: "Skylift untuk pekerjaan ketinggian seperti maintenance gedung, instalasi, dan konstruksi",
    features: ["Akses ketinggian aman", "Platform stabil", "Kontrol presisi", "Berbagai tinggi tersedia"],
    image: "https://placehold.co/600x400?text=Aerial+work+platform+skylift+extended+high+for+building+maintenance+work",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Alat Berat Berkualitas untuk <span className="text-primary">Setiap Kebutuhan</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Kami menyediakan berbagai jenis alat berat dengan kondisi prima dan operator berpengalaman untuk mendukung
            kesuksesan proyek Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold">
                  {service.capacity}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://wa.me/6281318365110" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    Sewa Sekarang
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
