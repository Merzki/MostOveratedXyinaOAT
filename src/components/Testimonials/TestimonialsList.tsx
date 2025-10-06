import { testimonials } from "../../utils/Testimonials/testimonialsData"
import { TestimonialCard } from "./TestimonialCard"

export function TestimonialsList() {
  const clips = [
    "[clip-path:polygon(2%_0,100%_3%,98%_100%,0_97%)]",
    "[clip-path:polygon(0_4%,98%_0,100%_96%,4%_100%)]",
    "[clip-path:polygon(3%_2%,100%_0,97%_98%,0_95%)]",
  ] as const

  const stamps = ["RIOT!", "DENIED", "CONFIDENTIAL", "PROOF"] as const

  return (
    <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
      {testimonials.map((q, i) => (
        <TestimonialCard
          key={q.id}
          id={q.id}
          text={q.text}
          author={q.author}
          clip={clips[i % clips.length]}
          stamp={stamps[i % stamps.length]}
        />
      ))}
    </ul>
  )
}
