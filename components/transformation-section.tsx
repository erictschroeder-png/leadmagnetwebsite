import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function TransformationSection() {
  const transformations = [
    {
      name: "Taylor",
      image: "/taylor-testimonial.jpg",
      results: "Lost 25 lbs, Energy Restored",
      metrics: ["25 lbs lost", "Better sleep quality", "Energy for family & business"],
      testimonial:
        "I was constantly exhausted, running on caffeine and stress. Within weeks, I started feeling calmer, sleeping better, and actually having energy. This program changed everything for me.",
    },
    {
      name: "Norma",
      image: "/norma-testimonial.jpg",
      results: "Cancer Survivor, Off All Medications",
      metrics: ["Inflammation gone", "Off all medications", "Stronger body"],
      testimonial:
        "I was on countless medications for rheumatoid arthritis and breast cancer, but I never understood how inflammation was driving it all. Now, I'm off all medications and finally have my health back.",
    },
    {
      name: "Marianne",
      image: "/marianne-testimonial.jpg",
      results: "Lost 35 lbs, Feeling Better at 62",
      metrics: ["35 lbs lost", "More energetic", "More confident"],
      testimonial:
        "I'm down 35 lbs and just turned 62. It was one of my best birthdays yet! I'm feeling better than I have in years- lighter, more energetic, healthier, and more confident.",
    },
    {
      name: "Kyla",
      image: "/kyla-testimonial.jpg",
      results: "Off SSRIs & Birth Control",
      metrics: ["Emotionally grounded", "Calm nervous system", "Off medications"],
      testimonial:
        "I felt emotionally overwhelmed and anxious. Working with Carley helped me calm my nervous system, get off the medications, and finally feel my emotions without losing control. I'm grounded and in charge of my health again!",
    },
  ]

  return (
    <section id="client-results" className="py-12 md:py-16 lg:py-20 px-4 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        {/* Headline */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 text-balance">
            Real Women, Real Results
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            These women stopped fighting their bodies and started listening. Here's what happened.
          </p>
        </div>

        {/* Video Testimonial - Featured prominently */}
        <div className="mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-sage/20 shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted relative">
                {/* Video embed placeholder - replace with actual video URL */}
                <iframe
                  src="https://www.youtube.com/embed/ADQFSLv5NwM"
                  className="w-full h-full absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Client Testimonial Video"
                />
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 italic">
            "Hearing real stories from real women made all the difference for me." - Lisa P.
          </p>
        </div>

        {/* Transformation Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {transformations.map((transformation, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-muted">
                  <Image
                    src={transformation.image || "/placeholder.svg"}
                    alt={`${transformation.name} transformation`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-1">{transformation.name}</h3>
                  <p className="text-sage font-semibold mb-3">{transformation.results}</p>

                  {/* Metrics */}
                  <div className="space-y-2 mb-4">
                    {transformation.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-sm text-foreground/80 italic border-l-2 border-sage/30 pl-3">
                    "{transformation.testimonial}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="https://emotionaleating.carleyschroeder.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg h-auto w-full sm:w-auto min-h-[56px]"
            >
              Take the Emotional Eating Type Quiz
            </Button>
          </Link>
          <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3">
            Plus get instant access to our exclusive masterclass
          </p>
        </div>
      </div>
    </section>
  )
}
