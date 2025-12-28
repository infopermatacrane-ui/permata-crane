import { Shield, Clock, Award, Headset } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Aman & Terpercaya",
    description: "Semua alat berat kami terawat dan memiliki sertifikasi keamanan",
  },
  {
    icon: Clock,
    title: "Layanan 24/7",
    description: "Siap melayani kebutuhan proyek Anda kapan saja",
  },
  {
    icon: Award,
    title: "Operator Berpengalaman",
    description: "Tim operator profesional dan bersertifikat",
  },
  {
    icon: Headset,
    title: "Konsultasi Gratis",
    description: "Konsultasi gratis untuk menentukan alat yang tepat",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
