"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasVerifiedAge = localStorage.getItem("hasVerifiedAge")
    if (!hasVerifiedAge) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("hasVerifiedAge", "true")
    setIsOpen(false)
  }

  const handleReject = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Aldersbekreftelse
          </DialogTitle>
          <DialogDescription>
            Dette nettstedet er kun for personer som er 18 år eller eldre. Innholdet er kun for underholdningsformål.
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
          <Button type="button" variant="outline" onClick={handleReject}>
            Jeg er under 18 år
          </Button>
          <Button type="button" onClick={handleAccept}>
            Jeg er 18 år eller eldre
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
