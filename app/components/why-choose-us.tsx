import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Armada Lengkap & Terawat",
    description:
      "Semua unit alat berat kami dalam kondisi prima dan rutin menjalani perawatan berkala untuk memastikan performa optimal",
  },
  {
    title: "Operator Bersertifikat",
    description:
      "Tim operator kami memiliki sertifikasi resmi dan pengalaman bertahun-tahun dalam mengoperasikan alat berat",
  },
  {
    title: "Harga Kompetitif",
    description: "Kami menawarkan harga sewa yang kompetitif dengan sistem pricing transparan tanpa biaya tersembunyi",
  },
  {
    title: "Respon Cepat",
    description: "Tim kami siap merespon kebutuhan Anda dengan cepat, tersedia 24/7 untuk konsultasi dan pemesanan",
  },
  {
    title: "Asuransi Lengkap",
    description: "Semua unit dilengkapi dengan asuransi comprehensive untuk melindungi proyek dan investasi Anda",
  },
  {
    title: "Fleksibel & Profesional",
    description:
      "Sistem sewa yang fleksibel (harian, mingguan, bulanan) dengan pelayanan profesional dari tim berpengalaman",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/700x800?text=Team+of+professional+crane+operators+and+engineers+discussing+construction+project+plans"
                alt="Team of professional crane operators and engineers discussing construction project plans"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-2xl shadow-xl">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Tahun Pengalaman</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Mengapa Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Mengapa Memilih <span className="text-primary">PERMATA CRANE</span>?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Dengan pengalaman lebih dari 15 tahun, kami telah dipercaya oleh ratusan perusahaan konstruksi dan
                kontraktor di Jabodetabek
              </p>
            </div>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-secondary/5 transition-colors">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
