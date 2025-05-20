"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Fish, Anchor, Ship, Compass, Waves, FishIcon as Jellyfish, Gem, Shell } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

type ItemType = "fish" | "anchor" | "ship" | "compass" | "waves" | "jellyfish" | "gem" | "shell"

interface Item {
  type: ItemType
  isSpinning: boolean
  isMatched: boolean
}

const itemIcons: Record<ItemType, React.ReactNode> = {
  fish: <Fish className="h-8 w-8 text-blue-500" />,
  anchor: <Anchor className="h-8 w-8 text-slate-600" />,
  ship: <Ship className="h-8 w-8 text-amber-600" />,
  compass: <Compass className="h-8 w-8 text-emerald-600" />,
  waves: <Waves className="h-8 w-8 text-cyan-500" />,
  jellyfish: <Jellyfish className="h-8 w-8 text-pink-500" />,
  gem: <Gem className="h-8 w-8 text-purple-500" />,
  shell: <Shell className="h-8 w-8 text-orange-500" />,
}

const itemPoints: Record<ItemType, number> = {
  fish: 10,
  anchor: 5,
  ship: 15,
  compass: 8,
  waves: 12,
  jellyfish: -5, // Negative points for jellyfish
  gem: 20, // High value symbol
  shell: 7,
}

const itemNames: Record<ItemType, string> = {
  fish: "Fisk",
  anchor: "Anker",
  ship: "Skip",
  compass: "Kompass",
  waves: "Bølger",
  jellyfish: "Manet",
  gem: "Juvel",
  shell: "Skjell",
}

