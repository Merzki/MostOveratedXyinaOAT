export function FaqHeader() {
  return (
    <header className="mb-2">
      <h2 className="relative inline-block bg-black px-2 text-3xl font-black tracking-tight text-white md:text-5xl">
        <span className="relative">FAQ</span>
        <span className="absolute left-0 top-0 -translate-x-[2px] translate-y-[2px] select-none text-red-600/70 blur-[0.3px]">
          FAQ
        </span>
      </h2>
      <p className="mt-2 max-w-xl text-xs font-extrabold uppercase tracking-[0.25em] text-neutral-600">
        interrogation of your scroll
      </p>
    </header>
  );
}
