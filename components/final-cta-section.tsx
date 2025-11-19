import { CheckCircle2, Shield, Clock } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 text-balance">
          Ready to Reset Your Metabolism?
        </h2>

        {/* Benefit Recap */}
        <p className="text-lg md:text-xl text-slate-700 mb-6 md:mb-8 max-w-2xl mx-auto text-pretty">
          Discover your emotional eating type and get the exact roadmap to fix your metabolism - without restrictive
          diets or endless willpower
        </p>

        {/* Benefits List */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-10 text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
            <span className="text-xs md:text-sm">Personalized quiz results</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
            <span className="text-xs md:text-sm">Instant masterclass access</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
            <span className="text-xs md:text-sm">Science-backed strategies</span>
          </div>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col gap-3 md:gap-4 justify-center mb-6 md:mb-10">
          {/* Quiz Button */}
          <a
            href="https://emotionaleating.carleyschroeder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center px-6 md:px-8 py-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full font-semibold transition-colors shadow-lg min-h-[80px] gap-1 w-full sm:w-auto"
          >
            <span className="text-base md:text-lg font-bold">Take the Quiz</span>
            <span className="text-xs font-normal opacity-90">Plus get instant access to our exclusive masterclass</span>
          </a>

          {/* Secure Spot Button */}
          <a
            href="https://app.paperbell.com/checkout/bookings/new?package_id=137497&tab=2025-11-14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 md:px-8 py-5 md:py-6 border-2 border-slate-800 bg-transparent text-slate-800 hover:bg-slate-800 hover:text-white rounded-full text-base md:text-lg font-semibold transition-all shadow-lg w-full sm:w-auto min-h-[56px]"
          >
            Secure My Spot
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-xs md:text-sm text-slate-600 border-t border-slate-200 pt-6 md:pt-8">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-rose-600 flex-shrink-0" />
            <span>
              <strong className="text-slate-800">30-Day Money-Back Guarantee</strong> - Zero risk, all reward
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-rose-600 flex-shrink-0" />
            <span>
              <strong className="text-slate-800">Limited spots available</strong> - only 3 spots left this month
            </span>
          </div>
        </div>

        {/* Final Reassurance */}
        <p className="text-sm md:text-base text-slate-600 mt-6 md:mt-8 italic">
          "This isn't another diet. It's the last approach you'll ever need."
        </p>
      </div>
    </section>
  )
}
