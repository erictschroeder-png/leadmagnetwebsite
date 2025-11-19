import Image from "next/image"
import { FlipCard } from "./flip-card"

export function StorySection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance leading-tight text-center mb-8 md:mb-12 lg:mb-16">
          Why Everything You've Been Told About Weight Loss is Wrong
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Left */}
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Carley's background is rooted in exercise science. She began her career teaching group fitness classes and
              eventually worked her way up to managing athletic clubs. On paper, she looked like the definition of
              health. But her body was telling a different story.
            </p>

            <p>
              "I was working out, drinking green smoothies, doing all the right things, and I couldn't lose the weight,"
              she says. "I didn't realize I was stuck in a constant stress state."
            </p>

            <p>
              After hearing Dr. Gabor Maté speak about the connection between emotional suppression and physical
              well-being, Carley started seeing her challenges in a new light. She left the traditional fitness space
              and dove into functional nutrition, nervous system practices, and trauma-informed coaching. Over time, she
              wove those elements into the holistic work she does today.
            </p>

            <p>
              Carley created the Deeply Rooted method to support women who feel burned out, bloated, exhausted, or
              dismissed. Many of her clients have been told they're "fine," even while struggling with fatigue, anxiety,
              or weight changes.
            </p>

            <p>
              Her method addresses root challenges such as blood sugar swings, chronic stress, and nervous system
              dysregulation. It's not about crash diets or willpower. It's about rebuilding safety and balance step by
              step.
            </p>

            <p>
              "I was the trainer who had a six-pack and still said, 'I think I'm addicted to sugar,'" she says. "Healing
              came when I stopped fighting my body and started listening to it."
            </p>

            <p>
              Carley teaches women how to recognize their body's cues, regulate their emotions, and nourish themselves
              fully. Her clients often report more energy, better digestion, and a renewed sense of connection with
              their bodies.
            </p>
          </div>

          {/* Image - Right */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/carley-beach.png"
              alt="Carley on the beach - embodying health and confidence"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 flex justify-center">
          <div className="w-full max-w-4xl">
            <FlipCard />
          </div>
        </div>
      </div>
    </section>
  )
}
