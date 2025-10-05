import { FeatureCard } from "./FeatureCard";
import { featuresData } from "../../utils/Features/featuresData";
import { getFeatureLayout } from "../../utils/Features/getFeatureLayout";

export default function Features() {
  return (
    <section
      id="features"
      data-header-bg="rgba(255,255,255,0.75)"
      className="relative h-screen snap-start overflow-hidden bg-white text-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-photocopy opacity-30" />
      <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(0,0,0,0.08)_2px,transparent_3px)] opacity-10" />

      <div className="relative z-10 mx-auto grid h-full max-w-6xl grid-cols-1 items-start md:items-center gap-4 md:gap-6 px-6 py-8 md:py-12 md:grid-cols-12">
        <div className="md:col-span-5 self-center flex flex-col justify-end md:justify-start min-h-[100px] md:min-h-0">
          <h2 className="text-3xl font-black leading-none tracking-tighter md:text-6xl">
            FEATURES
            <span className="ml-3 inline-block -rotate-2 bg-black px-2 text-white">(!)</span>
          </h2>
          <p className="mt-3 max-w-md text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-neutral-700">
            so many features you might scroll past them
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-6 md:grid-cols-6 gap-2 md:gap-4">
          {featuresData.map(([title, desc, badge], i) => {
            const layout = getFeatureLayout(i);
            return (
              <FeatureCard
                key={title}
                title={title}
                desc={desc}
                badge={badge}
                layout={layout}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
