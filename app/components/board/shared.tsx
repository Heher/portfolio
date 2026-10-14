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
