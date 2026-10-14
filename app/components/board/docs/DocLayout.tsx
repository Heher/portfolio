import type { ReactNode } from 'react';

// const PAGES = [
//   { to: '/board/how-it-works', label: 'How it works' },
//   { to: '/board/clock', label: 'Clock' },
//   { to: '/board/flights', label: 'Flights' },
//   { to: '/board/spotify', label: 'Spotify' },
//   { to: '/board/messages', label: 'Messages' },
// ];

type DocLayoutProps = {
  title: string;
  children: ReactNode;
};

export function DocLayout({ title, children }: DocLayoutProps) {
  return (
    <div className="w-screen bg-header-top font-figtree text-lg">
      <title>{`${title} | The Board | John Heher`}</title>
      <div className="
        min-h-dvh bg-linear-to-b from-asteroid-top to-asteroid-bottom px-5 pt-8 pb-20
        sm:px-0
      "
      >
        <div className="
          mx-auto flex w-full max-w-[1000px] flex-col p-5 text-better-white
          sm:px-0 sm:py-10
        "
        >
          <h2 className="
            mt-10 text-[32px] leading-none font-bold
            sm:mt-15 sm:text-[48px]
          "
          >
            {title}
          </h2>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="mt-12 flex flex-col gap-12">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 font-zilla text-better-white">
      <h2 className="font-figtree text-2xl leading-none font-bold">{title}</h2>
      {children}
    </section>
  );
}

export function DocP({ children }: { children: ReactNode }) {
  return <p className="text-lg/relaxed text-better-white/90">{children}</p>;
}

export function DocList({ children }: { children: ReactNode }) {
  return <ul className="flex list-disc flex-col gap-2 pl-6 text-lg/relaxed text-better-white/90">{children}</ul>;
}

export function C({ children }: { children: ReactNode }) {
  return <code className="rounded-sm bg-better-black/30 px-1.5 py-0.5 font-mono text-[0.85em] text-better-white">{children}</code>;
}

export function DocFacts({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 rounded-md border border-better-white/20 bg-better-white/5 p-4 text-base">
      {rows.map(([label, value]) => (
        <div key={label} className="contents">
          <dt className="font-figtree font-semibold text-better-white/60">{label}</dt>
          <dd className="text-better-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
