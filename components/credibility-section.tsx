import { ArrowRight } from "lucide-react"

export function CredibilitySection() {
  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-wide text-gray-400">Featured In</p>
            <img
              src="/womens-health-logo-transparent.png"
              alt="Women's Health Australian"
              className="h-6 md:h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>

          {/* Pull Quote */}
          <blockquote className="relative">
            <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary/20 absolute -top-3 md:-top-4 -left-1 md:-left-2 lg:-left-8">
              "
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed italic px-4 md:px-8">
              "You don't need to fight your body. You need to understand it. When you give it space to heal, everything
              starts to shift."
            </p>
            <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary/20 absolute -bottom-6 md:-bottom-8 -right-1 md:-right-2 lg:-right-8">
              "
            </div>
          </blockquote>

          {/* Explanation */}
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl">
            Carley was featured for her breakthrough approach to weight loss.
          </p>

          {/* Article Link */}
          <a
            href="https://womenshealth.com.au/carley-schroeder-is-helping-women-heal-the-root-causes-of-weight-gain-burnout-and-body-shame/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            Read the full Women's Health feature
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
