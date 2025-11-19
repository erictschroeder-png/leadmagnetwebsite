"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-background border-2 border-primary/20 rounded-lg shadow-2xl max-w-lg mx-4 p-8 animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Wait! Before You Go...</h3>
          <p className="text-lg text-muted-foreground">Discover your emotional eating type in just 2 minutes</p>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium text-foreground">You'll get instant access to:</p>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>Your personalized emotional eating type</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>Exclusive masterclass on metabolic reset</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>Custom roadmap to fix your metabolism</span>
              </li>
            </ul>
          </div>

          <Button size="lg" className="w-full text-lg">
            Take the Free Quiz Now
          </Button>

          <p className="text-xs text-muted-foreground">No credit card required • 100% free • Takes 2 minutes</p>
        </div>
      </div>
    </div>
  )
}
