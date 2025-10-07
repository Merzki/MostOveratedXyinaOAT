export type Tier = {
  id: "exposure" | "premium" | "collective" | (string & {})
  title: string
  price: string
  tagline: string
  points: string[]
  badge: string
  featured?: boolean
}

export const tiers: readonly Tier[] = [
  {
    id: "exposure",
    title: "Exposure Tier",
    price: "$0*",
    tagline: "pay with your attention",
    points: [
      "Unlimited doomscrolling",
      "Ads reinvented as ‘announcements’",
      "Community notes you didn’t ask for",
    ],
    badge: "FREE AS IN ‘MARKET’",
  },
  {
    id: "premium",
    title: "Premium+",
    price: "$29/mo",
    tagline: "own the scroll, rent the soul",
    points: [
      "Priority pixels (bolder kerning)",
      "Faster guilt accrual",
      "Exclusive right to dislike quietly",
    ],
    badge: "CONSUME RESPONSIBLY",
    featured: true,
  },
  {
    id: "collective",
    title: "Collective Mode",
    price: "$0/∞",
    tagline: "seize the means of pagination",
    points: [
      "Prices abolished, opinions remain",
      "Algorithm replaced by assembly",
      "Scroll redistributed per need",
    ],
    badge: "DIALECTICAL UPGRADE",
  },
] as const
