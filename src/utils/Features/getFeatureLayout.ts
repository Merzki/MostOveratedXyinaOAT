export function getFeatureLayout(i: number) {
    const smSpans = ['col-span-2', 'col-span-2', 'col-span-2', 'col-span-2', 'col-span-2', 'col-span-2'] as const;
    const mdSpans = ['md:col-span-4', 'md:col-span-2', 'md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-4'] as const;
    const smAspects = ['aspect-[4/3]', 'aspect-[4/3]', 'aspect-[4/3]', 'aspect-[5/4]', 'aspect-[16/11]', 'aspect-[5/4]'] as const;
    const mdAspects = ['md:aspect-[20/9]', 'md:aspect-[5/3]', 'md:aspect-[2/1]', 'md:aspect-[5/3]', 'md:aspect-[16/9]', 'md:aspect-[2/1]'] as const;
    const smOffsets = ['-translate-y-[2px]', 'translate-y-[3px]', '-translate-y-[2px]', 'translate-y-[1px]', '-translate-y-[2px]', 'translate-y-[2px]'] as const;
    const offsets = ['md:-translate-y-2', 'md:translate-y-3', 'md:-translate-y-2', 'md:translate-y-1', 'md:-translate-y-2', 'md:translate-y-2'] as const;
    const tilt = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'] as const;
  
    return {
      smSpan: smSpans[i % smSpans.length],
      mdSpan: mdSpans[i % mdSpans.length],
      smAspect: smAspects[i % smAspects.length],
      mdAspect: mdAspects[i % mdAspects.length],
      smOffset: smOffsets[i % smOffsets.length],
      offset: offsets[i % offsets.length],
      rot: tilt[i % tilt.length],
      isFirst: i === 0,
    };
  }
  