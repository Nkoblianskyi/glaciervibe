import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import GamePreview from "@/components/game-preview"
import { AnimatedIcon } from "@/components/animated-icon"
import {
  FishIcon as Fishing,
  Anchor,
  Compass,
  Ruler,
  Sailboat,
  Thermometer,
  Map,
  Waves,
  Fish,
  AlertTriangle,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Wave design */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-[#0c4a6e]">
        {/* Animated water background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#0c4a6e]">
            {/* Animated wave layers */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute h-[20%] w-[200%] left-[-50%] top-[15%] bg-cyan-300 rounded-[100%] animate-wave-slow"></div>
              <div className="absolute h-[20%] w-[200%] left-[-50%] top-[35%] bg-cyan-400 rounded-[100%] animate-wave-medium"></div>
              <div className="absolute h-[20%] w-[200%] left-[-50%] top-[55%] bg-cyan-500 rounded-[100%] animate-wave-fast"></div>
            </div>

            {/* Fish silhouettes */}
            <div className="absolute top-[20%] left-[10%] text-white/10 animate-float-slow">
              <svg width="40" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>
            <div className="absolute top-[40%] left-[80%] text-white/10 animate-float-medium">
              <svg width="30" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>
            <div className="absolute top-[70%] left-[30%] text-white/10 animate-float-fast">
              <svg width="50" height="25" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>
          </div>

          {/* Bottom wave */}
          <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f0f9ff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-[600px] mx-auto text-center space-y-6">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20 dark:bg-accent/20 dark:text-accent-foreground dark:hover:bg-accent/30">
              KUN FOR UNDERHOLDNING
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Fjordens Fisker</h1>
            <p className="text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Opplev spenningen ved sosiale kasinospill med fisketema - helt uten ekte penger, innsats eller gevinster.
              Spill for moro skyld og bli en mester i vårt virtuelle fiskeeventyr.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-300 bg-blue-100 text-blue-900 hover:bg-blue-200 h-10 px-4 py-2"
              >
                Kontakt Oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Description - Diagonal split design */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br from-[#f0f9ff] to-[#bae6fd]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 bg-[#f0f9ff]"></div>
          <div className="absolute top-0 left-0 right-0 h-24 transform -skew-y-3 translate-y-12 bg-[#bae6fd]"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[#0c4a6e]">Om Fjordens Fisker</h2>
              <p className="text-[#0e7490]">
                Fjordens Fisker er et sosialt spill med fisketema der du tar rollen som den erfarne fiskeren Magnus.
                Spillet kombinerer spennende spillmekanikk med fiskeri - helt uten ekte penger, innsats eller gevinster.
              </p>
              <p className="text-[#0e7490]">
                I dette spillet kan du spinne hjulene for å fange ulike fiskearter, samle poeng og låse opp nye nivåer.
                Alt er kun for underholdning og moro!
              </p>
              <p className="text-[#0e7490]">
                Som spiller vil du oppleve spenningen ved å spinne hjulene, se symbolene lande på linjene, og høre de
                oppmuntrende lydene når du får en match. Det er en avslappende spillopplevelse med et fisketema og helt
                uten pengeinnsats.
              </p>
              <p className="font-medium text-[#0c4a6e]">
                Fjordens Fisker er designet for å være en underholdende sosial spillopplevelse for spillere i alle aldre
                (18+). Det er ingen ekte penger involvert, ingen innsats, ingen utbetalinger - bare ren underholdning i
                et virtuelt fiskeunivers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-[#0c4a6e]">Fang Fiskearter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0e7490]">
                    Fang over 20 ulike fiskearter fra norske fjorder og kyster, fra små sei til gigantiske kveiter.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-[#0c4a6e]">Mestre Teknikker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0e7490]">
                    Lær og mestre ulike fisketeknikker for å fange forskjellige fiskearter og øke sjansen for stor
                    fangst.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-[#0c4a6e]">Opplev Årstidene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0e7490]">
                    Opplev alle fire årstider med unike fiskearter og værforhold som påvirker din fiskestrategi.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-[#0c4a6e]">Utforsk Fjordene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0e7490]">
                    Utforsk forskjellige fjorder og fiskeplasser langs Norges vakre kystlinje for å finne de beste
                    fiskeplassene.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Fishing Equipment */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0c4a6e]">
                Fiskerens Utstyr
              </h2>
              <p className="max-w-[900px] text-[#0e7490] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Utforsk det essensielle utstyret som enhver dyktig fisker trenger for å erobre havets dybder
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="pulse" className="group">
                <Fishing className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Fiskestenger</h3>
              <p className="text-[#0e7490]">
                Våre premium fiskestenger er laget av karbonfiber for optimal styrke og fleksibilitet. Perfekt for både
                nybegynnere og erfarne fiskere, med lengder fra 1,8 til 3,6 meter for ulike fisketeknikker.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="spin" className="group [&>*]:animate-[spin_4s_linear_infinite]">
                <Anchor className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Fiskesneller</h3>
              <p className="text-[#0e7490]">
                Høykvalitets fiskesneller med jevn drag og pålitelig bremsesystem. Våre sneller kommer i forskjellige
                størrelser for alt fra lett innsjøfiske til tungt havfiske etter de største artene.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="wave" className="group">
                <Waves className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Fiskeline</h3>
              <p className="text-[#0e7490]">
                Slitesterke fiskeliner i ulike tykkelser og materialer. Velg mellom monofilament for allsidig bruk,
                fluorokarbon for usynlighet i vannet, eller flettet line for maksimal styrke og følsomhet.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="float" className="group">
                <Fish className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Agn og Sluker</h3>
              <p className="text-[#0e7490]">
                Et bredt utvalg av agn og sluker for å lokke ulike fiskearter. Fra levende og kunstig agn til spinnere,
                wobblere og fluer, vi har alt du trenger for å friste fisken til å bite.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="bounce" className="group">
                <Compass className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Navigasjonsutstyr</h3>
              <p className="text-[#0e7490]">
                Avansert navigasjonsutstyr for å finne de beste fiskeplassene. GPS, ekkolodd og fiskefinnere hjelper deg
                med å lokalisere fisk og kartlegge undervannsterrenget for optimal fangst.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="pulse" className="group">
                <Sailboat className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Båter og Flåter</h3>
              <p className="text-[#0e7490]">
                Fra små oppblåsbare flåter til robuste fiskebåter, vi har fartøy for alle typer fiskeeventyr. Perfekt
                for å nå utilgjengelige fiskeplasser og utforske fjordenes skjulte skatter.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="wave" className="group">
                <Thermometer className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Værmålere</h3>
              <p className="text-[#0e7490]">
                Nøyaktige instrumenter for å måle vanntemperatur, lufttrykk og vindforhold. Disse verktøyene hjelper deg
                å forutsi fiskens aktivitet og velge riktig tidspunkt for fiske.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="float" className="group">
                <Map className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Kart og Guider</h3>
              <p className="text-[#0e7490]">
                Detaljerte kart over fiskeområder og guider til lokale fiskearter. Lær om de beste teknikkene,
                sesongvariasjoner og hemmelige fiskeplasser fra erfarne lokale fiskere.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedIcon animation="pulse" className="group">
                <Ruler className="h-8 w-8 group-hover:text-blue-800 transition-colors" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-[#0c4a6e]">Måleutstyr</h3>
              <p className="text-[#0e7490]">
                Presise vekter og målebånd for å registrere størrelsen på fangsten din. Dokumenter dine
                fiskeprestasjoner og hold styr på personlige rekorder for hver fiskeart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Preview Section - Curved edges design */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c4a6e] relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-[50%_50%]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Bli med i Fjordens Fisker Spill
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Spinn hjulene, match fiskearter og symboler, og opplev spenningen ved dette underholdende fiskespillet -
                helt uten risiko
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-6 mb-8">
            <div className="rounded-lg border border-blue-400 bg-blue-900/30 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-amber-300 mb-1">VIKTIG INFORMASJON</h3>
                  <p className="text-sm text-blue-100">
                    Dette spillet er KUN for underholdningsformål. Det involverer ingen ekte penger, ingen innsats,
                    ingen gevinster, og ingen virtuelle gjenstander har noen reell verdi. Spillet er ikke tilknyttet
                    gambling eller pengespill på noen måte. Du må være 18 år eller eldre for å spille.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl mt-12">
            <GamePreview />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-blue-100 max-w-2xl mx-auto">
              <strong>MERK:</strong> Dette er et sosialt kasinospill KUN for underholdning. Ingen ekte penger er
              involvert, ingen innsats, ingen gevinster, ingen premier eller belønninger, og ingen virtuelle gjenstander
              har noen reell verdi. Du må være 18 år eller eldre for å spille.
            </p>
          </div>
        </div>
      </section>

      {/* Items Section - Floating cards design */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#0c4a6e] to-[#f0f9ff]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Spillsymboler og Bonuser
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Utforsk de spennende symbolene og bonusfunksjonene i vårt sosiale fiskespill
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <CardHeader>
                <CardTitle className="text-[#0c4a6e]">Torsk</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image src="/cod-fish.png" alt="Torsk" width={100} height={100} className="rounded-lg object-cover" />
                <p className="text-[#0e7490]">
                  Et høyverdi symbol som gir 30 poeng når du får tre eller flere på en gevinstlinje. Kan aktivere
                  gratisspinn-funksjonen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <CardHeader>
                <CardTitle className="text-[#0c4a6e]">Laks</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image src="/salmon-fish.png" alt="Laks" width={100} height={100} className="rounded-lg object-cover" />
                <p className="text-[#0e7490]">
                  Et premium symbol som gir 25 poeng og kan aktivere multiplikator-bonusen når du får tre eller flere på
                  en gevinstlinje.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <CardHeader>
                <CardTitle className="text-[#0c4a6e]">Makrell</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/mackerel-fish.png"
                  alt="Makrell"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p className="text-[#0e7490]">
                  Et medium-verdi symbol som gir 15 poeng når du får tre eller flere på en gevinstlinje. Samle fem for å
                  aktivere mini-bonusspillet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <CardHeader>
                <CardTitle className="text-[#0c4a6e]">Kveite</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src="/halibut-fish.png"
                  alt="Kveite"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <p className="text-[#0e7490]">
                  Det mest verdifulle symbolet i spillet! Få tre eller flere for å vinne 50 poeng og aktivere den
                  eksklusive Kveite-bonusrunden.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <CardHeader>
                <CardTitle className="text-[#0c4a6e]">Ørret</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image src="/trout-fish.png" alt="Ørret" width={100} height={100} className="rounded-lg object-cover" />
                <p className="text-[#0e7490]">
                  Et spesialsymbol som fungerer som wild og kan erstatte alle andre symboler unntatt scatter. Gir 20
                  poeng for tre eller flere.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <CardHeader>
                <CardTitle className="text-[#0c4a6e]">Sei</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image src="/pollock-fish.png" alt="Sei" width={100} height={100} className="rounded-lg object-cover" />
                <p className="text-[#0e7490]">
                  Et lavverdi symbol som gir 10 poeng for tre eller flere på en gevinstlinje. Samle ti Sei-symboler for
                  å låse opp bonusnivået.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section - Parallax effect */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9ff] relative">
        <div className="absolute inset-0 z-0 bg-[url('/norwegian-fjord-panorama.png')] bg-cover bg-fixed opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0c4a6e]">
              Historien om Fjordens Fisker
            </h2>
            <p className="text-[#0e7490] md:text-xl/relaxed">
              Opplev eventyret til den erfarne fiskeren som lever i harmoni med havet
            </p>
          </div>

          <div className="mx-auto max-w-3xl mt-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/norwegian-fisherman.png"
                  alt="Fiskeren"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-xl font-bold text-[#0c4a6e]">Møt Fiskeren</h3>
                <p className="text-[#0e7490]">
                  Ved kysten av en liten norsk fjordlandsby bor en erfaren fisker ved navn Magnus. Han har viet livet
                  sitt til havet og kjenner fjordene som sin egen lomme. Hver morgen står han opp før soloppgang, klar
                  til å sette ut med båten sin for å fange dagens fangst og erobre nye deler av havet.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3 space-y-4 md:order-1">
                <h3 className="text-xl font-bold text-[#0c4a6e]">Havets Visdom</h3>
                <p className="text-[#0e7490]">
                  Magnus har lært havets visdom gjennom årene. Han kjenner tidevannets rytmer, fiskens vandringer og
                  værskiftene. Han vet når ulike fiskearter er i sesong, hvilke agn som fungerer best, og hvordan man
                  kan lese havets tegn for å finne de største fiskene. Denne kunnskapen deler han gjerne med alle som
                  vil lære.
                </p>
              </div>
              <div className="md:w-1/3 md:order-2">
                <Image
                  src="/fisherman-sunset.png"
                  alt="Havets visdom"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/sustainable-fishing.png"
                  alt="Bærekraftig fiske"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-xl font-bold text-[#0c4a6e]">Bærekraftig Fiske</h3>
                <p className="text-[#0e7490]">
                  Som en ansvarlig fisker er Magnus opptatt av bærekraftig fiske. Han respekterer fiskekvoter, unngår å
                  fange unge fisk, og slipper ut fisk som ikke er målarten. Hans kjærlighet til havet er ubegrenset, og
                  han vil gjøre alt for å beskytte det marine økosystemet for fremtidige generasjoner, samtidig som han
                  fortsetter å utforske og erobre havets dybder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Neumorphic design */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e0f2fe]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0c4a6e]">
                Ofte stilte spørsmål
              </h2>
              <p className="max-w-[900px] text-[#0e7490] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Finn svar på de vanligste spørsmålene om Fjordens Fisker
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <div className="space-y-4">
              <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_#c7d2fe,-5px_-5px_15px_#ffffff]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="text-[#0c4a6e] font-medium">
                      Hvordan spiller jeg Fjordens Fisker?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0e7490]">
                      Fjordens Fisker er enkelt å spille. Bare klikk på "Spill Nå" knappen og følg instruksjonene på
                      skjermen. Spillet fungerer som et sosialt kasinospill der du spinner hjulene og prøver å matche
                      fiskearter og andre symboler på gevinstlinjer. Ulike symboler gir forskjellige poeng og kan
                      aktivere spesielle bonusfunksjoner.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_#c7d2fe,-5px_-5px_15px_#ffffff]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger className="text-[#0c4a6e] font-medium">
                      Er Fjordens Fisker gratis å spille?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0e7490]">
                      Ja, Fjordens Fisker er helt gratis å spille. Det er ingen ekte penger involvert, ingen innsats,
                      ingen gevinster, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell
                      verdi. Det er et sosialt kasinospill som kun er for underholdning.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_#c7d2fe,-5px_-5px_15px_#ffffff]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="text-[#0c4a6e] font-medium">
                      Kan jeg spille på mobilen min?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0e7490]">
                      Ja, Fjordens Fisker er fullt responsivt og kan spilles på alle enheter, inkludert smarttelefoner
                      og nettbrett.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_#c7d2fe,-5px_-5px_15px_#ffffff]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-4" className="border-none">
                    <AccordionTrigger className="text-[#0c4a6e] font-medium">
                      Hvordan fungerer poengene i spillet?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0e7490]">
                      Du får poeng basert på symbolene du matcher på gevinstlinjene. Høyverdisymboler som Kveite og Laks
                      gir flere poeng enn lavverdisymboler som Sei. Poengene brukes til å låse opp nye nivåer og
                      funksjoner i spillet, men har ingen reell verdi og kan ikke byttes mot penger eller premier.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_#c7d2fe,-5px_-5px_15px_#ffffff]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-5" className="border-none">
                    <AccordionTrigger className="text-[#0c4a6e] font-medium">
                      Kan jeg lagre fremgangen min i spillet?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0e7490]">
                      Ja, fremgangen din lagres automatisk i nettleseren din. For å sikre at fremgangen din ikke går
                      tapt, anbefaler vi at du bruker samme enhet og nettleser hver gang du spiller.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_#c7d2fe,-5px_-5px_15px_#ffffff]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-6" className="border-none">
                    <AccordionTrigger className="text-[#0c4a6e] font-medium">
                      Hvordan kan jeg kontakte support hvis jeg har problemer?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0e7490]">
                      Du kan kontakte vår support ved å sende en e-post til info@glaciervibehub.com eller ved å bruke
                      kontaktskjemaet på vår kontaktside.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
