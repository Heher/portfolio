import type { CompanyInfo } from '@/types/skills';

import { cn } from '@/lib/utils';

import { companyLogos } from './data';

export default function Company({
  companyRef,
  info,
  selected,
}: {
  companyRef: React.Ref<HTMLDivElement>;
  info: CompanyInfo;
  selected: boolean;
}) {
  return (
    <div
      ref={companyRef}
      className="
        pb-100
        last-of-type:pb-50
      "
      data-company={info.slug}
    >
      <div className={cn(`
        relative w-75 rounded-sm border-2 border-name/40 bg-better-white/40 px-7 py-5
        sm:w-95
      `, selected && `border-name bg-better-white`)}
      >
        <div className={cn(`absolute top-1/2 -left-8.5 z-1 size-6 -translate-y-1/2 rounded-full border border-name bg-[oklch(0.9302_0.0011_197.14)] transition-colors`, selected && `
          bg-better-white
        `)}
        >
          <span className={cn(`absolute top-1/2 left-1/2 z-2 size-3 -translate-1/2 rounded-full bg-[oklch(0.6711_0.015_258.36)] transition-colors`, selected && `bg-name`)} />
        </div>
        <div className={cn(`flex gap-5 opacity-40 transition-opacity`, selected && `opacity-100`)}>
          <img src={companyLogos[info.slug]} alt={`${info.name} logo`} className="h-8" />
          <div>
            <h3 className="
              text-xl leading-none font-semibold
              sm:text-2xl
            "
            >
              {info.name}
            </h3>
            <p className="mt-1 max-w-75 text-base">{info.location}</p>
          </div>
        </div>
        <p className={cn(`mt-5 max-w-75 font-zilla text-lg font-medium opacity-40 transition-opacity`, selected && `opacity-100`)}>{info.title}</p>
      </div>
    </div>
  );
}
