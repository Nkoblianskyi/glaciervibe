"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function GamePreview() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handlePlayClick = () => {
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    // Set a session storage flag to indicate age verification
    sessionStorage.setItem("ageVerified", "true")
    setIsModalOpen(false)
    router.push("/game")
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card className="overflow-hidden border-2 border-blue-300 shadow-xl">
        <div className="relative aspect-video">
          <Image
            src="/fishing-game-preview.png"
            alt="Fjordens Fisker spillforhåndsvisning"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <Button onClick={handlePlayClick} size="lg" className="font-bold bg-blue-500 hover:bg-blue-600 text-white">
              Spill Nå
            </Button>
          </div>
        </div>
        <CardContent className="p-6 text-center bg-white">
          <p className="text-[#0e7490]">
            Opplev spenningen ved sosiale fiskespill! Spinn hjulene på vårt nye 4x4 rutenett, match fiskearter og
            symboler på linjene, og samle poeng for å låse opp nye nivåer og bonusfunksjoner. Nyt all moroa - helt uten
            ekte penger!
          </p>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Aldersbekreftelse
            </DialogTitle>
            <DialogDescription>
              Dette sosiale spillet er kun for personer som er 18 år eller eldre. Innholdet er kun for
              underholdningsformål, uten ekte penger.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="rounded-md bg-amber-50 p-4 dark:bg-amber-950/50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">Viktig informasjon</h3>
                  <div className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                    <p>
                      GlacierVibe Hub er kun en sosial spillplattform for underholdningsformål. Ingen ekte penger er
                      involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Jeg er under 18 år
            </Button>
            <Button type="button" onClick={handleConfirm}>
              Jeg er 18 år eller eldre
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
