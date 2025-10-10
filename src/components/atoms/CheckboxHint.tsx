export type CheckboxHintProps = {
  message: string
  visible: boolean
}

export default function CheckboxHint({ message, visible }: CheckboxHintProps) {
  if (!visible) return null
  return (
    <div className="absolute -top-8 left-0 whitespace-nowrap rounded bg-black px-3 py-1.5 text-[10px] font-semibold text-yellow-300 shadow-md pointer-events-none select-none animate-pulse transition-opacity duration-300">
      {message}
      <span className="absolute left-4 top-full h-0 w-0 border-x-4 border-x-transparent border-t-4 border-t-black" />
    </div>
  )
}
