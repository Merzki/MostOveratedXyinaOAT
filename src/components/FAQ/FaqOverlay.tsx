export function FaqOverlay() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-10 bg-black/60 mix-blend-multiply [background-image:repeating-linear-gradient(0deg,transparent_0_6px,rgba(255,255,255,0.04)_6px_7px)]"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 z-10 grid place-items-center">
        <div className="select-none text-center text-xs font-extrabold uppercase tracking-[0.4em] text-white/40">
          subject under scroll
        </div>
      </div>
    </>
  );
}
