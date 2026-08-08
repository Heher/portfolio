import type { ReactNode } from 'react';

export function MainHeader({ children }: { children: ReactNode }) {
  return (
    <h1 className="
      text-2xl font-semibold
      sm:text-3xl
    "
    >
      {children}
    </h1>
  );
}
