import { TestimonialsHeader } from "./TestimonialsHeader"
import { TestimonialsNotice } from "./TestimonialsNotice"
import { TestimonialsList } from "./TestimonialsList"

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-header-bg="rgba(255,255,255,0.6)"
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-neutral-950 text-stone-50"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 md:opacity-15 [background-image:repeating-linear-gradient(0deg,transparent_0_18px,rgba(255,255,255,0.055)_18px_19px)]" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-5 md:opacity-10 [background-image:repeating-linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_3px)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-6">
        <TestimonialsHeader />
        <div className="relative mx-auto mt-6 max-w-6xl">
          <TestimonialsNotice />
          <div className="relative max-h-[62vh] overflow-y-auto px-1 md:px-2 [scrollbar-width:'none'] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden">
            <TestimonialsList />
          </div>
        </div>
      </div>
    </section>
  )
}