export default function FishingGameGrid() {
  const [grid, setGrid] = useState<Item[][]>([])
  const [isSpinning, setIsSpinning] = useState(false)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState("")
  const [lastPoints, setLastPoints] = useState<number | null>(null)
  const [highScore, setHighScore] = useState(0)
  const [spinCount, setSpinCount] = useState(0)
  const [level, setLevel] = useState(1)
  const [levelProgress, setLevelProgress] = useState(0)

  // Initialize grid and load saved data
  useEffect(() => {
    initializeGrid()

    // Load saved high score from localStorage
    const savedHighScore = localStorage.getItem("fishingGameHighScore")
    if (savedHighScore) {
      setHighScore(Number.parseInt(savedHighScore))
    }
  }, [])

  // Save high score when it changes
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem("fishingGameHighScore", score.toString())
    }
  }, [score, highScore])

  // Update level based on score
  useEffect(() => {
    const newLevel = Math.floor(score / 100) + 1
    if (newLevel !== level) {
      setLevel(newLevel)
      setMessage(`Gratulerer! Du har nådd nivå ${newLevel}!`)
    }

    const progress = score % 100
    setLevelProgress(progress)
  }, [score, level])

  const initializeGrid = () => {
    const types: ItemType[] = ["fish", "anchor", "ship", "compass", "waves", "jellyfish", "gem", "shell"]
    const newGrid: Item[][] = []

    // Create a 4x4 grid instead of 3x3
    for (let i = 0; i < 4; i++) {
      const row: Item[] = []
      for (let j = 0; j < 4; j++) {
        const randomType = types[Math.floor(Math.random() * types.length)]
        row.push({
          type: randomType,
          isSpinning: false,
          isMatched: false,
        })
      }
      newGrid.push(row)
    }

    setGrid(newGrid)
  }

  const spinGrid = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setMessage("")
    setLastPoints(null)
    setSpinCount((prev) => prev + 1)

    // Mark all items as spinning
    setGrid((prev) => prev.map((row) => row.map((item) => ({ ...item, isSpinning: true, isMatched: false }))))

    // Simulate spinning animation
    const spinDuration = 2000
    const spinInterval = 100
    let elapsed = 0

    const spinTimer = setInterval(() => {
      elapsed += spinInterval

      // Update grid with random items during spin
      setGrid((prev) =>
        prev.map((row) =>
          row.map((item) => {
            if (!item.isSpinning) return item

            const types: ItemType[] = ["fish", "anchor", "ship", "compass", "waves", "jellyfish", "gem", "shell"]
            const randomType = types[Math.floor(Math.random() * types.length)]

            return {
              ...item,
              type: randomType,
            }
          }),
        ),
      )

      // End spinning
      if (elapsed >= spinDuration) {
        clearInterval(spinTimer)

        // Generate final grid
        const types: ItemType[] = ["fish", "anchor", "ship", "compass", "waves", "jellyfish", "gem", "shell"]
        const finalGrid: Item[][] = []

        // Higher chance of jellyfish as level increases (but capped)
        const jellyfishChance = Math.min(0.05 + level * 0.02, 0.25)
        // Higher chance of gem as level increases (but capped)
        const gemChance = Math.min(0.03 + level * 0.01, 0.15)

        for (let i = 0; i < 4; i++) {
          const row: Item[] = []
          for (let j = 0; j < 4; j++) {
            // Determine the symbol type based on probabilities
            const random = Math.random()
            let randomType: ItemType

            if (random < jellyfishChance) {
              randomType = "jellyfish"
            } else if (random < jellyfishChance + gemChance) {
              randomType = "gem"
            } else {
              // Filter out jellyfish and gem from possible types for regular symbols
              const regularTypes: ItemType[] = types.filter((type) => type !== "jellyfish" && type !== "gem")
              randomType = regularTypes[Math.floor(Math.random() * regularTypes.length)]
            }

            row.push({
              type: randomType,
              isSpinning: false,
              isMatched: false,
            })
          }
          finalGrid.push(row)
        }

        setGrid(finalGrid)
        checkMatches(finalGrid)
        setIsSpinning(false)
      }
    }, spinInterval)
  }

  const checkMatches = (currentGrid: Item[][]) => {
    const newGrid = JSON.parse(JSON.stringify(currentGrid))
    let pointsEarned = 0
    let matchFound = false
    const matchedItems: { type: ItemType; count: number }[] = []

    // Check rows for 4 in a row
    for (let i = 0; i < 4; i++) {
      if (
        currentGrid[i][0].type === currentGrid[i][1].type &&
        currentGrid[i][1].type === currentGrid[i][2].type &&
        currentGrid[i][2].type === currentGrid[i][3].type
      ) {
        const itemType = currentGrid[i][0].type
        newGrid[i][0].isMatched = true
        newGrid[i][1].isMatched = true
        newGrid[i][2].isMatched = true
        newGrid[i][3].isMatched = true

        const basePoints = itemPoints[itemType] * 4
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        // Extra bonus for 4 in a row
        const fourInARowBonus = 10
        const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus + fourInARowBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 4 })
      }
    }

    // Check rows for 3 in a row (only if not already matched 4)
    for (let i = 0; i < 4; i++) {
      // Check first 3 positions
      if (
        !newGrid[i][0].isMatched &&
        !newGrid[i][1].isMatched &&
        !newGrid[i][2].isMatched &&
        currentGrid[i][0].type === currentGrid[i][1].type &&
        currentGrid[i][1].type === currentGrid[i][2].type
      ) {
        const itemType = currentGrid[i][0].type
        newGrid[i][0].isMatched = true
        newGrid[i][1].isMatched = true
        newGrid[i][2].isMatched = true

        const basePoints = itemPoints[itemType] * 3
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 3 })
      }

      // Check last 3 positions
      if (
        !newGrid[i][1].isMatched &&
        !newGrid[i][2].isMatched &&
        !newGrid[i][3].isMatched &&
        currentGrid[i][1].type === currentGrid[i][2].type &&
        currentGrid[i][2].type === currentGrid[i][3].type
      ) {
        const itemType = currentGrid[i][1].type
        newGrid[i][1].isMatched = true
        newGrid[i][2].isMatched = true
        newGrid[i][3].isMatched = true

        const basePoints = itemPoints[itemType] * 3
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 3 })
      }
    }

    // Check columns for 4 in a row
    for (let j = 0; j < 4; j++) {
      if (
        currentGrid[0][j].type === currentGrid[1][j].type &&
        currentGrid[1][j].type === currentGrid[2][j].type &&
        currentGrid[2][j].type === currentGrid[3][j].type
      ) {
        const itemType = currentGrid[0][j].type
        newGrid[0][j].isMatched = true
        newGrid[1][j].isMatched = true
        newGrid[2][j].isMatched = true
        newGrid[3][j].isMatched = true

        const basePoints = itemPoints[itemType] * 4
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        // Extra bonus for 4 in a row
        const fourInARowBonus = 10
        const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus + fourInARowBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 4 })
      }
    }

    // Check columns for 3 in a row (only if not already matched 4)
    for (let j = 0; j < 4; j++) {
      // Check first 3 positions
      if (
        !newGrid[0][j].isMatched &&
        !newGrid[1][j].isMatched &&
        !newGrid[2][j].isMatched &&
        currentGrid[0][j].type === currentGrid[1][j].type &&
        currentGrid[1][j].type === currentGrid[2][j].type
      ) {
        const itemType = currentGrid[0][j].type
        newGrid[0][j].isMatched = true
        newGrid[1][j].isMatched = true
        newGrid[2][j].isMatched = true

        const basePoints = itemPoints[itemType] * 3
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 3 })
      }

      // Check last 3 positions
      if (
        !newGrid[1][j].isMatched &&
        !newGrid[2][j].isMatched &&
        !newGrid[3][j].isMatched &&
        currentGrid[1][j].type === currentGrid[2][j].type &&
        currentGrid[2][j].type === currentGrid[3][j].type
      ) {
        const itemType = currentGrid[1][j].type
        newGrid[1][j].isMatched = true
        newGrid[2][j].isMatched = true
        newGrid[3][j].isMatched = true

        const basePoints = itemPoints[itemType] * 3
        // Bonus points for higher levels
        const levelBonus = Math.floor(level / 2)
        const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus

        pointsEarned += totalPoints
        matchFound = true
        matchedItems.push({ type: itemType, count: 3 })
      }
    }

    // Check diagonals for 4 in a row
    // Main diagonal (top-left to bottom-right)
    if (
      currentGrid[0][0].type === currentGrid[1][1].type &&
      currentGrid[1][1].type === currentGrid[2][2].type &&
      currentGrid[2][2].type === currentGrid[3][3].type
    ) {
      const itemType = currentGrid[0][0].type
      newGrid[0][0].isMatched = true
      newGrid[1][1].isMatched = true
      newGrid[2][2].isMatched = true
      newGrid[3][3].isMatched = true

      const basePoints = itemPoints[itemType] * 4
      // Bonus points for higher levels
      const levelBonus = Math.floor(level / 2)
      // Extra bonus for diagonal match
      const diagonalBonus = 15
      const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus + diagonalBonus

      pointsEarned += totalPoints
      matchFound = true
      matchedItems.push({ type: itemType, count: 4 })
    }

    // Counter diagonal (top-right to bottom-left)
    if (
      currentGrid[0][3].type === currentGrid[1][2].type &&
      currentGrid[1][2].type === currentGrid[2][1].type &&
      currentGrid[2][1].type === currentGrid[3][0].type
    ) {
      const itemType = currentGrid[0][3].type
      newGrid[0][3].isMatched = true
      newGrid[1][2].isMatched = true
      newGrid[2][1].isMatched = true
      newGrid[3][0].isMatched = true

      const basePoints = itemPoints[itemType] * 4
      // Bonus points for higher levels
      const levelBonus = Math.floor(level / 2)
      // Extra bonus for diagonal match
      const diagonalBonus = 15
      const totalPoints = itemType === "jellyfish" ? basePoints : basePoints + levelBonus + diagonalBonus

      pointsEarned += totalPoints
      matchFound = true
      matchedItems.push({ type: itemType, count: 4 })
    }

    setGrid(newGrid)

    // Count jellyfish if no matches were found
    if (!matchFound) {
      let jellyfishCount = 0
      currentGrid.forEach((row) => {
        row.forEach((item) => {
          if (item.type === "jellyfish") {
            jellyfishCount++
          }
        })
      })

      // Subtract points for jellyfish when no matches are found
      if (jellyfishCount > 0) {
        const jellyfishPenalty = jellyfishCount * Math.abs(itemPoints.jellyfish)
        pointsEarned -= jellyfishPenalty
        matchedItems.push({ type: "jellyfish", count: jellyfishCount })
        setMessage(`Ingen treff! ${jellyfishCount} maneter ga -${jellyfishPenalty} poeng.`)
      } else {
        setMessage("Ingen gevinstlinjer denne gangen. Prøv igjen!")
      }
    } else {
      // Create message for matches
      const matchMessages = matchedItems
        .map((item) => {
          const pointValue = item.count * itemPoints[item.type]
          const sign = pointValue >= 0 ? "+" : ""
          return `${item.count}x ${itemNames[item.type]}: ${sign}${pointValue}`
        })
        .join(", ")

      setMessage(`${matchFound ? "Gevinst!" : "Ingen gevinst!"} ${matchMessages}`)
    }

    // Update score
    setScore((prev) => Math.max(0, prev + pointsEarned)) // Prevent negative scores
    setLastPoints(pointsEarned)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-lg">
            <span className="font-medium">Poeng:</span> {score}
          </div>
          <div className="text-sm text-muted-foreground">Høyeste: {highScore}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">Nivå {level}</div>
          <div className="text-xs text-muted-foreground">{levelProgress}/100</div>
        </div>
        <Progress value={levelProgress} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
      </div>

      <div className="grid grid-cols-4 gap-2 w-full max-w-xs">
        {grid.map((row, rowIndex) =>
          row.map((item, colIndex) => (
            <Card
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                "flex items-center justify-center p-3 h-16 w-16 transition-all bg-white border-blue-200",
                item.isSpinning && "animate-pulse",
                item.isMatched && "bg-blue-100 dark:bg-blue-900 border-blue-500",
                item.type === "jellyfish" &&
                  !item.isMatched &&
                  "bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800",
                item.type === "gem" &&
                  !item.isMatched &&
                  "bg-purple-50 dark:bg-purple-950 border-purple-300 dark:border-purple-800",
              )}
            >
              {itemIcons[item.type]}
            </Card>
          )),
        )}
      </div>

      <div className="h-12 text-center">
        {message && (
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium">{message}</p>
            {lastPoints !== null && (
              <Badge
                className={cn(
                  "mt-1",
                  lastPoints > 0
                    ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300"
                    : lastPoints < 0
                      ? "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-300"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300",
                )}
              >
                {lastPoints > 0 ? `+${lastPoints}` : lastPoints}
              </Badge>
            )}
          </div>
        )}
      </div>

      <Button onClick={spinGrid} disabled={isSpinning} className="w-full bg-blue-500 hover:bg-blue-600">
        {isSpinning ? "Spinner..." : "Spinn Hjulene"}
      </Button>

      <div className="text-xs text-muted-foreground text-center mt-2 space-y-1">
        <p>Spinn hjulene og match symboler på linjene for å vinne poeng.</p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>
            <span className="text-blue-500">●</span> Fisk: 10p
          </span>
          <span>
            <span className="text-slate-600">●</span> Anker: 5p
          </span>
          <span>
            <span className="text-amber-600">●</span> Skip: 15p
          </span>
          <span>
            <span className="text-emerald-600">●</span> Kompass: 8p
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>
            <span className="text-cyan-500">●</span> Bølger: 12p
          </span>
          <span>
            <span className="text-pink-600">●</span> Manet: -5p
          </span>
          <span>
            <span className="text-purple-500">●</span> Juvel: 20p
          </span>
          <span>
            <span className="text-orange-500">●</span> Skjell: 7p
          </span>
        </div>
        <p>Maneter er scatter-symboler som gir minuspoeng! Prøv å unngå dem når du spinner.</p>
        <p>Match 4 på rad for ekstra bonuspoeng! Diagonale matcher gir enda flere poeng!</p>
      </div>
    </div>
  )
}
