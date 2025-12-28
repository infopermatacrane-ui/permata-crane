"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm">
            <a href="tel:08131836511" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>0813-1836-511</span>
            </a>
            <a
              href="mailto:infopermatacrane@gmail.com"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>infopermatacrane@gmail.com</span>
            </a>
            <span className="hidden md:block">Melayani Jabodetabek & Sekitarnya</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">PERMATA</span>
              <span className="text-secondary ml-2">CRANE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Area Layanan
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kontak
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
              <a href="https://wa.me/6281318365110" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Hubungi Sekarang
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Area Layanan
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Kontak
            </button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white w-full">
              <a href="https://wa.me/6281318365110" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Hubungi Sekarang
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
