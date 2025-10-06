import type { FAQItemData } from "../../utils/FAQ/faqData";

interface FAQItemProps {
  item: FAQItemData;
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ item, idx, isOpen, onToggle }: FAQItemProps) {
  const tilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"] as const;
  const stamps = ["SCAM", "FAKE", "NO EXIT", "SCROLL TAX"] as const;
  const tilt = tilts[idx % tilts.length];
  const stamp = stamps[idx % stamps.length];
  const isHiddenBottom = item.id === "purpose";

  return (
    <li key={item.id} className={`relative ${tilt}`}>
      <button
        className="group relative flex w-full items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 text-left font-extrabold transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000] hover:animate-shake motion-reduce:transition-none"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.id}`}
      >
        <span className="tracking-tight">{item.q}</span>
        <span className="text-xs uppercase tracking-widest text-neutral-600 group-hover:rotate-6">
          {isOpen ? "close" : "open"}
        </span>
        <span className="pointer-events-none absolute -left-2 -top-3 rotate-6 rounded border-2 border-black bg-red-700 px-2 py-0.5 text-[10px] font-black tracking-widest text-white">
          {stamp}
        </span>
      </button>

      <div
        id={`faq-${item.id}`}
        className={`overflow-hidden border-2 border-t-0 border-black bg-neutral-200 px-4 transition-all duration-300 ${
          isOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className={`py-3 text-sm text-neutral-900 transition-opacity duration-300 ${
            isOpen ? "animate-glitch" : ""
          }`}
        >
          {item.a}
        </p>
      </div>

      {isHiddenBottom && isOpen && (
        <div className="pb-2 text-[10px] font-black uppercase tracking-widest text-red-700">
          misplaced? good. keep questioning.
        </div>
      )}
    </li>
  );
}
