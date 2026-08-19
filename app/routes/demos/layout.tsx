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
      <meta property="og:image" content="https://www.johnheher.com/images/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:secure_url" content="https://www.johnheher.com/images/og-image.jpg" />
      <meta property="og:image:alt" content="A picture of John Heher, a full-stack web developer from the United States, mostly focused on front-end development." />
      <Outlet context={{ size }} />
    </div>
  );
}
