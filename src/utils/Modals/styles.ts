export const modalStyles = {
  overlay: 'fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-[1px] animate-fadeIn',
  content: 'relative m-4 w-full max-w-2xl origin-center animate-popIn',
  closeButton: 'absolute -right-3 -top-3 z-10 rounded-sm border-2 border-black bg-yellow-300 px-3 py-2 text-xs font-extrabold shadow hover:-rotate-2 hover:scale-105 md:-right-4 md:-top-4',
} as const

export const consentStyles = {
  card: 'rounded-lg border-4 border-black bg-yellow-300 p-6 shadow-[10px_10px_0px_0px_#000] rotate-[-0.5deg]',
  headerTitle: 'text-2xl font-black tracking-tight',
  headerSubtitle: 'mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70',
  input: 'rounded border-2 border-black bg-yellow-50 px-3 py-2 shadow-[3px_3px_0px_0px_#000] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black',
  submitButton: 'inline-flex items-center gap-2 rounded border-2 border-black bg-black px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-yellow-300 shadow-[4px_4px_0px_0px_#000] transition will-change-transform hover:-rotate-1 hover:scale-105 disabled:opacity-60',
  doneOverlay: 'pointer-events-none fixed inset-0 z-[101] grid place-items-center bg-black/80 animate-fadeDown',
  doneTitle: 'text-2xl md:text-3xl font-black tracking-tight animate-textIn',
  doneSubtitle: 'mt-2 text-base md:text-lg font-semibold opacity-90 animate-textIn',
  doneFooter: 'mt-6 text-sm md:text-base font-extrabold tracking-[0.3em] text-red-600/80 opacity-0 animate-fadeBlink',
} as const

export const objectStyles = {
  overlayTextContainer: 'relative mx-6 max-w-3xl text-center text-[#cf2020]',
  title: 'animate-shake text-3xl font-black tracking-tight md:text-5xl',
  subtitle: 'animate-shake mt-4 text-base font-extrabold uppercase tracking-[0.25em] md:text-lg',
} as const
