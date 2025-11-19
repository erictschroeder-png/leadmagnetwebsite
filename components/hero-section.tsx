"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <section className="relative bg-background">
      <div className="relative">
        <header className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <a
              href="https://womenshealth.com.au/carley-schroeder-is-helping-women-heal-the-root-causes-of-weight-gain-burnout-and-body-shame/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">As seen in</span>
              <img
                src="/womens-health-logo-transparent.png"
                alt="Women's Health Australian"
                className="h-6 md:h-8 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("client-results")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Client Results
              </button>
              <button
                onClick={() => scrollToSection("about-carley")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About Carley
              </button>
              <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
                <a
                  href="https://app.paperbell.com/checkout/bookings/new?package_id=137497&tab=2025-11-14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Secure My Spot
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
              <button
                onClick={() => scrollToSection("client-results")}
                className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Client Results
              </button>
              <button
                onClick={() => scrollToSection("about-carley")}
                className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About Carley
              </button>
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-full">
                <a
                  href="https://app.paperbell.com/checkout/bookings/new?package_id=137497&tab=2025-11-14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Secure My Spot
                </a>
              </Button>
            </nav>
          )}
        </header>

        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 md:gap-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Your <span className="text-rose-400">personalized roadmap</span> to a metabolism that finally works{" "}
              <em>with</em> you
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Hi! I'm Carley. Below is my proven emotional eating quiz, featured methodology, and my free masterclass on
              resetting your metabolism (just take the quiz).
            </p>

            <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto w-full">
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all w-full md:w-auto rounded-full font-semibold min-h-[56px]"
              >
                <a href="https://emotionaleating.carleyschroeder.com" target="_blank" rel="noopener noreferrer">
                  Take the Emotional Eating Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <div className="flex -space-x-3">
                <img
                  src="/taylor-testimonial.jpg"
                  alt="Taylor - Client Testimonial"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-background object-cover"
                />
                <img
                  src="/norma-testimonial.jpg"
                  alt="Norma - Client Testimonial"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-background object-cover"
                />
                <img
                  src="/marianne-testimonial.jpg"
                  alt="Marianne - Client Testimonial"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-background object-cover"
                />
                <img
                  src="/kyla-testimonial.jpg"
                  alt="Kyla - Client Testimonial"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-background object-cover"
                />
                <img
                  src="/client-5-testimonial.jpg"
                  alt="Client Testimonial"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-background object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-base md:text-lg font-semibold text-foreground">5.0</span>
              </div>
              <span className="text-sm md:text-base text-muted-foreground">Join 500+ others</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
