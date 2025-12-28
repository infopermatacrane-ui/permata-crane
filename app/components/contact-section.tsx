import { Phone, Mail, Globe, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Kontak Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Hubungi <span className="text-primary">PERMATA CRANE</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan alat berat Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <a
            href="tel:08131836511"
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
              <Phone className="h-8 w-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Telepon</h3>
            <p className="text-muted-foreground mb-2">Hubungi Kami</p>
            <p className="text-primary font-bold text-lg">0813-1836-511</p>
          </a>

          {/* Email */}
          <a
            href="mailto:infopermatacrane@gmail.com"
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
              <Mail className="h-8 w-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground mb-2">Kirim Email</p>
            <p className="text-primary font-bold break-all">infopermatacrane@gmail.com</p>
          </a>

          {/* Website */}
          <a
            href="https://www.permatacranerental.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
              <Globe className="h-8 w-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Website</h3>
            <p className="text-muted-foreground mb-2">Kunjungi Website</p>
            <p className="text-primary font-bold">permatacranerental.com</p>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex gap-4 p-6 bg-white rounded-xl border border-border">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Area Layanan</h3>
              <p className="text-muted-foreground">Jabodetabek dan sekitarnya</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-xl border border-border">
            <Clock className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Jam Operasional</h3>
              <p className="text-muted-foreground">24/7 - Siap Melayani Anda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
