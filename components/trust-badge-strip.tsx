import { Shield, Award, Users, TrendingUp } from "lucide-react"

export function TrustBadgeStrip() {
  const badges = [
    {
      icon: Shield,
      text: "30-Day Money-Back Guarantee",
    },
    {
      icon: Award,
      text: "Featured in Women's Health",
    },
    {
      icon: Users,
      text: "500+ Women Transformed",
    },
    {
      icon: TrendingUp,
      text: "94% Success Rate",
    },
  ]

  return (
    <div className="bg-muted/30 border-y border-border py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground leading-tight">{badge.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
