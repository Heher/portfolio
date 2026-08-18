import type { RectReadOnly } from 'react-use-measure';

import { useEffect } from 'react';
import { Outlet } from 'react-router';
import useMeasure from 'react-use-measure';

export type UIContext = {
  size: RectReadOnly;
};

export default function UILayout() {
  const [pageContainerRef, size] = useMeasure({ debounce: 300 });

  // useEffect(() => {
  //   const body = document.body;
  //   body.classList.remove('bg-linear-to-b', 'from-header-top', 'to-index-background', 'from-49%', 'to-51%');
  //   body.classList.add('bg-index-background');
  // }, []);

  return (
    <div
      ref={pageContainerRef}
      className="m-0 mx-auto min-h-dvh w-screen"
    >
      <Outlet context={{ size }} />
    </div>
  );
}
