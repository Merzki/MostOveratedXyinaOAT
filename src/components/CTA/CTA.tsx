import { useState } from 'react'
import ConsentModal from '../Modals/ConsentModal'
import ObjectModal from '../Modals/ObjectModal'

export default function CTA() {
  const [consentOpen, setConsentOpen] = useState(false)
  const [objectOpen, setObjectOpen] = useState(false)
  return (
    <section
      id="cta"
      data-header-bg="rgba(253,224,71,0.85)"
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-yellow-300"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_16px,rgba(0,0,0,0.06)_16px_32px)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
          JOIN THE SCROLL RESISTANCE
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
          or just keep scrolling. we both know how this ends.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={() => setConsentOpen(true)} className="rounded border-2 border-black bg-black px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-white transition hover:-rotate-2 hover:scale-105">
            I Consent
          </button>
          <button onClick={() => setObjectOpen(true)} className="rounded border-2 border-black px-6 py-3 text-sm font-extrabold uppercase tracking-widest transition hover:rotate-1">
            I Object
          </button>
        </div>
      </div>
      <ConsentModal open={consentOpen} onClose={() => setConsentOpen(false)} />
      <ObjectModal open={objectOpen} onClose={() => setObjectOpen(false)} />
    </section>
  )
}
