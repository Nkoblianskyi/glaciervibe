import { AlertTriangle } from "lucide-react"

export default function Disclaimer() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950 border-b border-amber-200 dark:border-amber-800">
      <div className="container flex items-start gap-4 py-3">
        <AlertTriangle className="h-5 w-5 mt-0.5 text-amber-600 dark:text-amber-500" />
        <div className="flex-1 text-sm text-amber-800 dark:text-amber-300">
          <strong>ADVARSEL:</strong> GlacierVibe Hub er kun en sosial spillplattform for underholdningsformål. Ingen
          ekte penger er involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell
          verdi. Du må være 18 år eller eldre for å bruke denne plattformen. Hvis det slutter å være gøy, ta et skritt
          tilbake. Du kan også besøke hjelpesider som{" "}
          <a
            href="https://hjelpelinjen.no"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded bg-blue-100 px-1.5 py-0.5 font-medium text-blue-800 transition-colors hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Hjelpelinjen.no
          </a>
          ,{" "}
          <a
            href="https://gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded bg-blue-100 px-1.5 py-0.5 font-medium text-blue-800 transition-colors hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            GamCare
          </a>{" "}
          eller{" "}
          <a
            href="https://www.gambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded bg-blue-100 px-1.5 py-0.5 font-medium text-blue-800 transition-colors hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            GambleAware
          </a>{" "}
          for støtte og råd.
        </div>
      </div>
    </div>
  )
}
