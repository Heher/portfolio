import type { RectReadOnly } from 'react-use-measure';

import { Outlet } from 'react-router';
import useMeasure from 'react-use-measure';

export type UIContext = {
  size: RectReadOnly;
};

export default function UILayout() {
  const [pageContainerRef, size] = useMeasure({ debounce: 300 });

  return (
    <div
      ref={pageContainerRef}
      className="m-0 mx-auto min-h-dvh w-screen"
    >
      <Outlet context={{ size }} />
    </div>
  );
}
