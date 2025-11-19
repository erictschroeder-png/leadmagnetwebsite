"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"

export function ProblemSection() {
  const painPoints = [
    "You've tried keto, Whole30, Weight Watchers - nothing sticks",
    "You eat 1200 calories and still can't lose weight",
    "You have energy crashes every afternoon",
    "You crave sugar and carbs constantly",
    "You've been told it's just 'willpower' - but you know it's not",
  ]

  const sentences = ["You're not broken.", "You're not lazy.", "And you're definitely not alone."]

  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(painPoints.length).fill(false))
  const [visibleSentences, setVisibleSentences] = useState<number>(0)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    sentences.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleSentences(index + 1)
      }, index * 800) // 800ms delay between each sentence
      timers.push(timer)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  const handleHover = (index: number) => {
    if (!checkedItems[index]) {
      setCheckedItems((prev) => {
        const newState = [...prev]
        newState[index] = true
        return newState
      })
    }
  }

  return (
    <section
      className="py-12 md:py-16 lg:py-28"
      style={{
        background: "linear-gradient(180deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12 text-balance text-white">
          Sound Familiar?
        </h2>

        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              className="flex items-start gap-3 md:gap-4 text-base md:text-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-400/50 px-3 md:px-4 py-2 rounded-lg"
            >
              <div
                className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mt-0.5 md:mt-1 transition-all duration-500 ${
                  checkedItems[index] ? "bg-rose-400 scale-100 opacity-100" : "bg-rose-400/20 scale-75 opacity-50"
                }`}
              >
                <Check
                  className={`w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300 ${
                    checkedItems[index] ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  strokeWidth={3}
                />
              </div>
              <p className="text-slate-200 leading-relaxed text-left flex-1">{point}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-slate-200 text-center">
          <div className="text-lg md:text-xl font-medium text-white space-y-2">
            {sentences.map((sentence, index) => (
              <p
                key={index}
                className={`transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-rose-400/50 px-4 py-2 rounded-lg cursor-default inline-block ${
                  visibleSentences > index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {sentence}
              </p>
            ))}
          </div>

          <p>
            The truth? Your body isn't fighting you - it's trying to tell you something. Those cravings, the exhaustion,
            the stubborn weight that won't budge... they're not character flaws. They're symptoms of a metabolism that's
            been pushed too hard for too long.
          </p>

          <p>
            You've been told to eat less and move more. To have more discipline. To try harder. But what if the real
            problem isn't your effort - it's the approach?
          </p>

          <p className="text-lg md:text-xl font-medium text-rose-300 transition-transform duration-[5000ms] ease-in-out hover:scale-125 cursor-default">
            Your body is screaming for something different. It's time to listen.
          </p>
        </div>
      </div>
    </section>
  )
}
