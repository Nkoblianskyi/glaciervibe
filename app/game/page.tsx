"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FishingGameGrid from "@/components/forest-game-grid"

export default function GamePage() {
  const [isVerified, setIsVerified] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if the user has verified their age in this session
    const sessionVerified = sessionStorage.getItem("ageVerified")
    if (sessionVerified === "true") {
      setIsVerified(true)
    } else {
      // If not verified, redirect to home page
      router.push("/")
    }
  }, [router])

  if (!isVerified) {
    return null // Don't render anything while checking or redirecting
  }

  return (
    <div className="container py-12 md:py-24 bg-gradient-to-b from-[#f0f9ff] to-[#bae6fd]">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0c4a6e]">
            Fjordens Fisker Spill
          </h1>
          <p className="max-w-[600px] text-[#0e7490] md:text-xl/relaxed">
            Spinn hjulene og match fiskearter og symboler i dette sosiale spillet. Samle poeng, lås opp bonusfunksjoner
            og nyt spenningen - helt uten ekte penger!
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <Card className="border-2 border-blue-300 shadow-xl overflow-hidden">
            <CardHeader className="bg-[#0c4a6e] text-white">
              <CardTitle className="text-center">Magnus - Fjordens Fisker</CardTitle>
              <CardDescription className="text-center text-blue-100">
                Spinn hjulene og match 3 eller 4 like symboler på gevinstlinjene
              </CardDescription>
            </CardHeader>
            <CardContent className="bg-white p-6">
              <FishingGameGrid />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#0e7490] max-w-2xl mx-auto">
            <strong>MERK:</strong> Dette er et sosialt spill KUN for underholdning. Ingen ekte penger er involvert,
            ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
          </p>
        </div>

        <Button asChild variant="outline" className="border-blue-300 text-[#0c4a6e] hover:bg-blue-50">
          <Link href="/">Tilbake til Hjem</Link>
        </Button>
      </div>
    </div>
  )
}
