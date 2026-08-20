import type { ReactNode } from 'react';

import { useEffect, useState } from 'react';

export function ClientOnly({ children, fallback = null }: { children: () => ReactNode; fallback?: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // avoids SSR ever evaluating children(), which may reference .client-only modules
  if (!mounted) {
    return fallback;
  }

  return children();
}
