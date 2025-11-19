"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FloatingCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px down
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-rose-400/95 backdrop-blur-sm border-t border-white/10 shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">Ready to discover your emotional eating type?</p>
            <p className="text-xs text-white/90">Take the 2-minute quiz + get instant masterclass access</p>
          </div>
          <Button size="lg" variant="secondary" className="whitespace-nowrap group">
            Take the Quiz
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  )
}
