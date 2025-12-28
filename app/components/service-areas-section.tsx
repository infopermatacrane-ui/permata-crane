import { MapPin } from "lucide-react"

const areas = [
  "Jakarta Pusat",
  "Jakarta Utara",
  "Jakarta Selatan",
  "Jakarta Timur",
  "Jakarta Barat",
  "Bogor",
  "Depok",
  "Tangerang",
  "Tangerang Selatan",
  "Bekasi",
  "Cikarang",
  "Karawang",
]

export function ServiceAreasSection() {
  return (
    <section id="areas" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Area Layanan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Melayani Seluruh <span className="text-primary">Jabodetabek</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Kami siap melayani kebutuhan sewa alat berat Anda di berbagai wilayah Jabodetabek dan sekitarnya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Area Anda tidak termasuk dalam daftar?{" "}
            <a
              href="https://wa.me/6281318365110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Hubungi kami untuk informasi lebih lanjut
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
