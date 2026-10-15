export function Node({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="rounded-md border border-better-white/30 bg-better-white/10 px-4 py-3">
      <p className="font-figtree font-semibold text-better-white">{name}</p>
      <p className="text-base text-better-white/70">{detail}</p>
    </div>
  );
}

export function Arrow({ label }: { label: string }) {
  return (
    <p className="py-1.5 pl-4 font-figtree text-sm text-better-white/60 uppercase" aria-hidden="true">
      ↓
      {' '}
      {label}
    </p>
  );
}

export function BoardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`
      mb-10 font-figtree text-[30px] leading-none font-semibold tracking-wide text-better-white
      sm:mb-20 sm:text-[48px]
      ${className ?? ''}
    `}
    >
      {children}
    </h3>
  );
}

export function BoardSubhead({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={`
      mx-auto mb-8 max-w-xl font-figtree text-[20px] leading-none font-semibold tracking-wide text-better-white/80
      sm:text-[30px]
      ${className ?? ''}
    `}
    >
      {children}
    </h4>
  );
}

export function BoardText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`
      mx-auto max-w-xl font-zilla text-lg/7 text-better-white
      sm:text-xl/8
      ${className ?? ''}
    `}
    >
      {children}
    </p>
  );
}

export function BoardList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <ul className={`
      mx-auto mb-20 grid max-w-xl list-disc grid-cols-1 gap-y-5 rounded-md border border-better-white/20 bg-better-white/5 px-8 py-5 font-zilla text-base text-better-white/70
      sm:text-lg
      ${className ?? ''}
    `}
    >
      {children}
    </ul>
  );
}
