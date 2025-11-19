import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function InlineCtaSection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-rose-400/5 via-background to-rose-400/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-rose-400/10 text-rose-600 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>Most Popular Action</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Discover Your Emotional Eating Type
          </h2>

          <p className="text-base md:text-lg text-muted-foreground">
            Take our 2-minute quiz and get instant access to your personalized metabolic reset roadmap plus an exclusive
            masterclass.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg bg-rose-400 hover:bg-rose-500 text-white group rounded-full w-full sm:w-auto min-h-[56px]"
            >
              <a href="https://emotionaleating.carleyschroeder.com" target="_blank" rel="noopener noreferrer">
                Take the Free Quiz
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground">✓ No credit card required • ✓ Instant results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
