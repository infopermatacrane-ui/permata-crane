import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl text-blue-100 text-pretty leading-relaxed">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan alat berat Anda
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-8">
              <a href="https://wa.me/6281318365110" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: 0813-1836-511
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg h-14 px-8 border-2"
            >
              <a href="mailto:infopermatacrane@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Kami
              </a>
            </Button>
          </div>

          <p className="text-blue-100 text-sm">Layanan konsultasi 24/7 • Respon cepat • Gratis survei lokasi</p>
        </div>
      </div>
    </section>
  )
}
