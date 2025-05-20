import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CookiePreferences from "@/components/cookie-preferences"

export default function CookiesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Informasjonskapsler (Cookies)</h1>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Hvordan vi bruker informasjonskapsler på GlacierVibe Hub
          </p>
        </div>


        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Hva er informasjonskapsler?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Informasjonskapsler (cookies) er små tekstfiler som lagres på din datamaskin, nettbrett eller
                mobiltelefon når du besøker en nettside. De gjør det mulig for nettsiden å huske dine handlinger og
                preferanser over en tidsperiode, slik at du ikke trenger å oppgi disse hver gang du besøker nettsiden
                eller navigerer fra en side til en annen.
              </p>
              <p>
                Informasjonskapsler hjelper oss med å forbedre din opplevelse på vår nettside, og de kan også hjelpe oss
                med å forstå hvordan nettsiden brukes, slik at vi kan gjøre den bedre for deg og andre besøkende.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Typer informasjonskapsler vi bruker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Vi bruker følgende typer informasjonskapsler på GlacierVibe Hub:</p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Type</TableHead>
                    <TableHead>Beskrivelse</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Nødvendige informasjonskapsler</TableCell>
                    <TableCell>
                      Disse er nødvendige for at nettsiden skal fungere og kan ikke slås av i våre systemer. De settes
                      vanligvis bare som svar på handlinger du gjør som tilsvarer en forespørsel om tjenester, for
                      eksempel å sette personvernpreferanser, logge inn eller fylle ut skjemaer. Du kan stille inn
                      nettleseren din til å blokkere eller varsle deg om disse informasjonskapslene, men noen deler av
                      nettsiden vil da ikke fungere.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Preferanse-informasjonskapsler</TableCell>
                    <TableCell>
                      Disse informasjonskapslene gjør det mulig for nettsiden å huske valg du har gjort (som brukernavn,
                      språk eller regionen du befinner deg i) og gi forbedrede, mer personlige funksjoner. For eksempel
                      kan en nettside gi deg lokale værmeldinger eller trafikknyheter ved å lagre din nåværende
                      plassering.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Statistikk-informasjonskapsler</TableCell>
                    <TableCell>
                      Disse informasjonskapslene hjelper oss å forstå hvordan besøkende samhandler med nettsiden ved å
                      samle inn og rapportere informasjon anonymt. De hjelper oss med å forbedre hvordan nettsiden
                      fungerer.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Spesifikke informasjonskapsler vi bruker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Navn</TableHead>
                    <TableHead>Formål</TableHead>
                    <TableHead>Utløp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">hasVerifiedAge</TableCell>
                    <TableCell>
                      Brukes til å huske at du har bekreftet at du er 18 år eller eldre, slik at du ikke trenger å
                      bekrefte dette hver gang du besøker nettsiden.
                    </TableCell>
                    <TableCell>30 dager</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">theme</TableCell>
                    <TableCell>Lagrer din preferanse for lyst eller mørkt tema på nettsiden.</TableCell>
                    <TableCell>1 år</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">forestGameHighScore</TableCell>
                    <TableCell>
                      Lagrer din høyeste poengsum i Skogens Vokter-spillet, slik at du kan se din fremgang over tid.
                    </TableCell>
                    <TableCell>Permanent (til manuell sletting)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ageVerified</TableCell>
                    <TableCell>
                      Brukes til å huske at du har bekreftet din alder for å spille spill på nettsiden.
                    </TableCell>
                    <TableCell>Økt (forsvinner når nettleseren lukkes)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Hvordan administrere informasjonskapsler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                De fleste nettlesere lar deg kontrollere informasjonskapsler gjennom innstillingene. Nedenfor finner du
                informasjon om hvordan du kan administrere informasjonskapsler i de mest populære nettleserne:
              </p>


              <p className="mt-4">
                Vær oppmerksom på at hvis du velger å blokkere informasjonskapsler, kan det påvirke funksjonaliteten til
                vår nettside, og noen funksjoner kan ikke være tilgjengelige for deg.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Tredjeparters informasjonskapsler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I noen tilfeller kan vi bruke tredjepartstjenester på vår nettside, som kan sette sine egne
                informasjonskapsler. Disse tredjepartene inkluderer analyseverktøy som hjelper oss med å forstå hvordan
                besøkende bruker vår nettside.
              </p>
              <p>
                Vi har ikke kontroll over disse informasjonskapslene, så vi anbefaler at du sjekker personvernpolicyen
                til disse tredjepartene for mer informasjon om hvordan de bruker informasjonskapsler.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Endringer i vår informasjonskapsel-policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Vi kan oppdatere vår informasjonskapsel-policy fra tid til annen for å gjenspeile endringer i
                informasjonskapslene vi bruker eller av andre operasjonelle, juridiske eller regulatoriske årsaker. Vi
                oppfordrer deg til å besøke denne siden regelmessig for å holde deg informert om vår bruk av
                informasjonskapsler og relaterte teknologier.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Kontakt oss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Hvis du har spørsmål om vår bruk av informasjonskapsler eller denne informasjonskapsel-policyen,
                vennligst kontakt oss på:
              </p>
              <p>
                GlacierVibe Hub
                <br />
                glaciervibehub.com
                <br />
                +47 921 739 856
                <br />
                Torget 7, 5014 Bergen, Norway
                <br />
                info@glaciervibehub.com
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">Sist oppdatert: 20. mai 2025</p>
        </div>
      </div>
    </div>
  )
}
