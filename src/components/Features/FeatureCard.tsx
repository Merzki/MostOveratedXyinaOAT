interface FeatureCardProps {
  title: string;
  desc: string;
  badge: string;
  layout: {
    smSpan: string;
    mdSpan: string;
    smAspect: string;
    mdAspect: string;
    smOffset: string;
    offset: string;
    rot: string;
    isFirst: boolean;
  };
}

export function FeatureCard({ title, desc, badge, layout }: FeatureCardProps) {
  const { smSpan, mdSpan, smAspect, mdAspect, smOffset, offset, rot, isFirst } = layout;

  return (
    <div
      className={`group relative z-0 ${smSpan} ${mdSpan} ${rot} ${
        isFirst ? 'aspect-[16/9]' : smAspect
      } ${mdAspect} ${smOffset} ${offset} border-[3px] md:border-[4px] border-black bg-white shadow-[inset_0_0_0_2px_#000] transition will-change-transform hover:animate-shake`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:6px_6px] mix-blend-multiply transition-opacity duration-200" />
      <div className="absolute inset-0 bg-black/95 transition-opacity duration-300 group-hover:opacity-0 z-10" />

      <span
        className={`absolute inset-0 z-20 flex items-center justify-center ${
          isFirst ? 'text-3xl' : 'text-4xl'
        } md:text-6xl font-black tracking-widest text-red-700 transition-colors duration-300 group-hover:text-neutral-700/30`}
      >
        {badge}
      </span>

      <div className="relative p-3 md:p-4 z-0">
        <h3 className="font-extrabold tracking-tight text-black text-[clamp(18px,4.6vw,24px)] md:text-[clamp(18px,1.8vw,28px)] break-words animate-shake">
          {title}
        </h3>
        <p className="mt-2 text-neutral-900 text-[clamp(14px,3.4vw,19px)] md:text-[clamp(14px,1.4vw,20px)] leading-snug md:leading-normal break-words animate-shake">
          {desc}
        </p>
      </div>
    </div>
  );
}
