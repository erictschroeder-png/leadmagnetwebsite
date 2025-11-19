"use client"

import { useState } from "react"

export function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative w-full h-[500px] md:h-96 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-r from-sage-100 to-terracotta-100 rounded-2xl shadow-xl border-l-4 border-sage-500 p-6 md:p-8 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-sage-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-bold">?</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              What makes this different from 'eat clean and exercise more'?
            </h2>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-xl p-6 md:p-8 bg-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full flex flex-col justify-center space-y-4 md:space-y-5 px-1 md:px-2">
            <div
              className="flex items-start gap-3 md:gap-5 border-l-4 border-sage-300 pl-4 md:pl-6 py-2 md:py-3 transition-all duration-300 hover:border-sage-500 hover:-translate-y-1 hover:shadow-md hover:bg-sage-50/50 hover:pl-5 md:hover:pl-7 cursor-pointer rounded-r-lg"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                <span className="text-3xl md:text-4xl font-light text-sage-500">01</span>
              </div>
              <div className="pt-0.5">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-1.5 transition-colors duration-300">
                  Root Cause Approach
                </h3>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  We address the emotional patterns and past experiences driving your relationship with food, not just
                  the symptoms.
                </p>
              </div>
            </div>

            <div
              className="flex items-start gap-3 md:gap-5 border-l-4 border-sage-300 pl-4 md:pl-6 py-2 md:py-3 transition-all duration-300 hover:border-sage-500 hover:-translate-y-1 hover:shadow-md hover:bg-sage-50/50 hover:pl-5 md:hover:pl-7 cursor-pointer rounded-r-lg"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                <span className="text-3xl md:text-4xl font-light text-sage-500">02</span>
              </div>
              <div className="pt-0.5">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-1.5 transition-colors duration-300">
                  Nourishment Over Restriction
                </h3>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  Learn to decode your body's signals and create sustainable strategies that work with you, not against
                  you.
                </p>
              </div>
            </div>

            <div
              className="flex items-start gap-3 md:gap-5 border-l-4 border-sage-300 pl-4 md:pl-6 py-2 md:py-3 transition-all duration-300 hover:border-sage-500 hover:-translate-y-1 hover:shadow-md hover:bg-sage-50/50 hover:pl-5 md:hover:pl-7 cursor-pointer rounded-r-lg"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                <span className="text-3xl md:text-4xl font-light text-sage-500">03</span>
              </div>
              <div className="pt-0.5">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-1.5 transition-colors duration-300">
                  Holistic Transformation
                </h3>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  We explore broadly to find your biggest opportunities, then dive deep to create maximum leverage
                  toward lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
