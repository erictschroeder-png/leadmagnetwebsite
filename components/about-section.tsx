import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about-carley" className="py-12 md:py-16 lg:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Professional Headshot */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/carley-smile-at-camera.png"
                alt="Carley Schroeder - Professional Headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                Meet Carley Schroeder
              </h2>
              <p className="text-lg md:text-xl text-sage-600 font-medium">
                Functional Nutritionist & Trauma-Informed Coach
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-sage-600 mt-1 flex-shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Certified Functional Nutritionist</span> specializing
                  in metabolic health
                </p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-sage-600 mt-1 flex-shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Trauma-Informed Coaching</span> with focus on nervous
                  system regulation
                </p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-sage-600 mt-1 flex-shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Personal Trainer</span> with 15+ years in fitness
                  industry
                </p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-sage-600 mt-1 flex-shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Featured in Women's Health</span> for breakthrough
                  approach to weight loss
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 py-4 md:py-6 border-y border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sage-600">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Women Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sage-600">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sage-600">94%</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Success Rate</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">My Mission</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I help women break free from the cycle of dieting, restriction, and self-blame. My approach addresses
                the root causes of weight struggles—not just the symptoms—so you can finally feel at home in your body.
              </p>
            </div>

            {/* Why I Do This Work */}
            <div className="bg-sage-50 p-4 md:p-6 rounded-xl border border-sage-200">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Why I Do This Work</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                "I've been where you are... doing everything 'right' but feeling like my body was working against me. I
                know what it's like to be told it's just about willpower when you know there's something deeper going
                on. That's why I'm passionate about helping women understand their bodies, heal their metabolism, and
                reclaim their relationship with food and themselves."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
