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
        relative w-[260px] rounded-sm border-2 border-name bg-better-white px-7 py-5 opacity-40 transition-opacity
        sm:w-[380px]
      `, selected && `opacity-100`)}
      >
        <div className={cn(`absolute top-1/2 -left-8 z-1 size-6 -translate-y-1/2 rounded-full border border-better-black bg-better-white`)}>
          <span className="absolute top-1/2 left-1/2 z-2 size-3 -translate-1/2 rounded-full bg-better-black" />
        </div>
        {/* <div className="grid grid-cols-[50px_1fr] items-center"> */}
        <div className="flex gap-5">
          <img src={companyLogos[info.slug]} alt={`${info.name} logo`} className="h-8" />
          <div>
            <h3 className="
              text-xl leading-none font-semibold
              sm:text-2xl
            "
            >
              {info.name}
            </h3>
            <p className="mt-1 max-w-[300px] text-base">{info.location}</p>
          </div>
        </div>
        <p className="mt-5 max-w-[300px] font-zilla text-lg font-medium">{info.title}</p>
      </div>
    </div>
  );
}
