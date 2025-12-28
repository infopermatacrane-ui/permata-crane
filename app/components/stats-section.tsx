const stats = [
  { number: "15+", label: "Tahun Pengalaman", suffix: "" },
  { number: "500", label: "Proyek Selesai", suffix: "+" },
  { number: "50", label: "Unit Alat Berat", suffix: "+" },
  { number: "100", label: "Kepuasan Klien", suffix: "%" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
