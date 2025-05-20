import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Fish,
  Anchor,
  Ship,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0c4a6e] to-[#082f49] text-white">
      {/* Wave separator */}
      <div className="w-full overflow-hidden">
        <svg
          className="w-full h-12 md:h-16 lg:h-20"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50 L1440,50 L1440,0 L0,0 Z"
            fill="#f0f9ff"
          />
        </svg>
      </div>

      <div className="container py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Fish className="h-8 w-8 text-blue-300" />
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">GlacierVibe Hub</h2>
            </div>

            <p className="text-blue-200 text-sm">
              Sosial spillplattform for underholdning. Ingen ekte penger er involvert, ingen premier eller belønninger.
              Opplev spenningen ved fiskespill - helt uten risiko!
            </p>

            <div className="flex items-center space-x-2">
              <div className="border border-red-500 bg-red-900/30 text-red-300 rounded px-2 py-1 text-sm font-bold">
                18+
              </div>
              <span className="text-sm text-blue-200">Aldersgrense</span>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Anchor className="h-5 w-5 text-blue-300" />
              Hurtiglenker
            </h3>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                className="text-blue-200 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Hjem
              </Link>
              <Link
                href="/contact"
                className="text-blue-200 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Kontakt
              </Link>
              <Link
                href="/about"
                className="text-blue-200 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Om oss
              </Link>
              <Link
                href="/vilkar"
                className="text-blue-200 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Vilkår
              </Link>
              <Link
                href="/personvern"
                className="text-blue-200 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Personvern
              </Link>
              <Link
                href="/ansvarsfraskrivelse"
                className="text-blue-200 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Ansvarsfraskrivelse
              </Link>
              <Link
                href="/cookies"
                className="text-blue-200 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Cookies
              </Link>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium text-blue-300 mb-2">Spilltyper</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-800/30 text-blue-200 text-xs px-2 py-1 rounded-full">Fiskespill</span>
                <span className="bg-blue-800/30 text-blue-200 text-xs px-2 py-1 rounded-full">Bonusspill</span>
                <span className="bg-blue-800/30 text-blue-200 text-xs px-2 py-1 rounded-full">Gratisspinn</span>
                <span className="bg-blue-800/30 text-blue-200 text-xs px-2 py-1 rounded-full">Matchlinjer</span>
                <span className="bg-blue-800/30 text-blue-200 text-xs px-2 py-1 rounded-full">Symboler</span>
              </div>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Ship className="h-5 w-5 text-blue-300" />
              Kontakt oss
            </h3>

            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm">
                  GlacierVibe Hub
                  <br />
                  Torget 7, 5014 Bergen
                  <br />
                  Norway
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <a href="tel:+4792173985" className="text-blue-200 hover:text-white transition-colors text-sm">
                  +47 921 739 856
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <a
                  href="mailto:info@glaciervibehub.com"
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  info@glaciervibehub.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <a
                  href="https://glaciervibehub.com"
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  glaciervibehub.com
                </a>
              </div>
            </address>

            <div className="pt-2">
              <h4 className="text-sm font-medium text-blue-300 mb-2">Åpningstider</h4>
              <div className="space-y-1 text-sm text-blue-200">
                <div className="flex justify-between">
                  <span>Mandag - Fredag:</span>
                  <span>09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Lørdag - Søndag:</span>
                  <span>Stengt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Støtte</h3>

            <div className="space-y-4">
              <a
                href="https://www.hjelpelinjen.no"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
              >
                <Image
                  src="/aware.webp"
                  alt="Hjelpelinjen logo"
                  width={80}
                  height={30}
                  className="h-8 w-auto"
                />
                <div>
                  <p className="text-sm font-medium">Hjelpelinjen</p>
                  <p className="text-xs text-blue-300">For spillavhengighet</p>
                </div>
              </a>

              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
              >
                <Image src="/aware2.png" alt="GamCare logo" width={80} height={30} className="h-8 w-auto" />
                <div>
                  <p className="text-sm font-medium">GamCare</p>
                  <p className="text-xs text-blue-300">Support and advice</p>
                </div>
              </a>

              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
              >
                <Image
                  src="/aware1.webp"
                  alt="GambleAware logo"
                  width={80}
                  height={30}
                  className="h-8 w-auto"
                />
                <div>
                  <p className="text-sm font-medium">GambleAware</p>
                  <p className="text-xs text-blue-300">Responsible gaming</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-blue-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-300">
              &copy; {new Date().getFullYear()} GlacierVibe Hub. Alle rettigheter reservert.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs text-blue-300">Online Support</span>
              </div>

              <div className="text-xs text-blue-300">Sist oppdatert: 20. mai 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated water effect at bottom */}
      <div className="h-8 bg-[#082f49] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute h-[40%] w-[200%] left-[-50%] top-[0%] bg-blue-600/10 rounded-[100%] animate-wave-slow"></div>
          <div className="absolute h-[30%] w-[180%] left-[-40%] top-[20%] bg-blue-500/10 rounded-[100%] animate-wave-medium"></div>
          <div className="absolute h-[20%] w-[160%] left-[-30%] top-[40%] bg-blue-400/10 rounded-[100%] animate-wave-fast"></div>
        </div>
      </div>
    </footer>
  )
}
