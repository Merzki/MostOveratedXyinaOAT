export type Exhibit = readonly [title: string, desc: string, year: string]

export const exhibits: readonly Exhibit[] = [
  ["Parallax Overdose", "Scroll for depth. Die for depth.", "2014"],
  ["Minimalism.exe", "When less became nothing.", "2016"],
  ["Brutalism Revival #3", "Still not dead, just misunderstood.", "2019"],
  ["Glassmorphism", "Beauty behind the blur.", "2020"],
  ["Dark Mode Fetish", "Because black hides the mess.", "2021"],
  ["AI Everything", "Trend or takeover?", "2023"],
] as const

export const styles: Readonly<Record<string, string>> = {
  'Parallax Overdose': 'bg-gradient-to-b from-sky-200 to-indigo-300 shadow-[0_0_20px_rgba(0,0,0,0.25)]',
  'Minimalism.exe': 'bg-white border border-neutral-200 text-neutral-500',
  'Brutalism Revival #3': 'bg-yellow-400 text-black border-4 border-black',
  'Glassmorphism': 'backdrop-blur-md bg-white/30 border border-white/40 text-white',
  'Dark Mode Fetish': 'bg-black text-white border border-neutral-800 shadow-[0_0_12px_rgba(255,255,255,0.2)]',
  'AI Everything': 'bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-900 text-white',
} as const

export const hoverStyles: Readonly<Record<string, string>> = {
  'Parallax Overdose': 'hover:brightness-110',
  'Minimalism.exe': 'hover:contrast-110',
  'Brutalism Revival #3': 'hover:animate-wiggle',
  'Glassmorphism': 'hover:backdrop-blur-xl hover:brightness-125',
  'Dark Mode Fetish': 'hover:[text-shadow:0_0_10px_white]',
  'AI Everything': 'hover:[filter:contrast(120%)_hue-rotate(20deg)]',
} as const

export const rowSpans = [
  'row-span-1 sm:row-span-1 lg:row-span-2',
  'row-span-1 sm:row-span-1 lg:row-span-3',
  'row-span-1 sm:row-span-1 lg:row-span-2',
  'row-span-1 sm:row-span-1 lg:row-span-3',
  'row-span-1 sm:row-span-1 lg:row-span-2',
  'row-span-1 sm:row-span-1 lg:row-span-2',
] as const

export const tilts = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'] as const
