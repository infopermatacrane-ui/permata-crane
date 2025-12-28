"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">PERMATA</span>
              <span className="text-gray-300 ml-2">CRANE</span>
            </div>
            <p className="text-gray-400 mb-4 text-pretty leading-relaxed">
              Penyedia jasa sewa alat berat terpercaya di Jabodetabek dengan pengalaman lebih dari 15 tahun.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mobile Crane</li>
              <li>Hiab Crane</li>
              <li>Forklift</li>
              <li>Skylift</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:08131836511" className="hover:text-blue-400">
                  0813-1836-511
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:infopermatacrane@gmail.com" className="hover:text-blue-400 break-all">
                  infopermatacrane@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Jabodetabek & Sekitarnya</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-400"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-400"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-400"
                >
                  Keunggulan
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-blue-400"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} PERMATA CRANE. All rights reserved. | Website:{" "}
            <a
              href="https://www.permatacranerental.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              www.permatacranerental.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
