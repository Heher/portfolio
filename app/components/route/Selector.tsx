/* eslint-disable tailwindcss/classnames-order */
import { getMoveableGlobeContainerRight } from '../globe/globePositioning';

export function Selector({ width }) {
  const positionRight = getMoveableGlobeContainerRight(width);

  return (
    <div
      className={`route-selector-container fixed bottom-0 right-[${positionRight}] z-50 flex h-[100px] w-full items-center bg-white md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)]`}
    >
      <button type="button">{'<'}</button>
      <button type="button">{'>'}</button>
    </div>
  );
}
