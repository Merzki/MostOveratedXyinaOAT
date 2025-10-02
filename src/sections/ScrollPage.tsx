import { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import Footer from "../components/Footer/Footer"
import FAQ from "../components/FAQ/FAQ"
import CTA from "../components/CTA/CTA"
import Testimonials from "../components/Testimonials/Testimonials"
import FloatingToast from "../components/Toast/FloatingToast"
import Pricing from "../components/Pricing/Pricing"

export default function ScrollPage() {
  const [showToast, setShowToast] = useState(true)

  useEffect(() => {
    const onDoNotClick = () => setShowToast(false)
    window.addEventListener("overscroll:do-not-click", onDoNotClick)
    return () => window.removeEventListener("overscroll:do-not-click", onDoNotClick)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <Header />
        <main>
          <Hero />
          <Features />
          <FAQ />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
      {showToast && <FloatingToast />}
    </div>
  )
}
