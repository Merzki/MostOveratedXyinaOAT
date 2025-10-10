export const ctaStyles = {
  section: 'relative flex h-screen snap-start items-center justify-center overflow-hidden bg-yellow-300',
  backdrop: 'absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_16px,rgba(0,0,0,0.06)_16px_32px)]',
  container: 'relative z-10 mx-auto max-w-4xl px-6 text-center',
  title: 'text-4xl font-black tracking-tighter md:text-6xl',
  subtitle: 'mx-auto mt-4 max-w-xl text-sm font-semibold uppercase tracking-[0.25em] text-black/70',
  buttonPrimary: 'rounded border-2 border-black bg-black px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-white transition hover:-rotate-2 hover:scale-105',
  buttonSecondary: 'rounded border-2 border-black px-6 py-3 text-sm font-extrabold uppercase tracking-widest transition hover:rotate-1',
} as const
