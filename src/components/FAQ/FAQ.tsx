import { useState } from "react";
import { faqItems } from "../../utils/FAQ/faqData";
import { FAQItem } from "./FAQItem";
import { FaqOverlay } from "./FaqOverlay";
import { FaqHeader } from "./FaqHeader";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const isOpen = (id: string) => open === id;

  return (
    <section
      id="faq"
      data-header-bg="rgba(245,245,244,0.8)"
      className="relative h-screen snap-start overflow-hidden bg-neutral-100 text-neutral-900"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="absolute -inset-1 flex flex-col gap-10 animate-diag-marquee">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-3xl font-black tracking-[0.35em] text-red-700 mix-blend-overlay opacity-50"
            >
              SCROLL TO OBEY — QUESTION EVERYTHING — SCROLL TO OBEY — QUESTION EVERYTHING —
            </div>
          ))}
        </div>
      </div>

      {open && <FaqOverlay />}

      <div className="relative z-20 mx-auto flex h-full max-w-6xl flex-col justify-center gap-6 px-6 py-16">
        <FaqHeader />

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {faqItems.map((item, idx) => (
            <FAQItem
              key={item.id}
              item={item}
              idx={idx}
              isOpen={isOpen(item.id)}
              onToggle={() => setOpen((p) => (p === item.id ? null : item.id))}
            />
          ))}
        </ul>

        <div className="mt-4 text-right text-[10px] font-black uppercase tracking-widest text-neutral-500">
          You can close these. Interrogation never ends.
        </div>
      </div>
    </section>
  );
}
