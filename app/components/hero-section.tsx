"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Terpercaya Sejak Lama
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Solusi Sewa <span className="text-primary">Alat Berat</span>{" "}
              <span className="text-secondary">Profesional</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              PERMATA CRANE adalah penyedia jasa sewa alat berat terpercaya di Jabodetabek. Kami menyediakan Mobile
              Crane, Hiab Crane, Forklift, dan Skylift dengan operator berpengalaman dan harga kompetitif.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-8">
                <a href="https://wa.me/6281318365110" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Konsultasi Gratis
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg h-14 px-8 border-2 bg-transparent"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Lihat Layanan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Proyek Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/800x900?text=Professional+mobile+crane+lifting+heavy+construction+materials+at+modern+building+site+with+blue+sky"
                alt="Professional mobile crane lifting heavy construction materials at modern building site with blue sky"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hubungi Kami</div>
                  <div className="font-bold text-lg">24/7 Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
