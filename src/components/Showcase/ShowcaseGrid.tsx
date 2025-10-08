import { exhibits, styles, hoverStyles, rowSpans, tilts } from "../../utils/Showcase/exhibits"
import { ShowcaseCard } from "./ShowcaseCard"

export function ShowcaseGrid() {
  return (
    <div className="mt-5 md:mt-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3 auto-rows-[88px] sm:auto-rows-[102px] lg:auto-rows-[120px]">
      {exhibits.map(([title, desc, year], i) => {
        const span = rowSpans[i % rowSpans.length]
        const rot = tilts[i % tilts.length]
        const base = styles[title] ?? 'bg-white'
        const hover = hoverStyles[title] ?? ''
        const containerClass = `group relative ${span} ${rot} ${base} shadow-[inset_0_0_0_2px_#000] overflow-hidden transition duration-300 hover:-rotate-1 hover:scale-[1.02] ${hover} lg:even:translate-y-2 lg:odd:-translate-y-1`

        return (
          <ShowcaseCard
            key={title}
            title={title}
            desc={desc}
            year={year}
            containerClass={containerClass}
          />
        )
      })}
    </div>
  )
}
